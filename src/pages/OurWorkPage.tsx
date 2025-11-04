import { motion, Variants } from 'framer-motion'
import { Award, Users, Building, TrendingUp, Calendar, MapPin, Star, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

const OurWorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const caseStudies = [
    {
      year: '2025',
      name: 'Tent Decor Expo UP 2025',
      date: 'February 2025',
      location: 'Uttar Pradesh, India',
      overview:
        'EllowDigital proudly developed a comprehensive platform — Esenyx — to streamline registration, exhibitor onboarding, and entry management for the prestigious Tent Decor Expo UP 2025. Our solution handled thousands of attendees and dozens of exhibitors with precision and ease.',
      results: [
        { icon: Users, label: 'Registrations', value: '2,500+' },
        { icon: Building, label: 'Exhibitors Onboarded', value: '50+' },
        { icon: Award, label: 'Downtime', value: 'Zero' },
        { icon: TrendingUp, label: 'Faster Check-in', value: '80%' },
      ],
      highlights: [
        'Seamless QR-based entry system eliminated long queues and manual verification',
        'Real-time dashboard monitoring provided instant insights to organizers',
        'On-site team support ensured smooth operations throughout the event',
      ],
      testimonial: {
        quote:
          "Esenyx made our event registration and entry effortless — and the EllowDigital team's on-site support was outstanding.",
        author: 'Tent Decor Expo Organizing Committee, UP',
      },
      thanks: 'Special thanks to the Tent, Caterers & Decorators Welfare Association of UP',
    },
    {
      year: '2024',
      name: 'TechSummit India',
      date: 'November 2024',
      location: 'Bangalore, India',
      overview:
        "Digital registration platform with live check-in tracking and exhibitor insights for one of India's premier technology conferences.",
      results: [
        { icon: Users, label: 'Registrations', value: '1,800+' },
        { icon: Building, label: 'Exhibitors', value: '35+' },
        { icon: Award, label: 'Check-in Speed', value: '75% Faster' },
        { icon: TrendingUp, label: 'User Satisfaction', value: '95%' },
      ],
      highlights: [
        'Multi-tier registration system for attendees, speakers, and VIPs',
        'Integrated badge printing with QR codes',
        'Real-time analytics dashboard for organizers',
      ],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="bg-gradient-hero py-16 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/">
              <Button
                variant="ghost"
                className="mb-8 text-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-semibold text-primary">Case Studies</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our Work
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore how Esenyx is transforming event management across India — from expos to
              corporate summits.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Timeline */}
      <main className="py-16 px-4">
        <motion.div
          className="container mx-auto max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Line */}
              {index < caseStudies.length - 1 && (
                <motion.div
                  className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ transformOrigin: 'top' }}
                />
              )}

              <div className="grid md:grid-cols-[auto,1fr] gap-8">
                {/* Year Badge */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-shadow">
                    <span className="text-2xl font-bold text-white">{study.year.slice(2)}</span>
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Header */}
                  <motion.div
                    className="bg-gradient-dark p-8 text-secondary-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.h2
                      className="text-3xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {study.name}
                    </motion.h2>
                    <motion.div
                      className="flex flex-wrap gap-4 text-sm text-secondary-foreground/80"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Calendar className="w-4 h-4" />
                        <span>{study.date}</span>
                      </div>
                      <div className="flex items-center gap-2 hover:text-primary transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span>{study.location}</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Body */}
                  <div className="p-8 space-y-8">
                    {/* Thanks Note */}
                    {study.thanks && (
                      <p className="text-muted-foreground italic text-center py-4 border-y border-border">
                        {study.thanks}
                      </p>
                    )}

                    {/* Overview */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
                    </div>

                    {/* Results Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-bold mb-4">Key Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 bg-muted rounded-lg text-center space-y-2 hover:bg-primary/10 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <motion.div
                              className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <result.icon className="w-5 h-5 text-primary" />
                            </motion.div>
                            <div className="text-2xl font-bold">{result.value}</div>
                            <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                              {result.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Highlights */}
                    {study.highlights && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                        <ul className="space-y-3">
                          {study.highlights.map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 20 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              </motion.div>
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {highlight}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Testimonial */}
                    {study.testimonial && (
                      <motion.div
                        className="bg-gradient-dark p-6 rounded-xl hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <blockquote className="space-y-4">
                          <motion.p
                            className="text-lg text-secondary-foreground italic"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            "{study.testimonial.quote}"
                          </motion.p>
                          <motion.footer
                            className="text-primary font-semibold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            — {study.testimonial.author}
                          </motion.footer>
                        </blockquote>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl mt-20 p-8 md:p-12 bg-gradient-dark rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary-foreground relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Transform Your Next Event?
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-foreground/80 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join the growing number of organizers who trust Esenyx for seamless event management.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/#contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-primary/30"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </Link>
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto shadow-lg">
                  Explore Features
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default OurWorkPage
