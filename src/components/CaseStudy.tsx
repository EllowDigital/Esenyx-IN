import { Award, Users, Zap, TrendingUp, Building, Star } from 'lucide-react'

const CaseStudy = () => {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Registrations' },
    { icon: Building, value: '50+', label: 'Exhibitors Onboarded' },
    { icon: Award, value: 'Zero', label: 'Downtime' },
    { icon: TrendingUp, value: '80%', label: 'Faster Check-in' },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Case Study</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Tent Decor Expo UP 2025</h2>
            <p className="text-xl text-primary font-semibold">
              Mission Accomplished – A Successful Event Delivered
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Thanks Note */}
          <div className="text-center animate-fade-in-up">
            <p className="text-lg text-muted-foreground italic">
              Special thanks to the{' '}
              <span className="font-semibold text-foreground">
                Tent, Caterers & Decorators Welfare Association of UP
              </span>
            </p>
          </div>

          {/* Overview */}
          <div
            className="max-w-4xl mx-auto space-y-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="p-8 bg-card rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EllowDigital proudly developed a comprehensive platform —{' '}
                <span className="font-semibold text-primary">Esenyx</span> — to streamline
                registration, exhibitor onboarding, and entry management for the prestigious Tent
                Decor Expo UP 2025. Our solution handled thousands of attendees and dozens of
                exhibitors with precision and ease.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-dark rounded-xl text-center space-y-3 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Additional Highlights */}
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="p-8 bg-muted/50 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <span className="font-semibold">Seamless QR-based entry system</span> eliminated
                    long queues and manual verification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <span className="font-semibold">Real-time dashboard monitoring</span> provided
                    instant insights to organizers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    <span className="font-semibold">On-site team support</span> ensured smooth
                    operations throughout the event
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative p-10 bg-gradient-dark rounded-2xl shadow-2xl">
              <div className="absolute top-8 left-8">
                <Award className="w-16 h-16 text-primary/20" />
              </div>
              <blockquote className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl text-secondary-foreground italic leading-relaxed text-center">
                  "Esenyx made our event registration and entry effortless — and the EllowDigital
                  team's on-site support was outstanding."
                </p>
                <footer className="text-center">
                  <div className="text-primary font-bold text-lg">
                    Tent Decor Expo Organizing Committee, UP
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
