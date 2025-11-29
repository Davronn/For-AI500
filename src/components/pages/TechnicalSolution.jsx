import {
  Code,
  Database,
  Cloud,
  Cpu,
  Layers,
  Zap,
  Brain,
  Shield,
} from "lucide-react";

export function TechnicalSolution() {
  const stack = [
    {
      category: "Frontend",
      categoryUz: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "primary",
      technologies: [
        {
          name: "React 18",
          description: "UI framework with hooks and concurrent features",
        },
        { name: "TypeScript", description: "Type-safe development" },
        { name: "Vite", description: "Lightning-fast build tool" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
      ],
    },
    {
      category: "3D Graphics",
      categoryUz: "3D Grafika",
      icon: <Layers className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Three.js", description: "3D WebGL rendering engine" },
        {
          name: "React Three Fiber",
          description: "React renderer for Three.js",
        },
        { name: "Drei", description: "3D helpers and components" },
        { name: "WebGL Shaders", description: "Custom visual effects" },
      ],
    },
    {
      category: "Physics & Flight",
      categoryUz: "Fizika va parvoz",
      icon: <Cpu className="w-8 h-8" />,
      color: "primary",
      technologies: [
        {
          name: "PX4 Flight Stack",
          description: "Professional UAV autopilot physics",
        },
        {
          name: "Custom Flight Controller",
          description: "Simulated drone dynamics",
        },
        { name: "Telemetry System", description: "Real-time sensor data" },
        {
          name: "Mission Planner",
          description: "Waypoint and task management",
        },
      ],
    },
    {
      category: "Backend",
      categoryUz: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Convex", description: "Real-time database and backend" },
        { name: "TypeScript", description: "Type-safe server functions" },
        { name: "WebSocket", description: "Real-time telemetry streaming" },
        { name: "Authentication", description: "Secure user management" },
      ],
    },
    {
      category: "AI & ML",
      categoryUz: "AI va ML",
      icon: <Brain className="w-8 h-8" />,
      color: "primary",
      technologies: [
        { name: "GPT-4", description: "Flight analysis and feedback" },
        { name: "OpenRouter API", description: "AI model orchestration" },
        { name: "Custom Prompts", description: "Safety detection algorithms" },
        { name: "Scoring Engine", description: "Performance evaluation" },
      ],
    },
    {
      category: "Deployment",
      categoryUz: "Joylashtirish",
      icon: <Cloud className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Vercel", description: "Edge deployment and CDN" },
        { name: "CI/CD Pipeline", description: "Automated deployments" },
        { name: "Environment Configs", description: "Multi-stage setup" },
        { name: "Performance Monitoring", description: "Real-time analytics" },
      ],
    },
  ];

  const aiUseCases = [
    {
      title: "Post-Flight Analysis",
      titleUz: "Parvozdan keyingi tahlil",
      description:
        "GPT-4 analyzes telemetry data, flight path, and maneuvers to provide detailed feedback on pilot performance.",
      descriptionUz:
        "GPT-4 telemetriya ma'lumotlari, parvoz yo'nalishi va manevrlarni tahlil qiladi va uchuvchi samaradorligi haqida batafsil fikr beradi.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Safety Detection",
      titleUz: "Xavfsizlik aniqlash",
      description:
        "AI monitors for unsafe behaviors: altitude violations, battery warnings, collision risks, and emergency scenarios.",
      descriptionUz:
        "AI xavfsiz bo'lmagan harakatlarni kuzatadi: balandlik buzilishi, batareya ogohlantirishlari, to'qnashuv xavfi va favqulodda vaziyatlar.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Performance Scoring",
      titleUz: "Samaradorlikni baholash",
      description:
        "Automatic scoring based on mission completion, efficiency, safety compliance, and flight smoothness.",
      descriptionUz:
        "Missiya bajarilishi, samaradorlik, xavfsizlikka rioya qilish va parvoz silliqligiga asoslangan avtomatik baholash.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Personalized Recommendations",
      titleUz: "Shaxsiylashtirilgan tavsiyalar",
      description:
        "AI suggests specific exercises and missions based on pilot weaknesses and learning progress.",
      descriptionUz:
        "AI uchuvchining zaif tomonlari va o'quv taraqqiyotiga asoslangan maxsus mashqlar va missiyalarni taklif qiladi.",
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Texnik Yechim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical Solution — modern stack powering the next generation of
            drone training
          </p>
        </div>

        {/* Architecture Diagram */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Architecture Overview</h2>
            <p className="text-muted-foreground">
              Arxitektura ko\'rinishi — how all components work together
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-white/10 backdrop-blur-sm">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Frontend Layer */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-lg">Frontend Layer</h3>
                  <p className="text-sm text-muted-foreground">
                    React + Vite + Tailwind
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <Layers className="w-6 h-6 text-secondary mb-2" />
                  <p className="text-sm">Three.js + R3F</p>
                  <p className="text-xs text-muted-foreground">3D Rendering</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Cpu className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm">PX4 Physics</p>
                  <p className="text-xs text-muted-foreground">
                    Flight Simulation
                  </p>
                </div>
              </div>

              {/* Middle Layer */}
              <div className="flex items-center justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary"></div>
                    <span className="text-sm text-muted-foreground">
                      WebSocket
                    </span>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-primary"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary"></div>
                    <span className="text-sm text-muted-foreground">
                      REST API
                    </span>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-primary"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary"></div>
                    <span className="text-sm text-muted-foreground">
                      Auth Flow
                    </span>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-primary"></div>
                  </div>
                </div>
              </div>

              {/* Backend Layer */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-center">
                  <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <h3 className="text-lg">Backend Layer</h3>
                  <p className="text-sm text-muted-foreground">
                    Convex + TypeScript
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Brain className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm">GPT-4 via OpenRouter</p>
                  <p className="text-xs text-muted-foreground">AI Analysis</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <Cloud className="w-6 h-6 text-secondary mb-2" />
                  <p className="text-sm">Vercel Edge</p>
                  <p className="text-xs text-muted-foreground">Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Details */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Technology Stack</h2>
            <p className="text-muted-foreground">
              Texnologiya to\'plami — detailed breakdown of every layer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center mb-6 text-${category.color}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl mb-1">{category.category}</h3>
                <p className="text-sm text-primary/80 mb-6">
                  {category.categoryUz}
                </p>

                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="text-sm mb-1">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {tech.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Integration */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">AI Integration</h2>
            <p className="text-muted-foreground">
              AI integratsiyasi — how artificial intelligence powers the
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiUseCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{useCase.title}</h3>
                    <p className="text-sm text-primary/80">{useCase.titleUz}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  {useCase.description}
                </p>
                <p className="text-sm text-muted-foreground/70">
                  {useCase.descriptionUz}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Performance & Security */}
        <section>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl">Performance</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>60 FPS 3D rendering on mid-range devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Real-time telemetry with {"<"}50ms latency</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Vercel Edge CDN for global access</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Optimized 3D assets and textures</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl">Security</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>Convex authentication with JWT tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>Encrypted flight data storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>API rate limiting and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>HTTPS-only communication</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
