import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, TrendingUp, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import teamPhoto from '@/assets/team-photo.jpg'

const AboutPage = () => {
  const navigate = useNavigate()

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We constantly push boundaries to deliver cutting-edge event management solutions that stay ahead of industry trends.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description:
        'Your success is our priority. We provide dedicated support and tailored solutions for every event.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We maintain the highest standards in platform reliability, security, and user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with event organizers to understand needs and deliver solutions that truly work.',
    },
  ]

  const stats = [
    { value: '5,000+', label: 'Events Managed' },
    { value: '100K+', label: 'Attendees Processed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime' },
  ]

  const milestones = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'EllowDigital founded with a vision to transform event management in India.',
    },
    {
      year: '2023',
      title: 'Esenyx Launch',
      description:
        'Launched Esenyx platform, revolutionizing event registration and check-in processes.',
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description:
        'Expanded to serve major trade shows, corporate summits, and conferences across India.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description:
        'Became the preferred event management platform for large-scale exhibitions and expos.',
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
              About <span className="text-primary">Esenyx</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transforming event management through innovation, dedication, and cutting-edge
              technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Eye className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Built by Event Enthusiasts for Event Organizers
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Esenyx was born from a simple observation: event management was too complex, too
                  manual, and too prone to errors. We saw organizers struggling with spreadsheets,
                  paper lists, and chaos at entry gates.
                </p>
                <p>
                  As a product of{' '}
                  <span className="font-semibold text-foreground">EllowDigital</span>, we combined
                  our expertise in digital solutions with deep insights from event professionals to
                  create something truly transformative.
                </p>
                <p>
                  Today, Esenyx powers events across India—from intimate workshops to massive trade
                  expos—helping organizers focus on creating memorable experiences while we handle
                  the logistics.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={teamPhoto} alt="Esenyx Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">5,000+</div>
                  <div className="text-white/80">Events Managed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all border border-border hover:border-primary/50 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              From vision to industry leadership
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-card/10 backdrop-blur-sm rounded-xl border border-border/20">
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    {milestone.description}
                  </p>
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
              Ready to Transform Your Events?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join hundreds of organizers who trust Esenyx for their event management needs
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
                  Contact Us
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

export default AboutPage
