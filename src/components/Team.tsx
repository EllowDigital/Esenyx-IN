import teamImage from '@/assets/team-photo.jpg'
import { Headphones, Shield, Clock } from 'lucide-react'

const Team = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Event Day <span className="text-primary">Support Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals ensuring your event runs flawlessly
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="EllowDigital Event Support Team"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Professional On-Ground Support</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EllowDigital provides trained event professionals who work alongside you on event
                  day, handling check-ins, troubleshooting, and ensuring seamless attendee
                  experiences.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">24/7 Event Support</h4>
                    <p className="text-muted-foreground">
                      Round-the-clock assistance before, during, and after your event
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">Trained Professionals</h4>
                    <p className="text-muted-foreground">
                      Experienced team members equipped to handle any situation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">Quick Response Time</h4>
                    <p className="text-muted-foreground">
                      Immediate support for urgent issues and last-minute changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
