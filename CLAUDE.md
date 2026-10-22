# profile-vibe — 작업 규칙

## 프로필 사실 정본 규칙

이력 사실(기간·직함·기관명·수치)이 출처끼리 어긋나면 아래 순서로 판정한다. (결정 근거: `docs/grip/GRIP_REGISTER.md` T1)

1. **2026-05 이전 사실** — `source-docs/01-ai-it-profile-original-doc.md`와 웹 데이터(`app/src/data`, `app/src/i18n`)가 정본이다. LinkedIn 값이 달라도 웹을 바꾸지 않는다.
2. **2026-05 이후 변동**(신규 과정·종료일 등) — 원본 문서에 없으므로 LinkedIn 값을 가져와 웹에 반영한다.
3. **동기화 방향** — 웹이 최종 정본이다. LinkedIn은 웹 값에 맞춰 고친다.
4. 사실을 바꿀 때는 `ko`·`en` 값을 같은 커밋에서 함께 바꾼다.
5. `partner-profiles/`의 산출물도 같은 정본을 따른다.

**사용자 확인 정정** — 아래 값은 원본 문서보다 우선한다.

| 항목 | 정정값 | 근거 |
|------|--------|------|
| aSSIST 학위 | AI 빅데이터 MS & **Executive MBA** · aSSIST · SDG Management School (스위스 제네바) | T8 |

## 헤드라인 규칙

(결정 근거: `docs/grip/GRIP_REGISTER.md` T2)

- 공식 헤드라인: **AI Technical Instructor & IT Strategy Consultant** / 한글 **AI 기술 강사 · IT 전략 컨설턴트**. LinkedIn 헤드라인과 같은 문구를 유지한다.
- 히어로 eyebrow · 탭 제목(`brand.documentTitle`, `index.html`) · 푸터(`brand.nameFooter`)는 전체 문구를 쓴다.
- 상단 내비게이션(`brand.name`)은 `nowrap`이라 축약형만 쓴다: `박병준 · AI & IT 컨설턴트` / `Byungjun Park · AI & IT Consultant` (기존 문구 유지 — 2026-10-22 사용자 재결정).

## 신규 이력 반영 규칙

(결정 근거: `docs/grip/GRIP_REGISTER.md` T3)

- 새 강의·교육 이력은 **강의 표**(`data/teaching.ts`) 최상단에 넣는다. 관련 섹션(예: Fintech AX)이 있으면 그 섹션 제목에 출처(운영기관 · 장소 · 시간)를 붙인다.
- **경력 표**(`data/career.ts`) 추가 여부는 건별로 사용자가 정한다. 현재 경력 표에 넣은 건: UD IMPACT(T3). 강의 표에만 두는 건: 모두의연구소(T5).
- 운영기관(계약 주체)과 교육 장소(발주처 · 캠퍼스)를 모두 적는다. 예: `UD IMPACT` · `SBA(서울산업진흥원) SeSAC 아카데미 영등포캠퍼스`.
- 날짜를 모르는 하위 활동(특강 등)은 별도 행으로 만들지 않고 상위 과정 행 안에 적는다.

## 발행(Publishing) 섹션 규칙

(결정 근거: `docs/grip/GRIP_REGISTER.md` T4)

- 위치: 현업 경력 다음, Fintech AX 섹션 바로 위 (`#publishing`). 내비 라벨 `발행` / `Publishing`.
- 데이터: `app/src/data/publishing.ts` — 뉴스레터 회차는 오래된 순(위→아래 오름차순)으로 두고 새 회차는 배열 끝에 추가, 구독 링크는 `NEWSLETTER_SUBSCRIBE_URL`.
- 뉴스레터 카드 배너(회차 타임라인 왼쪽, 834px 미만에서는 위로 쌓임): `assets/ai-skills-for-everyone-banner.jpg` (1840×855, 원본 PNG를 JPEG 82%로 압축). 배너는 구독 링크로 연결된다.
- 스킬셋 제목: "에이전틱 엔지니어링 / 문제해결 종합 스킬셋 정립 및 발행". 원천 목록은 `wild-mental/AI-Skills-for-Everyone/02_wild-mental-skills`.
- **제외 스킬**: `aztks-review`, `grill-it`, `notion-*` 계열, `profile-sum`(T13 — 문서·커리어 카드 제거). 나머지는 종류별 3그룹(작업 기준·문제해결 / 프로덕트 기획·지표 / 개발 협업·운영 하네스)에 넣고, 부제는 "10+ 핵심 스킬 공개"로 표기하며, 각 스킬은 공개 개별 저장소(`github.com/wild-mental/<repo>`)로 링크한다.
- 섹션 배경 톤은 위아래 섹션과 번갈아(light ↔ parchment) 유지한다.
- 상단 내비 링크를 추가하면 EN 폭을 다시 재고, `styles/nav.css`의 드로어 전환 기준(현재 1099px)을 함께 조정한다.
