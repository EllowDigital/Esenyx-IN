import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 bg-gradient-hero overflow-hidden">
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default ContactPage
