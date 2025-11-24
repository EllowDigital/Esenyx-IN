import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Event Manager, TechCon India',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      rating: 5,
      text: 'Esenyx transformed how we manage our tech conferences. The QR code system made check-ins seamless for 5000+ attendees.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director, Mumbai Business Summit',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      rating: 5,
      text: 'The analytics dashboard gave us real-time insights we never had before. Highly recommended for large-scale events.',
    },
    {
      name: 'Anita Desai',
      role: 'Wedding Planner, Elite Events',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita',
      rating: 5,
      text: 'Perfect for luxury weddings! Our guests loved the digital invitations and the entry system was flawless.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by event professionals across India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white border border-border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-card dark:border-border/20">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/20" />

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                      loading="lazy"
                    />
                    <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
