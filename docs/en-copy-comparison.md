# 영문 이력서 콘텐츠 비교 평가 보고서 (개정판)

> **대상 파일**
> - **A** `wildmental.github.io/index.html` — 공개 GitHub Pages 버전 · JS 텍스트 교체 방식 이중 언어
> - **B** `profile-vibe/05-business-profile-merged.html` — Profile Vibe 신규 버전 · HTML 인라인 이중 언어
>
> **평가 기준** 문장 완성도 · 프로페셔널 레지스터 · 어휘 선택 · 표현 정밀도 · 일관성

---

## 1. 이중 언어 구현 방식 비교

| 항목 | A (wildmental.github.io) | B (profile-vibe) |
|---|---|---|
| **구현 방식** | JS `koToEn` Map → DOM TreeWalker 텍스트 교체 | `<span lang="ko">` / `<span lang="en">` 인라인 이중 병기 |
| **영문 버전 접근** | `?lang=en` URL 파라미터 | CSS `[lang]` 속성 selector 기반 표시/숨김 |
| **HTML 구조** | 단일 한국어 DOM, 영문은 JS Map에만 존재 | 동일 DOM에 두 언어 공존 |
| **SEO / 접근성** | 영문 텍스트가 HTML 소스에 없어 크롤러 불리 | 영문 텍스트 DOM 포함, 시맨틱 `lang` 속성 사용 |
| **유지보수** | 번역 추가 시 JS Map 수동 관리 필요 | 해당 위치 `<span>` 한 벌만 편집 |

---

## 2. 섹션별 문장 대조 및 평가

### 2-1. Hero — 태그라인

| | 문장 |
|---|---|
| **A** | *"I bring AI, big data, and cloud technologies into education and engineering at news-cycle speed."* |
| **B** | *"I apply the AI, big-data, and cloud ecosystem in **near-real time** — both as an educator and as an engineer."* |

**A 분석**
- 1인칭 능동문으로 명확함
- "at news-cycle speed"는 한국어 "뉴스 속도" 개념을 자연스럽게 의역
- "bring … into education and engineering"은 직관적이나 대상("education and engineering")이 동사 목적어 위치에 오면서 약간 어색한 어순

**B 분석**
- "near-real time" — 기술 분야 표준 복합어로 교육·엔지니어링 양쪽에 통용되는 정밀한 표현
- em-dash + "both as an educator and as an engineer"가 두 정체성을 대칭 병렬 구조로 강조
- "ecosystem" — "technologies"보다 생태계 전반을 아우르는 어휘로 더 정확

**승자: B** — 어휘 선택과 문장 구조 모두 한 단계 높은 수준

---

### 2-2. About — 섹션 도입

| | 문장 |
|---|---|
| **A** | *"A technical foundation built on academic training and certified expertise in cloud and data."* |
| **B** | *"A technical foundation built on cross-disciplinary studies and industry-recognized cloud and data credentials."* |

**비교**
- A의 "academic training" → B의 "cross-disciplinary studies": B가 다전공(정치외교·컴퓨터과학·AI MBA) 배경을 더 정확히 표현
- A의 "certified expertise" → B의 "industry-recognized credentials": B가 공인 자격증의 성격을 더 구체적으로 묘사

**승자: B** — 약간 우세

---

### 2-3. Core Strengths — 섹션 도입

| | 문장 |
|---|---|
| **A** | *"Up-to-date training at news-cycle speed, learner-centered instruction with 100% completion, and engineering with a 0% development incident rate."* |
| **B** | *"Education at the speed of news. Learner-centered teaching with a 100% graduation track record. Engineering with a zero-incident operating history."* |

**A 분석**
- 한 문장으로 세 강점을 병렬 나열 — 문법적으로 완성
- "Up-to-date training at news-cycle speed" — "Up-to-date"와 "news-cycle speed"가 의미적으로 중복. 한 표현만으로 충분
- "0% development incident rate" — 수치 표기가 명확하나 문어체 레지스터에서는 "zero-incident" 복합어가 더 자연스러움

**B 분석**
- 세 문장으로 분리하여 각 강점을 독립 단위로 강조 — 시각적·리듬적으로 우월
- "zero-incident operating history" — 기술 업계 문서에서 통용되는 복합어 표현
- "graduation track record" — 단순 "completion rate"보다 누적 성과 개념을 포함하는 표현

**승자: B** — 구조와 어휘 모두 우위

---

### 2-4. Core Strengths — 카드 불릿 상세 비교

| 구분 | A 표현 | B 표현 | 우위 |
|---|---|---|---|
| 강점 1 카드 헤딩 | *"Training that keeps pace with a rapidly changing technology ecosystem"* | *"Teaching that tracks a fast-moving tech ecosystem at the speed of news"* | **B** — "tracks"가 "keeps pace with"보다 능동적, "fast-moving"이 더 간결 |
| 뉴스 속도 불릿 | *"Curricula are continuously refreshed with current industry trends, delivering news-cycle-level relevance"* | *"Course content is refreshed mid-cohort to deliver **news-level up-to-date instruction**"* | **A** — "news-cycle-level relevance"가 더 명확한 명사구. B의 "news-level up-to-date"는 과도한 복합 수식어 |
| 강점 2 카드 헤딩 | *"Learner-centered programs with 100% completion, combining future technologies with hands-on engineering"* | *"Learner-centered teaching that fuses emerging and practical tech — with a 100% graduation rate"* | **동점** — A는 "combining", B는 "fuses"; 둘 다 적절. B의 em-dash 수치 강조가 임팩트는 강함 |
| 강점 3 카드 헤딩 | *"Engineering scalable and resilient systems with a 0% development incident rate"* | *"Engineering built for scale and stability — with a zero-incident operating record"* | **B** — 분사구문 "built for scale and stability"가 시스템 설계 철학을 더 명확히 전달 |
| DAU 불릿 | *"High-volume traffic control for cryptocurrency exchange real-time notifications and advertising systems"* | *"large-volume traffic handled across a crypto-exchange real-time notification platform and an advertising system."* | **A** — 더 명확한 동사구 사용 ("traffic control"). B는 과거분사 시작으로 주어가 모호 |
| 0% 장애 불릿 | *"After launching the Kidsnote advertising-system renewal, 0% development incident rate over two years"* | *"After the Kidsnote ad-system relaunch — zero engineering-side incidents for two consecutive years"* | **B** — "zero … incidents for two consecutive years"가 성과 언어로 더 강력 |

---

### 2-5. LinkedIn 추천사 인용구

| | 문장 |
|---|---|
| **A** | *"There were zero service incidents while he was responsible for supervision."* |
| **B** | *"Under his stewardship, the team recorded zero service incidents."* |

**A 분석**: 원문을 충실히 번역했으나 "was responsible for supervision"이 다소 관료적이고 어색

**B 분석**: "stewardship" — 단순 감독이 아닌 책임 관리와 청지기 정신을 함축하는 고급 어휘. "the team recorded" — 구체적 주어로 집단 성과를 명시

**승자: B** — 어휘 선택에서 결정적 차이

---

### 2-6. Teaching — 섹션 도입

| | 문장 |
|---|---|
| **A** | *"A teaching portfolio built since 2018, from enterprise employee training and long-form KDT programs to international cooperation programs."* |
| **B** | *"A continuous teaching track since 2018 — from corporate enterprise training to long-track KDT programs and international development cooperation."* |

**A 분석**
- "portfolio" — 교육 분야에서 "teaching portfolio"는 작업물 모음집을 의미하기도 함. 경력의 연속성보다는 포트폴리오 결과물 뉘앙스 → 맥락상 약간 어색할 수 있음
- "long-form" → B의 "long-track": KDT 장기과정의 특성(단기 집중이 아닌 장기 트랙)을 B가 더 정확히 번역

**B 분석**
- "A continuous teaching track" — 경력의 연속성과 누적을 강조
- "international development cooperation" — KOICA 협력 사업의 공식 영어 명칭에 더 가까운 표현

**승자: B** — 맥락 의역 정확도 우위

---

### 2-7. Teaching — 주요 강의 이름 번역 대조

| 한국어 원문 | A 번역 | B 번역 | 평가 |
|---|---|---|---|
| 모두의연구소 바이브코딩 과정 | *"Vibe Coding Practical Project Course for Professionals"* | *"Vibe-Coding Project Track for Working Professionals"* | **B** — "Working Professionals"이 재직자 대상을 더 명확히 표현. 하이픈 처리도 적절 |
| 삼육대 KDT 산학협력 학점 연계과정 | *"Industry-Academic Credit Program (AI-Enabled Cloud-Native Full-Stack Engineer Training Program)"* | *"Industry-Academia Credit-linked Program (AI-enabled Cloud-Native Full-Stack Engineer Track)"* | **B** — "Industry-Academia"가 국제 학술 표준 용어. "Credit-linked"가 학점 연계 특성을 더 정확히 표현 |
| 하나금융그룹 현직자 교육 (리눅스) | *"Employee Training for Hana Financial Group (Intermediate-to-Advanced Linux and Practical MSA Web Server Deployment & Operations)"* | *"Hana Financial Group · In-Service Training (Intermediate Linux Deep-Dive & MSA Web-Server Build/Operation Workshop)"* | **B** — "In-Service Training"이 재직자 교육의 국제 표준 용어. "Deep-Dive"가 심화 과정 성격을 더 강조 |
| KT 재직자 교육 | *"Training for KT Employees (AWS-Based Kafka Data Streaming & Redis Cache Cluster Build and Integration)"* | *"KT · In-Service Training (AWS-based Kafka Data Streaming & Redis Cache Cluster Integration)"* | **B** — 더 간결하고 회사명 배치가 자연스러움 |
| 기아자동차 노사공동교육 | *"Kia Motors Labor-Management Joint Training ..."* | *"Kia Motors · Joint Labor-Management Training ..."* | **동점** — A는 "Labor-Management Joint"로 한국어 어순 그대로. B는 "Joint" 위치 조정으로 영어 어순에 맞춤. B 미세 우위 |

---

### 2-8. Career — 섹션 도입

| | 문장 |
|---|---|
| **A** | *"A multidisciplinary IT career spanning public-sector institutions, global business development, backend engineering, and technical education."* |
| **B** | *"Public-sector institutes · global business development · backend engineering · technical training — a multi-angle career across the IT industry."* |

**A 분석**
- "multidisciplinary" — 정확하고 학술적인 어휘. "multi-angle"보다 확립된 표현
- "spanning" — 경력의 범위를 자연스럽게 묘사하는 동사

**B 분석**
- 키워드 나열 후 em-dash로 요약하는 구조가 시각적으로 강렬
- "multi-angle" — 비표준 복합어. "multidisciplinary" 또는 "multi-domain"이 더 적절

**승자: A** — "multidisciplinary spanning" 구조가 이 섹션에서는 더 완성도 높음

---

### 2-9. Career — 직무(Responsibilities) 컬럼 대조

| 한국어 | A 번역 | B 번역 | 평가 |
|---|---|---|---|
| 교육과정 설계 컨설팅 및 기술교육 | *"Curriculum design consulting and technical training"* | *"Curriculum-design consulting and technical instruction"* | **B** — "Curriculum-design" 하이픈 처리가 규범에 맞음. "instruction"이 "training"보다 교육자로서의 정체성 반영 |
| 광고 시스템 백엔드 엔지니어 | *"Backend Engineer for Advertising Systems"* | *"Backend engineer · advertising platform"* | **A** — 전치사구 "for Advertising Systems"가 역할을 더 명확히 서술. B의 가운뎃점 나열은 간결하지만 직무 설명으로는 다소 파편적 |
| SW기업 해외시장개척 지원 | *"Overseas market development support for software companies"* | *"Global market expansion support for Korean SW companies"* | **B** — "Global"이 "Overseas"보다 전략적 뉘앙스. "expansion"이 "development"보다 성과 지향적 |
| SW 전문가 자격평가시험 개발 | *"Development of certification exams for software professionals"* | *"Development of national SW professional certification exams"* | **B** — "national"이 한국 국가 공인 자격 시험의 성격을 명시 |

---

### 2-10. Projects — 도입 문단 대조

| 섹션 도입 | A | B |
|---|---|---|
| **문장** | *"Collaboration with companies, international organizations, and research institutes, from content design to engineering solution launches."* | *"Engagements with enterprises, international agencies, and research institutes — from curriculum design to shipping engineering solutions."* |

**A 분석**: "Collaboration"은 협업 사실을 기술하지만 수행 주체의 역할이 수동적으로 느껴질 수 있음

**B 분석**:
- "Engagements" — 프리랜서·컨설턴트 분야에서 프로젝트 단위 계약을 뜻하는 전문 어휘
- "shipping engineering solutions" — 테크 업계 관용구로 완성·출시를 강조

**승자: B**

---

**프로젝트별 도입 문단 대조**

| 프로젝트 | A 번역 | B 번역 | 우위 |
|---|---|---|---|
| **M-01 스리랑카** | *"Korea invitational AI workshop for a Sri Lankan delegation, covering visual and in-depth understanding from machine learning to LLMs through a full-scale application development workshop."* | *"In-Korea AI workshop for the Sri Lanka delegation — from a visual, in-depth grounding in machine learning through LLMs all the way to building real applications end-to-end."* | **B** — "grounding in machine learning"이 교육 목표를 더 정확하게 표현. "all the way to building"이 여정감을 살림 |
| **M-02 하나금융** | *"Cloud-native DevOps and advanced Linux special lecture for Hana Financial Group employees, from EKS infrastructure to Rocky Linux-based security and web service deployment."* | *"In-service training for Hana Financial Group on cloud-native DevOps and advanced Linux — from EKS infrastructure to Rocky-Linux–based security and web-service deployment."* | **B** — "In-service training"이 표준 용어. "Rocky-Linux–based" 엔-대시 하이픈 처리가 정확 |
| **M-03 카카오 키즈노트** | *"Led development of a cloud-native MSA advertising service, launching the renewed ad-serving backend and improving ML-powered delivery logic to increase advertising revenue."* | *"Lead developer for the cloud-native MSA advertising service — relaunched the ad-serving backend and built ML-driven delivery-logic enhancements that grew ad revenue."* | **B** — "Lead developer"로 직책 명시가 먼저. "ML-driven delivery-logic enhancements"의 세밀한 복합어 처리. "grew ad revenue"가 "to increase advertising revenue"보다 간결하고 성과 중심적 |
| **M-04 엑시아소프트** | *"Developed an AWS-based high-speed user notification service, back-office dashboard, and large-scale data export features while maintaining the high-speed trade execution server for cryptocurrency exchange Coinbit."* | *"Built an AWS-based high-throughput user-notification service plus back-office dashboards and large-volume data-extraction tools — also responsible for maintaining the matching-engine servers behind the 'Coinbit' crypto exchange."* | **B** — "high-throughput"이 "high-speed"보다 기술적으로 정확 (처리량 vs 속도). "matching-engine servers" — 거래 체결 서버의 정확한 영문 명칭 |
| **M-05 KRIVET** | *"Benchmarking study on advanced AI education in China."* | *"Benchmarking research on advanced AI-education practices in China."* | **동점** — A는 더 간결, B는 "practices"로 맥락을 약간 더 풍부하게 |
| **M-06 한국생산성본부** | *"Global market expansion consulting for high-growth Korean software companies, including collaboration support with Purdue University and Plug and Play."* | *"Global market-expansion consulting for high-growth Korean software companies — including partnerships with Purdue University and Plug & Play."* | **B** — "market-expansion" 하이픈 처리가 복합 형용사 규범에 맞음. "partnerships"가 "collaboration support"보다 간결하고 주체적 |
| **M-07 한밭대** | *"Research on SW and HW convergence maker education methodology for a university-industry cooperation foundation."* | *"Research with the university's industry-academia cooperation foundation into SW + HW convergence maker-education methodologies."* | **A** — "Research on"이 "Research with ... into"보다 구조가 깔끔. "university-industry cooperation foundation"이 "industry-academia"보다 일반 독자에게 더 직관적 |
| **M-08 럭스로보** | *"Led market entry, partnership development, and technical exchange across the U.S., Middle East, and China."* | *"Led market entry and partnership / technical-exchange activities across the US, the Middle East, and China."* | **A** — 세 개의 활동을 명확히 병렬 나열. B는 슬래시(/) 사용이 산문에서 비표준 |

---

### 2-11. Contact CTA

| | 헤딩 | 본문 |
|---|---|---|
| **A** | *"I am always open to training and consulting inquiries."* | *"From enterprise IT practitioner training and long-form programs to cloud architecture consulting, I work at the pace of the field."* |
| **B** | *"Always open to teaching engagements and consulting inquiries."* | *"Enterprise IT training, long-track teaching, cloud-architecture consulting — I work at the pace your team and field demand."* |

**헤딩 비교**
- A는 완전한 1인칭 문장. 정중하고 명확
- B는 주어 생략 형태로 더 간결하고 임팩트 있음. "teaching engagements"가 "training"보다 전문성 있는 어휘

**본문 비교**
- A의 "I work at the pace of the field" — 깔끔하고 자연스러운 마무리
- B의 "I work at the pace your team and field demand" — "your team"을 추가해 고객 지향 메시지를 강화

**승자: B** (헤딩·본문 모두 미세 우위)

---

### 2-12. Footer 태그라인

| | 문장 |
|---|---|
| **A** | *"I bring AI, big data, and cloud technologies into education and engineering at news-cycle speed."* |
| **B** | *"Bringing the AI, big-data, and cloud ecosystem into both classrooms and production at the speed of news."* |

**비교**
- A는 히어로 태그라인과 동일 문장을 반복 사용
- B는 "classrooms and production"으로 교육·엔지니어링 이중 정체성을 명시적으로 표현하면서 히어로와 구분되는 변주를 만들어냄

**승자: B** — 브랜드 메시지 변주 면에서 우위

---

## 3. 특정 표현 단위 심층 비교

### 3-1. "뉴스 속도" 브랜드 어구 처리

| 위치 | A | B |
|---|---|---|
| 히어로 태그라인 | `at news-cycle speed` | `in near-real time` |
| 섹션 도입 (Strengths) | `at news-cycle speed` (반복) | `at the speed of news` |
| 불릿 내부 | `news-cycle-level relevance` | `news-level up-to-date instruction` |
| Footer | `at news-cycle speed` (3중 반복) | `at the speed of news` (히어로와 구분되는 변주) |

**A 평가**: "news-cycle speed"를 4개 위치에서 거의 동일하게 반복. 브랜드 일관성은 있으나 변주가 없어 단조로움

**B 평가**: "near-real time" → "at the speed of news" → "Bringing … at the speed of news"로 표현을 변주. 동일 브랜드 개념을 다양하게 표현

**승자: B** — 반복 없는 변주가 고급 카피라이팅 기법

---

### 3-2. "0% 장애율" 성과 표현

| 위치 | A | B |
|---|---|---|
| Strengths 카드 헤딩 | `0% development incident rate` | `zero-incident operating record` |
| 섹션 도입 | `0% development incident rate` | `zero-incident operating history` |
| 불릿 내 | `0% development incident rate over two years` | `zero engineering-side incidents for two consecutive years` |
| Metric callout | `0% development incident rate` | `zero engineering incidents` |

**A 평가**: 수치 표기가 명확하고 검증 가능. 그러나 "development incident rate"의 반복이 단조롭고 "development"라는 수식어가 매번 붙어 번거로움

**B 평가**: "zero-incident" 복합어, "operating record/history" 같은 변주된 어휘로 같은 의미를 다양하게 전달. 단, "engineering-side"는 다소 기술 내부자 언어

**승자: B** — 어휘 변주 면에서 우위

---

## 4. 종합 평가 스코어카드

| 평가 항목 | A (wildmental.github.io) | B (profile-vibe) | 비고 |
|---|---|---|---|
| **문법 완성도** | ★★★★☆ | ★★★★★ | B에 미완성 dangling modifier 일부 존재하나 전반적으로 더 완성도 높음 |
| **어휘 레지스터** | ★★★★☆ | ★★★★★ | "stewardship", "engagements", "shipping" 등 B의 어휘 선택이 일관되게 상위 레지스터 |
| **성과 언어 강도** | ★★★☆☆ | ★★★★★ | B가 "zero-incident", "grew ad revenue", "built … that grew" 등 더 성과 중심적 |
| **브랜드 일관성** | ★★★☆☆ | ★★★★★ | A는 동일 어구 반복. B는 맥락별 변주로 일관성과 다양성 동시 달성 |
| **기술 용어 정밀도** | ★★★★☆ | ★★★★★ | B의 "high-throughput", "matching-engine", "in-service training" 등이 더 정확 |
| **국제 표준 용어 사용** | ★★★★☆ | ★★★★★ | B의 "industry-academia", "Credit-linked", "In-Service Training" 등이 국제 관행에 더 가까움 |
| **구조적 임팩트** | ★★★☆☆ | ★★★★☆ | B의 em-dash 활용이 문장 리듬과 임팩트를 강화. 단 일부 과용 |
| **자연스러움** | ★★★★☆ | ★★★★☆ | 두 버전 모두 일부 어색한 표현 혼재. 동점 |

**종합: B가 전반적으로 우위이나, A도 일부 항목(Career 도입, M-07·M-08 불릿, DAU 표현)에서 더 나은 선택을 보임**

---

## 5. A가 B보다 나은 표현 목록

B 작성 시 참고할 수 있는 A의 강점 표현.

| 항목 | A 표현 | B 표현 | A가 나은 이유 |
|---|---|---|---|
| Career 섹션 도입 | `A multidisciplinary IT career spanning ...` | `a multi-angle career across the IT industry` | "multidisciplinary"가 확립된 학술·전문 용어. "spanning"이 경력 범위를 더 자연스럽게 표현 |
| 강점 1 불릿 (교육 최신성) | `Curricula are continuously refreshed with current industry trends, delivering news-cycle-level relevance` | `Course content is refreshed mid-cohort to deliver news-level up-to-date instruction` | "news-cycle-level relevance"가 "news-level up-to-date instruction"보다 명확하고 비중복적 |
| DAU 불릿 | `High-volume traffic control for cryptocurrency exchange real-time notifications and advertising systems` | `large-volume traffic handled across a crypto-exchange ...` | A가 "control"이라는 능동 동사로 시작. B는 과거분사 시작으로 주체 불명확 |
| M-07 하밭대 도입 | `Research on SW and HW convergence maker education methodology for a university-industry cooperation foundation.` | `Research with the university's industry-academia cooperation foundation into SW + HW convergence maker-education methodologies.` | A가 구조가 더 단순하고 명확. "Research on"이 "Research with … into"보다 깔끔 |
| M-08 럭스로보 도입 | `Led market entry, partnership development, and technical exchange across the U.S., Middle East, and China.` | `Led market entry and partnership / technical-exchange activities across the US, the Middle East, and China.` | A가 세 활동을 명확한 명사 병렬로 나열. B의 슬래시(/) 사용은 산문에서 비표준 |
| Career: 광고 백엔드 직무 | `Backend Engineer for Advertising Systems` | `Backend engineer · advertising platform` | A가 전치사구로 역할을 더 구체적으로 서술 |

---

## 6. B에서 개선이 권장되는 표현

| 현행 (B) | 권장 수정 | 이유 |
|---|---|---|
| `news-level up-to-date instruction` | `instruction refreshed at news-cycle speed` 또는 A의 `news-cycle-level relevance` 차용 | 형용사 3중 복합어 해소 |
| `a multi-angle career across the IT industry` | `a multidisciplinary career spanning the IT industry` | "multidisciplinary"가 표준 어휘 |
| `partnership / technical-exchange activities` | `partnership and technical-exchange activities` | 산문 내 슬래시 제거 |
| `SW + HW convergence` (M-07 프로젝트 본문) | `SW–HW convergence` | 엔-대시(–)가 기술 문서 표기 관행에 부합 |
| `into seasoned industry professionals` (Strengths 불릿) | `through to seasoned industry professionals` | "into"보다 "through to"가 범위 표현에 자연스러움 |
| `continuously updated to reflect on-the-ground needs.` (Strengths 불릿) | `— continuously updated as the field evolves.` | Dangling modifier 위험 제거, em-dash로 구조 명확화 |
| `both cohorts graduated at 100% and every survey respondent gave a positive recommendation.` | `both cohorts at 100% completion — every survey respondent recommended the course.` | 이중 em-dash 단순화 및 리듬 개선 |

---

## 7. 결론

`wildmental.github.io`는 JS `koToEn` Map 텍스트 교체 방식으로 전체 콘텐츠의 완전한 영문 번역을 구현하고 있으며, 프로페셔널 레지스터 수준도 전반적으로 **B+급** 이상이다. 특히 Career 섹션 도입("multidisciplinary … spanning")과 일부 프로젝트 불릿(M-07, M-08)에서는 profile-vibe보다 자연스러운 영문 표현을 사용한다.

`profile-vibe`의 영문 콘텐츠는 다음 세 가지에서 wildmental.github.io를 일관되게 앞선다.

1. **어휘 레지스터** — "stewardship", "engagements", "In-Service Training", "industry-academia", "shipping" 등 업계 상위 레지스터 어휘를 일관되게 사용
2. **브랜드 어구 변주** — "speed of news" 개념을 섹션마다 다른 표현으로 변주하여 단조로움 없이 브랜드 일관성을 유지
3. **성과 언어 강도** — "zero-incident operating record", "grew ad revenue", "built ML-driven … that grew" 등 동사가 구체적 행동과 결과를 동시에 전달

두 버전 모두 완성도 있는 영문 이력서 콘텐츠를 갖추고 있으며, 위 섹션 5·6의 교차 반영을 통해 각 버전의 약점을 보완하면 **A급** 단일 버전으로 통합할 수 있다.

---

*작성일: 2026-05-26 (개정판) | 대상: wildmental.github.io koToEn Map + profile-vibe `[lang]` 스팬 전체*
