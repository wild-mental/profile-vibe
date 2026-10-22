# LinkedIn ↔ 웹 프로필 양방향 비교

- 기준일: 2026-10-21
- LinkedIn: https://www.linkedin.com/in/pbjworking/ (로그인 상태로 메인 + details/experience · education · certifications · skills · recommendations · languages 확인)
- 웹: `app/src/data/*.ts`, `app/src/i18n/strings.ts`, `app/src/i18n/projects.ts`

표기: 🔴 웹에 빠진 핵심 · 🟠 값 충돌(어느 쪽이 맞는지 확인 필요) · 🟡 보강하면 좋음 · ⚪ 참고

---

## 1. LinkedIn → 웹 (웹 업데이트 대상)

### 1-1. 경력 · 강의 (`data/career.ts`, `data/teaching.ts`)

| # | 항목 | LinkedIn | 웹 현재 | 제안 |
|---|------|----------|---------|------|
| 🔴1 | **UD IMPACT · Fintech AI PM 과정** | Lead Instructor & Curriculum Architect, Freelance, 2026.07–2026.10, 369시간 전 과정 리드, 프로젝트 4개 프레임워크, 특강 2종 | Fintech AX 섹션에 커리큘럼 모듈만 있고 **기관명·기간·시간·역할 없음**. 경력·강의 표에도 없음 | 경력 표 최상단 + 강의 표 최상단에 추가. Fintech AX 섹션 `curriculumTitle`에 "UD IMPACT · 369시간" 명시 |
| 🔴2 | **특강 2종** | "2026 핀테크 PM 트렌드와 AI 네이티브 커리어 전략", "2026 AI 시대 글로벌 핀테크 혁신 트렌드" | 없음 | 강의 표에 2행 추가, 또는 Fintech AX 섹션에 특강 카드로 |
| 🔴3 | **모두의연구소(MODULABS)를 경력으로** | Lead Instructor & Curriculum Architect (AI-Native Development), Freelance, 2025.10–2026.07, Remote | 강의 표에 2기·5기만, **경력 표에는 없음** | 경력 표에 추가. 강의 표 5기(2026.03–06) 이후 기수가 있었다면 행 추가 |
| 🟠4 | 한국정보교육원 종료일 | 2024.01–**2026.07** | 2024.01 ~ **현재** | 종료됐으면 웹을 2026.07로 |
| 🟠5 | 삼육대 KDT 기간 | 2024.01–**2025.12** (별도 경력, Full-course Lecturer) | 강의 표에 2024.01–09, 2025.01–09 두 행 | 기수별 기간(웹)이 더 정확해 보임 → LinkedIn을 맞추는 쪽 권장 |
| 🟠6 | 데이터스토리 허브 시작 | **2024.01** | **2024.02** | 하나로 통일 |
| 🟠7 | 한국생산성본부(KPC) 종료 | 2020.02–**2021.09** (1년 8개월) | 2020.02–**2020.09** | 메이커스월드(2020.09–) · 코인빗(2021.03–)과 겹치므로 LinkedIn 쪽 오기 가능성 높음 |
| 🟠8 | 럭스로보 종료 · 직함 | 2018.06–**2020.01**, "Global Business Development"(본문은 director) | 2018.06–**2019.12**, "팀장" | 종료월·직함 통일 |
| 🟠9 | 스파르타 내일배움캠프 | **2022.01–2022.02** | **2021.12–2022.03** | 통일 |
| 🟡10 | 코인빗 기술 디테일 | Django 주문 API + **Go 기반 주문 매칭 엔진** | 알림 시스템 · AWS · ISMS-P (매칭 엔진 없음) | `projects.ts` AXIA bullets에 Go 매칭 엔진 1줄 추가 |
| 🟡11 | KOSA 업무 디테일 | **2017 TOPCIT 전문 모듈 개발 연구 리드**, 정부 SW 사업 커리큘럼 개발 | "SW 전문가 자격평가시험 개발" | 시험명 TOPCIT 명시 |
| ⚪12 | 키즈노트 직함 | Backend Engineer | 연구원 / Research Engineer | 웹은 직위, LinkedIn은 직무 기준 — 의도한 차이면 유지 |
| ⚪13 | 기관 영문명 | Korea **IT** Education Institute · DatastoryHub Korea · Coinbit · Kakao kidsnote | Korea **Information** Education Institute · Datastory Hub · Axiasoft (Coinbit) · Kakao Kidsnote | 영문 표기 하나로 정리 |

### 1-2. 학력 · 자격 (`data/about.ts`)

| # | 항목 | LinkedIn | 웹 현재 | 제안 |
|---|------|----------|---------|------|
| 🔴14 | **KOSA 데이터 사이언티스트 직업훈련** | 1,200시간, 2016–2017, 수료 | 없음 | 교육 사항에 추가 (비전공 → 데이터/SW 전환의 출발점이라 스토리상 가치 큼) |
| 🟠15 | aSSIST 졸업월 · 학위명 | 2024.09–**2025.09**, "Dual Degree M.S. & M.B.A."; About엔 "SDG Management School / Executive MBA" | **2025.08**, "AI 빅데이터 MS & MBA · SDG MS (Geneva)" | 졸업월 통일. Executive MBA 표기 여부 결정 |
| ⚪16 | 방송대 종료 | 2023.09 | 2023.08 | 통일 |
| ⚪17 | 서강대 활동 | 정외과 토론학회 <말지> 회장, 중앙 토론동아리 <서방정토> 창립, 아카펠라 <The kiss> 회장 | 없음 | 웹엔 선택. 커뮤니케이션 역량 근거로 쓰려면 한 줄 |
| ⚪18 | AWS Cloud Practitioner | 2023.06 취득 · **2026.06 만료** | 없음 | 만료됐으므로 웹 추가 비권장 |
| ⚪19 | AWS SAA 유효기간 | 2027.06까지 유효, Credential ID | 취득일만 | 원하면 "~2027.06 유효" 표기 |

### 1-3. 포지셔닝 · 콘텐츠

| # | 항목 | LinkedIn | 웹 현재 | 제안 |
|---|------|----------|---------|------|
| 🔴20 | **뉴스레터 "AI Skills for Everyone"** | 2026.07 런칭, 3편 발행 (AI 사회화 / 명령 기본기 / 사고의 운전대) | 없음 | "Writing · Open Source" 섹션 신설 또는 Contact 위 카드 |
| 🔴21 | **AZTKS(알잘딱깔센) 스킬 공개** | 2026.06 공개, APPLY/EVALUATE, aztks-agent. 외부 사용자 리뷰(9일간 238 커밋, 테스트 26→75) | 없음 | 20번과 같은 섹션. "AI 네이티브 교육자"를 보여줄 가장 최신 증거 |
| 🟡22 | 헤드라인 | **AI Technical Instructor & IT Strategy Consultant** | **AI & IT Consultant** | 하나로 통일 (LinkedIn 쪽이 '강사' 정체성을 더 분명히 보여줌) |
| 🟡23 | About 3축 | AI-Native 교육 / 기술·커리어 멘토링 / AI 기반 시장분석·데이터 비즈니스 모델링 컨설팅 | 3대 강점: 트렌드 교육 / 학습자 맞춤 교육·진로 / 엔지니어링 | 웹 강점에 "전략 컨설팅" 축이 약함 → Fintech AX 섹션이 일부 담당. 3축 문구 정렬 검토 |
| 🟡24 | 추천사 출처 · 원문 | Gyedong Jeon(Senior Backend Developer, 같은 팀), 2024-04-28: "under his watch, we experienced zero service interruptions" | "— 카카오 키즈노트 팀", EN 문구는 의역("Under his stewardship…") | 원문이 영어이니 EN은 원문 그대로 인용, 출처를 "동료 시니어 백엔드 개발자"로 구체화 |
| ⚪25 | 근무 형태 | Seoul 외 2곳, On-site · Hybrid · Remote 가능 | 없음 | Contact 섹션에 "원격·하이브리드 가능" 한 줄 (선택) |

---

## 2. 웹 → LinkedIn (웹이 더 상세 — LinkedIn 보강 대상)

| # | 웹에만 있는 내용 | LinkedIn 반영 위치 제안 |
|---|------------------|-------------------------|
| 🔴A | **KDT 성과 수치**: 2기수 연속 100% 수료 (29/29, 19/19, 총 48명), 1,000시간, 만족도 응답자 100% 추천 | Samyook 경력 설명 첫 줄 + Featured에 만족도 캡처 |
| 🔴B | **정량 성과**: 키즈노트 광고 매출 2배+, 2년간 개발 장애율 0%, ML 타게팅 / 코인빗 분당 300만 건 알림, ISMS-P / DAU 300만+ | Kakao kidsnote · Coinbit 설명에 수치 추가 (지금 LinkedIn 본문엔 수치가 하나도 없음) |
| 🔴C | **기업·기관 강의 이력** (LinkedIn에 없음): 하나금융그룹 2회(2024.12 EKS·MSA / 2025.05 리눅스·MSA), KT 재직자 Kafka·Redis(2024.05, 멀티캠퍼스), KOICA 스리랑카 초청교육(2025.06), 구름 특강(2025.06), LG헬로비전 DX DATA SCHOOL 멘토링(2024.05–06), 엘리트코리아 대학 진로특강(2022), 광운대 임베디드(2018), KG IT뱅크 Django(2018) | LinkedIn **Projects** 섹션(LinkedIn도 "Add projects" 추천 중) 또는 Korea IT Education Institute / DatastoryHub 경력 하위 bullet |
| 🔴D | **연구 프로젝트**: KRIVET "중국 대학 AI 교육과 메이커 창업 정책 연구(2021)", 한밭대 SW·HW 융합 메이커 교육 방법론 연구 | Projects 또는 Publications |
| 🟡E | 메이커스월드 경력(2020.09–2021.03) 및 글로벌 서비스 기획 컨설팅(2022.11–2023.12) | Experience 항목 신설 (지금은 About 한 줄뿐) |
| 🟡F | KPC: Purdue · Plug&Play 협력, "글로벌 에듀테크센터" 신남방 사업(말레이시아·캄보디아) | KPC 설명에 추가 |
| 🟡G | 미국 인디애나 K-12 · 퍼듀대 교육/멘토링 | Luxrobo 설명에 지역·대상 구체화 |
| 🟡H | 기업 실무자 교육 만족도 그래프, 고객사 목록(하나금융·KT·LG헬로비전·KOICA·모두의연구소) | Featured |
| ⚪I | 웹 프로필 URL 자체 | Contact info · Featured에 링크 |
| ⚪J | 스킬 중복 정리: "인공지능"/"Artificial Intelligence", "finetuning"/"Fine Tuning", "AI 시스템 설계"/"AI system design" 이중 등록, Languages 섹션 비어 있음(English는 스킬로만 등록) | Skills 정리, Languages에 Korean(Native) · English 추가 |
| ⚪K | 학교명 철자 "Samyook" → 공식 "Sahmyook", aSSIST 설명의 "MBA in SGDs" → "SDGs" 오타 | LinkedIn 수정 |

---

## 3. 결정 로그 (grip-it · `docs/grip/GRIP_REGISTER.md`)

| 토픽 | 결정 | 근거 | 반영 |
|------|------|------|------|
| T1 정본 원칙 | 2026-05 이전 사실은 원본 문서·웹이 정본, 이후 변동만 LinkedIn에서 가져옴. LinkedIn은 웹에 맞춰 고침 | 충돌 5건 중 4건이 원본 문서 = 웹, LinkedIn만 상이. 원본 문서는 이미 1차 원천으로 지정됨 | `CLAUDE.md` 정본 규칙 신설 |
| T6 기간 충돌 | (T1 적용) 데이터스토리 2024.02 · KPC 2020.09 · 스파르타 2021.12~2022.03 · 럭스로보 2019.12 웹 유지. 한국정보교육원만 2026.07 종료로 변경 | 앞 4건은 원본 문서와 웹 일치. 정보교육원 종료는 2026-05 이후 변동 | `app/src/data/career.ts` 정보교육원 ko/en 기간 |
| T7 직함 기준 | (T1 적용) 럭스로보 "팀장", 키즈노트 "연구원" 웹 유지. LinkedIn을 맞춤 | 원본 문서 표기와 동일 | 웹 변경 없음 |
| T14 LinkedIn 역방향 | 붙여넣기용 초안 문서 작성 (정정 14건 · 경력 설명 보강 5건 · Projects 7건 · Featured) | 정정만 넘기면 수치 부재라는 가장 큰 차이가 남음 | `docs/linkedin-update-drafts.md` |
| T13 세부 문구 | TOPCIT 명시 · 코인빗 Go 매칭 엔진 추가 · 스킬셋 부제 "10+ 핵심 스킬 공개" · 문서·커리어 카드(profile-sum) 제거. 차트 부제 · 근무 형태는 미반영 | 사용자 선택 | `data/career.ts`, `i18n/projects.ts` AXIA, `strings.ts` publishing.skillsSub, `data/publishing.ts`, `PublishingSection.tsx` 3열 그리드, `CLAUDE.md` 발행 섹션 규칙 |
| T12 추천사 인용 | 현행 유지 (의역 문구 · "카카오 키즈노트 팀" 출처) | 사용자 결정 | 웹 변경 없음 |
| T11 About 3축 정렬 | 채널별로 다르게 둠 — LinkedIn About 3축과 웹 핵심 강점 3개를 각각 유지 | 사용자 결정 | 웹 · LinkedIn 변경 없음 |
| T10 기관 영문명 | (T1 적용) 웹 표기 유지. LinkedIn 정정 대상: Korea IT Education Institute → Korea Information Education Institute · DatastoryHub Korea → Datastory Hub · Coinbit → Axiasoft (Coinbit) · Samyook → Sahmyook | 웹 내부 표기가 이미 일관됨 | 웹 변경 없음, T14로 이관 |
| T9 교육·자격 추가 | 추가 안함 (KOSA 훈련 · SAA 유효기간 · 서강대 활동 · Cloud Practitioner 모두 웹 미반영) | 사용자 결정 | 웹 변경 없음 |
| T8 aSSIST 표기 | 약어 풀기 + Executive MBA — "AI 빅데이터 MS & Executive MBA" · "aSSIST · SDG Management School (스위스 제네바)" | "SDG MS"가 석사로 오독될 수 있음. 학위명은 사용자 확인으로 원본 문서보다 우선. 졸업월 2025.08 유지 | `data/about.ts` ko/en, `CLAUDE.md` 사용자 확인 정정 표. ⚠️ `partner-profiles/EMERITUS/`(content-map · build_bio.py · bio-content · brief)는 이전 표기 그대로 |
| T5 모두의연구소 | 경력 표에 넣지 않음. 강의 표(2기 · 5기)만 유지 | 사용자 결정 | 웹 변경 없음, `CLAUDE.md` 신규 이력 반영 규칙을 "경력 표는 건별 결정"으로 수정 |
| T4 발행 섹션 | 새 섹션 신설, 위치는 Fintech AX 위. 뉴스레터는 LinkedIn 구독 링크, 스킬셋은 "에이전틱 엔지니어링 / 문제해결 종합 스킬셋 정립 및 발행"으로 10종을 4개 그룹으로 분류(aztks-review · grill-it · notion 계열 제외) | 사용자 지정. 상위 저장소 AI-Skills-for-Everyone가 PRIVATE이라 각 스킬은 공개 개별 저장소로 링크 | `data/publishing.ts`, `PublishingSection.tsx`, `styles/publishing.css`, `strings.ts` publishing·nav, `data/nav.ts`, `App.tsx`, Fintech 배경 parchment→light, `styles/nav.css` 드로어 전환 833→1099px, `CLAUDE.md` 발행 섹션 규칙 |
| T3 UD IMPACT | 경력 표 · 강의 표 최상단 추가(특강 2종 · 프로젝트 4개는 과정 행에 포함) + Fintech AX 커리큘럼 제목에 출처 명시. 장소 SBA(서울산업진흥원) SeSAC 아카데미 영등포캠퍼스 추가(사용자 제공 — LinkedIn엔 없음) | 섹션 커리큘럼에 출처가 없어 근거로서 힘이 약했음 | `data/career.ts`, `data/teaching.ts`, `strings.ts` fintech.curriculumTitle, `CLAUDE.md` 신규 이력 반영 규칙 |
| T2 헤드라인 | LinkedIn 문구로 웹 통일 — "AI Technical Instructor & IT Strategy Consultant" / "AI 기술 강사 · IT 전략 컨설턴트". 내비는 축약형(기존 "AI & IT 컨설턴트" 유지, 2026-10-22 재결정) | 웹 강점·섹션 대부분이 교육 중심, 의뢰처(R3)에게 강사 정체성이 정확. 내비 전체 문구는 EN 448px로 모바일·태블릿 넘침 확인 | `strings.ts` brand·hero, `index.html` title, `CLAUDE.md` 헤드라인 규칙 |

## 4. 웹 내부 불일치 (덤으로 발견)

- 키즈노트 매출 차트 부제 "재직 기간(21.09 ~ 23.07)" vs 경력 표 "2021.09 ~ 2024.01". 차트 데이터가 23.07까지라서라면 "데이터 범위"로 문구를 바꾸는 게 정확합니다. (`i18n/projects.ts:247`)
