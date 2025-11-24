import { motion } from 'framer-motion'
import { Users, Calendar, QrCode, TrendingUp } from 'lucide-react'

const Statistics = () => {
  const stats = [
    {
      icon: Calendar,
      value: '500+',
      label: 'Events Managed',
      color: 'text-primary',
    },
    {
      icon: Users,
      value: '100K+',
      label: 'Happy Attendees',
      color: 'text-primary',
    },
    {
      icon: QrCode,
      value: '250K+',
      label: 'QR Passes Generated',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'System Uptime',
      color: 'text-primary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Impact</span> in Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence across India's event landscape
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
