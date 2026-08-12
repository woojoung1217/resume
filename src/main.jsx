import React from 'react';
import { createRoot } from 'react-dom/client';
import { profile } from './data';
import './styles.css';

const SectionTitle = ({ number, children }) => (
  <div className="section-title">
    <span>{number}</span>
    <h2>{children}</h2>
  </div>
);

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">윤우중 이력서</a>
      <nav aria-label="주요 메뉴">
        <a href="#experience">경력</a>
        <a href="#projects">프로젝트</a>
        <a href="#skills">기술</a>
        <a href="#background">교육·수상</a>
      </nav>
      <a className="header-email" href={`mailto:${profile.email}`}>이메일 보내기</a>
    </header>
  );
}

function ProfileHeader() {
  return (
    <section className="profile-header" id="top">
      <div className="profile-heading">
        <p className="role">WEB DEVELOPER</p>
        <h1>{profile.name}</h1>
        <p className="headline">서비스의 흐름을 이해하고<br />끝까지 구현하는 웹 개발자</p>
      </div>
      <div className="profile-summary">
        <div className="employment"><span /> 현재 twentyoz 웹개발팀 주임으로 재직 중</div>
        <p>{profile.intro}</p>
        <div className="contact-grid">
          <div><span>전화</span><a href={`tel:${profile.phone}`}>{profile.phone}</a></div>
          <div><span>이메일</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><span>거주지</span><strong>{profile.location}</strong></div>
          <div><span>포트폴리오</span><a href={profile.portfolio} target="_blank" rel="noreferrer">Notion 포트폴리오 ↗</a></div>
        </div>
      </div>
    </section>
  );
}

function CareerSummary() {
  return (
    <section className="resume-section summary-section">
      <SectionTitle number="01">핵심 역량</SectionTitle>
      <div className="summary-content">
        <p className="summary-lead">프론트엔드 구현에 한정하지 않고, 데이터 연동과 백엔드 기능 개발부터 운영 서버 배포까지 서비스 전반을 다룹니다.</p>
        <ul className="strength-list">
          <li><strong>풀스택 개발</strong><span>웹 서비스의 프론트엔드와 백엔드 기능 설계 및 구현</span></li>
          <li><strong>EMS</strong><span>태양광 설비 모니터링, 계통도 및 데이터 연동 개발</span></li>
          <li><strong>엔지니어링</strong><span>설비 태그 구성, 현장 구축 지원과 운영 환경 배포·점검</span></li>
          <li><strong>품질 개선</strong><span>웹 접근성, 상태 관리, 테스트와 공통 컴포넌트 개선</span></li>
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="resume-section" id="experience">
      <SectionTitle number="02">경력</SectionTitle>
      <div className="career-list">
        {profile.experience.map((item) => (
          <article className="career-item" key={`${item.company}-${item.period}`}>
            <div className="career-meta">
              <time>{item.period}</time>
              {item.current && <span className="current-badge">재직 중</span>}
            </div>
            <div className="career-company">
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <div className="career-detail">
              <h4>{item.summary}</h4>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="resume-section" id="projects">
      <SectionTitle number="03">주요 프로젝트</SectionTitle>
      <div className="project-table">
        {profile.projects.map((project) => (
          <article className="project-row" key={project.title}>
            <span className="project-number">{project.number}</span>
            <div className="project-name">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-stack">{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js', 'HTML5', 'CSS'] },
    { label: 'Backend & Data', items: ['NestJS', 'MySQL'] },
    { label: 'Collaboration', items: ['Git', 'GitLab', 'Jira', 'Figma'] },
  ];

  return (
    <section className="resume-section" id="skills">
      <SectionTitle number="04">기술 스택</SectionTitle>
      <div className="skill-groups">
        {groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Background() {
  return (
    <section className="resume-section" id="background">
      <SectionTitle number="05">교육 · 활동 · 수상</SectionTitle>
      <div className="background-grid">
        <div>
          <h3 className="subsection-label">교육 및 활동</h3>
          {profile.activities.map((item) => (
            <article className="background-item" key={item.title}>
              <time>{item.period}</time>
              <div><h4>{item.title}</h4><p>{item.description}</p></div>
            </article>
          ))}
        </div>
        <aside>
          <div className="side-block">
            <h3 className="subsection-label">학력</h3>
            <time>{profile.education.period}</time>
            <h4>{profile.education.school}</h4>
            <p>{profile.education.major}</p>
          </div>
          <div className="side-block award-block">
            <h3 className="subsection-label">수상</h3>
            <time>{profile.award.year}</time>
            <h4>{profile.award.title}</h4>
            <p>{profile.award.event}</p>
            <p>{profile.award.description}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="resume-section introduction">
      <SectionTitle number="06">자기소개</SectionTitle>
      <div>
        <h3>협업과 책임감을 바탕으로 성장하는 개발자</h3>
        <p>{profile.introduction}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div><strong>{profile.name}</strong><span>웹 개발자</span></div>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="footer-links">{profile.links.slice(0, 2).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
    </footer>
  );
}

function App() {
  return <><Header /><main><ProfileHeader /><CareerSummary /><Experience /><Projects /><Skills /><Background /><Introduction /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
