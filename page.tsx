import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { CV } from '@/components/cv'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FloatingCTA />
      <Hero />
      <About />
      <Services />
      <Projects />
      <CV />
      <Contact />
      <Footer />
    </div>
  )
}
