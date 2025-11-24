import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface FormSuccessProps {
  onClose: () => void
}

const FormSuccess = ({ onClose }: FormSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-primary/20 rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="relative mx-auto w-24 h-24"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Success Message */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-foreground"
            >
              Success!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground"
            >
              Your message has been sent successfully. We'll get back to you soon!
            </motion.p>
          </div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FormSuccess
