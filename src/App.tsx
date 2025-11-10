import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Preloader from './components/Preloader'
import { initGA, trackPageView } from './lib/analytics'

// Lazy load pages for better performance
const Index = lazy(() => import('./pages/Index'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'))
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const BookDemoPage = lazy(() => import('./pages/BookDemoPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

const queryClient = new QueryClient()

// Analytics tracking component
const AnalyticsTracker = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize Google Analytics on mount
    initGA()
  }, [])

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Preloader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
