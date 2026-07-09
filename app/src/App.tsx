import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FintechAxSection } from "@/components/sections/FintechAxSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsIntroSection } from "@/components/sections/ProjectsIntroSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { EvidenceModalProvider } from "@/components/ui/EvidenceModal";
import { LanguageProvider } from "@/i18n";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <LanguageProvider>
      <EvidenceModalProvider>
        <GlobalNav onToggleMobileMenu={() => setDrawerOpen((v) => !v)} />
        <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        <HeroSection />
        <StrengthsSection />
        <AchievementsSection />
        <TeachingSection />
        <CareerSection />

        <FintechAxSection />

        <ProjectsIntroSection />
        <ProjectsList />

        <ContactCtaSection />
        <Footer />
      </EvidenceModalProvider>
    </LanguageProvider>
  );
}

export default App;
