import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data';
import './styles.css';

const Arrow = () => <span aria-hidden="true">↗</span>;

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    const nodes = document.querySelectorAll('[data-reveal]');
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function CursorGlow() {
  const glow = useRef(null);
  useEffect(() => {
    const move = (event) => {
      if (glow.current) {
        glow.current.style.setProperty('--x', `${event.clientX}px`);
        glow.current.style.setProperty('--y', `${event.clientY}px`);
      }
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <div className="cursor-glow" ref={glow} aria-hidden="true" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="처음으로">WJ<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="메뉴 열기">
        <i /><i />
      </button>
      <nav className={open ? 'nav is-open' : 'nav'}>
        <a href="#about" onClick={close}>About</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#work" onClick={close}>Work</a>
        <a href={`mailto:${profile.email}`} className="nav-contact">Contact <Arrow /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-status"><span /> {profile.availability}</div>
      <p className="eyebrow">안녕하세요, 저는 {profile.name}입니다.</p>
      <h1>{profile.tagline}</h1>
      <div className="hero-bottom">
        <p>{profile.intro}</p>
        <a href="#work" className="circle-link" aria-label="프로젝트 보기"><span>Selected<br />Work</span><b>↓</b></a>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE</div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" data-reveal>
      <div className="section-label"><span>01</span> About</div>
      <div className="about-content">
        <h2>생각은 명확하게,<br />경험은 자연스럽게.</h2>
        <div className="about-copy">
          <p>코드만 작성하는 사람이 아니라, 왜 만드는지를 함께 고민합니다. 비즈니스 목표와 사용자 경험 사이의 가장 좋은 답을 찾습니다.</p>
          <dl>
            <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            <div><dt>Focus</dt><dd>Web Experience<br />Product Design</dd></div>
          </dl>
        </div>
        <div className="metrics">
          {profile.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience" data-reveal>
      <div className="section-label"><span>02</span> Experience</div>
      <div className="experience-list">
        {profile.experience.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div><h3>{item.role}</h3><h4>{item.company}</h4></div>
            <div className="experience-detail"><p>{item.description}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work" id="work" data-reveal>
      <div className="section-label"><span>03</span> Selected Work</div>
      <div className="project-list">
        {profile.projects.map((project) => (
          <a className="project" href={project.href} key={project.title}>
            <div className={`project-visual ${project.accent}`}><span>{project.number}</span><div className="project-shape" /></div>
            <div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><p>{project.description}</p><b><Arrow /></b></div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills" data-reveal>
      <div className="marquee" aria-hidden="true"><div>DESIGN · DEVELOP · DELIVER · DESIGN · DEVELOP · DELIVER ·&nbsp;</div><div>DESIGN · DEVELOP · DELIVER · DESIGN · DEVELOP · DELIVER ·&nbsp;</div></div>
      <div className="skills-inner"><div className="section-label"><span>04</span> Toolkit</div><div className="skill-list">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-reveal>
      <p className="eyebrow">다음 이야기를 함께 만들어요.</p>
      <h2>Have a project<br />in mind?</h2>
      <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><div>{profile.links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link.label}</a>)}</div><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

function App() {
  useReveal();
  return <><CursorGlow /><Header /><main><Hero /><About /><Experience /><Work /><Skills /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
