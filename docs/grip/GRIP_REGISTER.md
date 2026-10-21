# Grip Register — LinkedIn 기준 웹 프로필 업데이트

- 시작: 2026-10-21
- 참조 범위(A): `docs/linkedin-web-profile-diff.md` · LinkedIn 프로필(2026-10-21 열람) · `source-docs/01-ai-it-profile-original-doc.md` · `app/src/data/*.ts` · `app/src/i18n/{strings,projects}.ts`
- 관심 방향(B): 웹 프로필 업데이트에 필요한 미결 결정 (값 충돌 · 추가 여부 · 표기 기준)
- 완료조건(C): 전 토픽 RESOLVED/DROPPED
- OUTPUT(D): 근거 `docs/linkedin-web-profile-diff.md` · 규범 `CLAUDE.md`(신설) · 반영 `app/src/data`, `app/src/i18n` 즉시 수정 (확인 완료)

재료 점검 — 2026-10-21
- [x] R1 목적·성공기준 — 사용자 요청: LinkedIn 기준으로 웹 프로필 업데이트
- [x] R2 범위·산출물 — docs/linkedin-web-profile-diff.md (1장 25건 · 2장 11건 · 3장 1건)
- [~] R3 대상·이해관계자 — 기업 교육·컨설팅 의뢰처(strings.ts contact), 파트너(partner-profiles) 언급만 → T2에 흡수
- [x] R4 제약 — ko/en 이중 표기, source-docs/01 = 사실 1차 원천(partner-profiles/EMERITUS/sources.md:10)
- [x] R5 기결정 — source-docs/01(2026-05 기준), 웹 data 파일

RESOLVED: 14 / DROPPED: 0 / TOTAL: 14
STATUS: ALL_RESOLVED (2026-10-21)
- [x] T1  | CORE  | 사실 정본 원칙 (값 충돌 시 기준 · 동기화 방향) | status:RESOLVED | decision:A) 원본문서·웹 정본 + 이후 변동만 LinkedIn | applied:CLAUDE.md(신설), docs/linkedin-web-profile-diff.md §3
- [x] T2  | CORE  | 웹 헤드라인 · 포지셔닝 문구 통일 | status:RESOLVED | decision:A) LinkedIn 문구로 웹 통일 + 내비만 축약형 | applied:app/src/i18n/strings.ts, app/index.html, CLAUDE.md, docs/linkedin-web-profile-diff.md §3
- [x] T3  | CORE  | UD IMPACT 핀테크 AI PM 과정 반영 방식 | status:RESOLVED | decision:A안으로 하고, 상세내용에 SBA(서울산업진흥원) SeSAC 아카데미 영등포캠퍼스 라는 정보까지 추가 | applied:app/src/data/career.ts, app/src/data/teaching.ts, app/src/i18n/strings.ts, CLAUDE.md, docs/linkedin-web-profile-diff.md §3
- [x] T4  | CORE  | 뉴스레터 · AZTKS 공개 활동 섹션 신설 여부 · 위치 | status:RESOLVED | decision:새 섹션 신설하고 위치는 금융특화 AX PM 역량 섹션 위에. 링크는 LinkedIn 구독 링크 사용. 스킬은 "에이전틱 엔지니어링 / 문제해결 종합 스킬셋 정립 및 발행"으로 02_wild-mental-skills의 스킬 포함, aztks-review·grill-it·notion 관련 제외, 종류별 분류 | applied:app/src/data/publishing.ts, app/src/components/sections/PublishingSection.tsx, app/src/styles/{publishing,nav}.css, app/src/i18n/strings.ts, app/src/data/nav.ts, app/src/App.tsx, app/src/components/sections/FintechAxSection.tsx, CLAUDE.md, docs/linkedin-web-profile-diff.md §3
- [x] T5  | MINOR | 모두의연구소 경력 표 추가 · 5기 이후 기수 | status:RESOLVED | decision:B) 경력 표에 넣지 않음 | applied:CLAUDE.md 신규 이력 반영 규칙 수정, docs/linkedin-web-profile-diff.md §3
- [x] T6  | MINOR | 기간 충돌 5건 확정값 | status:RESOLVED | decision:T1 적용 — 4건 웹 유지, 한국정보교육원 종료 2026.07 | applied:app/src/data/career.ts, docs/linkedin-web-profile-diff.md §3
- [x] T7  | MINOR | 직함 표기 기준 | status:RESOLVED | decision:T1 적용 — 럭스로보 팀장 · 키즈노트 연구원 웹 유지 | applied:docs/linkedin-web-profile-diff.md §3
- [x] T8  | MINOR | aSSIST 학위 표기 | status:RESOLVED | decision:B) 약어 풀기 + Executive MBA | applied:app/src/data/about.ts, CLAUDE.md 사용자 확인 정정, docs/linkedin-web-profile-diff.md §3 (EMERITUS 산출물 미반영)
- [x] T9  | MINOR | 교육 · 자격 추가 항목 | status:RESOLVED | decision:추가 안함 | applied:docs/linkedin-web-profile-diff.md §3
- [x] T10 | MINOR | 기관 영문명 통일 | status:RESOLVED | decision:T1 적용 — 웹 표기 유지, LinkedIn 정정 목록은 T14로 | applied:docs/linkedin-web-profile-diff.md §3
- [x] T11 | MINOR | LinkedIn About 3축 ↔ 웹 핵심 강점 정렬 | status:RESOLVED | decision:C) 채널별로 다르게 둠 | applied:docs/linkedin-web-profile-diff.md §3
- [x] T12 | MINOR | 추천사 인용 방식 | status:RESOLVED | decision:C) 현행 유지 | applied:docs/linkedin-web-profile-diff.md §3
- [x] T13 | MINOR | 세부 문구 보강 묶음 | status:RESOLVED | decision:KOSA 업무에 TOPCIT 명시, 코인빗 Go 매칭 엔진 추가, 스킬셋 정립 발행 부분에 10+ 핵심 스킬 공개로 표시하고 문서 및 커리어 카드 제거 | applied:app/src/data/{career,publishing}.ts, app/src/i18n/{projects,strings}.ts, app/src/components/sections/PublishingSection.tsx, CLAUDE.md, docs/linkedin-web-profile-diff.md §3
- [x] T14 | MINOR | LinkedIn 역방향 보강 산출 범위 | status:RESOLVED | decision:A) 붙여넣기용 초안 문서 | applied:docs/linkedin-update-drafts.md, docs/linkedin-web-profile-diff.md §3
