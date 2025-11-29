import {
  Award,
  Brain,
  Users,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";

export function NegaBiz() {
  const strengths = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      titleUz: "Ilg'or texnologiya",
      description:
        "We combine WebGL, Three.js, and PX4 flight physics for the most realistic browser-based drone simulator in the market.",
      descriptionUz:
        "Biz WebGL, Three.js va PX4 parvoz fizikasini birlashtiramiz va bozordagi eng real brauzer asosidagi dron simulyatorini yaratamiz.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      titleUz: "AI bilan o'qitish",
      description:
        "GPT-4 integration provides instant, personalized feedback. Our AI instructor analyzes every maneuver and suggests improvements.",
      descriptionUz:
        "GPT-4 integratsiyasi bir zumda shaxsiylashtirilgan fikr beradi. AI o'qituvchimiz har bir manevrani tahlil qiladi va yaxshilashlarni taklif qiladi.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market-Focused Solution",
      titleUz: "Bozorga yo'naltirilgan yechim",
      description:
        "Built specifically for Central Asian agricultural sector. We understand local challenges and regulatory requirements.",
      descriptionUz:
        "Markaziy Osiyo qishloq xo'jaligi sektori uchun maxsus yaratilgan. Biz mahalliy muammolar va tartibga solish talablarini tushunamiz.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Safety Record",
      titleUz: "100% xavfsizlik rekordi",
      description:
        "Virtual training eliminates all physical risks. Students can practice dangerous scenarios safely until they master them.",
      descriptionUz:
        "Virtual o'qitish barcha jismoniy xavflarni bartaraf etadi. Talabalar xavfli stsenariyalarni xavfsiz ravishda mashq qilishlari mumkin.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certification",
      titleUz: "Sanoat sertifikati",
      description:
        "Our certificates are designed to meet international drone operator standards and are recognized by agricultural employers.",
      descriptionUz:
        "Sertifikatlarimiz xalqaro dron operator standartlariga javob beradi va qishloq xo'jaligi ish beruvchilari tomonidan tan olinadi.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Platform",
      titleUz: "O'sish imkoniyati",
      description:
        "Cloud-based architecture supports unlimited concurrent users. Built on Convex for real-time collaboration and scalability.",
      descriptionUz:
        "Bulutga asoslangan arxitektura cheksiz foydalanuvchilarni qo'llab-quvvatlaydi. Real vaqt hamkorlik va kengayish uchun Convex ustida qurilgan.",
    },
  ];

  const experience = [
    {
      year: "2023",
      title: "AgriTech Hackathon Winner",
      titleUz: "AgriTech Hackathon g'olibi",
      description: "Built precision agriculture monitoring system",
    },
    {
      year: "2024",
      title: "Drone Innovation Award",
      titleUz: "Dron innovatsiya mukofoti",
      description: "Recognition for UAV control algorithm development",
    },
    {
      year: "2024",
      title: "Central Asia Tech Summit",
      titleUz: "Markaziy Osiyo Tech sammiti",
      description: "Presented AI-powered agricultural solutions",
    },
  ];

  const differentiators = [
    {
      feature: "WebGL Simulator",
      us: "Built-in browser, no download",
      competitors: "Requires expensive desktop software",
    },
    {
      feature: "AI Instructor",
      us: "24/7 instant feedback with GPT-4",
      competitors: "Limited to scheduled instructor time",
    },
    {
      feature: "Cost",
      us: "$49/month subscription",
      competitors: "$10,000+ upfront investment",
    },
    {
      feature: "Safety",
      us: "100% virtual, zero crash risk",
      competitors: "30% equipment damage rate",
    },
    {
      feature: "Accessibility",
      us: "Any device, anywhere, anytime",
      competitors: "Requires physical training facility",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Nega Biz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why Us — our unique strengths, proven experience, and competitive
            advantages
          </p>
        </div>

        {/* Strengths Grid */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Core Strengths</h2>
            <p className="text-muted-foreground">
              Asosiy kuchli tomonlar — what makes us different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  {strength.icon}
                </div>
                <h3 className="text-xl mb-2">{strength.title}</h3>
                <p className="text-sm text-primary/80 mb-4">
                  {strength.titleUz}
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  {strength.description}
                </p>
                <p className="text-muted-foreground/70 text-xs">
                  {strength.descriptionUz}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Competitive Comparison */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Competitive Advantage</h2>
            <p className="text-muted-foreground">
              Raqobatdagi ustunlik — why we win against traditional training
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-muted-foreground">
                    Feature
                  </th>
                  <th className="text-left p-4 text-primary">
                    AgroDrone Academy
                  </th>
                  <th className="text-left p-4 text-muted-foreground">
                    Traditional Training
                  </th>
                </tr>
              </thead>
              <tbody>
                {differentiators.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">{item.feature}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-primary">{item.us}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-destructive/50 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          {item.competitors}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Trust Badges */}
        <section>
          <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Why Trust Us</h2>
              <p className="text-muted-foreground">
                Nima uchun bizga ishonish mumkin — built by experts, for the
                future
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl mb-2">4+</div>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl mb-2">2</div>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Safety Record</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl mb-2">AI500</div>
                <p className="text-sm text-muted-foreground">Hackathon 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
