import {
  Lightbulb,
  Wrench,
  Rocket,
  TrendingUp,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";

export function Roadmap({ isUz, id }) {
  const phases = [
    {
      phase: "Phase 1",
      phaseUz: "1-bosqich",
      title: "Idea & Research",
      titleUz: "G'oya va tadqiqot",
      period: "January 2025",
      periodUz: "2025-yil yanvar",
      status: "completed",
      icon: <Lightbulb className="w-8 h-8" />,
      milestones: [
        "Market research in Central Asia",
        "Competitor analysis",
        "Technology stack selection",
        "Team formation",
      ],
      milestonesUz: [
        "Markaziy Osiyoda bozor tadqiqoti",
        "Raqobatchilar tahlili",
        "Texnologiya to'plamini tanlash",
        "Jamoa shakllanishi",
      ],
    },
    {
      phase: "Phase 2",
      phaseUz: "2-bosqich",
      title: "Prototype Development",
      titleUz: "Prototip ishlab chiqish",
      period: "February - March 2025",
      periodUz: "2025-yil fevral - mart",
      status: "completed",
      icon: <Wrench className="w-8 h-8" />,
      milestones: [
        "WebGL simulator core engine",
        "Basic PX4 flight physics integration",
        "UI/UX design system",
        "Database schema design",
      ],
      milestonesUz: [
        "WebGL simulyator asosiy mexanizmi",
        "Asosiy PX4 parvoz fizikasi integratsiyasi",
        "UI/UX dizayn tizimi",
        "Ma'lumotlar bazasi sxemasi dizayni",
      ],
    },
    {
      phase: "Phase 3",
      phaseUz: "3-bosqich",
      title: "MVP Launch",
      titleUz: "MVP ishga tushirish",
      period: "April - November 2025",
      periodUz: "2025-yil aprel - noyabr",
      status: "current",
      icon: <Rocket className="w-8 h-8" />,
      milestones: [
        "Full 3D simulator with missions ✅",
        "GPT-4 AI instructor integration ✅",
        "User authentication & profiles ✅",
        "Course library with 5 modules ✅",
        "Flight log & telemetry tracking ✅",
        "Beta testing with 50 users (in progress)",
      ],
      milestonesUz: [
        "Missiyalar bilan to'liq 3D simulyator ✅",
        "GPT-4 AI instruktor integratsiyasi ✅",
        "Foydalanuvchi autentifikatsiyasi va profillari ✅",
        "5 modul bilan kurslar kutubxonasi ✅",
        "Parvoz jurnali va telemetriya kuzatuvi ✅",
        "50 foydalanuvchi bilan beta test (jarayonda)",
      ],
    },
    {
      phase: "Phase 4",
      phaseUz: "4-bosqich",
      title: "Public Launch & Scaling",
      titleUz: "Ommaviy ishga tushirish va o'sish",
      period: "December 2025 - Q1 2026",
      periodUz: "2025-yil dekabr - 2026-yil 1-kvartal",
      status: "planned",
      icon: <TrendingUp className="w-8 h-8" />,
      milestones: [
        "Official certification program launch",
        "Partnership with agricultural companies",
        "Mobile app development (iOS & Android)",
        "Expand to 10,000 users",
        "Multi-language support (Uzbek, Russian, English)",
        "Advanced missions & scenarios",
      ],
      milestonesUz: [
        "Rasmiy sertifikatlash dasturini ishga tushirish",
        "Qishloq xo'jaligi kompaniyalari bilan hamkorlik",
        "Mobil ilova ishlab chiqish (iOS va Android)",
        "10,000 foydalanuvchigacha kengayish",
        "Ko'p tilli qo'llab-quvvatlash (o'zbek, rus, ingliz)",
        "Ilg'or missiyalar va stsenariylar",
      ],
    },
  ];

  const nextSteps = [
    {
      title: "Complete Beta Testing",
      titleUz: "Beta testni yakunlash",
      deadline: "December 2025",
      priority: "high",
      description: "Gather feedback from 50 pilot users and iterate",
      descriptionUz:
        "50 pilot foydalanuvchidan fikr yig‘ish va takomillashtirish",
    },
    {
      title: "Certification Standards",
      titleUz: "Sertifikatlash standartlari",
      deadline: "January 2026",
      priority: "high",
      description: "Finalize certification requirements with industry partners",
      descriptionUz:
        "Sertifikatlash talablarini sanoat hamkorlari bilan yakunlash",
    },
    {
      title: "Marketing Campaign",
      titleUz: "Marketing kampaniyasi",
      deadline: "February 2026",
      priority: "medium",
      description: "Launch targeted ads in Central Asian agricultural sector",
      descriptionUz:
        "Markaziy Osiyo qishloq xo'jaligi sektori uchun reklama kampaniyasi",
    },
    {
      title: "Mobile Development",
      titleUz: "Mobil ishlab chiqish",
      deadline: "Q1 2026",
      priority: "medium",
      description: "Start iOS and Android app development",
      descriptionUz: "iOS va Android ilovasini ishlab chiqishni boshlash",
    },
  ];

  return (
    <section id={id}>
      <div className="w-full py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {isUz ? "Yo'l Xaritasi" : "Roadmap"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isUz
                ? "Ishlab chiqish bosqichlari — g'oyadan bozor yetakchisigacha"
                : "Roadmap & Stages — our journey from idea to market leader"}
            </p>
          </div>

          {/* Current Stage Indicator */}
          <section className="mb-20">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-primary">
                    {isUz ? "Joriy Bosqich" : "Current Stage"}
                  </div>
                  <div className="text-2xl">
                    {isUz ? "MVP / Prototip" : "MVP / Prototype"}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {isUz
                  ? "Hozirda biz to'liq ishlaydigan MVP bilan 3-bosqichdamiz. Beta test Markaziy Osiyo qishloq xo‘jaligi sektorida real foydalanuvchilar bilan ketmoqda."
                  : "We are currently in Phase 3 with a fully functional MVP. Beta testing is underway with real users in the Central Asian agricultural sector."}
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-20">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4">
                {isUz ? "Ishlab chiqish vaqt jadvali" : "Development Timeline"}
              </h2>
              <p className="text-muted-foreground">
                {isUz
                  ? "Ishlab chiqish vaqt jadvali — g'oyadan ishga tushirishgacha"
                  : "from concept to launch"}
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div key={index} className="relative pl-16 md:pl-24">
                    {/* Icon */}
                    <div
                      className={`absolute left-0 md:left-0 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-background ${
                        phase.status === "completed"
                          ? "bg-primary text-white"
                          : phase.status === "current"
                          ? "bg-secondary text-white animate-pulse"
                          : "bg-card text-muted-foreground border-white/10"
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* Content */}
                    <div
                      className={`p-8 rounded-2xl backdrop-blur-sm border transition-all ${
                        phase.status === "completed"
                          ? "bg-primary/5 border-primary/30"
                          : phase.status === "current"
                          ? "bg-secondary/5 border-secondary/30"
                          : "bg-card border-white/10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div
                          className={`px-4 py-1 rounded-lg text-sm ${
                            phase.status === "completed"
                              ? "bg-primary/20 text-primary"
                              : phase.status === "current"
                              ? "bg-secondary/20 text-secondary"
                              : "bg-white/5 text-muted-foreground"
                          }`}
                        >
                          {isUz ? phase.phaseUz : phase.phase}{" "}
                        </div>
                        <div className="px-4 py-1 rounded-lg bg-white/5 text-muted-foreground text-sm">
                          {isUz ? phase.periodUz : phase.period}
                        </div>
                        {phase.status === "completed" && (
                          <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/20 text-primary text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>{isUz ? "Tugatildi" : "Completed"}</span>
                          </div>
                        )}
                        {phase.status === "current" && (
                          <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-secondary/20 text-secondary text-sm">
                            <Clock className="w-4 h-4 animate-spin" />
                            <span>{isUz ? "Jarayonda" : "In Progress"}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl mb-1">
                        {isUz ? phase.titleUz : phase.title}
                      </h3>
                      <p className="text-primary/80 mb-4">
                        {isUz ? phase.titleUz : phase.title}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">
                        {isUz ? phase.periodUz : phase.period}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm mb-3 text-muted-foreground">
                            {isUz ? "Muhim bosqichlar" : "Milestones"}
                          </h4>
                          <ul className="space-y-2">
                            {(isUz ? phase.milestonesUz : phase.milestones).map(
                              (milestone, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                      phase.status === "completed" ||
                                      milestone.includes("✅")
                                        ? "bg-primary"
                                        : "bg-muted-foreground"
                                    }`}
                                  ></div>
                                  <span className="text-muted-foreground">
                                    {milestone}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4">
                {isUz ? "Keyingi qadamlar" : "Next Steps"}
              </h2>
              <p className="text-muted-foreground">
                {isUz
                  ? "Keyingi qadamlar — yaqin oylar uchun ustuvor vazifalar"
                  : "Immediate priorities for the coming months"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">
                        {isUz ? step.titleUz : step.title}
                      </h3>
                      <p className="text-sm text-primary/80">
                        {isUz ? step.descriptionUz : step.description}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-lg text-xs ${
                        step.priority === "high"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {step.priority === "high"
                        ? isUz
                          ? "Yuquori ustuvorlik"
                          : "High Priority"
                        : isUz
                        ? "O‘rta ustuvorlik"
                        : "Medium Priority"}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span>
                      {isUz ? "Muddati" : "Deadline"}: {step.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
