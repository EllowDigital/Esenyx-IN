import dashboardImage from "@/assets/dashboard-preview.jpg";
import { Activity, TrendingUp, Users, CheckCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Real-Time <span className="text-primary">Admin Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor every aspect of your event with powerful, real-time analytics
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={dashboardImage}
                alt="Esenyx Dashboard Interface"
                className="w-full h-auto"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
                  <Activity className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">Live</div>
                  <div className="text-xs text-muted-foreground">Tracking</div>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">2.5K+</div>
                  <div className="text-xs text-muted-foreground">Attendees</div>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-xs text-muted-foreground">Faster</div>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-lg border border-border backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold">Registration Analytics</h3>
              <p className="text-muted-foreground">
                Track registrations in real-time with detailed demographic insights
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold">Live Check-in Stats</h3>
              <p className="text-muted-foreground">
                Monitor entry flow and attendance patterns as they happen
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold">Exhibitor Management</h3>
              <p className="text-muted-foreground">
                Manage booths, passes, and exhibitor engagement metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
