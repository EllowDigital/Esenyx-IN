import { Quote } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Esenyx</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Esenyx is an innovative product by <span className="font-semibold text-foreground">EllowDigital</span>, 
              designed to revolutionize how events are managed. Our platform streamlines multi-event registration, 
              exhibitor onboarding, and live attendance tracking—all from one powerful dashboard.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              From small gatherings to massive expos, Esenyx handles every detail with precision—enabling 
              real-time check-ins, instant e-pass generation, and comprehensive analytics that keep you in control.
            </p>

            {/* Quote Card */}
            <div className="relative mt-16 p-8 md:p-12 bg-gradient-dark rounded-2xl shadow-xl">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/30" />
              <blockquote className="relative z-10 text-center space-y-6">
                <p className="text-xl md:text-2xl font-medium text-secondary-foreground italic leading-relaxed">
                  "Great events don't just happen — they're managed with precision and passion."
                </p>
                <footer className="text-primary font-semibold text-lg">
                  — EllowDigital Team
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
