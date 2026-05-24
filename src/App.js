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
    title: 'CityHub Civil Engagement Platform',
    desc: 'Full-stack civic platform enabling citizens to submit proposals, vote on community issues, and connect with local government. Features RBAC, Redis-backed voting, RabbitMQ async processing, admin dashboard with analytics, and CI/CD pipeline.',
    chips: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    glow: 'cyan',
    featured: true,
    link: `${GH}/cityhub-civil-engagement`,
  },
  {
    title: 'Next.js + WordPress Headless CMS',
    desc: 'Next.js starter template fetching data from WordPress via REST API with full type safety, cache revalidation, and dynamic OG images.',
    chips: ['Next.js', 'TypeScript', 'WordPress'],
    glow: 'violet',
    featured: false,
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
  { initials: 'SK', name: 'Sarah K.', role: 'Head of E-Commerce, RetailCo', quote: 'El Ducati transformed our entire e-commerce infrastructure. Revenue grew 40% in the first quarter after launch.' },
  { initials: 'JM', name: 'James M.', role: 'CTO, FinStart', quote: 'One of the most versatile developers I\'ve worked with. He moves from frontend to backend to smart contracts effortlessly.' },
  { initials: 'AW', name: 'Amina W.', role: 'Founder, ArtHouse', quote: 'El Ducati delivered our Web3 marketplace ahead of schedule. The code quality and documentation were outstanding.' },
];

const chipItems = ['React', 'Next.js', 'TypeScript', 'WordPress', 'Solidity', 'Web3', 'Bootstrap', 'Arweave', 'Chainlink', 'Ceramic'];
const socialLinks = [
  { label: '🐙 GitHub', url: GH },
  { label: '💼 LinkedIn', url: 'https://www.linkedin.com/in/geoffrey-omondi-243ab6256/' },
  { label: '✉️ Email', url: 'mailto:elducati@proton.me' },
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
      <div className="fixed inset-0 z-[-1] bg-brand-black" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="custom-cursor">
        <div className="cursor-dot" ref={dotRef} />
        <div className="cursor-ring" ref={ringRef} />
      </div>

      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-4">El Ducati.</div>
        <div className="w-48 h-1 bg-brand-gray overflow-hidden rounded-full">
          <div className="h-full bg-brand-accent animate-progress" />
        </div>
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-brand-black/50 border-b border-brand-gray" id="navbar">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-brand-accent" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>EL</a>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-brand-light/70">
          <li><a href="#about" className="hover:text-brand-accent transition-colors" onClick={(e) => { e.preventDefault(); navTo('about'); }}>About</a></li>
          <li><a href="#work" className="hover:text-brand-accent transition-colors" onClick={(e) => { e.preventDefault(); navTo('work'); }}>Work</a></li>
          <li><a href="#skills" className="hover:text-brand-accent transition-colors" onClick={(e) => { e.preventDefault(); navTo('skills'); }}>Skills</a></li>
          <li><a href="#testimonials" className="hover:text-brand-accent transition-colors" onClick={(e) => { e.preventDefault(); navTo('testimonials'); }}>Testimonials</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block text-xs font-bold uppercase tracking-widest px-4 py-2 bg-brand-accent text-brand-black rounded-full hover:bg-brand-light transition-colors" onClick={(e) => { e.preventDefault(); navTo('contact'); }}>Available for work</a>
          <button className={`md:hidden p-2 text-brand-accent ${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-brand-black transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold text-brand-accent">
          {['About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="hover:text-brand-light transition-colors" onClick={(e) => { e.preventDefault(); navTo(label.toLowerCase()); }}>{label}</a>
          ))}
          <button className="absolute top-6 right-6 text-4xl" onClick={() => setMenuOpen(false)}>×</button>
        </div>
      </div>

      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full" />
        </div>
        <div className="z-10 max-w-4xl">
          <div className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest">Full-Stack Developer · Nairobi, Kenya</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-accent mb-6 leading-none">
            El Ducati<br />
            <span className="text-brand-light/50">Developer</span>
          </h1>
          <div className="text-xl md:text-2xl font-light text-brand-light/80 mb-10 max-w-2xl mx-auto h-8">
            <span ref={typewriterRef} /><span className="inline-block w-1 h-6 bg-brand-accent ml-1 animate-pulse" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="#work" className="px-8 py-4 bg-brand-accent text-brand-black font-bold rounded-full hover:bg-brand-light transition-all transform hover:scale-105" onClick={(e) => { e.preventDefault(); navTo('work'); }}>View my work →</a>
            <a href="#contact" className="px-8 py-4 border border-brand-gray text-brand-accent font-bold rounded-full hover:bg-brand-gray transition-all transform hover:scale-105" onClick={(e) => { e.preventDefault(); navTo('contact'); }}>Let's talk</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-brand-gray pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent">8+</div>
              <div className="text-xs uppercase tracking-widest text-brand-light/40">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent">50+</div>
              <div className="text-xs uppercase tracking-widest text-brand-light/40">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent">30+</div>
              <div className="text-xs uppercase tracking-widest text-brand-light/40">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-accent">3</div>
              <div className="text-xs uppercase tracking-widest text-brand-light/40">Web3 Launches</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-light/30 animate-bounce">
          <span className="text-xl">⌄</span>
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="about">
        <span className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest reveal">About</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-12 reveal reveal-delay-1">Developer. / Architect. / Maker.</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-brand-gray rounded-2xl overflow-hidden reveal reveal-delay-2 group">
            <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-brand-accent/10 group-hover:text-brand-accent/20 transition-colors">EL</div>
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-black border border-brand-gray rounded-full text-xs font-bold text-brand-accent flex items-center gap-2">
              <span className="text-yellow-400">⚡</span> 8+ Years building
            </div>
          </div>
          <div className="space-y-6 reveal reveal-delay-3">
            <p className="text-lg text-brand-light/80 leading-relaxed">I'm a full-stack developer and e-commerce solutions architect based in Nairobi. Over the past 8+ years, I've helped startups, agencies, and enterprises turn complex problems into polished digital products that drive real results.</p>
            <p className="text-lg text-brand-light/80 leading-relaxed">From architecting scalable Shopify+ and WooCommerce stores to building Web3 dApps and React-powered SaaS platforms, I bridge the gap between design vision and technical execution. I believe great code is invisible — what matters is how it moves the business forward.</p>
            <div className="flex flex-wrap gap-2 py-4">
              {chipItems.map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full bg-brand-gray text-brand-light/60 text-xs font-medium border border-brand-gray/50 hover:border-brand-accent transition-colors">
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-brand-accent text-brand-black font-bold rounded-full hover:bg-brand-light transition-all transform hover:scale-105" onClick={(e) => { e.preventDefault(); navTo('contact'); }}>Get in touch</a>
              <a href="/Resume316.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-brand-gray text-brand-accent font-bold rounded-full hover:bg-brand-gray transition-all transform hover:scale-105">Download CV ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="work">
        <span className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest reveal">Work</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-12 reveal reveal-delay-1">Selected projects.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <div key={p.title} className={`group relative p-6 rounded-2xl border border-brand-gray bg-brand-dark hover:border-brand-accent transition-all duration-300 reveal reveal-delay-${Math.min(i + 2, 4)} ${p.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className="flex flex-col h-full">
                <div className="flex gap-2 mb-4">
                  {p.chips.map((c) => (
                    <span key={c} className="px-2 py-1 rounded-md bg-brand-gray text-brand-light/60 text-[10px] font-bold uppercase tracking-wider border border-brand-gray/50">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-brand-accent mb-3 group-hover:text-brand-light transition-colors">{p.title}</h3>
                <p className="text-brand-light/60 mb-6 flex-grow leading-relaxed">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent group-hover:gap-3 transition-all">
                  View project <span className="text-lg">→</span>
                </a>
              </div>
              {p.featured && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-brand-accent text-brand-black text-[10px] font-black uppercase tracking-tighter">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="skills">
        <span className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest reveal">Expertise</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-12 reveal reveal-delay-1">What I work with.</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4" id="skillsGrid">
          {skills.map((s, i) => (
            <div key={s.name} className={`p-6 rounded-2xl border border-brand-gray bg-brand-dark hover:border-brand-accent transition-all reveal reveal-delay-${Math.min(i, 4) + 2} group`}>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <div className="text-sm font-bold text-brand-accent mb-3">{s.name}</div>
              <div className="h-1 w-full bg-brand-gray rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent transition-all duration-1000" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto" id="testimonials">
        <span className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest reveal">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-12 reveal reveal-delay-1">Kind words.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-2">
          {testimonialsData.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border border-brand-gray bg-brand-dark hover:border-brand-accent transition-all group">
              <div className="text-yellow-400 text-sm mb-4">★★★★★</div>
              <p className="text-brand-light/80 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-black flex items-center justify-center font-bold text-xs">{t.initials}</div>
                <div>
                  <div className="text-sm font-bold text-brand-accent">{t.name}</div>
                  <div className="text-xs text-brand-light/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden" id="contact">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 rounded-full border border-brand-gray text-xs font-medium text-brand-light/60 mb-6 uppercase tracking-widest reveal">Contact</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-accent mb-6 reveal reveal-delay-1">Let's build something <span className="text-brand-light/50">together</span></h2>
          <p className="text-xl text-brand-light/60 mb-12 max-w-2xl reveal reveal-delay-2">Open to freelance projects, full-time roles, and interesting collaborations.</p>
          <form className="grid md:grid-cols-2 gap-12 reveal reveal-delay-3" onSubmit={(e) => { e.preventDefault(); const f = e.target; window.location.href = `mailto:elducati@proton.me?subject=${encodeURIComponent(f.subject.value || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\n\n${f.message.value}`)}`; }}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-light/40">Name</label>
                  <input type="text" name="name" placeholder="Your Name" required className="px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray text-brand-accent focus:border-brand-accent outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-light/40">Email</label>
                  <input type="email" name="email" placeholder="Your Email" required className="px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray text-brand-accent focus:border-brand-accent outline-none transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-light/40">Subject</label>
                <input type="text" name="subject" placeholder="Subject" className="px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray text-brand-accent focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 h-full">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-light/40">Message</label>
                <textarea name="message" placeholder="Your Message" required className="px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray text-brand-accent focus:border-brand-accent outline-none transition-colors h-full min-h-[200px]" />
              </div>
              <button type="submit" className="w-full py-4 bg-brand-accent text-brand-black font-bold rounded-full hover:bg-brand-light transition-all transform hover:scale-105">Send Message</button>
            </div>
          </form>
          <div className="flex flex-wrap gap-4 mt-20 reveal reveal-delay-4">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-brand-gray text-sm font-medium text-brand-light/60 hover:text-brand-accent hover:border-brand-accent transition-all">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-brand-gray flex flex-col md:flex-row justify-between items-center gap-6 text-brand-light/40 text-xs font-medium uppercase tracking-widest">
        <div className="font-bold text-brand-accent">EL</div>
        <div className="text-center">© 2026 El Ducati. Built with care.</div>
        <a href={GH} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">↑ Back to top</a>
      </footer>
    </>
  );
}
