import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Statistics from '@/components/Statistics'
import Dashboard from '@/components/Dashboard'
import Testimonials from '@/components/Testimonials'
import OurWork from '@/components/OurWork'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Statistics />
      <Dashboard />
      <Testimonials />
      <OurWork />
      <FAQ />
      <CTASection />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Index
