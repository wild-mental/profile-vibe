# LinkedIn 업데이트 초안 (붙여넣기용)

- 작성: 2026-10-21 · 근거: `docs/grip/GRIP_REGISTER.md` T14, 정본 규칙 `CLAUDE.md`
- 원칙: 웹이 정본(T1). 아래 값은 웹(`app/src/data`, `app/src/i18n`)과 같게 맞춘 것이다.
- LinkedIn 입력은 직접 하신다. 각 블록은 LinkedIn 편집 화면의 해당 필드에 그대로 붙여 넣으면 된다.

---

## 1. 정정 (사실 불일치)

| # | 위치 | 현재 LinkedIn | 바꿀 값 | 근거 |
|---|------|---------------|---------|------|
| 1 | Experience · KPC 한국생산성본부 | Feb 2020 – Sep 2021 | **Feb 2020 – Sep 2020** | T6 |
| 2 | Experience · LUXROBO | Jun 2018 – Jan 2020 · Global Business Development | **Jun 2018 – Dec 2019** · **Team Lead, Global Business Development** | T6 · T7 |
| 3 | Experience · 스파르타클럽 내일배움캠프 | Jan 2022 – Feb 2022 | **Dec 2021 – Mar 2022** | T6 |
| 4 | Experience · DatastoryHub Korea | Jan 2024 – Dec 2025 | **Feb 2024 – Dec 2025** · 회사명 **Datastory Hub** | T6 · T10 |
| 5 | Experience · Korea IT Education Institute | 회사명 | **Korea Information Education Institute** | T10 |
| 6 | Experience · Coinbit | 회사명 · Backend Engineer | **Axiasoft (Coinbit)** · **Research Engineer (Backend)** | T7 · T10 |
| 7 | Experience · Kakao kidsnote | Backend Engineer | **Research Engineer (Backend)** | T7 |
| 8 | Experience · Samyook University KDT | Jan 2024 – Dec 2025 · "Samyook" | **Jan 2024 – Sep 2025** · **Sahmyook University** | T1 (기수별 2024.01–09 · 2025.01–09) · T10 |
| 9 | Education · aSSIST | Sep 2024 – Sep 2025 · "Dual Degree: M.S. & M.B.A." | 종료 **Aug 2025** · 학위 **Dual Degree: M.S. in AI & Big Data · Executive MBA** · 설명의 "MBA in SGDs" → **"Executive MBA (SDG Management School, Geneva)"** | T1 · T8 |
| 10 | Education · Korea National Open University | – Sep 2023 | **– Aug 2023** | T1 |
| 11 | Experience · UD IMPACT | 장소 정보 없음 | 첫 줄에 **SBA (Seoul Business Agency) SeSAC Academy, Yeongdeungpo Campus** 추가 (§2-1) | T3 |
| 12 | Experience · MakersWorld | 항목 없음 (About에 한 줄) | **새 항목 추가** (§2-5) | 웹 경력 표 |
| 13 | Skills | 인공지능/Artificial Intelligence, finetuning/Fine Tuning, AI 시스템 설계/AI system design 이중 등록 | 한국어 3개 삭제, 영문만 유지 | 비교 문서 §2-J |
| 14 | Languages | 비어 있음 | **Korean — Native or bilingual**, **English — Professional working** (수준은 직접 확인) | 비교 문서 §2-J |

> 2번·6번·7번의 직함은 웹 표기(팀장 · 연구원)를 따른 것이다(T7). 직함 칸이 길어 보이면 괄호 부분만 빼도 된다.
> 8번 학교명은 LinkedIn 학교 페이지에 연결된 이름이라 직접 못 바꿀 수 있다. 그 경우 `Sahmyook University` 페이지를 다시 검색해 연결한다.

---

## 2. 경력 설명 보강 (수치 추가)

### 2-1. UD IMPACT — 설명 맨 앞에 추가

```
Delivered at SBA (Seoul Business Agency) SeSAC Academy, Yeongdeungpo Campus.
```

### 2-2. Sahmyook University — K-Digital Training · 설명 맨 앞에 추가

```
• 100% graduation across two consecutive cohorts — 29 of 29 (2024) and 19 of 19 (2025), 48 graduates of a 1,000-hour long-track program.
• 100% would-recommend rate among all satisfaction-survey respondents in both years.
```

### 2-3. Kakao kidsnote — 설명 끝에 추가

```
• Relaunched and maintained the ad-serving backend on a cloud-native MSA, and built ML-driven delivery-logic upgrades.
• Grew ad revenue more than 2× over two years as sole owner, with zero engineering-side service incidents.
• Owned the end-to-end lifecycle on Kakao Cloud — development, deployment, and monitoring — and contributed to the analytics-layer build-out.
```

### 2-4. Axiasoft (Coinbit) — 설명 끝에 추가

```
• Built a per-user watchlist price-alert system able to dispatch 3M notifications per minute, on AWS.
• Contributed to ISMS-P backend certification work for the crypto exchange.
```

### 2-5. MakersWorld — 새 Experience 항목

- Title: `Consultant & Instructor`
- Company: `Makers World`
- Employment type: 직접 선택
- Dates: `Sep 2020 – Mar 2021`
- Description:

```
Overseas market development for the maker-education sector.
• Researched maker-education curricula and delivered special lectures.
• Supported global service planning and consulting for overseas-bound companies (continued as a project engagement, Nov 2022 – Dec 2023).
```

---

## 3. Projects 섹션 (LinkedIn에 아직 없음)

LinkedIn 프로필 > Add section > Projects. 각 항목의 "Associated with"는 괄호 안 경력에 연결한다.

| # | Name | Date | Associated with |
|---|------|------|-----------------|
| P1 | Hana Financial Group · Cloud-native DevOps & Advanced Linux Training | Dec 2024 · May 2025 | Datastory Hub |
| P2 | KT · AWS-based Kafka Data Streaming & Redis Cache Cluster Training | May 2024 | Datastory Hub |
| P3 | KOICA · AI Workshop for the Sri Lanka Career-Platform Delegation | Jun 2025 | Korea Information Education Institute |
| P4 | Goorm Prophect Cloud Track · Project Documentation & Kafka Seminar | Jun 2025 | Korea Information Education Institute |
| P5 | LG HelloVision DX DATA SCHOOL · Project Mentoring | May 2024 – Jun 2024 | Korea Information Education Institute |
| P6 | KRIVET · University AI Education and Maker Entrepreneurship Policy in China (2021) | 2021 | Makers World |
| P7 | Hanbat National University · SW & HW Convergence Maker-Education Methodology Research | — | Makers World |

> "Associated with" 연결은 웹에 명시된 운영기관이 아니라 시기상 가장 가까운 경력으로 추정한 것이다. P1·P2의 운영기관(웹 강의 표: 하나금융그룹 · 삼성 멀티캠퍼스), P6·P7 연결은 직접 확인한다. P7 날짜는 웹에도 없다.

설명 문안:

**P1**
```
In-service training for Hana Financial Group on cloud-native DevOps and advanced Linux — from EKS infrastructure to Rocky-Linux–based security and web-service deployment.
• Cloud-based MSA service design and Kubernetes (EKS) operations automation (Dec 2024)
• Intermediate Linux deep-dive and MSA web-server build/operation workshop (May 2025)
• CI/CD automation with GitOps and zero-downtime deployment; Prometheus & Grafana monitoring
```

**P2**
```
In-service training for KT engineers on AWS-based Kafka data streaming and Redis cache cluster integration, delivered via Samsung Multicampus.
```

**P3**
```
In-Korea AI workshop for the Sri Lanka career-platform IT operators invited by KOICA — from a visual, in-depth grounding in machine learning through LLMs to building real applications end-to-end.
```

**P4**
```
Special lecture for the Goorm Prophect cloud track on systematic project documentation and practical application of Kafka fundamentals.
```

**P5**
```
Project mentoring for the LG HelloVision DX DATA SCHOOL engineer track, run by the Radio Promotion Association of Korea.
```

**P6**
```
Contributing researcher, "University AI Education and Maker (chuàngkè) Entrepreneurship Policy in China (2021)" — Korea Research Institute for Vocational Education and Training (KRIVET).
```

**P7**
```
Research on SW–HW convergence maker-education methodology for Hanbat National University's industry-academia cooperation foundation.
```

---

## 4. Featured · Contact info

- **Featured > Add a link**: 웹 프로필 URL `<배포 URL 입력>` — 제목 `Byungjun Park · AI Technical Instructor & IT Strategy Consultant`
- **Contact info > Website**: 같은 URL, 유형 `Portfolio`
- (선택) **Featured > Add a link**: KDT 만족도 조사 캡처 또는 기업 실무자 교육 만족도 그래프

---

## 5. 바꾸지 않는 것 (결정 기록)

- 헤드라인: 이미 웹과 같음 (T2)
- About 3축: 채널별로 다르게 둠 (T11)
- 모두의연구소 Experience: LinkedIn은 그대로 둠. 웹은 강의 표에만 있음 (T5)
