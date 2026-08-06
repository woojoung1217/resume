# Resume

React와 Vite로 만든 개인 이력서 사이트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

개인 정보와 경력, 프로젝트는 `src/data.js`에서 한 번에 수정할 수 있습니다.

## 배포

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하세요. 이후 `masterbranch` 또는 `main` 브랜치에 push하면 자동으로 배포됩니다.

기본 주소는 `https://woojoung1217.github.io/resume/`입니다. 개인 도메인을 사용할 경우 GitHub Pages 설정에서 Custom domain을 입력하고, DNS에 안내된 레코드를 추가하면 됩니다.
