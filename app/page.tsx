import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import SkillsMap from '@/components/SkillsMap'
import ProjectsTimeline from '@/components/ProjectsTimeline'
import CodePlayground from '@/components/CodePlayground'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutMe />
      <SkillsMap />
      <ProjectsTimeline />
      <CodePlayground />
      <Contact />
    </div>
  )
}

