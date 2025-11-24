import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: 'How does Esenyx work?',
      answer:
        'Esenyx is a comprehensive event management platform. Simply create your event, invite attendees, generate QR passes, and manage entry with our mobile app. Real-time analytics help you track attendance and engagement.',
    },
    {
      question: 'What types of events can I manage with Esenyx?',
      answer:
        'Esenyx works for all types of events - conferences, weddings, corporate meetings, concerts, exhibitions, seminars, and more. Our flexible system adapts to events of any size.',
    },
    {
      question: 'Is there a limit on the number of attendees?',
      answer:
        'No limits! Esenyx scales from intimate gatherings to large-scale events with thousands of attendees. Our infrastructure handles events of any size seamlessly.',
    },
    {
      question: 'How secure are the QR passes?',
      answer:
        'QR passes are encrypted and unique to each attendee. They can only be scanned once for entry, preventing unauthorized access. All data is stored securely with enterprise-grade encryption.',
    },
    {
      question: 'Can I customize the registration forms?',
      answer:
        'Yes! You have full control over registration forms. Add custom fields, collect specific information, and design the form to match your brand identity.',
    },
    {
      question: 'What kind of analytics do you provide?',
      answer:
        'Get real-time insights on registrations, check-ins, no-shows, peak entry times, and attendee demographics. Export detailed reports in multiple formats for post-event analysis.',
    },
    {
      question: 'Do you offer customer support?',
      answer:
        'Yes! We provide dedicated support via email, phone, and live chat. Our team helps with setup, troubleshooting, and optimization. Premium plans include priority support.',
    },
    {
      question: 'Can I try Esenyx before purchasing?',
      answer:
        'Absolutely! Book a demo to see Esenyx in action. We offer a free trial period so you can experience the platform firsthand before committing.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Esenyx
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="/#contact" className="text-primary hover:underline font-medium">
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
