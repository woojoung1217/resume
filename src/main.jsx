import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data';
import './styles.css';

const photo = `${import.meta.env.BASE_URL}images/profile.jpg`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('윤우중 님께 채용 관련 문의드립니다')}`;
const navigation = [['experience', '경력'], ['skills', '사용 기술'], ['projects', '개인·팀 프로젝트'], ['ai', 'AI 활용'], ['background', '교육·수상'], ['about', '자기소개']];

function EmailContact() {
  const [message, setMessage] = useState('');
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage('복사했습니다.');
    } catch {
      setMessage('이메일 주소를 선택해 복사해 주세요.');
    }
  }
  return <div className="email-contact"><a href={gmail} target="_blank" rel="noreferrer">{profile.email}</a><button type="button" onClick={copy}>복사</button><span role="status">{message}</span></div>;
}

function Header() {
  return <header className="site-header"><a href="#top">윤우중 이력서</a><button type="button" onClick={() => window.print()}>인쇄 / PDF 저장</button></header>;
}

function Profile() {
  return <section className="profile" id="top" aria-labelledby="profile-name">
    <div className="profile-text">
      <p className="profile-role">{profile.role}</p>
      <div className="profile-name-row"><h1 id="profile-name">{profile.name}</h1><span className="profile-current">twentyoz 재직 중</span></div>
      <div className="profile-description"><p>{profile.intro}</p><p>{profile.introDetail}</p></div>
      <div className="contact-details"><EmailContact /><div><a href={'tel:' + profile.phone}>{profile.phone}</a><span>{profile.location}</span></div><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.portfolio} target="_blank" rel="noreferrer">포트폴리오</a></div></div>
    </div>
    <img className="profile-photo" src={photo} alt="윤우중 프로필 사진" width="928" height="1236" fetchPriority="high" />
  </section>;
}

function SectionHeading({ title }) {
  return <div className="section-heading"><h2>{title}</h2></div>;
}
function Stack({ items }) {
  return <div className="stack"><span>사용 기술</span><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
function Bullets({ items }) {
  return <ul className="bullets">{items.map((text) => <li key={text}>{text}</li>)}</ul>;
}
function ProjectCase({ project }) {
  return <article className="project-case">
    <div className="project-heading"><h4>{project.title}</h4><p>{project.scope}</p>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">사이트 방문 ↗</a>}</div>
    <div className="project-content"><p className="project-overview">{project.overview}</p><Bullets items={project.contributions} /><Stack items={project.stack} /></div>
  </article>;
}
function Experience() {
  return <section className="resume-section" id="experience">
    <SectionHeading title="경력" />
    {profile.experience.map((company) => <article className="company" key={company.id}>
      <header className="company-header">
        <h3>{company.company}</h3>
        {company.id === 'twentyoz' && <p className="company-korean">{company.koreanName}</p>}
        <p className="company-period">{company.period}</p>
        <p className="company-role">{company.role}</p>
        {company.current && <p className="current-status">재직 중</p>}
        <p className="company-summary">{company.summary}</p>
      </header>
      <div className="company-work">
        {company.projects.map((project) => <ProjectCase key={project.title} project={project} />)}
        {company.bullets && <div className="intern-detail"><Bullets items={company.bullets} /><Stack items={company.stack} /></div>}
      </div>
    </article>)}
  </section>;
}
function Skills() {
  return <section className="resume-section" id="skills"><SectionHeading title="사용 기술" /><div className="skills-table">{profile.skills.map((skill) => <article className="skill-row" key={skill.title}><h3>{skill.title}</h3><div><p className="skill-technologies">{skill.technologies}</p><p className="skill-context">{skill.context}</p></div></article>)}</div></section>;
}
function Projects() {
  return <section className="resume-section" id="projects"><SectionHeading title="개인·팀 프로젝트" />
    {profile.projects.map((project) => <article className="side-project" key={project.title}>
      <div className="side-project-heading"><h3>{project.title}</h3><time>{project.period}</time></div>
      <p className="side-project-description">{project.description}</p>
      <p className="project-highlight">{project.highlight}</p>
      <Bullets items={project.contributions} />
      <Stack items={project.stack} />
    </article>)}
  </section>;
}
function AI() {
  return <section className="resume-section" id="ai"><SectionHeading title="AI 활용" /><div className="ai-list">{profile.ai.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>;
}
function Background() {
  return <section className="resume-section" id="background"><SectionHeading title="교육 · 활동 · 수상" /><div className="background-list">{profile.background.map((item) => <article className="background-row" key={item.title}><span className="background-label">{item.label}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><time>{item.period}</time></article>)}</div></section>;
}
function About() {
  return <section className="resume-section about" id="about"><SectionHeading title="자기소개" /><div className="about-copy">{profile.introduction.map((text) => <p key={text}>{text}</p>)}</div></section>;
}
function App() {
  return <><a className="skip-link" href="#main">본문 바로가기</a><Header /><main id="main"><Profile /><nav className="section-nav" aria-label="이력서 목차">{navigation.map(([id, title]) => <a href={'#' + id} key={id}>{title}</a>)}</nav><Experience /><Skills /><Projects /><AI /><Background /><About /><footer><span>윤우중 · 소프트웨어 개발자</span><a href="#top">맨 위로 ↑</a></footer></main></>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
