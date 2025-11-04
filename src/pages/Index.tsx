import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Dashboard from '@/components/Dashboard'
import Team from '@/components/Team'
import OurWork from '@/components/OurWork'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Pricing />
      <Dashboard />
      <Team />
      <OurWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
