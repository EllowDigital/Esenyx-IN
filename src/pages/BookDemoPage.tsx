import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Users,
  Building,
  Mail,
  Phone,
  User,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useNavigate } from 'react-router-dom'
import FormSuccess from '@/components/FormSuccess'
import Footer from '@/components/Footer'

const BookDemoPage = () => {
  const navigate = useNavigate()
  const [showSuccess, setShowSuccess] = useState(false)

  const benefits = [
    {
      icon: Calendar,
      title: '30-Minute Demo',
      description: 'Quick walkthrough of all features tailored to your needs',
    },
    {
      icon: Users,
      title: 'Live Q&A',
      description: 'Ask questions and get expert answers from our team',
    },
    {
      icon: Building,
      title: 'Custom Pricing',
      description: 'Get a personalized quote based on your event size',
    },
  ]

  const demoIncludes = [
    'Complete platform walkthrough',
    'QR code entry system demonstration',
    'Real-time analytics dashboard',
    'Custom branding options',
    'Integration capabilities',
    'Pricing and packages discussion',
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Event Manager, TechCon India',
      text: 'The demo convinced us immediately. We saw exactly how it would work for our 5,000+ attendee conference.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director, Mumbai Business Summit',
      text: 'Impressive demonstration. The team answered all our questions and showed us real-world results.',
      rating: 5,
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <Badge className="mb-4" variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                Free 30-Minute Consultation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Book Your <span className="text-primary">Free Demo</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                See Esenyx in action. Schedule a personalized demo with our team and discover how we
                can transform your event management.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Card className="border-border/50 shadow-xl">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
                    <form
                      action="https://formsubmit.co/ellowdigitalindia@gmail.com"
                      method="POST"
                      onSubmit={() => {
                        setTimeout(() => setShowSuccess(true), 100)
                      }}
                      className="space-y-6"
                    >
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_subject" value="New Demo Request - Esenyx" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="hidden"
                        name="_next"
                        value={`${window.location.origin}/book-demo?success=true`}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <User className="w-4 h-4 text-primary" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            maxLength={100}
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Mail className="w-4 h-4 text-primary" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            maxLength={255}
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="john@company.com"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Phone className="w-4 h-4 text-primary" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            maxLength={20}
                            pattern="[0-9+\-\s()]+"
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        {/* Organization */}
                        <div className="space-y-2">
                          <label
                            htmlFor="organization"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Building className="w-4 h-4 text-primary" />
                            Organization *
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            required
                            maxLength={150}
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="Your Company Name"
                          />
                        </div>

                        {/* Event Type */}
                        <div className="space-y-2">
                          <label
                            htmlFor="eventType"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Calendar className="w-4 h-4 text-primary" />
                            Event Type *
                          </label>
                          <select
                            id="eventType"
                            name="event_type"
                            required
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          >
                            <option value="">Select Event Type</option>
                            <option value="Trade Show/Expo">Trade Show/Expo</option>
                            <option value="Corporate Summit">Corporate Summit</option>
                            <option value="Conference">Conference</option>
                            <option value="Workshop/Seminar">Workshop/Seminar</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Cultural Festival">Cultural Festival</option>
                            <option value="Product Launch">Product Launch</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Expected Attendees */}
                        <div className="space-y-2">
                          <label
                            htmlFor="attendees"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Users className="w-4 h-4 text-primary" />
                            Expected Attendees *
                          </label>
                          <select
                            id="attendees"
                            name="expected_attendees"
                            required
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          >
                            <option value="">Select Range</option>
                            <option value="0-200">0-200</option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1,000</option>
                            <option value="1001-2000">1,001-2,000</option>
                            <option value="2001-5000">2,001-5,000</option>
                            <option value="5000+">5,000+</option>
                          </select>
                        </div>

                        {/* Preferred Date */}
                        <div className="space-y-2">
                          <label
                            htmlFor="preferred_date"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Calendar className="w-4 h-4 text-primary" />
                            Preferred Demo Date *
                          </label>
                          <input
                            type="date"
                            id="preferred_date"
                            name="preferred_date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>

                        {/* Preferred Time */}
                        <div className="space-y-2">
                          <label
                            htmlFor="preferred_time"
                            className="flex items-center gap-2 text-sm font-medium"
                          >
                            <Clock className="w-4 h-4 text-primary" />
                            Preferred Time Slot *
                          </label>
                          <select
                            id="preferred_time"
                            name="preferred_time"
                            required
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          >
                            <option value="">Select Time</option>
                            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                            <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                            <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                            <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                            <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                            <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="flex items-center gap-2 text-sm font-medium"
                        >
                          What would you like to see in the demo?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          maxLength={1000}
                          className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                          placeholder="Tell us about your specific requirements or any questions you have..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                        >
                          Schedule Demo
                        </Button>
                      </motion.div>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted by our team.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* What's Included */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What's Included in the Demo</h3>
                    <ul className="space-y-3">
                      {demoIncludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/50 transition-all duration-300"
                    >
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Testimonials */}
                <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-bold">What Clients Say</h3>
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="space-y-2 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                      >
                        <div className="flex gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                        <div>
                          <p className="text-sm font-semibold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && <FormSuccess onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </>
  )
}

export default BookDemoPage
