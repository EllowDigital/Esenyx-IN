import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    toast.success("Thank you! We'll get back to you soon.")
    setFormData({
      name: '',
      email: '',
      organization: '',
      eventType: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
                onSubmit={handleSubmit}
                className="space-y-6 p-8 bg-card rounded-2xl shadow-lg border border-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Conference, Expo, etc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
