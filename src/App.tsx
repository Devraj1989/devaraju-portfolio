import { useEffect, useState } from 'react';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ClickToProfitDiagram } from './components/ClickToProfitDiagram';
import { ExperienceSection } from './components/ExperienceSection';
import { FrameworkSection } from './components/FrameworkSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { StackAndContactSection } from './components/StackAndContactSection';
import { SystemsSection } from './components/SystemsSection';
import { CaseStudyCategory } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory>('all');
  const [activePillarFilter, setActivePillarFilter] = useState<number | null>(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleFilterByPillar = (pillarId: number) => {
    setActiveCategory('all');
    setActivePillarFilter(pillarId);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCaseStudyFromHero = (caseStudyId: string) => {
    setActiveCategory('all');
    setActivePillarFilter(null);
    setSelectedCaseStudyId(caseStudyId);
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 transition-colors duration-150 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />

      <main>
        <HeroSection
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
          onSelectCaseStudy={handleSelectCaseStudyFromHero}
          onOpenResumePreview={() => setResumePreviewOpen(true)}
        />

        <ClickToProfitDiagram />

        <FrameworkSection
          activePillarFilter={activePillarFilter}
          onFilterByPillar={handleFilterByPillar}
        />

        <CaseStudiesSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activePillarFilter={activePillarFilter}
          onClearPillarFilter={() => setActivePillarFilter(null)}
          selectedCaseStudyId={selectedCaseStudyId}
          onSelectCaseStudy={setSelectedCaseStudyId}
        />

        <SystemsSection />

        <ExperienceSection />

        <StackAndContactSection onOpenResumePreview={() => setResumePreviewOpen(true)} />
      </main>

      <ResumePreviewModal
        isOpen={resumePreviewOpen}
        onClose={() => setResumePreviewOpen(false)}
      />
    </div>
  );
}
