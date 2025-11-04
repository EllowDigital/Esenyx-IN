import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/ event",
    description: "Perfect for small events and conferences",
    features: [
      "Up to 200 attendees",
      "Basic QR system",
      "Dashboard access",
      "Email support",
      "Event analytics",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "/ event",
    description: "Ideal for medium to large events",
    features: [
      "Up to 2,000 attendees",
      "Advanced analytics",
      "VIP/exhibitor tools",
      "Custom branding",
      "Priority support",
      "On-site assistance",
      "Email & SMS notifications",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For unlimited scale and premium needs",
    features: [
      "Unlimited attendees",
      "White-label platform",
      "Dedicated event-day team",
      "Custom integrations",
      "24/7 premium support",
      "Advanced security",
      "Multi-event dashboard",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Simple <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your event needs
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up ${
                  plan.popular
                    ? "border-primary bg-card shadow-2xl scale-105"
                    : "border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="pt-4 space-y-3">
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {plan.price === "Custom" ? "Request Quote" : "Book a Demo"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Need help choosing the right plan?
            </p>
            <Button variant="cta" size="lg">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
