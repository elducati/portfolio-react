import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const animate = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.1;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.1;
      if (dotRef.current) {
        dotRef.current.style.left = mouseRef.current.x + 'px';
        dotRef.current.style.top = mouseRef.current.y + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = ringPosRef.current.x + 'px';
        ringRef.current.style.top = ringPosRef.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    document.addEventListener('mousemove', onMouse);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { dotRef, ringRef };
}

export function useTypewriter(strings, speed = 80) {
  const textRef = useRef(null);
  const stateRef = useRef({ stringIndex: 0, charIndex: 0, isDeleting: false });

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    let timer;

    const tick = () => {
      const s = stateRef.current;
      const current = strings[s.stringIndex];
      if (!s.isDeleting) {
        el.textContent = current.substring(0, s.charIndex + 1);
        s.charIndex++;
        if (s.charIndex === current.length) {
          s.isDeleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        el.textContent = current.substring(0, s.charIndex - 1);
        s.charIndex--;
        if (s.charIndex === 0) {
          s.isDeleting = false;
          s.stringIndex = (s.stringIndex + 1) % strings.length;
          timer = setTimeout(tick, speed);
          return;
        }
        timer = setTimeout(tick, 60);
      }
    };
    timer = setTimeout(tick, 500);

    return () => clearTimeout(timer);
  }, [strings, speed]);

  return textRef;
}

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useSkillBars() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach((bar) => {
            const width = bar.getAttribute('data-width');
            if (width) setTimeout(() => { bar.style.width = width + '%'; }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const grid = document.getElementById('skillsGrid');
    if (grid) observer.observe(grid);
    return () => observer.disconnect();
  }, []);
}

export function useNavScroll() {
  useEffect(() => {
    const onScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;
      if (window.scrollY > 60) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handler));
    return () => anchors.forEach((a) => a.removeEventListener('click', handler));
  }, []);
}
