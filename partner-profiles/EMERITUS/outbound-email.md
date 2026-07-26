# Outbound Email — 프로필 첨부 회신

> 이 bio가 첨부될 이메일. **bio는 이 이메일의 주장을 뒷받침하는 증거물**이므로, 두 문서의 주장이 어긋나면 안 된다.

## 발송 정보

| 항목 | 값 |
|------|-----|
| To | Neha Sengupta `neha.sengupta@emeritus.org` |
| Cc | Meenakshi Sharma `meenakshi.sharma@emeritus.org` (Project Lead 인계됨), Anuradha |
| Subject | `Re: Engagement Opportunity : ByungJun Park : (Korean Engagement)` |
| 첨부 | `output/ByungJun-Park-Emeritus-Bio-2026.pptx` |
| 발송 목표일 | 2026-07-27 |

## 본문 (사용자 작성 초안)

```
Dear Neha,

Thank you for reaching out and for your continued interest in having me facilitate these sessions.

I have reviewed the details for Modules 3 and 4. Interestingly, the more I delve into the
Emeritus curriculum, the more I realize how strongly it overlaps with the AI-native Product
Manager training program I am currently leading full-time. My work in this program involves
designing and delivering practical, industry-focused content that covers the scope of your
Modules 5 through 10.

Due to the intensive nature of my current training program, which runs full-time until
October 1st, I am unfortunately unable to accommodate the schedule for Module 3 (Aug 17th–21st)
and Module 4 (Sep 7th–11th).

However, I would be very interested in exploring future opportunities where we can align our
schedules. My background is a particularly strong fit for the latter half of your program:

Module 6 (Change Readiness): I have participated in several academic research projects in this
field and can provide in-depth, research-backed insights for this topic.

Modules 7–10: Given my professional background in engineering and my current activities in
Product Ownership consulting, I am confident I can provide high-level, practical education that
covers these modules comprehensively.

I sincerely appreciate your persistent invitations to collaborate. I have attached my updated
profile to this email and would love to discuss how we might work together on future sessions
that allow for a better schedule alignment.

I look forward to hearing from you.

Best regards,

ByungJun Park

Principal AI & IT Education Consultant, MakersWorld Inc.
```

## 이메일 ↔ bio 정합 요건

이메일이 주장하고 bio가 증명해야 하는 항목. **하나라도 bio에서 확인되지 않으면 이메일이 공허해진다.**

| 이메일의 주장 | bio에서 증명되는 위치 | 상태 |
|---------------|----------------------|------|
| "AI-native Product Manager training program … currently leading full-time" | Current Positions 또는 Experience bullet 2 | ⛔ **원천 부재** — 미해결 이슈 3. 확인 전에는 bio에 넣지 않는다 |
| "covers the scope of your Modules 5 through 10" | **Core Topics 3개**가 실행·적용 계열 (`content-map.md` §6) | ✅ |
| "Module 6 (Change Readiness) … academic research projects" | Experience bullet 2 문장 안의 `Contributor to policy research on AI education and curriculum innovation (KRIVET; Hanbat National University)` | ⚠️ **조건부** — 아래 주의 참조 |
| "Modules 7–10 … professional background in engineering" | Experience bullet 1 (키즈노트·코인빗 수치) + 산업 표 | ✅ |
| "current activities in Product Ownership consulting" | Sub Topics의 PRD·JTBD·Discovery 항목 (`[SRC2]` 근거) | ✅ |

> ⚠️ **Module 6 행이 이 문서 전체에서 가장 약한 고리다.**
> ① 해당 연구 2건은 *조직 변화관리(change management)* 가 아니라 **인력·교육과정 전환** 연구다. 이메일에서 "Change Readiness"를 그대로 쓰면 bio가 받쳐주지 못한다. 이메일 문구를 `workforce and curriculum transformation` 쪽으로 좁히거나, 최소한 "research-backed insights"의 범위를 그 방향으로 명시하는 편이 안전하다.
> ② `content-map.md` §4 초안 문장에서 이 연구 언급이 삭제되면 이 행은 즉시 ⛔가 된다. 원고 수정 시 반드시 함께 점검할 것.

## 발송 전 확인 사항

- [ ] **Module 번호 표기** — 5~10 / 6 / 7~10 숫자를 그대로 쓸지, 주제명으로 바꿀지 결정 (미해결 이슈 4). learning journey 원본 미확보 상태에서 숫자를 쓰면 오지시 위험
- [ ] **서명 타이틀** — bio의 Current Position 표기와 이메일 서명이 어긋나지 않게 맞춘다 (미해결 이슈 1). bio에서 MakersWorld를 빼고 서명에만 남기면 수신자가 불일치로 읽는다
- [ ] **알림 콜 응답 누락** — Neha가 "introductory alignment call with the client next week" 가능 여부를 물었는데 초안에 답이 없다. 3·4를 거절하더라도 **향후 모듈 논의를 위한 콜에는 응한다**는 한 문장을 넣는 편이 다음 기회로 이어진다
- [ ] Meenakshi Sharma를 Cc에 포함 (7/17 메일에서 Project Lead로 인계 명시)
- [ ] 첨부 파일명 확인
