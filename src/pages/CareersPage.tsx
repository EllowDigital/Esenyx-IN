import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Heart, Zap, Award, MapPin, Clock, Briefcase, Upload } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const CareersPage = () => {
  const { toast } = useToast()
  const [selectedPosition, setSelectedPosition] = useState('')

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and bring enthusiasm to every project'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new ideas'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver'
    }
  ]

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Unlimited PTO and paid holidays',
    'Professional development budget',
    'Latest tech equipment and tools',
    'Team events and retreats',
    'Wellness programs and gym membership'
  ]

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Build and scale our event management platform with modern technologies.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Create beautiful and intuitive experiences for event organizers worldwide.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers succeed and build lasting relationships.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Drive growth and brand awareness through strategic marketing initiatives.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Application Submitted!',
      description: 'We\'ll review your application and get back to you soon.',
    })
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us revolutionize event management and create memorable experiences for people worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're building a workplace where innovation thrives and everyone can do their best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We invest in our team's success and well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your next opportunity and join our growing team
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {position.department}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {position.location}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                      <Button onClick={() => setSelectedPosition(position.title)}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
              <p className="text-muted-foreground text-lg">
                Start your journey with Esenyx
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select value={selectedPosition} onValueChange={setSelectedPosition} required>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position, index) => (
                          <SelectItem key={index} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                    <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/Website URL</Label>
                    <Input id="portfolio" type="url" placeholder="https://yourportfolio.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea 
                      id="coverLetter" 
                      required 
                      rows={6}
                      placeholder="Tell us why you'd be a great fit for this role..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="flex items-center gap-3 border border-input rounded-md p-3 hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Upload your resume</p>
                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                      <input 
                        id="resume" 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
