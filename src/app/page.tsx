import Navbar from "@/components/Navbar"
import AboutMe from "@/components/AboutMe"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import TechnologiesCarousel from "@/components/TechnologiesCarousel"
import WorkHistory from "@/components/WorkHistory"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <div className="space-y-0">
      <Navbar />

      {/* AboutMe History */}
      <AboutMe />

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <TechnologiesCarousel />
      </section>

      {/* Work History */}
      <WorkHistory />

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}