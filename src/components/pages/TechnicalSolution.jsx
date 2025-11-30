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

export function TechnicalSolution({ isUz, id }) {
  const stack = [
    {
      category: "Frontend",
      categoryUz: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "primary",
      technologies: [
        { name: "React 18", description: "UI framework with hooks and concurrent features", descriptionUz: "Hooklar va concurrent funksiyalar bilan UI ramkasi" },
        { name: "TypeScript", description: "Type-safe development", descriptionUz: "Type-safe dasturlash" },
        { name: "Vite", description: "Lightning-fast build tool", descriptionUz: "Tezkor build vositasi" },
        { name: "Tailwind CSS", description: "Utility-first styling", descriptionUz: "Utility-first styling" },
      ],
    },
    {
      category: "3D Graphics",
      categoryUz: "3D Grafika",
      icon: <Layers className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Three.js", description: "3D WebGL rendering engine", descriptionUz: "3D WebGL rendering dvigateli" },
        { name: "React Three Fiber", description: "React renderer for Three.js", descriptionUz: "Three.js uchun React renderer" },
        { name: "Drei", description: "3D helpers and components", descriptionUz: "3D yordamchi komponentlar" },
        { name: "WebGL Shaders", description: "Custom visual effects", descriptionUz: "Maxsus vizual effektlar" },
      ],
    },
    {
      category: "Physics & Flight",
      categoryUz: "Fizika va parvoz",
      icon: <Cpu className="w-8 h-8" />,
      color: "primary",
      technologies: [
        { name: "PX4 Flight Stack", description: "Professional UAV autopilot physics", descriptionUz: "Professional UAV autopilot fizikasi" },
        { name: "Custom Flight Controller", description: "Simulated drone dynamics", descriptionUz: "Simulyatsiya qilingan dron dinamikasi" },
        { name: "Telemetry System", description: "Real-time sensor data", descriptionUz: "Real vaqtda sensor ma'lumotlari" },
        { name: "Mission Planner", description: "Waypoint and task management", descriptionUz: "Waypoint va vazifa boshqaruvi" },
      ],
    },
    {
      category: "Backend",
      categoryUz: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Convex", description: "Real-time database and backend", descriptionUz: "Real vaqtda ma'lumotlar bazasi va backend" },
        { name: "TypeScript", description: "Type-safe server functions", descriptionUz: "Type-safe server funksiyalari" },
        { name: "WebSocket", description: "Real-time telemetry streaming", descriptionUz: "Real vaqtda telemetriya oqimi" },
        { name: "Authentication", description: "Secure user management", descriptionUz: "Xavfsiz foydalanuvchi boshqaruvi" },
      ],
    },
    {
      category: "AI & ML",
      categoryUz: "AI va ML",
      icon: <Brain className="w-8 h-8" />,
      color: "primary",
      technologies: [
        { name: "GPT-4", description: "Flight analysis and feedback", descriptionUz: "Parvoz tahlili va fikr" },
        { name: "OpenRouter API", description: "AI model orchestration", descriptionUz: "AI model orchestratsiyasi" },
        { name: "Custom Prompts", description: "Safety detection algorithms", descriptionUz: "Xavfsizlik aniqlash algoritmlari" },
        { name: "Scoring Engine", description: "Performance evaluation", descriptionUz: "Samaradorlik baholash" },
      ],
    },
    {
      category: "Deployment",
      categoryUz: "Joylashtirish",
      icon: <Cloud className="w-8 h-8" />,
      color: "secondary",
      technologies: [
        { name: "Vercel", description: "Edge deployment and CDN", descriptionUz: "Edge deployment va CDN" },
        { name: "CI/CD Pipeline", description: "Automated deployments", descriptionUz: "Avtomatlashtirilgan deploylar" },
        { name: "Environment Configs", description: "Multi-stage setup", descriptionUz: "Ko‘p bosqichli sozlamalar" },
        { name: "Performance Monitoring", description: "Real-time analytics", descriptionUz: "Real vaqtda tahlillar" },
      ],
    },
  ];

  const aiUseCases = [
    {
      title: "Post-Flight Analysis",
      titleUz: "Parvozdan keyingi tahlil",
      description: "GPT-4 analyzes telemetry data, flight path, and maneuvers to provide detailed feedback on pilot performance.",
      descriptionUz: "GPT-4 telemetriya ma'lumotlari, parvoz yo'nalishi va manevrlarni tahlil qiladi va uchuvchi samaradorligi haqida batafsil fikr beradi.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Safety Detection",
      titleUz: "Xavfsizlik aniqlash",
      description: "AI monitors for unsafe behaviors: altitude violations, battery warnings, collision risks, and emergency scenarios.",
      descriptionUz: "AI xavfsiz bo'lmagan harakatlarni kuzatadi: balandlik buzilishi, batareya ogohlantirishlari, to'qnashuv xavfi va favqulodda vaziyatlar.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Performance Scoring",
      titleUz: "Samaradorlikni baholash",
      description: "Automatic scoring based on mission completion, efficiency, safety compliance, and flight smoothness.",
      descriptionUz: "Missiya bajarilishi, samaradorlik, xavfsizlikka rioya qilish va parvoz silliqligiga asoslangan avtomatik baholash.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Personalized Recommendations",
      titleUz: "Shaxsiylashtirilgan tavsiyalar",
      description: "AI suggests specific exercises and missions based on pilot weaknesses and learning progress.",
      descriptionUz: "AI uchuvchining zaif tomonlari va o'quv taraqqiyotiga asoslangan maxsus mashqlar va missiyalarni taklif qiladi.",
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  return (
    <section id={id}>
      <div className="w-full py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {isUz ? "Texnik Yechim" : "Technical Solution"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isUz
                ? "Texnik yechim — dron tayyorlashning zamonaviy to‘plami"
                : "Technical Solution — modern stack powering the next generation of drone training"}
            </p>
          </div>

          {/* Architecture Diagram */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4">
                {isUz ? "Arxitektura ko‘rinishi" : "Architecture Overview"}
              </h2>
              <p className="text-muted-foreground">
                {isUz
                  ? "Barcha komponentlar qanday ishlashini ko‘rsatadi"
                  : "How all components work together"}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-white/10 backdrop-blur-sm">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                    <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="text-lg">{isUz ? "Frontend Qatlam" : "Frontend Layer"}</h3>
                    <p className="text-sm text-muted-foreground">React + Vite + Tailwind</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <Layers className="w-6 h-6 text-secondary mb-2" />
                    <p className="text-sm">{isUz ? "Three.js + R3F" : "Three.js + R3F"}</p>
                    <p className="text-xs text-muted-foreground">{isUz ? "3D Rendering" : "3D Rendering"}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Cpu className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm">{isUz ? "PX4 Fizika" : "PX4 Physics"}</p>
                    <p className="text-xs text-muted-foreground">{isUz ? "Parvoz Simulyatsiyasi" : "Flight Simulation"}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="space-y-6">
                    {["WebSocket", "REST API", "Auth Flow"].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary"></div>
                        <span className="text-sm text-muted-foreground">
                          {isUz
                            ? item === "Auth Flow"
                              ? "Autentifikatsiya jarayoni"
                              : item
                            : item}
                        </span>
                        <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-primary"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-center">
                    <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <h3 className="text-lg">{isUz ? "Backend Qatlam" : "Backend Layer"}</h3>
                    <p className="text-sm text-muted-foreground">Convex + TypeScript</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <Brain className="w-6 h-6 text-primary mb-2" />
                    <p className="text-sm">{isUz ? "GPT-4 orqali AI Tahlil" : "GPT-4 via OpenRouter"}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <Cloud className="w-6 h-6 text-secondary mb-2" />
                    <p className="text-sm">{isUz ? "Vercel Edge" : "Vercel Edge"}</p>
                    <p className="text-xs text-muted-foreground">{isUz ? "Joylashtirish" : "Deployment"}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Details */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4">{isUz ? "Texnologiya to‘plami" : "Technology Stack"}</h2>
              <p className="text-muted-foreground">{isUz ? "Har bir qatlam tafsiloti" : "Detailed breakdown of every layer"}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stack.map((category, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center mb-6 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl mb-1">{isUz ? category.categoryUz : category.category}</h3>
                  <p className="text-sm text-primary/80 mb-6">{isUz ? category.category : category.categoryUz}</p>
                  <div className="space-y-3">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-sm mb-1">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{isUz ? tech.descriptionUz || tech.description : tech.description}</div>
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
              <h2 className="text-3xl lg:text-4xl mb-4">{isUz ? "AI integratsiyasi" : "AI Integration"}</h2>
              <p className="text-muted-foreground">{isUz ? "Sun'iy intellekt platformani qanday quvvatlaydi" : "How artificial intelligence powers the platform"}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {aiUseCases.map((useCase, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{isUz ? useCase.titleUz : useCase.title}</h3>
                      <p className="text-sm text-primary/80">{isUz ? useCase.title : useCase.titleUz}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{isUz ? useCase.descriptionUz : useCase.description}</p>
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
                  <h3 className="text-xl">{isUz ? "Samaradorlik" : "Performance"}</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div><span>{isUz ? "O‘rta darajadagi qurilmalarda 60 FPS 3D rendering" : "60 FPS 3D rendering on mid-range devices"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div><span>{isUz ? "Real vaqtda telemetriya  50ms kechikish bilan" : "Real-time telemetry with <50ms latency"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div><span>{isUz ? "Global kirish uchun Vercel Edge CDN" : "Vercel Edge CDN for global access"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div><span>{isUz ? "Optimallashtirilgan 3D aktivlar va teksturalar" : "Optimized 3D assets and textures"}</span></li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl">{isUz ? "Xavfsizlik" : "Security"}</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div><span>{isUz ? "Foydalanuvchi autentifikatsiyasi va ruxsatnoma" : "User authentication and permissions"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div><span>{isUz ? "Real vaqtda telemetry shifrlash" : "Real-time telemetry encryption"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div><span>{isUz ? "AI xavfsizlik aniqlash algoritmlari" : "AI-based safety detection algorithms"}</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div><span>{isUz ? "Backend ma’lumotlar xavfsizligi" : "Backend data security"}</span></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
