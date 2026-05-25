# Component Tree — profile-vibe

React component hierarchy for the Vite app in `app/`. Leaf nodes are mostly presentational (`<section>`, tables, native elements). External libraries are shown where they are direct JSX children.

## Entry & shell

```mermaid
flowchart TD
    main["main.tsx"]
    SM["StrictMode (react)"]
    App["App"]
    EMP["EvidenceModalProvider"]

    main --> SM
    SM --> App
    App --> EMP

    EMP --> GN["GlobalNav"]
    EMP --> MD["MobileDrawer"]
    EMP --> HS["HeroSection"]
    EMP --> AS["AboutSection"]
    EMP --> SS["StrengthsSection"]
    EMP --> KGS["KdtGraduationSection"]
    EMP --> TS["TeachingSection"]
    EMP --> CS["CareerSection"]
    EMP --> PIS["ProjectsIntroSection"]
    EMP --> PL["ProjectsList"]
    EMP --> CCS["ContactCtaSection"]
    EMP --> FT["Footer"]

    EMP -.->|portal when open| EML["EvidenceModalLightbox"]
    EML --> EMLC["EvidenceModalContext.Provider"]
    EMP --> EMLC
```

## Layout (`components/layout/`)

```mermaid
flowchart LR
    GN["GlobalNav"] --> NAV["nav links · email · LinkedIn · menu button"]
    MD["MobileDrawer"] --> DRAWER["overlay · NAV_LINKS · contact links"]
    FT["Footer"] --> FOOT["copyright · contact links"]
```

## Sections (`components/sections/`)

```mermaid
flowchart TD
    AS["AboutSection"]
    TL1["Timeline (education)"]
    TL2["Timeline (certifications)"]
    AS --> TL1
    AS --> TL2

    SS["StrengthsSection"]
    EIB1["EvidenceImageButton ×2"]
    SS --> EIB1

    KGS["KdtGraduationSection"]
    CC["CohortCard (×2 cohorts)"]
    EIB2["EvidenceImageButton ×2 per card"]
    KGS --> CC
    CC --> EIB2

    HS["HeroSection"]
    PIS["ProjectsIntroSection"]
    TS["TeachingSection"]
    CS["CareerSection"]
    CCS["ContactCtaSection"]

    HS --> HERO["hero copy · CTA links"]
    PIS --> INTRO["projects section intro"]
    TS --> TEACH["teaching table (TEACHING_ROWS)"]
    CS --> CAREER["career table (CAREER_ROWS)"]
    CCS --> CTA["contact CTA · mailto · LinkedIn"]
```

## Projects (`components/projects/`)

```mermaid
flowchart TD
    PL["ProjectsList"]

    PL --> SL["SriLankaWorkshop"]
    PL --> HD["HanaDtTraining"]
    PL --> KK["KakaoKidsnote"]
    PL --> AC["AxiaSoftCoinbit"]
    PL --> KR["KrivetResearch"]
    PL --> KP["KpcGlobal"]
    PL --> HB["HanbatResearch"]
    PL --> LO["LuxroboOverseas"]

    PB["ProjectBand"]
    SL --> PB
    HD --> PB
    KK --> PB
    AC --> PB
    KR --> PB
    KP --> PB
    HB --> PB
    LO --> PB

    KK --> ARC["AdRevenueChart"]
    ARC --> BAR["Bar (react-chartjs-2)"]
    ARC --> HOOK["useChartScrollJacking"]

    PB --> BAND["band layout · photo · children slot"]
```

`ProjectsList.tsx` defines eight private band components (not exported); each renders one `<ProjectBand>` with project-specific copy, tables, and metrics. Only **KakaoKidsnote** embeds **AdRevenueChart**.

## UI & evidence modal (`components/ui/`)

```mermaid
flowchart TD
    EMP["EvidenceModalProvider"]
    CTX["EvidenceModalContext"]
    EML["EvidenceModalLightbox (private)"]
    EIB["EvidenceImageButton"]
    TL["Timeline"]

    EMP --> CTX
    EMP --> EML
    EML --> LB["backdrop · dialog · img · caption"]

    EIB --> CTX
    EIB --> BTN["button · thumbnail img · zoom hint"]

    TL --> ITEMS["timeline rows from props"]
```

**Evidence flow:** `EvidenceImageButton` calls `useEvidenceModal().open()` → provider sets state → `createPortal(EvidenceModalLightbox)` on `document.body`.

## Full tree (condensed)

```mermaid
flowchart TD
    subgraph entry["Entry"]
        main["main.tsx"] --> SM["StrictMode"]
        SM --> App["App"]
    end

    subgraph app["App children"]
        App --> EMP["EvidenceModalProvider"]
        EMP --> GN["GlobalNav"]
        EMP --> MD["MobileDrawer"]
        EMP --> HS["HeroSection"]
        EMP --> AS["AboutSection"]
        EMP --> SS["StrengthsSection"]
        EMP --> KGS["KdtGraduationSection"]
        EMP --> TS["TeachingSection"]
        EMP --> CS["CareerSection"]
        EMP --> PIS["ProjectsIntroSection"]
        EMP --> PL["ProjectsList"]
        EMP --> CCS["ContactCtaSection"]
        EMP --> FT["Footer"]
        EMP -.-> EML["EvidenceModalLightbox"]
    end

    AS --> TL["Timeline"]
    SS --> EIB["EvidenceImageButton"]
    KGS --> CC["CohortCard"] --> EIB

    PL --> BANDS["8× private *Workshop bands"]
    BANDS --> PB["ProjectBand"]
    PL --> KK["KakaoKidsnote"] --> PB
    KK --> ARC["AdRevenueChart"] --> Bar["Bar (chart.js)"]

    EIB -.->|open| EML
```

## Non-component modules (reference)

| Path | Role |
|------|------|
| `app/src/hooks/useChartScrollJacking.ts` | Scroll-sync for `AdRevenueChart` sticky scroller |
| `app/src/data/*.ts` | Static content: `nav`, `about`, `career`, `teaching`, `kdt` |
| `app/src/types/index.ts` | Shared TypeScript types |
| `app/src/components/ui/EvidenceModalContext.ts` | Context + `useEvidenceModal` hook |

## File index (`.tsx` only, app source)

| File | Export(s) |
|------|-----------|
| `main.tsx` | — (bootstrap) |
| `App.tsx` | `App` (default) |
| `layout/GlobalNav.tsx` | `GlobalNav` |
| `layout/MobileDrawer.tsx` | `MobileDrawer` |
| `layout/Footer.tsx` | `Footer` |
| `sections/HeroSection.tsx` | `HeroSection` |
| `sections/AboutSection.tsx` | `AboutSection` |
| `sections/StrengthsSection.tsx` | `StrengthsSection` |
| `sections/KdtGraduationSection.tsx` | `KdtGraduationSection`, `CohortCard` (private) |
| `sections/TeachingSection.tsx` | `TeachingSection` |
| `sections/CareerSection.tsx` | `CareerSection` |
| `sections/ProjectsIntroSection.tsx` | `ProjectsIntroSection` |
| `sections/ContactCtaSection.tsx` | `ContactCtaSection` |
| `projects/ProjectsList.tsx` | `ProjectsList` + 8 private band components |
| `projects/ProjectBand.tsx` | `ProjectBand` |
| `projects/AdRevenueChart.tsx` | `AdRevenueChart` |
| `ui/Timeline.tsx` | `Timeline` |
| `ui/EvidenceImageButton.tsx` | `EvidenceImageButton` |
| `ui/EvidenceModal.tsx` | `EvidenceModalProvider`, `EvidenceModalLightbox` (private) |
