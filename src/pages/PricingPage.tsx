import { motion } from 'framer-motion'
import { Check, X, Star, TrendingUp, ArrowRight, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PricingPage = () => {
  const navigate = useNavigate()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small events and workshops',
      monthlyPrice: 4999,
      annualPrice: 49999,
      attendeeRange: 'Up to 500 attendees',
      popular: false,
      features: [
        { name: 'Online registration portal', included: true },
        { name: 'QR code e-passes', included: true },
        { name: 'Basic check-in system', included: true },
        { name: 'Real-time dashboard', included: true },
        { name: 'Email notifications', included: true },
        { name: 'Up to 500 attendees', included: true },
        { name: 'Single event management', included: true },
        { name: 'Basic analytics & reports', included: true },
        { name: 'Email support', included: true },
        { name: 'On-site support team', included: false },
        { name: 'Exhibitor management', included: false },
        { name: 'VIP management', included: false },
        { name: 'Custom branding', included: false },
        { name: 'Dedicated account manager', included: false },
      ],
    },
    {
      name: 'Professional',
      description: 'For medium-sized conferences and trade shows',
      monthlyPrice: 14999,
      annualPrice: 149999,
      attendeeRange: '500 - 2,000 attendees',
      popular: true,
      features: [
        { name: 'Online registration portal', included: true },
        { name: 'QR code e-passes', included: true },
        { name: 'Advanced check-in system', included: true },
        { name: 'Real-time dashboard', included: true },
        { name: 'Email & SMS notifications', included: true },
        { name: 'Up to 2,000 attendees', included: true },
        { name: 'Multi-event management', included: true },
        { name: 'Advanced analytics & reports', included: true },
        { name: 'Priority email & phone support', included: true },
        { name: 'On-site support team (1 day)', included: true },
        { name: 'Exhibitor management', included: true },
        { name: 'VIP management', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Dedicated account manager', included: false },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large expos and corporate summits',
      monthlyPrice: null,
      annualPrice: null,
      attendeeRange: '2,000+ attendees',
      popular: false,
      features: [
        { name: 'Online registration portal', included: true },
        { name: 'QR code e-passes', included: true },
        { name: 'Enterprise check-in system', included: true },
        { name: 'Real-time dashboard with custom views', included: true },
        { name: 'Omnichannel notifications', included: true },
        { name: 'Unlimited attendees', included: true },
        { name: 'Unlimited events', included: true },
        { name: 'Custom analytics & reports', included: true },
        { name: '24/7 priority support', included: true },
        { name: 'Full on-site support team', included: true },
        { name: 'Advanced exhibitor management', included: true },
        { name: 'Advanced VIP management', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
    },
  ]

  const eventSizeComparison = [
    {
      size: 'Small Events',
      attendees: '50 - 500',
      examples: 'Workshops, Seminars, Meetups',
      recommendedPlan: 'Starter',
      features: ['Basic registration', 'QR check-in', 'Email support'],
    },
    {
      size: 'Medium Events',
      attendees: '500 - 2,000',
      examples: 'Conferences, Trade Shows, Product Launches',
      recommendedPlan: 'Professional',
      features: ['Full registration suite', 'Exhibitor management', 'On-site support'],
    },
    {
      size: 'Large Events',
      attendees: '2,000 - 5,000',
      examples: 'Major Expos, Corporate Summits, Festivals',
      recommendedPlan: 'Enterprise',
      features: ['Unlimited capacity', 'Custom features', 'Dedicated team'],
    },
    {
      size: 'Mega Events',
      attendees: '5,000+',
      examples: 'International Expos, National Conferences',
      recommendedPlan: 'Enterprise',
      features: ['White-label solution', 'Full customization', '24/7 support'],
    },
  ]

  const pricingFAQ = [
    {
      question: 'What happens if my event exceeds the attendee limit?',
      answer:
        "If your event grows beyond your plan's attendee limit, we'll contact you to upgrade to the next tier. You'll only pay the difference, prorated for the remaining period.",
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 14-day money-back guarantee for new customers. If you're not satisfied with Esenyx, contact us within 14 days of purchase for a full refund.",
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won't be charged again.",
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), UPI, net banking, and bank transfers for Enterprise plans.',
    },
    {
      question: 'Is on-site support included in all plans?',
      answer:
        'On-site support is included in Professional (1 day) and Enterprise (full event duration) plans. Starter plan customers can add on-site support for an additional fee.',
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades.',
    },
    {
      question: 'Do you offer custom Enterprise pricing?',
      answer:
        'Yes, Enterprise pricing is customized based on your specific needs, event size, and feature requirements. Contact our sales team for a personalized quote.',
    },
    {
      question: 'Are there any setup fees?',
      answer:
        'No setup fees for Starter and Professional plans. Enterprise plans may include a one-time onboarding fee depending on customization requirements.',
    },
  ]

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom'
    return `₹${(price / 100).toLocaleString('en-IN')}`
  }

  const getPrice = (tier: (typeof pricingTiers)[0]) => {
    if (tier.monthlyPrice === null) return 'Custom'
    return billingCycle === 'monthly'
      ? formatPrice(tier.monthlyPrice)
      : formatPrice(tier.annualPrice)
  }

  const getSavings = (tier: (typeof pricingTiers)[0]) => {
    if (tier.monthlyPrice === null || tier.annualPrice === null) return null
    const monthlyCost = tier.monthlyPrice * 12
    const savings = monthlyCost - tier.annualPrice
    return Math.round((savings / monthlyCost) * 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
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
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your event size. Scale up or down as you grow.
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 pt-6"
            >
              <span
                className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'annual' ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span
                className={`text-lg font-medium ${billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                Annual
              </span>
              {billingCycle === 'annual' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
                >
                  Save up to 17%
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all hover:shadow-2xl ${
                  tier.popular
                    ? 'border-primary bg-primary/5 shadow-xl scale-105'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">{getPrice(tier)}</span>
                      {tier.monthlyPrice !== null && (
                        <span className="text-muted-foreground">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'annual' && getSavings(tier) && (
                      <p className="text-sm text-primary font-semibold mt-2">
                        Save {getSavings(tier)}% with annual billing
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-4 font-medium">
                      {tier.attendeeRange}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                    onClick={() => navigate(tier.monthlyPrice === null ? '/contact' : '/book-demo')}
                  >
                    {tier.monthlyPrice === null ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  {/* Features List */}
                  <div className="pt-6 space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground/50'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Size Comparison */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Find Your <span className="text-primary">Perfect Fit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure which plan is right for you? Here's what we recommend based on event size
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold">Event Size</th>
                  <th className="text-left p-4 font-bold">Attendees</th>
                  <th className="text-left p-4 font-bold">Examples</th>
                  <th className="text-left p-4 font-bold">Recommended Plan</th>
                  <th className="text-left p-4 font-bold">Key Features</th>
                </tr>
              </thead>
              <tbody>
                {eventSizeComparison.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-semibold">{row.size}</td>
                    <td className="p-4 text-muted-foreground">{row.attendees}</td>
                    <td className="p-4 text-muted-foreground text-sm">{row.examples}</td>
                    <td className="p-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {row.recommendedPlan}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {row.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Compare <span className="text-primary">All Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed feature comparison across all plans
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-6 font-bold">Feature</th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.name} className="text-center p-6 font-bold">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingTiers[0].features.map((feature, featureIndex) => (
                  <tr
                    key={featureIndex}
                    className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-6 font-medium">{feature.name}</td>
                    {pricingTiers.map((tier, tierIndex) => (
                      <td key={tierIndex} className="text-center p-6">
                        {tier.features[featureIndex].included ? (
                          <Check className="w-6 h-6 text-primary mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Pricing FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {pricingFAQ.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-primary p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Our team is here to help you find the perfect plan for your event needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 h-auto"
                    onClick={() => navigate('/book-demo')}
                  >
                    Book a Demo
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto bg-white/10 border-white text-white hover:bg-white/20"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Sales
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default PricingPage
