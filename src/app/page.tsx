import { AboutBeyond } from "@/components/sections/AboutBeyond";
import {
  CICDPipeline,
  SystemsLab,
} from "@/components/sections/SystemsAndCICD";
import { ConnectionContact } from "@/components/worlds/ConnectionContact";
import { HeroCore } from "@/components/worlds/HeroCore";
import { ImpactAwards } from "@/components/worlds/ImpactAwards";
import { JourneyTimeline } from "@/components/worlds/JourneyTimeline";
import { ProjectLab } from "@/components/worlds/ProjectLab";
import { SkillsEngine } from "@/components/worlds/SkillsEngine";

export default function HomePage() {
  return (
    <main id="main">
      <HeroCore />
      <SkillsEngine />
      <JourneyTimeline />
      <ProjectLab />
      <SystemsLab />
      <CICDPipeline />
      <ImpactAwards />
      <AboutBeyond />
      <ConnectionContact />
    </main>
  );
}
