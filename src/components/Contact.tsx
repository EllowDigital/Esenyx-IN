import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FormSuccess from './FormSuccess'

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <section className="py-24 px-4 bg-muted/30" id="contact">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Talk About Your <span className="text-primary">Event</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to schedule a demo or discuss your event requirements
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">
                  We're here to help make your event unforgettable
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a
                      href="mailto:ellowdigitalindia@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ellowdigitalindia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a
                      href="tel:+918960446756"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8960446756
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <form
                action="https://formsubmit.co/ellowdigitalindia@gmail.com"
                method="POST"
                onSubmit={() => {
                  setTimeout(() => setShowSuccess(true), 100)
                }}
                className="space-y-6 p-8 bg-card rounded-2xl shadow-lg border border-border"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Esenyx" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}/?success=true#contact`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      maxLength={150}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-medium">
                      Event Type
                    </label>
                    <input
                      id="eventType"
                      name="event_type"
                      type="text"
                      maxLength={100}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Conference, Expo, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && <FormSuccess onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </section>
  )
}

export default Contact
