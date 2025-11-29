import { ExternalLink, Globe, Lock, CheckCircle, Play, Zap } from 'lucide-react';

export function LiveDemo() {
  const demoFeatures = [
    'Full simulator access with 3 missions',
    'AI instructor feedback',
    'Telemetry tracking',
    'Flight recording',
    'Basic certification test',
  ];

  const requirements = [
    { label: 'Modern browser (Chrome, Firefox, Edge)', met: true },
    { label: 'Stable internet connection', met: true },
    { label: 'WebGL support', met: true },
    { label: 'Keyboard for controls', met: true },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Live Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Public Demo Link — try the full platform, no login required
          </p>
        </div>

        {/* Main Demo Card */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary p-1">
            <div className="relative bg-background rounded-3xl p-12 lg:p-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-8">
                <Lock className="w-5 h-5" />
                <span>No Login Required — Public Access</span>
              </div>

              <h2 className="text-4xl lg:text-5xl mb-6">Try AgroDrone Academy Now</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Experience our WebGL simulator, AI instructor, and certification system. Full demo
                access for AI500 judges and the public.
              </p>

              {/* Demo URL Placeholder */}
              <div className="p-6 rounded-2xl bg-card border border-white/10 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="text-sm text-muted-foreground">Public Demo URL:</span>
                </div>
                <div className="text-2xl lg:text-3xl text-primary mb-4 break-all">
                  https://agrodrone-academy-demo.vercel.app
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is a placeholder URL. The actual demo link will be
                  provided to AI500 judges during evaluation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://agrodrone-academy-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  <span>Launch Demo</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                <button className="px-8 py-4 rounded-xl bg-secondary hover:bg-secondary/90 text-white transition-all hover:scale-105 shadow-lg shadow-secondary/20 flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Quick Start Guide</span>
                </button>
              </div>

              {/* Important Notice */}
              <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                <h3 className="text-lg mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-destructive" />
                  <span>AI500 Judges Notice</span>
                </h3>
                <p className="text-muted-foreground">
                  This demo is fully public and requires no authentication. All features are
                  accessible without login to meet AI500 requirements. The platform includes sample
                  data for demonstration purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">What's Included in the Demo</h2>
            <p className="text-muted-foreground">
              Demo xususiyatlari — full platform experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="mb-1">Sample missions:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Beginner: Takeoff & Landing</li>
                    <li>• Intermediate: Field Survey</li>
                    <li>• Advanced: Precision Agriculture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">System Requirements</h2>
            <p className="text-muted-foreground">Tizim talablari — what you need to run the demo</p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      req.met ? 'bg-primary/20' : 'bg-destructive/20'
                    }`}
                  >
                    {req.met && <CheckCircle className="w-4 h-4 text-primary" />}
                  </div>
                  <span className="text-muted-foreground">{req.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Quick Start Guide</h2>
            <p className="text-muted-foreground">
              Tez boshlash qo'llanmasi — get flying in 3 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                1
              </div>
              <h3 className="text-xl mb-4 mt-2">Click Launch Demo</h3>
              <p className="text-muted-foreground">
                Open the public demo link in your browser. No registration or login required.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                2
              </div>
              <h3 className="text-xl mb-4 mt-2">Choose a Mission</h3>
              <p className="text-muted-foreground">
                Select from beginner, intermediate, or advanced missions to match your skill level.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                3
              </div>
              <h3 className="text-xl mb-4 mt-2">Start Flying</h3>
              <p className="text-muted-foreground">
                Use keyboard controls (WASD + Space/Shift) to fly. AI instructor provides real-time
                feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Public Access Notice */}
        <section>
          <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl lg:text-3xl mb-4">Public Demo — AI500 Compliance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              This demo is fully compliant with AI500 hackathon requirements. It is publicly
              accessible without authentication, showcasing all core features including the WebGL
              simulator, AI instructor, and certification system.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span>AI500 Judges: Full access granted</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-12">
          <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-xl mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              For AI500 judges or demo support, please contact us:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-primary">demo@agrodrone.academy</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-sm text-muted-foreground mb-1">Telegram</div>
                <div className="text-primary">@agrodrone_support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
