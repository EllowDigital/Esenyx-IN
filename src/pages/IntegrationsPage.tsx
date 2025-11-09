import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Code,
  CreditCard,
  Mail,
  BarChart3,
  MessageSquare,
  Globe,
  Clock,
  Link as LinkIcon,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { useNavigate } from 'react-router-dom'

const IntegrationsPage = () => {
  const navigate = useNavigate()

  const integrationCategories = [
    {
      title: 'Payment Gateways',
      icon: CreditCard,
      color: 'text-blue-500',
      integrations: [
        {
          name: 'Razorpay',
          description: "Accept payments seamlessly with India's leading payment gateway",
          features: ['UPI', 'Cards', 'Wallets', 'Net Banking'],
          logo: '💳',
        },
        {
          name: 'Stripe',
          description: 'Global payment processing for international events',
          features: ['Credit Cards', 'Apple Pay', 'Google Pay', 'SEPA'],
          logo: '💰',
        },
        {
          name: 'PayPal',
          description: 'Trusted payment solution for worldwide transactions',
          features: ['PayPal Balance', 'Cards', 'Bank Transfer'],
          logo: '🅿️',
        },
      ],
    },
    {
      title: 'Email Services',
      icon: Mail,
      color: 'text-green-500',
      integrations: [
        {
          name: 'SendGrid',
          description: 'Reliable email delivery for event communications',
          features: ['Bulk Emails', 'Templates', 'Analytics', 'Automation'],
          logo: '📧',
        },
        {
          name: 'Mailchimp',
          description: 'Marketing automation and email campaigns',
          features: ['Campaigns', 'Automation', 'Reports', 'Segmentation'],
          logo: '📬',
        },
        {
          name: 'AWS SES',
          description: 'Scalable email service for large events',
          features: ['High Volume', 'Deliverability', 'Cost Effective'],
          logo: '📮',
        },
      ],
    },
    {
      title: 'Analytics Tools',
      icon: BarChart3,
      color: 'text-purple-500',
      integrations: [
        {
          name: 'Google Analytics',
          description: 'Track attendee behavior and event performance',
          features: ['Real-time Data', 'Custom Reports', 'Conversion Tracking'],
          logo: '📊',
        },
        {
          name: 'Mixpanel',
          description: 'Advanced event analytics and user insights',
          features: ['Funnels', 'Retention', 'A/B Testing', 'Cohorts'],
          logo: '📈',
        },
        {
          name: 'Hotjar',
          description: 'Understand user experience with heatmaps',
          features: ['Heatmaps', 'Recordings', 'Surveys', 'Feedback'],
          logo: '🔥',
        },
      ],
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      color: 'text-orange-500',
      integrations: [
        {
          name: 'WhatsApp Business',
          description: 'Send event updates via WhatsApp',
          features: ['Instant Messaging', 'Rich Media', 'Automation'],
          logo: '💬',
        },
        {
          name: 'Twilio',
          description: 'SMS notifications and reminders',
          features: ['SMS', 'Voice', 'Video', 'Global Reach'],
          logo: '📱',
        },
        {
          name: 'Slack',
          description: 'Team collaboration for event management',
          features: ['Channels', 'Notifications', 'Integrations'],
          logo: '💼',
        },
      ],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Connect integrations in minutes with our simple configuration',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for all third-party connections',
    },
    {
      icon: LinkIcon,
      title: 'Seamless Integration',
      description: 'All integrations work perfectly together without any hassle',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get help anytime with integration setup and troubleshooting',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4" variant="outline">
              <Globe className="w-3 h-3 mr-1" />
              50+ Integrations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect Esenyx with Your <span className="text-primary">Favorite Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Seamlessly integrate with payment gateways, email services, analytics platforms, and
              more to create the perfect event management ecosystem.
            </p>
            <Button onClick={() => navigate('/contact')} size="lg" className="gap-2">
              Request Integration <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="pt-6 text-center">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Categories */}
      {integrationCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <category.icon className={`w-8 h-8 ${category.color}`} />
                <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-4xl">{integration.logo}</span>
                          <Badge variant="outline" className="gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Active
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{integration.name}</CardTitle>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-foreground">Features:</p>
                          <ul className="space-y-1">
                            {integration.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <LinkIcon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Need a Custom Integration?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We can help you connect Esenyx with your existing tools and systems. Our team will
                  work with you to create the perfect integration solution for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate('/contact')}>
                    Contact Sales
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/book-demo')}>
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default IntegrationsPage
