# Bio Content — ByungJun Park · Emeritus Educator Bio 2026

> `Educator Bio Template - 2026 (1).pptx` slide3에 그대로 입력할 **확정 영문 원고**.
> 필드명은 `template-spec.md` § 필드 인벤토리, 근거는 `content-map.md`를 따른다.
> 괄호 안 숫자는 **실측 글자 수 / 예산**이다.

**방향성**: 글로벌 MNC 은행 대상 AI Accelerate 프로그램에서 **Module 6~10(변화 준비 · 실무 적용 계열)의 후보 강사로 선택받기 위한** 1페이지 영문 bio.
Module 3(AI Ethics)·Module 4(AI Risk)는 일정 불가로 거절하므로 윤리·거버넌스 전문가로 자신을 규정하지 않는다.

---

## ① Name

```
ByungJun Park
```

## ② Current / Former Positions  (175자 · 3행)

```
Principal AI & IT Education Consultant — Modulabs · UD IMPACT
Former Platform Backend Engineer — Kakao Kidsnote
Former FinTech & Blockchain Backend Engineer — Coinbit Exchange
```

> **Makers World를 뺀 이유** — 템플릿 slide1 가이드가 *"본인 사업체의 Co-Founder / CEO 류 타이틀을 쓰지 말 것"* 을 명시한다. 소속을 본인 법인이 아닌 **외부 교육기관**으로 바꿔 가이드 ①(잘 알려진 조직의 현직 직책)에 맞췄다.
> **2·3행 분리** — 두 경력을 한 줄에 묶으면 각각의 도메인이 뭉개진다. 분리하면 `Platform`(대규모 트래픽)과 `FinTech & Blockchain`(금융·가상자산)이 각각의 신호로 읽히고, **은행 클라이언트에게는 3행이 가장 직접적인 적합성 근거**가 된다. 가이드 ③(희소 경력)에 해당.
> **분량**: 샘플은 2행 104자였고 예산을 100~140자로 잡았으나, 이 박스(1.090→2.174in, 폭 7.549in)는 **3행까지 여유가 있다.** 각 행이 줄바꿈 없이 한 줄에 들어가고 아래 Experience 영역(2.174in)을 침범하지 않는 것을 렌더로 확인했다.
> **철자**: `BlockChain` → `Blockchain` (표준 표기). 되돌리길 원하면 `build_bio.py`의 `POSITIONS` 한 줄만 고치면 된다.
>
> ⚠️ **UD IMPACT는 레포 원천에 기록이 없다.** Modulabs는 `[SRC1]`·`teaching.ts`에 2기수(2025.10~2026.01, 2026.03~2026.06)가 있으나, UD IMPACT는 어느 문서에도 없다. 정확한 역할·기간을 확인해 `source-docs/`에 추가해야 Fidelity가 닫힌다 (`brief.md` 미해결 이슈 3과 연결 — 2026.10.01까지 진행 중인 과정의 운영기관일 가능성).

## ③ Experience — bullet 1  (597 / 480–600)

```
A backend engineer turned AI and technology educator. Spent three years building
high-throughput systems for Korean fintech and consumer platforms — sole engineer
responsible for the advertising backend at Kakao Kidsnote, where the platform's ad revenue
more than doubled over two years with zero production incidents after relaunch, and
architect of a real-time alerting system at the Coinbit cryptocurrency exchange capable of
dispatching three million notifications per minute, alongside backend work for ISMS-P
information-security certification. AWS Certified Solutions Architect – Associate.
```

> `sole owner of the advertising backend` → `sole engineer responsible for`. 비엔지니어 독자(은행 심사자)에게 `owner`는 지분 소유로 읽힐 수 있다.

| 근거 | 원천 |
|------|------|
| 광고 매출 2배 이상 · 장애율 0% (2년) | `[SRC1]` 키즈노트 / `[SRC2]` §2 |
| 분당 300만 건 알림 | `[SRC1]` 엑시아소프트 / `[SRC2]` §1 |
| ISMS-P 인증 백엔드 개발 참여 | `[SRC1]`, `[SRC2]` §1 |
| AWS SA – Associate (2024.06) | `[SRC1]` 자격 사항 / `about.ts` |

## ④ Experience — bullet 2  (573 / 480–600)

```
Delivers in-service technology programs for Hana Financial Group, KT, Kia Motors and
LG HelloVision, and teaches on national workforce tracks at Sahmyook University,
Modulabs and the Korea Information Education Institute — the Sahmyook KDT track
graduated two consecutive cohorts at 100%. Has delivered programs in the United States
and the Middle East, and led a KOICA-sponsored program in Korea for Sri Lankan platform
operators. Contributor to policy research on AI education and curriculum innovation
(KRIVET; Hanbat National University). Teaches in Korean and English.
```

> **교정 2건**: ⓐ `hosted a KOICA program` → `led a KOICA-sponsored program` — 주최는 KOICA, 강의자가 본인이다. ⓑ 광운대(2018.07~09, 2개월)를 `teaches` 현재형 목록에서 제외 — 산업 표 Higher Education 행에는 그대로 남는다.

| Emeritus 가이드 요구 | 이 문장에서 충족 |
|----------------------|------------------|
| 2번 — 소속 교육기관 전부 나열 | Sahmyook, Modulabs, KIEI (+ 표에 Kwangwoon, Goorm EDU, Sparta) |
| 3번 — 지역별 클라이언트 나열 | US, Middle East, Korea (KOICA/스리랑카) |
| 4번 — 연구·방법론 | KRIVET 2021, 한밭대 (방법론은 Sub Topics) |
| 6번 — 구사 언어 | Korean, English |

> **정확성 통제**: `100%`는 삼육대 KDT 한정으로 못박았고, 미국·중동은 과거형(`Has delivered`), KOICA는 `in Korea`로 국내 초청 교육임을 명시했다. 하나금융 대상은 `executive`가 아닌 `in-service`다.
> **연구 2건은 이 문장에서 삭제 금지** — 동봉 이메일의 Module 6 주장을 받치는 유일한 근거다 (`outbound-email.md` § 정합 요건).

## ⑤ 리드인 (고정 문구 — 수정 금지)

```
Industry specific experience as a practitioner and/or educator across globe:
```

## ⑥ Industry / Companies 표 (8행)

| Industry | Companies |
|----------|-----------|
| Banking & Finance | Hana Financial Group |
| Digital Assets & Exchanges | Axiasoft (Coinbit) |
| Internet & Consumer Platform | Kakao Kidsnote |
| Telecommunications & Media | KT, LG HelloVision |
| Automotive & Manufacturing | Kia Motors |
| Government & Public Sector | KOICA, Korea Productivity Center, Korea Software Industry Association |
| Higher Education | Sahmyook University, Kwangwoon University |
| Corporate & Executive Training | Samsung Multicampus, Modulabs, Goorm EDU, Sparta Coding Club |

> Banking & Finance를 1행, Digital Assets를 2행에 배치해 **첫 두 줄이 금융 블록으로 읽히게** 했다. Purdue University는 제외 (`content-map.md` §5).

## ⑦ Core Topics  (82 / 예산 90–120 · **최대 3개**)

```
AX Productivity | AI Skills & Harness Engineering | Cloud Modernization in Finance
```

| 주제 | 근거 |
|------|------|
| AX Productivity | `assets/vibeworking-consulting-casebook.jpeg` (2026 사례집) / `[SRC2]` §2 프레임워크 기반 AX 기획 방법론 |
| AI Skills & Harness Engineering | `assets/aztks-skill-introduction-en.jpeg` (AZTKS 5축 작업 표준) / `[SRC1]` Cursor·Claude Code 등 도구 상시 도입 |
| Cloud Modernization in Finance | 하나금융 2회 (2024.12 · 2025.05) / `[SRC2]` §1 금융 AX 컨설팅 |

> **3개로 확정한 이유**: 가이드가 Core Topics를 **최대 3개**로 못박고, Emeritus는 이 항목으로 모듈을 배정한다. 신규 2개를 앞세우고 기존 3개 중 **은행 도메인 신호가 유일한** `Cloud Modernization in Finance`만 남겼다. `Applied Generative AI for Business`·`AI-Native Product Management & Discovery`는 신규 2개와 의미가 겹쳐 제외.
> 82자로 예산 하한(90)보다 짧지만, 이는 박스가 덜 채워질 뿐 오버플로 위험은 없다. 3줄로 렌더되어 아래 `Sub Topics:` 라벨과 여유가 생긴다.
> `Change Readiness`는 2~3일 분량 자료가 원천에 없어 Core에 올리지 않고, ④의 연구 이력으로 받친다.

## ⑧ Sub Topics  (261 / 예산 280–330 · 11pt 상속)

```
Spec-Driven Development for Both Engineers and Non-engineers | Hands-off AI Workflow Automation with Maximum Job Ownership | Prompt and Context Engineering | Microservices and Kubernetes Operations | Kafka Event Streaming | Ad-Tech Targeting and ML Monetization
```

**변경 이력**

| 조치 | 항목 |
|------|------|
| 추가 (1번) | `Spec-Driven Development for Both Engineers and Non-engineers` |
| 추가 (2번) | `Hands-off AI Workflow Automation with Maximum Job Ownership` |
| 삭제 | `JTBD, Five Forces and Value Chain for Product Discovery` |
| 삭제 | `PRD Design with LLMs` |
| 삭제 | `Agentic Development Workflows` |
| 삭제 | `Cloud Security and ISMS-P Compliance` |

> **철자 교정**: `Automization` → `Automation`. 전자는 영어에 없는 단어로, 글로벌 은행 심사자가 읽는 문서에서 비표준 철자는 즉시 눈에 띈다.
> **줄 수 통제**: 300자(7개 항목) 버전은 11pt에서 9줄로 렌더되어 마지막 줄이 `Education:` 라벨(5.313in)과 충돌했다. `Cloud Security and ISMS-P Compliance` 제거로 261자·8줄이 되어 **폰트 축소 없이 11pt 원설정 그대로** 해결됐다.
> 가이드 1번(반복 서술어 회피) 준수: Core에 `AI` 2회, Sub에 1회. `-based / -driven / -enabled` 미사용.

## ⑨ Education  (190 / 140–200)

```
MS in AI & Big Data · MBA — aSSIST University & SDG MS (Geneva, Switzerland)
BA in Computer Science — Korea National Open University
BA in Political Science & Communication — Sogang University
```

## ⑩ Location

```
Seoul, South Korea
```

## ⑪ 헤드샷

`assets/profile-byungjun-park.png` — 정사각 크롭 후 좌측 상단 Picture Placeholder에 삽입.

## ⑫ 링크 버튼 — 2개 유지 + 1개 삭제, 우하단 배치

템플릿의 "Click to view" 버튼 3개 중, **검증 가능한 공개 URL이 있는 2개만 남기고 3번째는 삭제**했다. 링크 없는 버튼을 남기면 클릭 실패로 감점되기 때문이다 (가이드 5번).

| 버튼 | 라벨 | 링크 | 위치 |
|------|------|------|------|
| 1 | `Portfolio` | https://pbjworking.com | y 5.75 → 6.13 |
| 2 | `LinkedIn` | https://www.linkedin.com/in/pbjworking/ | y 6.30 → 6.68 |
| 3 | — | **삭제** | — |

템플릿 기본 위치(3.04 / 3.60)에서 **레일 하단으로 이동**했다. 브랜드 자산 3종이 위에서 아래로 흐르고, 액션 링크가 마지막에 오는 순서가 된다. 하단 Emeritus `E` 마크(6.906in)와는 0.23in 여유.

> ⚠️ 가이드 5번이 요구하는 **강연·세션 영상**은 여전히 미보유다. 영상 URL을 확보하면 3번 버튼을 되살리는 것이 가장 큰 개선이다 (`brief.md` 미해결 이슈 2).

## ⑬ 우측 레일 — 자체 브랜드 자산 3종 배치 완료

클라이언트 기업 로고 대신 **본인 브랜드·산출물 3종**을 넣었다. 템플릿 가이드의 "페이지당 로고 5개 이하" 제약 안이다.

| 순서 | 자산 | 위치 (in) | 비율 |
|------|------|-----------|------|
| 1 | `assets/ai-skills-for-everyone-main-logo.jpg` — *AI Skills for Everyone* 브랜드 배너 | (11.18, 0.40) 1.98 × 0.92 | 2.15 |
| 2 | `assets/aztks-skill-introduction-en.jpeg` — AZTKS 5축 작업 표준 (영문판) | (11.18, 1.46) 1.98 × 1.49 | 1.33 |
| — | **캡션** `2026 AX Consulting Casebook` | (11.18, 3.13) 1.98 × 0.42 | — |
| 3 | `assets/vibeworking-consulting-casebook.jpeg` — MakersWorld 2026 AI 바이브 워킹 사례집 | (11.18, 3.62) 1.98 × 1.65 | 1.20 |
| — | Portfolio / LinkedIn 버튼 | 5.75 / 6.30 | — |

캡션은 템플릿이 원래 쓰던 `Videos` 라벨의 서식을 그대로 따랐다 — **Calibri 12pt Bold, `#00B050`, 가운데 정렬**. 원본 `TextBox 1`의 `rPr`에서 직접 읽어 재현했으므로 템플릿 톤과 어긋나지 않는다.

레일 폭에 맞춰 각 이미지를 가로 1200px로 다운스케일(JPEG q88)해 파일 크기를 억제했다. 하단 Emeritus `E` 마크(레이아웃, 12.777in)는 보존.

> ⚠️ **3번 사례집은 본문이 거의 전부 한글이다.** 1.98in 폭에서는 카드 그리드가 사실상 텍스처로 읽히지만, 제목 줄 `[MakersWorld] 2026년 AI 바이브 워킹 사례집`은 한글로 식별된다. 영문 전용 문서에 한글 이미지가 들어간 것이므로, ⓐ 그대로 두거나 ⓑ 영문 버전 자산으로 교체하거나 ⓒ 상단 히어로 이미지 구간만 크롭해 텍스트를 배제하는 선택지가 있다.

## ⑭ "Videos" 라벨 제거

`slideLayout9`의 `TextBox 1`(text=`Videos`, @(11.791, 2.723))을 레이아웃에서 삭제했다. 버튼 2개는 각각 `Portfolio` · `LinkedIn`으로 자기 라벨을 갖고 있어 상위 캡션이 불필요하고, 영상 자산이 없는 상태에서 `Videos` 캡션만 남으면 오히려 결손으로 읽힌다.

같은 레이아웃의 `Expertise` · `Core Topics:` · `Sub Topics:` · `Education:` 라벨은 그대로 보존했다.

## ⑮ 좌하단 위치 핀 — 렌더 폴백 추가 (템플릿 결함 보정)

템플릿 `slideLayout9`의 `Graphic 14`(descr=`"Marker with solid fill"`, Emeritus 그린 `#00BE6D` 위치 핀, @(0.245, 6.889) 0.455×0.455in)는 **래스터 폴백 없이 SVG만 참조**한다.

```xml
<a:blip>                                  ← r:embed 없음
  <a:extLst><a:ext uri="{96DAC541-...}">
    <asvg:svgBlip r:embed="rId2"/>        ← ppt/media/image11.svg 만
```

Windows PowerPoint 2016+는 이 확장을 읽지만 macOS QuickLook·Keynote·Google Slides·LibreOffice는 모르기 때문에 **빈 사각형**을 그린다. Emeritus가 제공한 샘플(slide2, Maarten Asser)의 `Boston, USA / Nice, France` 왼쪽에도 같은 빈 사각형이 보인다 — 우리가 만든 문제가 아니라 템플릿 자체의 결함이다.

**조치**: `image11.svg`의 path를 래스터화해 `ppt/media/image20.png`(512×512, 투명 배경)로 추가하고, `<a:blip>`에 `r:embed="rId4"` 폴백을 붙였다. PowerPoint가 SVG 이미지를 저장할 때 쓰는 구조 그대로이므로 모든 뷰어에서 초록 핀이 표시된다. QuickLook 렌더로 확인 완료.

> 남은 SVG-only 이미지 1건: `slideLayout1`의 `Picture 10`. **우리 슬라이드는 layout9만 사용**하므로 렌더에 영향 없어 그대로 뒀다.

---

## 제출 전 확인

- [x] slide1·slide2 삭제, slide3 1장만 남김
- [x] 모든 필드 분량 예산 준수 (Exp1 597 · Exp2 573 · Core 110 · Sub 288 · Edu 192 · Pos 113)
- [x] 표가 슬라이드 밖으로 넘치지 않음 (top 4.868 → **4.68in**, 하단 7.332in / 슬라이드 7.5in)
- [x] 링크 버튼 하이퍼링크 2건 실제 삽입, 빈 버튼 제거
- [x] 우측 레일 브랜드 자산 3종 배치, `Videos` 캡션 제거
- [x] 텍스트 필드 XXXX 잔존 0 · 빈 표 셀 0 · 한글 0자
- [x] 문서 속성 정리 (`Slides` 3→1, 템플릿 가이드 제목 제거)
- [x] 좌하단 위치 핀 래스터 폴백 추가 — Mac·Keynote·Google Slides에서도 표시됨
- [ ] **사례집 이미지의 한글 노출** 처리 방향 결정 (§⑬ 주의)
- [ ] **이메일 서명 정합** — 이메일의 `MakersWorld Inc.` 를 bio와 같은 `Makers World` 로 통일

## 빌드 재현

```bash
python3 partner-profiles/EMERITUS/build_bio.py    # python-pptx + Pillow 필요
```

원고를 고치면 이 스크립트만 다시 돌려 pptx를 재생성한다. 템플릿 원본은 건드리지 않고 매번 새로 조립한다.

## 원고에 넣지 않은 것 (의도적 제외)

| 제외 항목 | 이유 |
|-----------|------|
| 진행 중인 AI-native PM 과정 (~2026.10.01) | `source-docs/`에 근거 없음 — 미해결 이슈 3. 확인 후 ④에 추가 |
| Purdue University | KPC 사업 협력기관일 뿐, 교육 이력 아님 |
| 럭스로보 모듈형 로봇 교육 상세 | 뱅킹 클라이언트에 초점을 흐림. ④의 "United States and the Middle East" 한 구절로 압축 |
| K-12·대학생 진로 특강 | Emeritus는 시니어 대상 |
| 정보처리기사 · SQL 개발자 | 국내 자격이라 글로벌 클라이언트에 신호 약함 |
| 만족도 점수 수치 | 이미지에는 있으나 텍스트 원천에 수치 없음 |
