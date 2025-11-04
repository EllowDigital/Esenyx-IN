import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, QrCode, Users } from 'lucide-react'
import heroImage from '@/assets/hero-event.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-lg animate-scale-in">
            <QrCode className="w-8 h-8 text-primary" />
            <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Esenyx
            </span>
          </div>

          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Simplify Events.
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Empower Experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your next-gen Event Registration & Entry Management System.
            <br />
            Streamline attendees, exhibitors, and VIPs effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto group">
              Book a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
              Get Started
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-12">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-md">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Multi-Event Management</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-md">
              <QrCode className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">QR E-Pass Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-md">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Real-Time Tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  )
}

export default Hero
