import { QrCode, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <QrCode className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">Esenyx</span>
            </div>
            {/* EllowDigital logo (small, inline with 'by') */}
            <div className="flex items-center gap-2">
              <img
                src="https://ellowdigital.netlify.app/favicon.ico"
                alt="EllowDigital logo"
                className="w-8 h-8 rounded-sm"
              />
              <a
                href="https://ellowdigital.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-secondary-foreground/80 text-sm hover:text-primary transition-colors"
              >
                by EllowDigital
              </a>
            </div>
            <p className="text-secondary-foreground/60 text-sm">
              Simplify Events. Empower Experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary-foreground/80">Event Registration</li>
              <li className="text-secondary-foreground/80">QR Pass Generation</li>
              <li className="text-secondary-foreground/80">Entry Management</li>
              <li className="text-secondary-foreground/80">Analytics & Reporting</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ellwodigital"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ellowdigitalindia@gmail.com"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-1 text-sm text-secondary-foreground/60">
              <p>
                <a
                  href="mailto:ellowdigitalindia@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ellowdigitalindia@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918960446756" className="hover:text-primary transition-colors">
                  +91 8960446756
                </a>
              </p>
              <p>
                <a
                  href="https://ellowdigital.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ellowdigital.netlify.app
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span>© {currentYear} EllowDigital. All rights reserved.</span>
          </div>
          <div>
            <p className="text-sm text-secondary-foreground/60">
              Made with{' '}
              <span className="heart blink" aria-hidden>
                ❤
              </span>{' '}
              EllowDigital
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
