import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="text-center space-y-8 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl md:text-[200px] font-bold text-primary">404</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90"
          >
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-sm text-muted-foreground">
            Error Code: 404 | Route: {location.pathname}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
