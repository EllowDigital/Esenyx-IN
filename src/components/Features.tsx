import { QrCode, LayoutDashboard, Users, Calendar, Store, Crown, Mail, Cloud } from 'lucide-react'

const features = [
  {
    icon: QrCode,
    title: 'QR E-Pass Generation',
    description: 'Instant digital passes with QR codes for seamless entry and tracking.',
  },
  {
    icon: LayoutDashboard,
    title: 'Real-Time Dashboard',
    description:
      'Monitor registrations, check-ins, and analytics live from one powerful interface.',
  },
  {
    icon: Users,
    title: 'On-Site Check-In Support',
    description: 'Dedicated event-day team ensures smooth entry management and support.',
  },
  {
    icon: Calendar,
    title: 'Multi-Event Management',
    description: 'Manage multiple events simultaneously with unified control and reporting.',
  },
  {
    icon: Store,
    title: 'Exhibitor Onboarding',
    description: 'Streamlined booth assignment and exhibitor registration process.',
  },
  {
    icon: Crown,
    title: 'VIP Management',
    description: 'Special handling for VIP attendees with priority access and tracking.',
  },
  {
    icon: Mail,
    title: 'Email Notifications',
    description: 'Automated confirmations, reminders, and updates for all participants.',
  },
  {
    icon: Cloud,
    title: 'Cloud Analytics',
    description: 'Secure cloud-hosted data with comprehensive insights and reporting.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful <span className="text-primary-foreground">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run flawless events from start to finish
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
