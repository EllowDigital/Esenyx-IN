import { motion } from 'framer-motion'
import {
  QrCode,
  LayoutDashboard,
  Users,
  Calendar,
  Store,
  Crown,
  Mail,
  Cloud,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Headphones,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import dashboardPreview from '@/assets/dashboard-preview.jpg'

const ServicesPage = () => {
  const navigate = useNavigate()

  const coreFeatures = [
    {
      icon: QrCode,
      title: 'QR E-Pass Generation',
      description: 'Instant digital passes with unique QR codes for seamless entry and tracking.',
      benefits: [
        'Instant pass generation upon registration',
        'Secure QR code encryption',
        'Email and SMS delivery',
        'Customizable pass designs',
      ],
    },
    {
      icon: LayoutDashboard,
      title: 'Real-Time Dashboard',
      description:
        'Monitor registrations, check-ins, and analytics live from one powerful interface.',
      benefits: [
        'Live attendance tracking',
        'Registration analytics',
        'Exhibitor performance metrics',
        'Customizable reports',
      ],
    },
    {
      icon: Users,
      title: 'On-Site Check-In Support',
      description: 'Dedicated event-day team ensures smooth entry management and support.',
      benefits: [
        'Professional on-site staff',
        'Hardware setup and support',
        'Real-time issue resolution',
        'Post-event reporting',
      ],
    },
    {
      icon: Calendar,
      title: 'Multi-Event Management',
      description: 'Manage multiple events simultaneously with unified control and reporting.',
      benefits: [
        'Unlimited event creation',
        'Cross-event analytics',
        'Template reuse',
        'Bulk operations',
      ],
    },
    {
      icon: Store,
      title: 'Exhibitor Onboarding',
      description: 'Streamlined booth assignment and exhibitor registration process.',
      benefits: [
        'Automated booth allocation',
        'Exhibitor portal access',
        'Document management',
        'Payment tracking',
      ],
    },
    {
      icon: Crown,
      title: 'VIP Management',
      description: 'Special handling for VIP attendees with priority access and tracking.',
      benefits: [
        'Priority check-in lanes',
        'Custom access levels',
        'Special badges',
        'Exclusive area access',
      ],
    },
  ]

  const additionalFeatures = [
    {
      icon: Mail,
      title: 'Automated Communications',
      description: 'Email and SMS notifications for confirmations, reminders, and updates.',
    },
    {
      icon: Cloud,
      title: 'Cloud Analytics',
      description: 'Secure cloud-hosted data with comprehensive insights and reporting.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and data protection for all attendee information.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for high-volume events with thousands of simultaneous check-ins.',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for multiple languages to cater to diverse audiences.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance when you need it.',
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Setup & Configuration',
      description:
        'We work with you to configure the platform according to your event requirements and branding.',
    },
    {
      number: '02',
      title: 'Registration Launch',
      description:
        'Launch your registration portal with custom forms, payment integration, and automated confirmations.',
    },
    {
      number: '03',
      title: 'Pre-Event Preparation',
      description:
        'Generate QR passes, configure check-in stations, and brief your team on the system.',
    },
    {
      number: '04',
      title: 'Event Day Execution',
      description:
        'Our team provides on-site support while you monitor everything from the real-time dashboard.',
    },
    {
      number: '05',
      title: 'Post-Event Analytics',
      description:
        'Receive comprehensive reports and insights to measure success and improve future events.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive event management solutions designed for modern organizers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Core <span className="text-primary">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful event management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all border border-border hover:border-primary/50 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Powerful Dashboard, <span className="text-primary">Simple Interface</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Monitor every aspect of your event from a single, intuitive dashboard. Get real-time
                insights, track attendance, manage exhibitors, and generate reports—all at your
                fingertips.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time attendance tracking',
                  'Custom analytics and reports',
                  'Exhibitor performance metrics',
                  'Revenue and payment tracking',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={dashboardPreview}
                  alt="Esenyx Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Additional <span className="text-primary">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From setup to success in five simple steps
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary p-12 rounded-3xl text-center space-y-6 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Elevate Your Events?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              See how Esenyx can transform your event management process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto"
                  onClick={() => navigate('/book-demo')}
                >
                  Book a Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto bg-white/10 border-white text-white hover:bg-white/20"
                  onClick={() => navigate('/contact')}
                >
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default ServicesPage
