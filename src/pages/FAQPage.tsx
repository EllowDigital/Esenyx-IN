import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, HelpCircle } from 'lucide-react'

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const faqCategories = {
    general: [
      {
        question: 'What is Esenyx?',
        answer:
          'Esenyx is a comprehensive event management platform that helps you create, manage, and track events of all sizes. From registration to check-in, we handle everything you need to run successful events.',
      },
      {
        question: 'How does Esenyx work?',
        answer:
          'Simply create your event, customize registration forms, invite attendees, generate QR passes, and manage entry with our mobile app. Real-time analytics help you track attendance and engagement throughout your event.',
      },
      {
        question: 'What types of events can I manage?',
        answer:
          'Esenyx works for all types of events - conferences, weddings, corporate meetings, concerts, exhibitions, seminars, workshops, trade shows, and more. Our flexible system adapts to events of any size and type.',
      },
      {
        question: 'Is there a limit on the number of attendees?',
        answer:
          'No limits! Esenyx scales from intimate gatherings to large-scale events with thousands of attendees. Our infrastructure handles events of any size seamlessly with consistent performance.',
      },
      {
        question: 'Can I try Esenyx before purchasing?',
        answer:
          'Absolutely! Book a demo to see Esenyx in action. We offer a free trial period so you can experience the platform firsthand before committing to a paid plan.',
      },
    ],
    pricing: [
      {
        question: 'What pricing plans do you offer?',
        answer:
          'We offer three main plans: Starter (perfect for small events), Professional (for growing organizations), and Enterprise (for large-scale operations). Each plan includes different features and attendee limits to match your needs.',
      },
      {
        question: 'Is there a free trial?',
        answer:
          'Yes! We offer a 14-day free trial on all plans so you can test all features before making a commitment. No credit card required to start your trial.',
      },
      {
        question: 'Can I change plans later?',
        answer:
          'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated based on your usage.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom billing terms.',
      },
      {
        question: 'Do you offer discounts for annual billing?',
        answer:
          'Yes! Save up to 20% when you choose annual billing instead of monthly. Enterprise plans come with custom pricing based on your specific needs.',
      },
      {
        question: 'What happens if I exceed my plan limits?',
        answer:
          "You'll receive notifications as you approach your limits. You can either upgrade to a higher plan or purchase add-ons for additional capacity. We never cut off your service mid-event.",
      },
    ],
    technical: [
      {
        question: 'How secure are the QR passes?',
        answer:
          'QR passes are encrypted with enterprise-grade security and unique to each attendee. They can only be scanned once for entry, preventing unauthorized access and duplicate entries. All data is stored with bank-level encryption.',
      },
      {
        question: 'Can I customize registration forms?',
        answer:
          'Yes! You have full control over registration forms. Add custom fields, collect specific information, set validation rules, and design forms to match your brand identity with custom colors and logos.',
      },
      {
        question: 'Does Esenyx work offline?',
        answer:
          'Our mobile check-in app works offline, allowing you to scan QR codes even without internet. Data syncs automatically when connection is restored, ensuring you never miss a check-in.',
      },
      {
        question: 'What integrations are available?',
        answer:
          'Esenyx integrates with popular tools including payment gateways (Stripe, PayPal), email services (Mailchimp, SendGrid), CRM systems (Salesforce, HubSpot), and analytics platforms (Google Analytics, Mixpanel).',
      },
      {
        question: 'Can I export attendee data?',
        answer:
          'Yes! Export attendee data, analytics, and reports in multiple formats including CSV, Excel, and PDF. You own your data and can export it anytime.',
      },
      {
        question: 'Is there a mobile app?',
        answer:
          'Yes! We offer mobile apps for both iOS and Android for event check-in and management. Attendees can also access their digital passes through a mobile-optimized web interface.',
      },
    ],
    support: [
      {
        question: 'What kind of customer support do you provide?',
        answer:
          'We provide comprehensive support via email, phone, and live chat. Our team helps with setup, troubleshooting, and optimization. Premium plans include priority support with faster response times.',
      },
      {
        question: 'What are your support hours?',
        answer:
          'Standard support is available Monday-Friday, 9 AM to 6 PM EST. Premium and Enterprise customers have access to 24/7 priority support including weekends and holidays.',
      },
      {
        question: 'Do you offer training and onboarding?',
        answer:
          'Yes! We provide comprehensive onboarding for all new customers, including video tutorials, documentation, and live training sessions. Enterprise customers receive dedicated onboarding specialists.',
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer:
          'Standard support receives responses within 24 hours. Premium customers get responses within 4 hours, and Enterprise customers receive priority support with 1-hour response times.',
      },
      {
        question: 'Is technical assistance available during events?',
        answer:
          'Yes! We provide dedicated event support to ensure everything runs smoothly. Enterprise customers can request on-site support for critical events.',
      },
      {
        question: 'Where can I find documentation?',
        answer:
          'Comprehensive documentation, video tutorials, and guides are available in our Help Center. We also maintain a community forum where users can share tips and best practices.',
      },
    ],
  }

  const allFaqs = useMemo(() => {
    return Object.entries(faqCategories).flatMap(([category, faqs]) =>
      faqs.map((faq) => ({ ...faq, category }))
    )
  }, [])

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return allFaqs

    const query = searchQuery.toLowerCase()
    return allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
    )
  }, [searchQuery, allFaqs])

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      general: 'General',
      pricing: 'Pricing',
      technical: 'Technical',
      support: 'Support',
    }
    return labels[category] || category
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about Esenyx
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchQuery.trim() ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-muted-foreground mb-6">
                Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "
                {searchQuery}"
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div>
                        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {getCategoryLabel(faq.category)}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg mb-4">No results found</p>
                  <p className="text-sm text-muted-foreground">
                    Try different keywords or browse by category below
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>

                {Object.entries(faqCategories).map(([category, faqs]) => (
                  <TabsContent key={category} value={category}>
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <span className="font-semibold text-foreground pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium text-lg">
              Contact our support team →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPage
