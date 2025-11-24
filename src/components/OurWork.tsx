import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Building, TrendingUp, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const OurWork = () => {
  const stats = [
    { icon: Users, value: '4,300+', label: 'Total Registrations' },
    { icon: Building, value: '85+', label: 'Exhibitors Managed' },
    { icon: TrendingUp, value: '80%', label: 'Faster Check-ins' },
    { icon: Zap, value: '100%', label: 'Success Rate' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full hover:bg-primary/20 transition-colors">
              <Award className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-semibold text-primary">Success Stories</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-secondary-foreground"
          >
            Our Work
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto"
          >
            Explore how Esenyx is powering events across India.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto"
          >
            See how we've helped event organizers deliver exceptional experiences — from trade expos
            to corporate summits.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 bg-background/10 backdrop-blur-sm rounded-xl text-center space-y-2 border border-primary/10 hover:border-primary/30 hover:bg-background/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-secondary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="pt-6">
            <Link to="/our-work">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="hero"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto group shadow-lg hover:shadow-primary/20"
                >
                  View Work Timeline
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurWork
