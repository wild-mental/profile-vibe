# Sources — `EMERITUS`

> 이 파트너 프로필 작성 시 참조할 **기존 프로필·이력 문서** 목록.
> 원문을 복제하지 말고 경로·버전·활용 포인트를 적는다.

## Primary

| 경로 | 버전/일자 | 활용 포인트 |
|------|-----------|-------------|
| `source-docs/01-ai-it-profile-original-doc.md` | 2026-05 기준 | **모든 사실의 1차 원천.** 학력·자격·강의 이력 17건·현업 경력 8건·주요 프로젝트 이력. 수치(매출 2배, 장애율 0%, 분당 300만 건, DAU 300만, KDT 100% 수료) 전부 여기서 나온다 |
| `source-docs/02-fintech-specifications-update.md` | 2026-05 | **금융 도메인 포지셔닝의 핵심.** 하나금융 인프라 아키텍처 가이드, ISMS-P, 데이터 기반 프로덕트 고도화, JTBD·Five Forces·Value Chain 의 LLM 워크플로우 이식 방법론 |
| `app/src/data/career.ts` | 2026-05 | 현업 경력 8건의 **확정 영문 표기** (기관명·직위·직무). 영문 사명 임의 번역 금지 — 이 파일을 따른다 |
| `app/src/data/teaching.ts` | 2026-05 | 강의 이력 17건의 **확정 영문 표기** |
| `app/src/data/about.ts` | 2026-05 | 학력 3건 · 자격 3건 **확정 영문 표기** |

## Secondary / Past versions

| 경로 | 버전/일자 | 활용 포인트 |
|------|-----------|-------------|
| `app/src/i18n/strings.ts` | 2026-07 | 확정된 영문 카피 톤 기준. `hero`·`strengths`·`about` 섹션의 영문 문장이 이 프로필의 **문체 레퍼런스** |
| `app/src/data/kdt.ts` | 2026-05 | KDT 장기과정 성과 상세 (수료율·만족도 근거) |
| `05-business-profile-merged.html` | 2026-05-29 | 이전 통합 프로필 HTML 버전 — 섹션 구성 참고용 |
| `docs/en-copy-comparison.md` | 2026-05 | 영문 카피 검토 이력. 표현 선택의 선례 |
| `partner-profiles/README.md` | 2026-07-26 | 이 작업 경로의 제작 규약 |

## 이미지 자산

| 경로 | 용도 |
|------|------|
| `assets/profile-byungjun-park.png` | **헤드샷** (정사각 크롭 필요) |
| `assets/enterprise-it-training-satisfaction_en.png` | 우측 레일 — 기업 교육 만족도 (영문판) |
| `assets/linkedin-recommendation-kakao-kidsnote.png` | 대안 — 카카오 동료 추천 |
| `assets/band-photo-hana-linux-training.jpeg` | 하나금융 교육 현장 (필요 시) |
| `assets/band-photo-koica-srilanka-workshop.jpeg` | KOICA 스리랑카 워크샵 현장 (글로벌 딜리버리 증거) |

## 파트너 제공 자료 (이 폴더)

| 경로 | 용도 |
|------|------|
| `Educator Bio Template - 2026 (1).pptx` | **제출 양식 원본.** slide3을 채운다 |
| `스크린샷 2026-07-26 오후 4.06.18.png` | slide2 완성 샘플 렌더 — 분량·톤의 기준 |

## Notes

- 수치·소속·기간은 위 원천에 있는 값만 사용한다 (profile-sum Fidelity).
- **영문 고유명사는 `career.ts` / `teaching.ts` / `about.ts` 표기를 단일 소스로 따른다.** 같은 기관을 두 문서에서 다르게 부르면 신뢰도가 깎인다.
- 원천에 없는 주장은 `brief.md`의 계획·가정으로만 명시적으로 허용한다.
- ⚠️ **원천 갱신 필요**: 2026.07~10 진행 중인 AI-native PM 과정이 `source-docs/`에 없다 (`brief.md` 미해결 이슈 3). 확인 후 `01-ai-it-profile-original-doc.md` 강의 이력 표에 추가하고, 그 다음에 bio에 반영한다.
