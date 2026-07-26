# Emeritus Educator Bio Template — 포맷 스펙

> 원본: `Educator Bio Template - 2026 (1).pptx`
> 이 문서는 원본 pptx의 XML을 직접 파싱해 얻은 **역공학 결과**다. 추정이 아니라 파일에 있는 값이다.

## 파일 구조

| 슬라이드 | 제목 | 용도 |
|----------|------|------|
| slide1 | Guidelines for bio template – content and layout | 작성 가이드 (제출본에서 **삭제**) |
| slide2 | — | 완성 샘플 · Maarten Asser (제출본에서 **삭제**) |
| **slide3** | — | **빈 양식. 여기를 채운다** |

- 슬라이드 규격: **13.333 × 7.5 in** (16:9 Widescreen)
- slide3 레이아웃: `slideLayout9.xml` — 라벨(Expertise / Core Topics / Sub Topics / Education: / Videos)은 레이아웃에 고정, 편집 대상 아님
- 사용 폰트: Arial, Arial+Sans-Serif, Calibri, Calibri Light, Helvetica
- 템플릿 원본명: `Emeritus_PowerPoint template`

## 레이아웃 3단 구조

```
┌────────────────┬──────────────────────────────────────┬──────────────┐
│ 좌 다크 레일    │ 중앙 화이트                            │ 우 그레이 레일 │
│ 0 → 3.0in      │ 3.0 → 11.2in                         │ 11.2 → 13.3in │
├────────────────┼──────────────────────────────────────┼──────────────┤
│ [헤드샷]        │ Name                (green, 44pt급)    │ [출판물 표지]  │
│                │ • Current/Former Positions            │              │
│ Expertise      │                                       │ Videos       │
│  Core Topics:  │ • Experience bullet 1                 │ [Click to view]│
│  Sub Topics:   │ • Experience bullet 2                 │ [Click to view]│
│                │ Industry specific experience …:       │ [Click to view]│
│ Education:     │ ┌──────────────┬──────────────────┐  │              │
│                │ │ Industry     │ Companies        │  │ [로고 ≤5]     │
│ Location       │ │ …            │ …                │  │              │
│                │ └──────────────┴──────────────────┘  │ [Emeritus 마크]│
└────────────────┴──────────────────────────────────────┴──────────────┘
```

## 필드 인벤토리

`분량 기준`은 slide2 샘플(Maarten Asser)의 실측 글자 수다. 텍스트 박스가 고정 크기이므로 **초과 시 자동 축소되어 가독성이 무너진다.** 샘플 대비 ±15% 안에서 맞추는 것이 안전하다.

| # | 필드 (pptx placeholder명) | 위치 | 샘플 실측 | 권장 분량 | 필수 |
|---|---------------------------|------|-----------|-----------|------|
| 1 | **Name** (`Text Placeholder 15`) | 중앙 상단 | 13자 | 이름 그대로 | ✅ |
| 2 | **Current/Former Positions** (`Text Placeholder 10`) | 이름 아래 | 2 bullet / 104자 | **2~3 bullet, 총 100~140자** | ✅ |
| 3 | **Experience** (`Text Placeholder 9`) | @(3.08, 2.17) | 2 bullet / 1,147자 + 리드인 76자 | **2 bullet, bullet당 480~600자** | ✅ |
| 4 | **Industry / Companies 표** (`Table 2`) | @(3.02, 4.87) | 헤더 + 8행 | **헤더 + 최대 8행** | ✅ |
| 5 | **Core Topics** (`Text Placeholder 6`) | 좌 레일 | 106자 | **최대 3개 영역, 90~120자** | ✅ |
| 6 | **Sub Topics** (`Text Placeholder 7`) | @(0.38, 3.81) | 309자 | **280~330자** | ✅ |
| 7 | **Education** (`Text Placeholder 4`) | 좌 레일 | 2 bullet / 160자 | **2~3 bullet, 총 140~200자** | ✅ |
| 8 | **Location** (`Text Placeholder 5`) | 좌 레일 하단 | 26자 | **≤ 35자** | ✅ |
| 9 | **헤드샷** (`Picture Placeholder 3`) | 좌 상단 | 정사각 | 정사각 크롭, 상반신 | ✅ |
| 10 | **Videos ×3** (`Rectangle: Rounded Corners 12·13·14`) | @(11.27, 3.04·3.60·4.16) | "Click to view" | 버튼 텍스트 유지, **하이퍼링크만 삽입** | 가이드상 사실상 필수 |
| 11 | **로고 / 출판물 이미지** | 우 레일 | 샘플은 저서 표지 + ISB 로고 | **페이지당 로고 ≤ 5개** | 선택 |

### 리드인 고정 문구

Experience 마지막 단락은 표의 리드인이며 **문구를 그대로 유지**한다:

> `Industry specific experience as a practitioner and/or educator across globe:`

### 산업 표 — 샘플의 카테고리 축

샘플이 쓴 축을 그대로 참고하면 클라이언트 눈에 익숙하게 읽힌다.

| Industry | Companies |
|----------|-----------|
| Pharma & Biotech | Novartis, UCB, Genzyme |
| IT & Technology | Corning, Intel, IBM, GENPACT |
| Telecommunications & Media | Telenor, Thomson Reuters |
| Banking & Finance | Goldman Sachs, ABN AMRO, HSBC, SCB, ING |
| Government | Dubai Govt. |
| Manufacturing | Tata & Sons, Mahindra, Aditya Birla Group |
| Energy | Hydro |
| Food Processing & Hotel | Campofrio, DSM, Starwood Hotels |

읽히는 규칙: **산업축은 범용 명사, Companies는 브랜드명만 콤마로 나열.** 설명·역할·연도를 쓰지 않는다.

## 작성 규칙 (slide1 가이드 원문 요약)

### 가이드가 밝힌 이 문서의 목적

> Faculty bio는 Emeritus 프로그램이 해당 분야 전문가에 의해 전달됨을 입증하는 자료다.
> **일부 클라이언트는 복수의 faculty bio를 받아 그중 하나를 최종 선택한다.** 따라서 이 문서는 본인의 전문성을 가능한 최선의 방식으로 마케팅할 기회다.

→ 이력 나열이 아니라 **선택받기 위한 경쟁 문서**라는 점이 설계 전제다.

### 필수 반영 8개 항목

| # | 가이드 요구 | 우리 대응 |
|---|-------------|-----------|
| 1 | 교육 가능 주제를 전부 `\|` 로 구분해 나열, **반복 서술어 회피** | Core/Sub Topics에서 "AI-based / AI-driven" 류 반복 금지 |
| 2 | 소속했거나 소속 중인 **경영대학원·교육기관 전부** 나열 (중동·인도 클라이언트에 매우 중요) | aSSIST, 삼육대, 광운대, 한국정보교육원, 모두의연구소, KG IT뱅크, 스파르타 등 |
| 3 | **APAC / India / EU / META / US / LATAM 클라이언트** 전부 나열 | 산업 표로 흡수 + Experience 본문에 지역 언급 |
| 4 | 세션에 사용한 **저서·출판물·케이스스터디·방법론** 목록 | JTBD / Porter's Five Forces / Value Chain 프레임워크 이식 방법론, 참여 연구 2건 |
| 5 | **TED·컨퍼런스·서밋 발표 + 고품질 영상 링크** — "클라이언트가 항상 요청한다" | ⛔ 미확보 — `brief.md` 미해결 이슈 2 |
| 6 | 교육·진행 가능한 **언어와 방언** 명시 (META·LATAM·APAC 지역에 특히) | Korean (native) / English |
| 7 | **직책 표기**: 본인 사업체의 "Co-Founder / CEO" 류 지양. 대신 ① 잘 알려진 기업의 현직 시니어·자문·이사 ② 대학 (겸임·객원 포함) 교원 ③ 과거 C-level 또는 희소 경력 | ⛔ 결정 필요 — `brief.md` 미해결 이슈 1 |
| 8 | **페이지당 로고 5개 이하** | 5개 선정 필요 |

### Core Topics vs Sub Topics 정의 (가이드 원문)

| 구분 | 가이드 정의 | 실무 판정 기준 |
|------|-------------|----------------|
| **Core Topics** | "2~3일 분량의 콘텐츠·자료를 보유한 전문 영역을 **최대 3개**" | 이미 다회 딜리버리했고 커리큘럼 문서가 존재하는 것만 |
| **Sub Topics** | "**1일 분량**까지 딜리버리 가능한 모든 영역" | 1회 특강·워크샵으로 소화 가능한 모든 주제 |

이 구분은 Emeritus가 모듈을 배정하는 실질 기준이다. Core에 올린 3개가 곧 "이 사람에게 맡길 수 있는 메인 모듈"로 읽힌다. **Module 6~10을 노린다면 Core 3개가 그 방향이어야 한다.**

## 제출본 체크리스트

- [ ] slide1(가이드)·slide2(샘플) 삭제, **slide3 1장만** 남김
- [ ] 모든 `XXXX` 플레이스홀더 치환 완료
- [ ] 표 빈 행 제거 (사용 행만 남김)
- [ ] Videos 3개 하이퍼링크 실제 동작 확인 (또는 결정된 대안 반영)
- [ ] 로고 5개 이하
- [ ] 텍스트 오버플로 없음 — 자동 축소된 박스가 없는지 육안 확인
- [ ] 영문 전용, 한글 문자 0개
- [ ] 파일명 `ByungJun-Park-Emeritus-Bio-2026.pptx`
