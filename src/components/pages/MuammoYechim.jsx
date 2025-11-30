import {
  AlertCircle,
  CheckCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export function MuammoYechim({ isUz,id }) {
  const problemDetails = [
    {
      title: "Operator Shortage",
      titleUz: "Operatorlar yetishmasligi",
      description:
        "Central Asia faces a critical shortage of certified drone operators for agriculture. Only 15% of farms have access to drone technology.",
      descriptionUz:
        "Markaziy Osiyoda qishloq xo'jaligi uchun sertifikatlangan dron operatorlari jiddiy tanqis. Faqat 15% fermalar dron texnologiyasiga ega.",
      impact: "85% of farms without drone access",
      impactUz: "85% fermalar dron texnologiyasiz",
    },
    {
      title: "High Training Costs",
      titleUz: "O'qitishning yuqori narxi",
      description:
        "Traditional drone training requires expensive equipment ($5,000-$15,000 per drone) and skilled instructors, making it inaccessible for most aspiring pilots.",
      descriptionUz:
        "An'anaviy dron o'qitish qimmat uskunalar (1 dron uchun $5,000-$15,000) va malakali o'qituvchilarni talab qiladi, bu ko'pchilik uchun qimmat.",
      impact: "$10,000+ average training cost",
      impactUz: "$10,000+ o'rtacha o'qitish narxi",
    },
    {
      title: "Safety Risks",
      titleUz: "Xavfsizlik xavfi",
      description:
        "Real-world drone practice carries risks of crashes, injuries, and environmental damage. Beginners need safe learning environments.",
      descriptionUz:
        "Real dronlar bilan mashq qilish halokat, jarohat va ekologik zararni keltirib chiqaradi. Yangi boshlovchilar xavfsiz o'quv muhitiga muhtoj.",
      impact: "30% crash rate during training",
      impactUz: "O'qitish paytida 30% halokat darajasi",
    },
    {
      title: "Lack of Standardization",
      titleUz: "Standartlashtirish yetishmasligi",
      description:
        "No unified certification system exists in the region, leading to inconsistent skill levels and employer uncertainty.",
      descriptionUz:
        "Mintaqada yagona sertifikatlash tizimi yo'q, bu malaka darajasi nomuvofiqligiga va ish beruvchilar ishonchsizligiga olib keladi.",
      impact: "No recognized certification",
      impactUz: "Tan olingan sertifikat yo'q",
    },
  ];

  const solutions = [
    {
      title: "WebGL Flight Simulator",
      titleUz: "WebGL parvoz simulyatori",
      description:
        "Browser-based 3D simulator with realistic physics (PX4 flight dynamics). Practice unlimited hours without equipment costs or crash risks.",
      descriptionUz:
        "Brauzerda ishlaydigan 3D simulyator real fizika bilan (PX4 parvoz dinamikasi). Uskunasiz va halokat xavfisiz cheksiz mashq qiling.",
      benefit: "100% safe, $0 equipment cost",
      benefitUz: "100% xavfsiz, $0 uskuna narxi",
    },
    {
      title: "AI-Powered Instructor",
      titleUz: "AI asosida o'qituvchi",
      description:
        "GPT-4 analyzes every flight, detects safety violations, scores performance, and provides personalized feedback in real-time.",
      descriptionUz:
        "GPT-4 har bir parvozni tahlil qiladi, xavfsizlik buzilishlarini aniqlaydi, samaradorlikni baholaydi va real vaqtda shaxsiylashtirilgan fikr bildiradi.",
      benefit: "24/7 AI feedback, instant analysis",
      benefitUz: "24/7 AI fikr, bir zumda tahlil",
    },
    {
      title: "Certification System",
      titleUz: "Sertifikatlash tizimi",
      description:
        "Standardized testing and verifiable certificates recognized by employers. Blockchain-backed credentials for authenticity.",
      descriptionUz:
        "Ish beruvchilar tomonidan tan olingan standartlashtirilgan test va tekshiriladigan sertifikatlar. Haqiqiylik uchun blokcheyn texnologiyasi.",
      benefit: "Industry-recognized certificates",
      benefitUz: "Sanoatda tan olingan sertifikatlar",
    },
    {
      title: "Structured Course Library",
      titleUz: "Tuzilgan kurslar kutubxonasi",
      description:
        "Progressive learning path from basic controls to advanced agricultural missions. Video tutorials, interactive exercises, and assessments.",
      descriptionUz:
        "Asosiy boshqaruvdan ilg'or qishloq xo'jaligi missiyalarigacha bosqichma-bosqich o'quv dasturi. Video darsliklar, interaktiv mashqlar va baholashlar.",
      benefit: "Beginner to Advanced in 12 weeks",
      benefitUz: "12 haftada boshlang'ichdan ilg'or darajagacha",
    },
    {
      title: "Flight Log & Analytics",
      titleUz: "Parvoz jurnallari va tahlil",
      description:
        "Detailed telemetry tracking, performance graphs, and progress monitoring. Employers can verify pilot experience and skill level.",
      descriptionUz:
        "Batafsil telemetriya kuzatuvi, samaradorlik grafiklari va taraqqiyotni monitoring qilish. Ish beruvchilar uchuvchi tajribasi va malaka darajasini tekshirishi mumkin.",
      benefit: "Data-driven skill verification",
      benefitUz: "Ma'lumotlarga asoslangan malaka tekshiruvi",
    },
  ];

  return (
    <section id={id}>
      <div className="w-full py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {isUz ? "Muammo va Yechim" : "Problem & Solution"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isUz
                ? "Muammo & Yechim — bozor muammolari va ularni hal etish bo‘yicha bizning innovatsion yondashuvimizning batafsil tahlili"
                : "Problem & Solution — detailed analysis of market problems and our innovative approach to solving them"}
            </p>
          </div>

          {/* Problem Section */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl">
                  {isUz ? "Muammo" : "Problem"}
                </h2>
                <p className="text-muted-foreground">
                  {isUz
                    ? "Dronlar bo‘yicha o‘quv jarayonidagi hozirgi muammolar"
                    : "Current issues in drone training process"}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {problemDetails.map((problem, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-destructive/20 backdrop-blur-sm hover:border-destructive/40 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <TrendingDown className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl mb-1">
                        {isUz ? problem.titleUz : problem.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {isUz ? problem.descriptionUz : problem.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-destructive/10 text-destructive text-sm">
                      <TrendingDown className="w-4 h-4" />
                      <span>{isUz ? problem.impactUz : problem.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Solution Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl">
                  {isUz ? "Yechim" : "Solution"}
                </h2>
                <p className="text-muted-foreground">
                  {isUz
                    ? "Bizning kompleks platformaviy yondashuvimiz"
                    : "Our comprehensive platform approach"}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all"
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl mb-1">
                            {isUz ? solution.titleUz : solution.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {isUz ? solution.descriptionUz : solution.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-full p-6 rounded-xl bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>{isUz ? "Foyda" : "Benefit"}</span>
                        </div>
                        <p className="text-sm mb-1">
                          {isUz ? solution.benefitUz : solution.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="mt-20">
            <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl lg:text-3xl mb-4">
                  {isUz ? "Platformaning ta’siri" : "Platform Impact"}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {isUz
                    ? "AgroDrone Academy xarajat va xavfsizlik bilan bogʻliq toʻsiqlarni bartaraf etib, Markaziy Osiyodagi har bir kishi uchun professional dron tayyorgarligini mavjud qiladi. Sun’iy intellekt asosidagi yondashuvimiz an’anaviy o‘quv xarajatlarining atigi 10%iga sertifikat olishga tayyor uchuvchilarni tayyorlaydi."
                    : "AgroDrone Academy removes cost and safety barriers, providing professional drone training for everyone in Central Asia. Our AI-based approach prepares certified pilots at only 10% of traditional training costs."}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-card border border-white/10">
                    <div className="text-3xl mb-2 text-primary">90%</div>
                    <p className="text-sm text-muted-foreground">
                      {isUz ? "Xarajatlarni qisqartirish" : "Cost Reduction"}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-white/10">
                    <div className="text-3xl mb-2 text-primary">100%</div>
                    <p className="text-sm text-muted-foreground">
                      {isUz ? "Xavfsizlik darajasi" : "Safety Level"}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-white/10">
                    <div className="text-3xl mb-2 text-primary">24/7</div>
                    <p className="text-sm text-muted-foreground">
                      {isUz ? "Foydalanish" : "Availability"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
