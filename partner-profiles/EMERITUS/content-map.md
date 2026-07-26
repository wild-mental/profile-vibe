# Content Map — 템플릿 필드 ↔ 보유 자산

> `template-spec.md`의 각 필드에 어떤 이력 자산을 넣을지 매핑하고, 영문 초안 후보를 둔다.
> **모든 항목에 원천 근거를 명시한다.** 근거 없는 항목은 `⛔ 원천 없음`으로 표기하고 최종본에 넣지 않는다 (profile-sum Fidelity).
> **모든 글자 수는 실측값이다** (추정치 아님). 예산은 `template-spec.md` § 필드 인벤토리.

원천 약칭:
`[SRC1]` = `source-docs/01-ai-it-profile-original-doc.md`
`[SRC2]` = `source-docs/02-fintech-specifications-update.md`
`[EN]` = `app/src/data/*.ts`, `app/src/i18n/strings.ts` (기확정 영문 표기)

## 고유명사 단일 소스 규칙

`sources.md`가 정한 대로 **표·목록에서는 `career.ts` / `teaching.ts` 표기를 그대로 따른다.**

| 올바른 표기 | 쓰지 말 것 |
|-------------|-----------|
| `Axiasoft (Coinbit)` | ~~Coinbit (Axiasoft)~~ |
| `Makers World` | ~~MakersWorld~~ |
| `Goorm EDU` | ~~Goorm~~ |
| `Kakao Kidsnote` | ~~Kidsnote~~ |
| `Korea Information Education Institute` | ~~KIEI~~ |

**예외**: Experience 본문(산문)에서는 거래소를 `Coinbit` 단독으로 불러도 된다. 법인명 병기가 산문 가독성을 해치기 때문이며, 표에서는 반드시 `Axiasoft (Coinbit)`로 쓴다.

---

## 1. Name

```
ByungJun Park
```

`[EN]` `strings.ts` 는 `Byungjun Park` 표기. 이메일 서명은 `ByungJun Park`.
→ **서명과 일치하는 `ByungJun Park` 사용.** 수신자가 이메일 서명과 대조할 문서이므로 서명 표기를 우선한다.

## 2. Current/Former Positions — 예산 100~140자

`⛔ 결정 필요` — `brief.md` 미해결 이슈 1 (본인 사업체 CEO/Co-Founder 류 타이틀 지양 가이드)

| 후보 | 문안 | 실측 | 판단 |
|------|------|------|------|
| **A** | ① `AI & IT Education Consultant — Korea Information Education Institute`<br>② `Former Backend Engineer — Kakao Kidsnote · Axiasoft (Coinbit) Exchange` | **138** ✓ | 가이드 ①(기관 현직) + ③(희소 경력)에 부합. 다만 이메일 서명 브랜드가 사라진다 |
| B | ① `Principal AI & IT Education Consultant, Makers World Inc.`<br>② `Former Backend Engineer — Kakao Kidsnote · Coinbit Exchange` | **116** ✓ | 서명과 완전 일치하나 ①이 가이드가 지목한 "본인 사업체 타이틀" 패턴에 걸릴 소지 |
| **C (권장)** | ① `Principal AI & IT Education Consultant — Makers World`<br>② `Former Backend Engineer — Kakao Kidsnote · Coinbit Exchange` | **112** ✓ | 서명 브랜드 유지 + "Inc." 제거로 법인 대표 인상 완화 + 가이드 ③의 비대칭 신호(Kakao·거래소) 확보 |

> **C 권장 근거**: 은행 클라이언트 앞에서 가장 강한 차별 신호는 "카카오 광고 백엔드 + 가상자산 거래소 백엔드를 직접 짠 사람"이다. 이 신호를 버리면서까지 교육기관 소속을 두 줄에 쓸 이유가 없다. 후보 A는 ①②가 사실상 같은 고용주 계열이라 정보량도 낮다.
> 다만 삼육대 KDT 학점 연계 이력(가이드 ② 대학 교원)은 강한 자산이므로, C 채택 시 **Experience bullet 2에서 반드시 언급**한다.

근거: `[SRC1]` 현업 경력 표 (한국정보교육원 2024.01~현재, 키즈노트 2021.09~2024.01, 엑시아소프트 2021.03~2021.09), `[EN]` `career.ts`

## 3. Experience — bullet 1 (정체성 · 현업 트랙 레코드) — 예산 480~600자

**담아야 할 것**: 엔지니어 → 교육자 전환 서사 + 검증 가능한 수치 + 금융 도메인 접점

| 소재 | 수치 | 근거 |
|------|------|------|
| 카카오 키즈노트 광고 시스템 **단독 책임개발** 2년 | 광고 매출 **2배 이상 성장**, 런칭 후 2년간 **개발 장애율 0%** | `[SRC1]`, `[SRC2]` |
| 코인빗 거래소 실시간 알림 시스템 | **분당 300만 건** 발송 처리 | `[SRC1]`, `[SRC2]` |
| ISMS-P 인증 백엔드 개발 참여 | — | `[SRC1]`, `[SRC2]` |
| ML 기반 광고 송출·타게팅 로직 고도화 | — | `[SRC1]`, `[SRC2]` |

**초안 (실측 534자 ✓)**

> A backend engineer turned AI and technology educator. Spent three years building high-throughput systems for Korean fintech and consumer platforms — sole owner of the advertising backend at Kakao Kidsnote, where the platform's ad revenue more than doubled over two years with zero production incidents after relaunch, and architect of a real-time alerting system at the Coinbit cryptocurrency exchange capable of dispatching three million notifications per minute, alongside backend work for ISMS-P information-security certification.

## 4. Experience — bullet 2 (교육자 트랙 레코드 · 기관 소속 · 언어) — 예산 480~600자

**담아야 할 것**: 교육기관 나열(가이드 2) + 클라이언트 지역(가이드 3) + 연구 이력(이메일 정합) + 언어(가이드 6)

| 소재 | 정확한 사실 | 근거 |
|------|-------------|------|
| 하나금융그룹 현직자 교육 2회 | 2024.12 (MSA·EKS), 2025.05 (리눅스 심화·MSA 운영). 대상은 **엔지니어 및 부서장** — `executive` 아님 | `[SRC1]`, `[SRC2]` |
| KT 재직자 교육 | 2024.05 Kafka·Redis. 운영기관은 삼성 멀티캠퍼스 | `[SRC1]` |
| 기아자동차 노사공동교육 | 2020.06~2021.12 | `[SRC1]` |
| LG헬로비전 DX DATA SCHOOL 멘토링 | 2024.05~06 | `[SRC1]` |
| KDT **2기수 연속 100% 수료** | **삼육대 KDT 한정** (2024, 2025). 다른 기관으로 확대 해석 금지 | `[SRC1]` |
| 소속 교육기관 | 삼육대(9개월 학점연계), 광운대(2018.07~09, 2개월), 모두의연구소(3~4개월), 한국정보교육원, 구름EDU, 스파르타, KG IT뱅크. **`year-long`은 삼육대에도 부정확** | `[SRC1]`, `[EN]` `teaching.ts` |
| KOICA 스리랑카 프로그램 | **국내 초청 교육** — 한국에서 진행. `facilitated in South Asia` 표현 금지 | `[SRC1]` |
| 미국·중동 딜리버리 | 럭스로보 모듈형 로봇 교육 2018.09~2019.12 (과거형으로 표기) | `[SRC1]` |
| 참여 연구 2건 | 한국직업능력연구원(KRIVET) 「중국의 대학 인공지능 교육과 메이커 창업 정책 연구」(2021) / 한밭대 산학협력단 「대학주도형 창의융합 미래인재 양성 교육과정 혁신 연구」 | `[SRC1]` |
| 언어 | Korean (native), English | 딜리버리 이력에서 도출 |

**초안 (실측 588자 ✓)**

> Delivers in-service technology programs for Hana Financial Group, KT, Kia Motors and LG HelloVision, and teaches on national workforce tracks at Sahmyook University, Kwangwoon University, Modulabs and the Korea Information Education Institute — the Sahmyook KDT track graduated two consecutive cohorts at 100%. Has delivered programs in the United States and the Middle East, and hosted a KOICA program in Korea for Sri Lankan platform operators. Contributor to policy research on AI education and curriculum innovation (KRIVET; Hanbat National University). Teaches in Korean and English.

> **연구 2건은 반드시 이 문장에 남는다.** 이메일이 "Module 6 (Change Readiness) … academic research projects"를 근거로 삼기 때문이며, 여기서 빠지면 이메일 주장이 무근거가 된다 (`outbound-email.md` § 정합 요건).
> JTBD·Five Forces·Value Chain 방법론은 §7 Sub Topics에 이미 있으므로 여기서 중복하지 않는다.

## 5. Industry / Companies 표 (최대 8행)

| Industry | Companies | 근거 |
|----------|-----------|------|
| Banking & Finance | Hana Financial Group | `[SRC1]` 2024.12 · 2025.05 현직자 교육 2회 |
| Digital Assets & Exchanges | Axiasoft (Coinbit) | `[SRC1]` 2021.03~2021.09 재직 |
| Internet & Consumer Platform | Kakao Kidsnote | `[SRC1]` 2021.09~2024.01 재직 |
| Telecommunications & Media | KT, LG HelloVision | `[SRC1]` 2024.05 KT 재직자 교육 / 2024.05~06 LG헬로비전 멘토링 |
| Automotive & Manufacturing | Kia Motors | `[SRC1]` 2020.06~2021.12 노사공동교육 |
| Government & Public Sector | KOICA, Korea Productivity Center, Korea Software Industry Association | `[SRC1]` |
| Higher Education | Sahmyook University, Kwangwoon University | `[SRC1]` 강의 이력 표 |
| Corporate & Executive Training | Samsung Multicampus, Modulabs, Goorm EDU, Sparta Coding Club | `[SRC1]` |

> **Purdue University 제외.** `[SRC1]`에서 Purdue는 ⓐ 한국생산성본부 "SW 고성장클럽 200" 사업의 **협력기관** 나열, ⓑ 자기서술 1줄에만 등장하고 **강의 이력 17건·현업 경력 8건 표 어디에도 없다.** Higher Education 행에 삼육대·광운대와 나란히 두면 클라이언트가 **Purdue 교원 이력**으로 읽는다. faculty를 선별하는 경쟁 문서에서 이것이 단일 최대 리스크다.
> 필요하면 Experience 본문에 `through a Korea Productivity Center program in partnership with Purdue University and Plug and Play` 형태로만 — 협력 사실 그대로 쓴다.

**표기 규칙**: 브랜드명만, 콤마 구분, 연도·역할 미기재 (`template-spec.md` 참조).
**Banking & Finance를 1행에 배치** — 클라이언트가 은행이므로 첫 줄이 곧 적합성 신호다. Hana 한 곳뿐이라 얇으므로 Digital Assets 행을 바로 아래 붙여 금융 블록이 2행으로 읽히게 한다.

## 6. Core Topics (최대 3개 · 예산 90~120자)

**선정 기준**: Emeritus Module 6~10을 겨냥 + **각각 2~3일 분량 콘텐츠를 실제로 보유**(가이드의 Core 정의)

| # | 주제 | 2~3일 분량 실보유 근거 |
|---|------|------------------------|
| 1 | Applied Generative AI for Business | KOICA 8일 과정 중 **3~5일차 = AI 산업·기술 트렌드 및 생성형 AI 활용 워크샵** `[SRC1]` / 삼육대 KDT "AI 활용" 과정 2025.01~09 |
| 2 | AI-Native Product Management & Discovery | 모두의연구소 AI 활용 서비스 기획/개발 전문가 과정 **2기·5기** (각 3~4개월) `[SRC1]` / JTBD·Five Forces·Value Chain의 LLM 워크플로우 이식 방법론 `[SRC2]` |
| 3 | Cloud-Native Modernization in Finance | 하나금융 2회(다일 과정) `[SRC1]` / 금융 인프라 고도화 및 AX 컨설팅 `[SRC2]` §1 / 삼육대 KDT 클라우드 네이티브 과정 |

**초안 (실측 117자 ✓ · "AI" 2회)**

> `Applied Generative AI for Business | AI-Native Product Management & Discovery | Cloud-Native Modernization in Finance`

> **`Change Readiness`를 Core에서 뺀 이유**: `brief.md` 미해결 이슈 4가 확인한 대로 보유 연구는 *조직 변화관리*가 아니라 *인력·교육과정 전환* 연구다. Core 정의가 "2~3일 분량 자료 보유"인데 change-management 커리큘럼은 원천에 없다. 이메일에서 Module 6 관심을 표명하는 것과, bio의 Core에 없는 주제를 올리는 것은 다른 문제다 — **Experience bullet 2의 연구 2건이 그 주장을 받친다.**
> **`AI Transformation in Regulated Industries`를 뺀 이유**: 근거로 삼으려던 하나금융 2회는 `[SRC1]`상 **리눅스 심화·MSA·EKS** 과정이다. AI 전환 교육이 아니므로 제목을 실제 내용(클라우드 네이티브 현대화)에 맞췄다.

## 7. Sub Topics (예산 280~330자 · `|` 구분 · 반복 서술어 금지)

후보 풀 (근거 있는 것만):

Prompt and Context Engineering `[SRC2]` · JTBD / Five Forces / Value Chain for Product Discovery `[SRC2]` · PRD Design with LLMs `[SRC2]` · Agentic Development Workflows `[SRC1]` (Cursor·Claude Code 등 도구 상시 도입) · Microservices and Kubernetes (EKS) Operations `[SRC1]` · Kafka Event Streaming & Data Pipelines `[SRC1]` · GitOps and Zero-Downtime Delivery `[SRC1]` · Observability with Prometheus & Grafana `[SRC1]` · Cloud Security and ISMS-P Compliance `[SRC1]` · Ad-Tech Targeting and ML Monetization `[SRC1]` · Linux Systems and Network Fundamentals `[SRC1]` · Technical Capability Frameworks `[SRC1]` (SW 전문가 자격평가시험 개발)

**초안 (실측 288자 ✓ · "AI" 0회)**

> `Prompt and Context Engineering | JTBD, Five Forces and Value Chain for Product Discovery | PRD Design with LLMs | Agentic Development Workflows | Microservices and Kubernetes Operations | Kafka Event Streaming | Cloud Security and ISMS-P Compliance | Ad-Tech Targeting and ML Monetization`

> **반복 서술어 점검 (가이드 1번 요구)**: Core에 "AI" 2회 → Sub에서는 **0회**로 억제했다. `-based / -driven / -enabled` 접미 표현 전면 금지.
> 여유 42자가 남으므로 `| GitOps and Zero-Downtime Delivery`(34자) 추가 가능 — 최종 원고에서 판단.

## 8. Education (2~3 bullet · 예산 140~200자)

**초안 (실측 190자 ✓)**

```
MS in AI & Big Data · MBA — aSSIST University & SDG MS (Geneva, Switzerland)
BA in Computer Science — Korea National Open University
BA in Political Science & Communication — Sogang University
```

근거: `[EN]` `about.ts` EDUCATION

자격증 3종(AWS SA Associate 2024.06, 정보처리기사, SQL 개발자)은 Education 박스에 자리가 없다.
→ **AWS Certified Solutions Architect – Associate** 만 Sub Topics 말미 또는 Experience bullet 1에 흡수. 나머지 2종은 국내 자격이라 글로벌 클라이언트에 신호가 약하므로 생략.

## 9. Location

```
Seoul, South Korea
```

(18자 ✓ · 예산 ≤35자)

## 10. 헤드샷

`assets/profile-byungjun-park.png` (4.7MB) → 정사각 크롭 후 삽입. 샘플은 흑백 정사각.

## 11. Videos ×3

`⛔ 자산 미확인` — `brief.md` 미해결 이슈 2.

확정 전까지 버튼 3개는 **손대지 않고 그대로 둔다**. 링크 없이 "Click to view"만 남기면 클릭 실패로 감점되므로, 최종 제출 직전 ⓐ 실제 링크 삽입 ⓑ 버튼 삭제 중 하나를 반드시 선택한다.

대체 링크 후보: `pbjworking.com` / `linkedin.com/in/pbjworking`

## 12. 로고 (≤5)

우선순위: **Kakao (Kidsnote)** → **Hana Financial Group** → **KT** → **KOICA** → **aSSIST**
금융 클라이언트 관점에서 Hana·Kakao가 가장 강한 신호. 상표 사용은 교육 수행 사실에 근거한 범위로 한정.

## 13. 우측 레일 — 출판물 자리

샘플은 저서 표지를 넣었으나 `⛔ 저서 없음`.
대체 후보: `assets/enterprise-it-training-satisfaction_en.png` (기업 교육 만족도) 또는 `assets/linkedin-recommendation-kakao-kidsnote.png` (동료 추천).
→ **만족도 지표 이미지 권장.** 교육자 선택 문서에서 만족도는 저서만큼 강한 신호다.

---

## 수치 화이트리스트

아래 수치 외에는 bio에 등장시키지 않는다.

| 수치 | 정확한 표현 | 근거 |
|------|-------------|------|
| 광고 매출 2배 이상 | "more than doubled over two years" | `[SRC1]`, `[SRC2]` |
| 장애율 0% | "zero production incidents after relaunch (2 years)" | `[SRC1]` |
| 분당 300만 건 | "three million notifications per minute" | `[SRC1]`, `[SRC2]` |
| DAU 300만 이상 | "3M+ daily active users" — 코인거래소 기준 | `[SRC1]` |
| KDT 100% 수료 | "the Sahmyook KDT track graduated two consecutive cohorts at 100%" — **삼육대 한정** | `[SRC1]` |

**금지**: 강의 시간 총합, 누적 수강생 수, 만족도 점수(이미지에는 있으나 텍스트 원천에 수치 없음), 자문 기업 수 — 전부 원천에 없다.

## 표현 금지 목록 (원천 대조 결과)

| 금지 표현 | 이유 |
|-----------|------|
| `facilitated in South Asia` | KOICA 스리랑카 과정은 **국내 초청** 교육 |
| `year-long programs at [4개 기관]` | 광운대 2개월, 모두의연구소 3~4개월, 삼육대 9개월 |
| `executive programs at Hana Financial Group` | 대상은 엔지니어·부서장 (`[SRC2]`) |
| `100% graduation` (기관 무한정) | 삼육대 KDT 2기수 한정 |
| `Purdue University` (교육 이력 맥락) | KPC 사업 협력기관일 뿐 |
| `Facilitates in the US / Middle East` (현재형) | 2018~2019 럭스로보 이력 — 과거형만 |
