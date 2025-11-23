import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import SkillsMap from '@/components/SkillsMap'
import ProjectsTimeline from '@/components/ProjectsTimeline'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <SkillsMap />
      <ProjectsTimeline />
      <Contact />
    </div>
  )
}

