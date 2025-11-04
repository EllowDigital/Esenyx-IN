import { UserPlus, Ticket, ScanLine, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register",
    description: "Attendees register online through your custom event portal",
  },
  {
    number: "02",
    icon: Ticket,
    title: "Get E-Pass",
    description: "Instant QR-coded e-passes delivered via email and SMS",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Check-in",
    description: "Quick QR scan entry with our on-site support team",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Track Live Stats",
    description: "Monitor real-time attendance, engagement, and insights",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your event management
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Lines (hidden on mobile) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary" 
                 style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }} />
            
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number Badge */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-card border-2 border-primary/20 rounded-xl flex items-center justify-center shadow-sm">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
