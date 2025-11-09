import { motion } from 'framer-motion'
import { Star, Quote, Play, Award, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { useNavigate } from 'react-router-dom'

const TestimonialsPage = () => {
  const navigate = useNavigate()

  const detailedTestimonials = [
    {
      name: 'Priya Sharma',
      role: 'Event Manager',
      company: 'TechCon India',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      rating: 5,
      quote: 'Esenyx transformed how we manage our tech conferences.',
      review: 'We organized TechCon India 2024 with over 5,000 attendees, and Esenyx made the entire process seamless. The QR code system eliminated long queues, and the real-time dashboard helped us make quick decisions. The support team was incredibly responsive, even during peak hours.',
      results: [
        { label: 'Check-in Time Reduced', value: '75%' },
        { label: 'Attendee Satisfaction', value: '98%' },
        { label: 'Time Saved', value: '40 hrs' },
      ],
      eventSize: '5,000+ attendees',
      eventType: 'Technology Conference',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director',
      company: 'Mumbai Business Summit',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      rating: 5,
      quote: 'The analytics dashboard gave us insights we never had before.',
      review: 'Running a multi-day business summit requires precision and data-driven decisions. Esenyx\'s analytics helped us track attendance patterns, identify popular sessions, and optimize our schedule in real-time. The platform paid for itself with the efficiency gains alone.',
      results: [
        { label: 'Revenue Increase', value: '35%' },
        { label: 'Operational Cost Savings', value: '₹2.5L' },
        { label: 'Data Accuracy', value: '100%' },
      ],
      eventSize: '3,500+ attendees',
      eventType: 'Business Summit',
    },
    {
      name: 'Anita Desai',
      role: 'Wedding Planner',
      company: 'Elite Events',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita',
      rating: 5,
      quote: 'Perfect for luxury weddings! Our guests loved the digital experience.',
      review: 'We specialize in high-end weddings, and Esenyx added a touch of sophistication our clients loved. Digital invitations were elegant, RSVP tracking was effortless, and the entry system ensured only invited guests entered. The customization options matched our luxury brand perfectly.',
      results: [
        { label: 'Guest Check-in Speed', value: '90% faster' },
        { label: 'Client Satisfaction', value: '5/5' },
        { label: 'Repeat Bookings', value: '+45%' },
      ],
      eventSize: '500-1,000 guests',
      eventType: 'Luxury Weddings',
    },
    {
      name: 'Vikram Patel',
      role: 'Festival Coordinator',
      company: 'Navratri Celebrations Committee',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      rating: 5,
      quote: 'Managed 10,000+ people across 9 nights flawlessly.',
      review: 'Organizing a 9-night Navratri festival with varying attendance each night was challenging. Esenyx\'s ticketing and entry system handled peak crowds efficiently. The real-time capacity monitoring kept us compliant with safety regulations, and the analytics helped us plan better for next year.',
      results: [
        { label: 'Peak Hour Entries/Min', value: '200+' },
        { label: 'System Uptime', value: '99.9%' },
        { label: 'Zero Incidents', value: '9 nights' },
      ],
      eventSize: '10,000+ attendees',
      eventType: 'Cultural Festival',
    },
    {
      name: 'Meera Reddy',
      role: 'Corporate Events Manager',
      company: 'Infosys',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
      rating: 5,
      quote: 'Enterprise-grade solution that scales with our needs.',
      review: 'We use Esenyx for all our corporate events, from small team gatherings to large conferences. The platform integrates seamlessly with our existing systems, and the white-label options maintain our brand consistency. The reporting features are invaluable for stakeholder presentations.',
      results: [
        { label: 'Events Managed', value: '50+/year' },
        { label: 'Cost per Event', value: '-60%' },
        { label: 'Admin Time Saved', value: '120 hrs' },
      ],
      eventSize: '100-5,000 attendees',
      eventType: 'Corporate Events',
    },
    {
      name: 'Arjun Singh',
      role: 'Education Coordinator',
      company: 'Delhi University',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
      rating: 5,
      quote: 'Simplified our campus events and student engagement.',
      review: 'From seminars to cultural fests, Esenyx handles all our university events. Students love the mobile-friendly interface, and we appreciate the detailed attendance reports. The platform has improved our event participation by 40% and made compliance reporting much easier.',
      results: [
        { label: 'Participation Increase', value: '40%' },
        { label: 'Paper Waste Reduced', value: '100%' },
        { label: 'Student Satisfaction', value: '4.8/5' },
      ],
      eventSize: '200-2,000 students',
      eventType: 'Educational Events',
    },
  ]

  const videoTestimonials = [
    {
      name: 'Priya Sharma',
      company: 'TechCon India',
      thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya-video',
      duration: '2:34',
    },
    {
      name: 'Rajesh Kumar',
      company: 'Mumbai Business Summit',
      thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh-video',
      duration: '3:12',
    },
    {
      name: 'Anita Desai',
      company: 'Elite Events',
      thumbnail: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita-video',
      duration: '2:45',
    },
  ]

  const stats = [
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '99.8%' },
    { icon: TrendingUp, label: 'Events Powered', value: '10,000+' },
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
              <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
              Trusted by 500+ Event Organizers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Clients <span className="text-primary">Say About Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real stories from event professionals who transformed their events with Esenyx
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how event professionals across India use Esenyx to deliver exceptional experiences
            </p>
          </motion.div>

          <div className="space-y-12">
            {detailedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Left Column - Client Info */}
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col justify-between">
                        <div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mb-4 ring-4 ring-background"
                          />
                          <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                          <p className="text-sm font-semibold text-primary mb-4">{testimonial.company}</p>
                          
                          <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                          </div>

                          <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="w-4 h-4 text-primary" />
                              <span>{testimonial.eventSize}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Award className="w-4 h-4 text-primary" />
                              <span>{testimonial.eventType}</span>
                            </div>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-3">
                          {testimonial.results.map((result, idx) => (
                            <div key={idx} className="bg-background/50 rounded-lg p-3">
                              <div className="text-2xl font-bold text-primary">{result.value}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Testimonial Content */}
                      <div className="md:col-span-2 p-8 flex flex-col justify-center">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <blockquote className="text-2xl font-semibold text-foreground mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {testimonial.review}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium">
                          <CheckCircle2 className="w-5 h-5" />
                          Verified Client
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Their Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear directly from event professionals about their experience with Esenyx
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{video.name}</h4>
                    <p className="text-sm text-muted-foreground">{video.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start your journey with Esenyx today and experience the difference that professional event management software can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate('/book-demo')} className="gap-2">
                    Book a Free Demo <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                    View Pricing
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

export default TestimonialsPage
