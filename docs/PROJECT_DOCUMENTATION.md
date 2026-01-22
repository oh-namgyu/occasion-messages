# 경조사 문구 모음 (Occasion Messages)

## 프로젝트 개요

결혼, 조의, 개업, 승진 등 상황별 경조사 문구를 모아놓은 웹 애플리케이션입니다.
복사하기 버튼으로 카톡이나 문자에 바로 붙여넣을 수 있습니다.

### 주요 기능
- **58개 상황별 문구** 제공
- **8개 카테고리**: 결혼, 조의, 개업, 승진, 생일, 이사, 출산, 졸업
- **복사하기 버튼**: 클립보드에 바로 복사
- **검색 기능**: 문구명, 내용, 태그 검색
- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- **AdSense 광고 통합**: 3개 광고 슬롯

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | React 19 |
| 빌드 도구 | Vite 7 |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS 4 |
| 배포 | Vercel |

---

## 프로젝트 구조

```
occasion-messages/
├── docs/
│   ├── PROJECT_DOCUMENTATION.md
│   └── ADSENSE.md
├── public/
│   ├── ads.txt
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── index.ts
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AdSlot.tsx
│   │   ├── MessageCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── SeoContent.tsx
│   ├── constants/
│   │   └── messages.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 카테고리별 문구 수

| 카테고리 | 아이콘 | 문구 수 |
|----------|--------|---------|
| 결혼 | 💒 | 10개 |
| 조의 | 🕯️ | 10개 |
| 개업 | 🏪 | 8개 |
| 승진 | 🎖️ | 6개 |
| 생일 | 🎂 | 7개 |
| 이사 | 🏠 | 5개 |
| 출산 | 👶 | 6개 |
| 졸업 | 🎓 | 6개 |
| **합계** | | **58개** |

---

## 컴포넌트 설명

### 1. Header
- 로고 및 사이트 타이틀 표시
- Sticky 헤더로 스크롤 시 고정

### 2. SearchBar
- 문구 검색 기능 제공
- 제목, 내용, 태그로 검색 가능

### 3. CategoryFilter
- 9개 카테고리 필터 버튼
- 전체 / 결혼 / 조의 / 개업 / 승진 / 생일 / 이사 / 출산 / 졸업

### 4. MessageCard
- 개별 문구를 카드 형태로 표시
- 카테고리 배지, 제목, 본문, 태그 표시
- **복사하기 버튼**: 클릭 시 클립보드에 복사
- 복사 완료 시 시각적 피드백 (2초)

### 5. AdSlot
- Google AdSense 광고 컴포넌트
- 4가지 포맷 지원: auto, horizontal, vertical, rectangle

### 6. SeoContent
- SEO를 위한 상세 콘텐츠 섹션
- "올바른 경조사 예절" 가이드 (800자 이상)
- 카테고리별 문구 요약 카드

### 7. Footer
- 사이트 정보 및 저작권 표시

---

## 디자인 시스템

### 컬러 팔레트
- **Primary**: Orange-500 (#F97316)
- **Secondary**: Amber-500 (#F59E0B)
- **Background**: Warm Gradient (fef7f0 → fff5eb → fef3e8)
- **Card Background**: White (#FFFFFF)
- **Text Primary**: Gray-800 (#1F2937)

### 테마: Warm Orange/Amber
- 따뜻한 느낌의 오렌지/앰버 그라데이션
- 부드러운 그림자 효과
- 둥근 모서리 (rounded-xl, rounded-2xl)
- 호버 시 미세한 상승 효과

---

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

---

## 배포 정보

### Vercel 배포
- **배포 URL**: https://occasion-messages.vercel.app
- **자동 배포**: main 브랜치 푸시 시 자동 배포

### AdSense 설정
- **Publisher ID**: ca-pub-2627121549841957
- **ads.txt**: https://occasion-messages.vercel.app/ads.txt

---

## Git 정보

### GitHub 저장소
- **Repository**: https://github.com/oh-namgyu/occasion-messages
- **Branch**: main

---

## 라이선스

MIT License

---

## 버전 히스토리

| 버전 | 날짜 | 변경사항 |
|------|------|----------|
| 1.0.0 | 2026-01-22 | 초기 릴리즈 |
