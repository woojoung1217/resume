import React, { useEffect, useState } from 'react';
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

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a className="logo korean-logo" href="#top" aria-label="처음으로">윤우중 이력서<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="메뉴 열기">
        <i /><i />
      </button>
      <nav className={open ? 'nav is-open' : 'nav'}>
        <a href="#about" onClick={close}>소개</a>
        <a href="#experience" onClick={close}>경력</a>
        <a href="#work" onClick={close}>프로젝트</a>
        <a href="#more" onClick={close}>활동</a>
        <a href={`mailto:${profile.email}`} className="nav-contact">연락하기 <Arrow /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-status"><span /> {profile.availability}</div>
      <p className="eyebrow">{profile.role} · {profile.name}</p>
      <h1>{profile.tagline}</h1>
      <div className="hero-bottom">
        <p>{profile.intro}</p>
        <a href="#experience" className="circle-link" aria-label="경력 보기"><span>경력<br />살펴보기</span><b>↓</b></a>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE</div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" data-reveal>
      <div className="section-label"><span>01</span> 소개</div>
      <div className="about-content">
        <h2>프론트부터 백엔드까지,<br />서비스 전체를 봅니다.</h2>
        <div className="about-copy">
          <p>화면 구현에 머무르지 않고 데이터, 서버, 배포와 운영까지 연결해 실제 문제를 해결하는 웹 개발자입니다.</p>
          <dl>
            <div><dt>Contact</dt><dd><a href={`tel:${profile.phone}`}>{profile.phone}</a><br /><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div><dt>Profile</dt><dd>{profile.birth}<br />{profile.location}</dd></div>
          </dl>
        </div>
        <div className="metrics">
          {profile.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </div>
      <div className="facts">{profile.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience" data-reveal>
      <div className="section-label"><span>02</span> 경력</div>
      <div className="experience-list">
        {profile.experience.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div><h3>{item.role} {item.current && <em>재직 중</em>}</h3><h4>{item.company}</h4><p className="job-summary">{item.summary}</p></div>
            <div className="experience-detail"><ul className="bullet-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><ul className="tag-list">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work" id="work" data-reveal>
      <div className="section-label"><span>03</span> 주요 프로젝트</div>
      <div className="project-list">
        {profile.projects.map((project) => (
          <article className="project" key={project.title}>
            <div className={`project-visual ${project.accent}`}><span>{project.number}</span><div className="project-shape" /></div>
            <div className="project-info"><div><p>{project.category}</p><h3>{project.title}</h3></div><p>{project.description}<small>{project.detail}</small></p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills" data-reveal>
      <div className="skills-statement" aria-hidden="true">Plan. Develop. Operate.</div>
      <div className="skills-inner"><div className="section-label"><span>04</span> 기술 스택</div><div className="skill-list">{profile.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
    </section>
  );
}

function More() {
  return (
    <section className="section more" id="more" data-reveal>
      <div className="section-label"><span>05</span> 활동 · 교육</div>
      <div className="more-content">
        <div className="timeline">
          {profile.activities.map((item) => <article key={item.title}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
        </div>
        <aside className="education-card"><span>학력</span><time>{profile.education.period}</time><h3>{profile.education.school}</h3><p>{profile.education.major}</p></aside>
      </div>
      <div className="award-card"><span>{profile.award.year} AWARD</span><div><p>{profile.award.event}</p><h3>{profile.award.title}</h3></div><p>{profile.award.description}</p></div>
      <div className="intro-card"><span>자기소개</span><h3>협업과 책임감을 바탕으로<br />성장하는 개발자</h3><p>{profile.introduction}</p></div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-reveal>
      <p className="eyebrow">웹 개발자 윤우중</p>
      <h2>함께 만들<br />다음 서비스.</h2>
      <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><div>{profile.links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link.label}</a>)}</div><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

function App() {
  useReveal();
  return <><Header /><main><Hero /><About /><Experience /><Work /><Skills /><More /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
