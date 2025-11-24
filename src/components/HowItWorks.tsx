import { UserPlus, Ticket, ScanLine, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Register',
    description: 'Attendees register online through your custom event portal',
  },
  {
    number: '02',
    icon: Ticket,
    title: 'Get E-Pass',
    description: 'Instant QR-coded e-passes delivered via email and SMS',
  },
  {
    number: '03',
    icon: ScanLine,
    title: 'Check-in',
    description: 'Quick QR scan entry with our on-site support team',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Track Live Stats',
    description: 'Monitor real-time attendance, engagement, and insights',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
}

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-background overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your event management
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {/* Connection Lines (hidden on mobile) */}
            <motion.div
              className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary"
              style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center space-y-4 group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number Badge */}
                <motion.div
                  className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-xl shadow-lg group-hover:shadow-yellow transition-shadow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-card border-2 border-primary/20 rounded-xl flex items-center justify-center shadow-sm group-hover:border-primary/40 group-hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
