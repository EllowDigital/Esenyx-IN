import { QrCode, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={new URL('../../assets/images/logo.png', import.meta.url).href}
                alt="Esenyx logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">Esenyx</span>
            </div>
            {/* EllowDigital attribution */}
            <div className="flex items-center gap-2 text-secondary-foreground/80 text-sm">
              <span>by</span>
              <a
                href="https://ellowdigital.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <img
                  src="https://ellowdigital.netlify.app/favicon.ico"
                  alt="EllowDigital"
                  className="w-5 h-5 rounded-sm group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">EllowDigital</span>
              </a>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Simplify Events. Empower Experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-secondary-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/our-work"
                  className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-secondary-foreground">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-secondary-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Event Registration</span>
              </li>
              <li className="text-secondary-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>QR Pass Generation</span>
              </li>
              <li className="text-secondary-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Entry Management</span>
              </li>
              <li className="text-secondary-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Analytics & Reporting</span>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-secondary-foreground">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ellowdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:ellowdigitalindia@gmail.com"
                className="w-11 h-11 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-secondary-foreground/70">
                <a
                  href="mailto:ellowdigitalindia@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  ellowdigitalindia@gmail.com
                </a>
              </p>
              <p className="text-secondary-foreground/70">
                <a
                  href="tel:+918960446756"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 8960446756
                </a>
              </p>
              <p className="text-secondary-foreground/70">
                <a
                  href="https://ellowdigital.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  ellowdigital.netlify.app
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <div className="flex items-center gap-2">
              <span>© {currentYear} EllowDigital. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="heart blink text-primary" aria-hidden>
                ❤
              </span>
              <span>by EllowDigital</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
