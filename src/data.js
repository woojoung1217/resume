export const profile = {
  name: '윤우중',
  role: '웹 개발자',
  tagline: '서비스의 흐름을 이해하고, 끝까지 구현하는 웹 개발자.',
  intro:
    '프론트엔드의 사용자 경험부터 백엔드 기능과 운영 환경까지 폭넓게 고민합니다. React와 TypeScript를 중심으로 웹 서비스를 만들며, AI 도구를 개발 과정에 활용해 구현과 검증의 생산성을 높이고 배포 이후의 개선까지 책임집니다.',
  email: 'ywj98121791@gmail.com',
  phone: '010-4163-7540',
  location: '경기도 화성시 동탄구',
  birth: '1998년생 (만 27세)',
  availability: 'twentyoz 재직 중 · 주임 웹개발자',
  valuePoints: [
    { label: 'Development', value: 'Frontend · Backend' },
    { label: 'Domain', value: 'EMS · Web SaaS' },
    { label: 'Delivery', value: '배포 · 운영 · 엔지니어링' },
  ],
  portfolio: 'https://developing-cell-df2.notion.site/1a1047c27d53806a9919fddc2791366f',
  links: [
    { label: 'GitHub', href: 'https://github.com/woojoung1217' },
    { label: 'Portfolio', href: 'https://developing-cell-df2.notion.site/1a1047c27d53806a9919fddc2791366f' },
    { label: 'Email', href: 'mailto:ywj98121791@gmail.com' },
  ],
  metrics: [
    { value: 'Web', label: 'Frontend & Backend' },
    { value: '3', label: 'SaaS Products' },
    { value: '1st', label: '장관상 수상' },
  ],
  facts: [
    { label: '현재', value: 'twentyoz 웹개발팀 주임' },
    { label: '학력', value: '순천향대학교 컴퓨터소프트웨어 졸업' },
    { label: '희망 직무', value: '웹 개발자 · 프론트엔드 개발자' },
    { label: '병역', value: '육군 병장 만기 제대' },
  ],
  experience: [
    {
      period: '2026. 03 — 재직 중',
      company: 'twentyoz (트웬티온즈)',
      role: '웹개발팀 · 주임 웹개발자',
      summary: '태양광 EMS 서비스 풀스택 개발 및 현장 엔지니어링',
      bullets: [
        '태양광 발전소의 발전량·설비 상태·알람을 확인하는 EMS 모니터링 화면과 운영 기능을 프론트엔드부터 백엔드까지 개발',
        'P&ID 계통도와 인버터·접속반 등 설비별 상세 화면을 작화하고, 실시간 태그 데이터가 화면에 정확히 표현되도록 연동·검증',
        'InfoU 기반 설비 데이터 구조를 분석해 태그를 매핑하고 Modbus 주소, 데이터 타입, 스케일 등 통신 정보를 관리',
        '고객사 내부망 환경에 운영 서버를 배포하고 서버·클라이언트 간 접속, 설비 통신, 서비스 구동 상태를 점검',
        '현장 엔지니어링 과정에서 계통도·태그 목록과 실제 설비 데이터를 대조하고 오표기·통신 누락 사항을 수정',
        '고객 요구사항을 운영 화면과 기능에 반영하고 배포 이후 데이터·화면 이상 여부를 확인하며 서비스 안정화 지원',
        'Twentyoz Tech Blog의 공개 웹·Admin·백엔드 기능을 개발하고 운영 환경에 배포',
      ],
      tags: ['React', 'TypeScript', 'JavaScript', 'NestJS', 'MySQL', 'EMS', 'InfoU', 'Modbus', 'Internal Network', 'GitLab'],
      projects: [
        {
          title: '홋카이도 태양광 EMS',
          type: 'LS ELECTRIC 협력 프로젝트 · 풀스택 개발 및 현장 엔지니어링',
          description: 'LS ELECTRIC이 수행하는 일본 홋카이도 태양광 발전소 프로젝트의 EMS 구축 업무로, 발전량과 설비 상태, 알람, 전력 계통 흐름을 통합 모니터링하고 운영하기 위한 서비스입니다.',
          contributions: [
            'EMS 대시보드와 설비 모니터링·운영 화면의 프론트엔드 및 관련 백엔드 기능 개발',
            '단선결선도와 P&ID를 바탕으로 인버터·접속반·전력 계측 설비의 계통도 및 상세 화면 작화',
            'InfoU 태그를 화면 컴포넌트에 매핑하고 Modbus 주소·데이터 타입·스케일·읽기 값을 대조해 데이터 정확성 검증',
            '외부 인터넷 접속이 제한된 고객사 내부망 환경에서 서버와 클라이언트를 구성하고 운영 서비스 배포',
            '내부망 IP·포트와 서버 프로세스, 클라이언트 접속, 설비 통신 및 실시간 데이터 수신 상태 점검',
            '화면 표시 값과 태그 목록, 실제 설비 데이터를 교차 검증하고 오표기·통신 누락·이상 데이터를 수정',
            '고객 요구사항과 현장 피드백을 기능 및 화면에 반영하고 배포 이후 안정화 지원',
          ],
          technicalNotes: [
            { label: '데이터 신뢰성', value: '태그 정의서·Modbus 정보·실제 수신 값·화면 표시 값을 교차 검증해 데이터 불일치 원인을 추적' },
            { label: '제한 환경 배포', value: '외부 인터넷이 제한된 내부망에서 서버와 클라이언트, 네트워크 접속과 프로세스 구동 상태를 단계별 점검' },
          ],
          stack: ['React', 'TypeScript', 'NestJS', 'MySQL', 'InfoU', 'Modbus TCP', 'P&ID', 'Internal Network', 'Linux', 'GitLab'],
        },
        {
          title: 'Twentyoz Tech Blog',
          type: '기업 기술 블로그 · 풀스택 개발 및 운영 배포',
          url: 'https://blog.twentyoz.app/',
          description: '트웬티온스의 기술 아티클과 실무 인사이트를 발행하는 기업 기술 블로그입니다. 공개 웹과 콘텐츠 관리 Admin, API를 함께 개발하고 실제 서비스 환경에 배포했습니다.',
          contributions: [
            '아티클 목록·상세, 검색, 태그 탐색과 세션 콘텐츠 등 공개 블로그 화면 개발 및 개선',
            '한국어·영어 콘텐츠 경로와 테마 전환을 지원하고 반응형 사용자 경험 정비',
            '페이지별 메타데이터, Open Graph, 구조화 데이터, canonical·hreflang과 RSS를 적용해 검색 및 콘텐츠 공유 환경 구성',
            'Admin에서 게시글·카테고리·태그·작성자·이미지 업로드와 게시 상태를 관리하는 기능 개발',
            'NestJS와 Prisma 기반 콘텐츠 API 및 데이터 모델을 구성하고 프론트엔드와 연동',
            '운영 도메인에 공개 웹과 Admin·API를 배포하고 환경 설정, 빌드 및 배포 후 기능·응답 상태 점검',
            '배포 이후 콘텐츠 노출, 이미지, 검색과 다국어 경로 등의 운영 이슈를 확인하고 지속적으로 개선',
          ],
          technicalNotes: [
            { label: '풀스택 구조', value: '공개 웹·Admin·API를 분리하고 React와 NestJS·Prisma 기반으로 콘텐츠 생성부터 노출까지의 흐름 구현' },
            { label: '검색·배포 품질', value: 'SSR 메타데이터, 구조화 데이터, RSS와 다국어 URL을 구성하고 운영 도메인 배포 후 응답과 노출 상태 검증' },
          ],
          stack: ['React', 'TypeScript', 'TanStack Query', 'Ant Design', 'NestJS', 'Prisma', 'MySQL', 'SSR', 'SEO', 'RSS', 'GitLab'],
        },
      ],
      current: true,
    },
    {
      period: '2025. 06 — 2025. 09',
      company: '포그리트',
      role: '플랫폼개발팀 · 웹 개발자',
      summary: '웹 분석 SaaS와 사내 CRM의 프론트엔드 개발 및 유지보수',
      bullets: [
        'BAX: Vue 3 Composition API 기반 진단 UI를 개발하고, 접근성 위반 위치를 캡처 이미지와 HTML 코드 트리에서 동시에 확인하도록 상태를 연동',
        'BAX: Vue i18n으로 한국어·영어·일본어를 지원하고 TanStack Query 캐싱을 적용해 중복 API 요청과 서버 상태 관리 복잡도를 개선',
        'Eagle M: 고객·연락처·회원·권한, 견적 생성 및 결제 내역 관리 기능을 고도화하고 html2pdf 기반 PDF 견적서 자동 생성 구현',
        'Eagle M: 반복 UI를 공통 컴포넌트로 정리하고 TypeScript 타입을 보강해 변경 영향 범위와 유지보수 비용을 축소',
        'Beusable: 스크롤 리포트 데이터를 Canvas와 Chart.js로 시각화하고 서비스 요구사항에 맞게 차트 렌더링을 커스터마이징',
        'Beusable: 배포 이후 유지보수와 Jira 기반 QA에 참여해 재현 조건 확인, 이슈 수정 및 회귀 점검 수행',
      ],
      tags: ['Vue 3', 'Composition API', 'TypeScript', 'Vue i18n', 'TanStack Query', 'Canvas', 'Chart.js', 'html2pdf', 'Jira'],
      projects: [
        {
          title: 'BAX',
          type: '웹 접근성 분석 SaaS',
          description: 'URL 입력만으로 WCAG 기반 접근성 진단 결과와 위반 지점을 제공하는 서비스입니다.',
          contributions: [
            '접근성 위반 요소를 캡처 화면과 HTML 코드 트리뷰에 동시에 표시하는 UI 및 상태 연동',
            'Vue i18n 기반 한국어·영어·일본어 다국어 지원',
            'TanStack Query 캐싱을 적용해 중복 API 요청과 서버 상태 관리 복잡도 개선',
          ],
          technicalNotes: [
            { label: '상태 동기화', value: '동일한 위반 데이터를 캡처 좌표와 HTML 노드에 연결해 서로 다른 뷰에서도 같은 문제 지점을 탐색하도록 구현' },
            { label: '서버 상태 관리', value: '조회 데이터의 캐시 정책을 적용해 반복 요청을 줄이고 로딩·오류 상태 처리 방식을 일관되게 구성' },
          ],
          stack: ['Vue 3', 'Composition API', 'TypeScript', 'Vue i18n', 'TanStack Query'],
        },
        {
          title: 'Eagle M',
          type: '고객·견적·결제 관리 CRM',
          description: '고객과 연락처, 회원 권한, 견적 및 결제 내역을 통합 관리하는 사내 시스템입니다.',
          contributions: [
            '고객·회원·권한 관리와 견적·결제 확인 기능 고도화',
            '서비스별 가격과 산정 내역을 PDF 견적서로 자동 생성',
            '공통 UI 컴포넌트 정리와 TypeScript 타입 안정성 강화',
          ],
          technicalNotes: [
            { label: '업무 자동화', value: '서비스별 가격과 산정 데이터를 문서 구조로 변환해 반복적인 견적서 작성 과정을 PDF 생성 기능으로 자동화' },
          ],
          stack: ['Vue', 'TypeScript', 'html2pdf', 'Component Design'],
        },
        {
          title: 'Beusable',
          type: '웹사이트 UX 분석 SaaS',
          description: '사용자의 클릭, 스크롤과 이동 경로를 분석해 히트맵 및 행동 리포트를 제공하는 서비스입니다.',
          contributions: [
            '스크롤 리포트 데이터를 Canvas와 Chart.js 기반 맞춤형 차트로 시각화',
            '배포 이후 유지보수와 Jira 기반 QA, 이슈 수정 및 회귀 점검',
          ],
          technicalNotes: [
            { label: '데이터 시각화', value: '스크롤 데이터를 서비스 지표에 맞게 가공하고 Canvas·Chart.js 렌더링을 커스터마이징해 리포트로 표현' },
          ],
          stack: ['Vue', 'TypeScript', 'Canvas', 'Chart.js', 'Jira'],
        },
      ],
    },
  ],
  activities: [
    {
      period: '2024. 10 — 2025. 01',
      title: '멋쟁이사자처럼 인턴',
      description: 'React와 TypeScript 기반 스튜디오 검색·예약 UI와 촬영 일정 관리 기능을 개발했습니다. 기획과 디자인부터 참여해 사용자 흐름을 설계하고, Jira 기반 협업과 UI 단위 테스트를 통해 사용성과 안정성을 개선했습니다.',
    },
    {
      period: '2023. 12 — 2024. 04',
      title: '테킷 프론트엔드 스쿨',
      description: '페이지 개발, 공통 컴포넌트, API 연동, 상태 관리, SSR, 무한 스크롤, 데이터 시각화와 배포·운영까지 실무 중심의 프론트엔드 과정을 수료했습니다.',
    },
    {
      period: '심화 과정',
      title: '멋쟁이사자처럼 프론트엔드 심화',
      description: 'Next.js 기반 AI 분석 서비스를 팀으로 개발하며 파일 업로드, GPT 결과 생성, 데이터 시각화, 위치 기반 기능과 성능 최적화를 구현했습니다.',
    },
  ],
  award: {
    year: '2024',
    title: '고용노동부 장관상',
    event: '제6회 K-디지털 트레이닝 해커톤',
    description: '저출산·고령사회 문제 해결을 위한 AI 기반 심리 케어 서비스를 개발했습니다. 난임 및 우울증 상담센터를 모바일로 전환하고 서비스 구조와 핵심 기능 개발을 주도해 기술적 완성도와 사회적 가치를 인정받았습니다.',
  },
  education: {
    period: '2017. 03 — 2023. 03',
    school: '순천향대학교',
    major: '컴퓨터소프트웨어 · 4년제 졸업',
  },
  skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js', 'NestJS', 'HTML5', 'CSS', 'MySQL', 'Git', 'GitLab'],
  aiUsage: [
    {
      title: '기능 구현 및 문제 해결',
      description: '요구사항을 작업 단위로 구체화하고 구현 방향, API 구조와 예외 처리 방안을 탐색할 때 AI를 활용합니다. 생성 코드는 프로젝트 구조와 팀 규칙에 맞게 직접 검토·수정합니다.',
    },
    {
      title: '테스트 및 코드 품질',
      description: '테스트 케이스와 경계 조건을 확장하고 반복 코드의 리팩터링 대안을 비교합니다. 타입, 실행 결과와 기존 기능의 회귀 여부는 로컬 빌드와 직접 테스트로 검증합니다.',
    },
    {
      title: '엔지니어링 데이터 정리',
      description: 'EMS 태그 목록, 설비 명칭과 작업 문서를 구조화하고 누락 가능성을 검토하는 보조 도구로 사용합니다. 설비 값과 통신 정보는 원본 문서 및 실제 수신 데이터와 대조해 확정합니다.',
    },
    {
      title: '문서화 및 지식 공유',
      description: '장애 원인, 배포 절차와 작업 이력을 이해하기 쉬운 형태로 초안화합니다. 보안이 필요한 내부망 정보와 고객 데이터는 입력하지 않고 비식별화된 맥락에서 활용합니다.',
    },
    {
      title: 'AI 서비스 개발 경험',
      description: 'Next.js 기반 프로젝트에서 GPT 분석 결과 생성, 파일 업로드와 결과 시각화 기능을 구현했으며 AI 심리 케어 서비스의 구조 및 핵심 기능 개발을 주도했습니다.',
    },
  ],
  introduction:
    '저는 협업과 소통을 기반으로 성장하는 웹 개발자입니다. 의견이 다를 때 상대의 생각을 먼저 경청하고 논리적인 타협점을 찾아 문제를 해결합니다. 코드 리뷰와 문서화로 팀이 같은 방향을 바라보게 만들고, 맡은 작업의 일정과 품질을 끝까지 책임집니다. React와 TypeScript 기반 개발에 익숙하며 웹 표준과 접근성을 고려한 UI부터 백엔드 기능, 배포와 운영까지 서비스 전체 흐름을 이해하고자 합니다. AI 도구 역시 정답을 대신하는 수단이 아니라 요구사항 분석, 구현, 테스트와 문서화의 생산성을 높이는 개발 도구로 활용하며 결과를 직접 검증합니다. 단순히 작동하는 화면을 넘어 팀과 함께 성장하며 사용자에게 의미 있는 경험을 제공하는 개발자를 목표로 합니다.',
};
