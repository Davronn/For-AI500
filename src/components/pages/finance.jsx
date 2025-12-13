import {
  DollarSign,
  Users,
  Building2,
  Landmark,
  TrendingUp,
} from "lucide-react";

const Finance = ({ id, isUz }) => {
  return (
    <section id={id}>
      <div className="w-full py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              {isUz ? "Biznes modeli" : "Business Model"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isUz
                ? "Uchta asosiy bozor segmentiga tayangan barqaror va kengayuvchan daromad modeli"
                : "A scalable and sustainable revenue model across three key market segments"}
            </p>
          </div>

          {/* B2C */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl">
                  B2C – Individual Students
                </h2>
                <p className="text-muted-foreground">
                  {isUz
                    ? "Freemium asosidagi individual foydalanuvchilar modeli"
                    : "Freemium-based individual user model"}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl mb-2">Free Tier</h3>
                <p className="text-muted-foreground">
                  {isUz
                    ? "Oyiga 2 soat simulator, cheklangan kurslar va asosiy missiyalar"
                    : "2 hours/month simulator access, limited courses, basic missions"}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm">
                <h3 className="text-xl mb-2">Pro Tier</h3>
                <p className="text-muted-foreground mb-2">
                  {isUz
                    ? "Cheklanmagan simulator, barcha kurslar va shaxsiy reja"
                    : "Unlimited simulator, all courses, personalized plans"}
                </p>
                <p className="text-primary font-medium">$99 / month</p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-secondary/20 backdrop-blur-sm">
                <h3 className="text-xl mb-2">
                  {isUz ? "Sertifikatsiya" : "Certification"}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {isUz
                    ? "Rasmiy uchuvchi sertifikati"
                    : "Official pilot certification"}
                </p>
                <p className="text-primary font-medium">$500 one-time</p>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary">
              <TrendingUp className="w-5 h-5" />
              <span>
                Year 1: 1,000 students → $100K MRR + $500K certifications
              </span>
            </div>
          </section>

          {/* B2B + B2G */}
          <section className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* B2B */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl">B2B</h2>
                  <p className="text-muted-foreground">
                    Corporate licenses
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  Agricultural Cooperatives — $2,000 / year
                </div>
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  Drone Companies — $3,000 / year
                </div>
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  Equipment Dealers — $1,500 / year
                </div>
              </div>

              <p className="mt-4 text-primary">
                Year 1 Goal: 50 companies → $100K ARR
              </p>
            </div>

            {/* B2G */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl">B2G</h2>
                  <p className="text-muted-foreground">
                    Government & institutions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  Agricultural Universities — $5,000 / year
                </div>
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  Ministry of Agriculture — $10,000 / year
                </div>
              </div>

              <p className="mt-4 text-primary">
                Year 1 Goal: 10 institutions → $70K ARR
              </p>
            </div>
          </section>

          {/* Summary */}
          <section>
            <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm text-center">
              <h3 className="text-3xl mb-4">
                {isUz ? "Daromad prognozi" : "Revenue Projection"}
              </h3>
              <p className="text-xl text-muted-foreground mb-2">
                Year 1: <span className="text-white font-semibold">$1.2M ARR</span>
              </p>
              <p className="text-muted-foreground">
                Year 3: $5M ARR (regional expansion)
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Finance;
