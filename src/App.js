import { useState, useEffect } from 'react';
import {
  useCustomCursor,
  useTypewriter,
  useScrollReveal,
  useSkillBars,
  useNavScroll,
  useSmoothScroll,
} from './hooks';
import './App.css';

const typewriterStrings = [
  'e-commerce experiences.',
  'Web3 products.',
  'React interfaces.',
  'scalable APIs.',
];

const GH = 'https://github.com/elducati';

const projectsData = [
  {
    title: 'Next.js + WordPress Headless CMS',
    desc: 'Next.js starter template fetching data from WordPress via REST API with full type safety, cache revalidation, and dynamic OG images.',
    chips: ['Next.js', 'TypeScript', 'WordPress'],
    glow: 'violet',
    featured: true,
    link: `${GH}/next-wp`,
  },
  {
    title: 'SixPath SVG NFT Collection',
    desc: 'On-chain SVG NFT contract that composes colored symbols with a spinning wheel, built on Scaffold-ETH.',
    chips: ['Solidity', 'Web3'],
    glow: 'cyan',
    featured: false,
    link: `${GH}/six-path-nft`,
  },
  {
    title: 'Watch It Outside Events',
    desc: 'Web app for managing outdoor film festivals and events with carousels, animations, and responsive design.',
    chips: ['React', 'Bootstrap'],
    glow: 'violet',
    featured: false,
    link: `${GH}/watch-it-outside-react`,
  },
  {
    title: 'Arweave Public Square dApp',
    desc: 'Decentralized app using the Public Square Protocol on Arweave for permanent, censorship-resistant content.',
    chips: ['React', 'Arweave'],
    glow: 'cyan',
    featured: false,
    link: `${GH}/public-square-app`,
  },
  {
    title: 'Blockchain Lottery Game',
    desc: 'Decentralized lottery using Chainlink VRF for verifiable random winner selection, indexed with The Graph.',
    chips: ['Solidity', 'Chainlink'],
    glow: 'violet',
    featured: false,
    link: `${GH}/random-winner-game`,
  },
  {
    title: 'Ceramic Decentralized Profile',
    desc: 'Next.js app using Self.ID to write and retrieve user profile data on the Ceramic decentralized data network.',
    chips: ['Next.js', 'Ceramic'],
    glow: 'cyan',
    featured: false,
    link: `${GH}/ceramic-project`,
  },
];

const skills = [
  { icon: '⚛️', name: 'React', pct: 95 },
  { icon: '▲', name: 'Next.js', pct: 90 },
  { icon: '🛒', name: 'Shopify', pct: 92 },
  { icon: '📝', name: 'WordPress', pct: 88 },
  { icon: 'TS', name: 'TypeScript', pct: 85 },
  { icon: '🟢', name: 'Node.js', pct: 87 },
  { icon: '🔗', name: 'Web3/Solidity', pct: 75 },
  { icon: '🗄️', name: 'PostgreSQL', pct: 80 },
  { icon: '☁️', name: 'AWS', pct: 78 },
  { icon: '🎨', name: 'Figma', pct: 82 },
];

const testimonialsData = [
  { initials: 'SK', name: 'Sarah K.', role: 'Head of E-Commerce, RetailCo', quote: 'Geoffrey transformed our entire e-commerce infrastructure. Revenue grew 40% in the first quarter after launch.' },
  { initials: 'JM', name: 'James M.', role: 'CTO, FinStart', quote: 'One of the most versatile developers I\'ve worked with. He moves from frontend to backend to smart contracts effortlessly.' },
  { initials: 'AW', name: 'Amina W.', role: 'Founder, ArtHouse', quote: 'Geoffrey delivered our Web3 marketplace ahead of schedule. The code quality and documentation were outstanding.' },
];

const chipItems = ['React', 'Next.js', 'TypeScript', 'WordPress', 'Solidity', 'Web3', 'Bootstrap', 'Arweave', 'Chainlink', 'Ceramic'];
const socialLinks = [
  { label: '🐙 GitHub', url: GH },
  { label: '💼 LinkedIn', url: 'https://www.linkedin.com/in/geoffrey-omondi-243ab6256/' },
  { label: '✉️ Email', url: 'mailto:geomondi09@gmail.com' },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const { dotRef, ringRef } = useCustomCursor();
  const typewriterRef = useTypewriter(typewriterStrings);
  useScrollReveal();
  useSkillBars();
  useNavScroll();
  useSmoothScroll();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="ambient-grid" />
      <div className="ambient-orb orb-violet" />
      <div className="ambient-orb orb-cyan" />
      <div className="ambient-orb orb-amber" />

      <div className="custom-cursor">
        <div className="cursor-dot" ref={dotRef} />
        <div className="cursor-ring" ref={ringRef} />
      </div>

      <div className={`loading-screen${loading ? '' : ' hidden'}`}>
        <div className="loading-name">Geoffrey.</div>
        <div className="loading-bar-wrap"><div className="loading-bar-fill" /></div>
      </div>

      <nav className="navbar" id="navbar">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>GO.</a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); navTo('about'); }}>About</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); navTo('work'); }}>Work</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); navTo('skills'); }}>Skills</a></li>
          <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); navTo('testimonials'); }}>Testimonials</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); navTo('contact'); }}><span className="dot" /> Available for work</a>
        <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`}>
        {['About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="mobile-link" onClick={(e) => { e.preventDefault(); navTo(label.toLowerCase()); }}>{label}</a>
        ))}
      </div>

      <section className="hero" id="hero">
        <div className="hero-orb h1" />
        <div className="hero-orb h2" />
        <div className="hero-orb h3" />
        <div className="hero-badge">Full-Stack Developer · Nairobi, Kenya</div>
        <h1>
          <div className="line1">Geoffrey /</div>
          <div className="line2">Omondi</div>
        </h1>
        <div className="typewriter-wrap">
          <span ref={typewriterRef} /><span className="typewriter-cursor" />
        </div>
        <p className="hero-sub">
          8+ years crafting high-performance web products, e-commerce platforms, and Web3 experiences that move people — and metrics.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn-primary" onClick={(e) => { e.preventDefault(); navTo('work'); }}>View my work →</a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); navTo('contact'); }}>Let's talk</a>
        </div>
        <div className="stats-row">
          <div className="stat-item"><div className="stat-number">8+</div><div className="stat-label">Years</div></div>
          <div className="stat-item"><div className="stat-number">50+</div><div className="stat-label">Projects</div></div>
          <div className="stat-item"><div className="stat-number">30+</div><div className="stat-label">Clients</div></div>
          <div className="stat-item"><div className="stat-number">3</div><div className="stat-label">Web3 Launches</div></div>
        </div>
        <div className="scroll-indicator">
          <span className="arrow">⌄</span>
          <span>Scroll</span>
        </div>
      </section>

      <section className="section" id="about">
        <span className="section-tag reveal">About</span>
        <h2 className="reveal reveal-delay-1">Developer. / Architect. / Maker.</h2>
        <div className="about-grid">
          <div className="about-visual reveal reveal-delay-2">
            <div className="about-watermark">GO</div>
            <div className="about-badge"><span className="bolt">⚡</span> 8+ Years building</div>
          </div>
          <div className="about-content reveal reveal-delay-3">
            <p>I'm Geoffrey — a full-stack developer and e-commerce solutions architect based in Nairobi. Over the past 8+ years, I've helped startups, agencies, and enterprises turn complex problems into polished digital products that drive real results.</p>
            <p>From architecting scalable Shopify+ and WooCommerce stores to building Web3 dApps and React-powered SaaS platforms, I bridge the gap between design vision and technical execution. I believe great code is invisible — what matters is how it moves the business forward.</p>
            <div className="skill-chips">
              {chipItems.map((chip) => <span key={chip} className="skill-chip">{chip}</span>)}
            </div>
            <div className="about-btns">
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); navTo('contact'); }}>Get in touch</a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Download CV ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <span className="section-tag reveal">Work</span>
        <h2 className="reveal reveal-delay-1">Selected projects.</h2>
        <div className="bento-grid">
          {projectsData.map((p, i) => (
            <div key={p.title} className={`bento-card${p.featured ? ' featured' : ''} reveal reveal-delay-${Math.min(i + 2, 4)}`}>
              <div className={`bento-glow ${p.glow}`} />
              {p.featured && <span className="bento-featured-badge">Featured</span>}
              <div className="bento-chips">
                {p.chips.map((c) => <span key={c} className="bento-chip">{c}</span>)}
              </div>
              <div className="bento-card-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="bento-link">View project →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <span className="section-tag reveal">Expertise</span>
        <h2 className="reveal reveal-delay-1">What I work with.</h2>
        <div className="skills-grid" id="skillsGrid">
          {skills.map((s, i) => (
            <div key={s.name} className={`skill-tile reveal reveal-delay-${Math.min(i, 4) + 2}`}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-width={s.pct} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="testimonials">
        <span className="section-tag reveal">Testimonials</span>
        <h2 className="reveal reveal-delay-1">Kind words.</h2>
        <div className="ticker-wrap reveal reveal-delay-2">
          <div className="ticker-track">
            {[...testimonialsData, ...testimonialsData].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info"><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <span className="section-tag reveal">Contact</span>
        <h2 className="reveal reveal-delay-1">Let's build something <span className="gradient">→</span></h2>
        <p className="contact-sub reveal reveal-delay-2">Open to freelance projects, full-time roles, and interesting collaborations.</p>
        <form className="contact-form reveal reveal-delay-3" onSubmit={(e) => { e.preventDefault(); const f = e.target; window.location.href = `mailto:geomondi09@gmail.com?subject=${encodeURIComponent(f.subject.value || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\n\n${f.message.value}`)}`; }}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
        <div className="social-row reveal reveal-delay-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-btn">{s.label}</a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">GO.</div>
        <div className="footer-copy">© 2026 Geoffrey Omondi. Built with care.</div>
        <a href={GH} target="_blank" rel="noopener noreferrer" className="back-to-top">↑ Back to top</a>
      </footer>
    </>
  );
}
