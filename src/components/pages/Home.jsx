import { Rocket, Brain, Award, BookOpen, BarChart3, Shield, TrendingUp, Zap, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Home({ onNavigate }) {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'WebGL Simulator',
      titleUz: 'WebGL simulyatori',
      description: 'Real-time 3D flight simulation with PX4 physics engine',
      descriptionUz: 'PX4 fizika mexanizmi bilan real vaqtda 3D parvoz simulyatsiyasi',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Instructor',
      titleUz: 'AI o\'qituvchi',
      description: 'GPT-4 powered post-flight analysis and safety detection',
      descriptionUz: 'GPT-4 asosida parvozdan keyingi tahlil va xavfsizlik nazorati',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certification',
      titleUz: 'Sertifikatlash',
      description: 'Industry-recognized drone pilot certificates',
      descriptionUz: 'Sanoatda tan olingan dron uchuvchi sertifikatlari',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Course Library',
      titleUz: 'Kurslar kutubxonasi',
      description: 'Structured learning path from beginner to advanced',
      descriptionUz: 'Boshlanuvchidan ilg\'or darajaga tuzilgan o\'quv dasturi',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Flight Logs',
      titleUz: 'Parvoz jurnallari',
      description: 'Detailed telemetry and performance tracking',
      descriptionUz: 'Batafsil telemetriya va samaradorlikni kuzatish',
    },
  ];

  const stats = [
    { value: '35%', label: 'Market Growth', labelUz: 'Bozor o\'sishi', icon: <TrendingUp /> },
    { value: 'MVP', label: 'Ready', labelUz: 'Tayyor', icon: <Zap /> },
    { value: '100%', label: 'AI Analysis', labelUz: 'AI tahlil', icon: <Brain /> },
    { value: '0%', label: 'Accident Rate', labelUz: 'Baxtsiz hodisalar', icon: <Shield /> },
  ];

  const problems = [
    'Markaziy Osiyoda sertifikatlangan dron operatorlari yetishmaydi',
    'An\'anaviy o\'qitish usullari qimmat va xavfli',
    'Real dronlar bilan mashq qilish ekologik xavf tug\'diradi',
    'Sifatli instrukturlar yetarli emas',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZSUyMGZseWluZyUyMGZpZWxkfGVufDF8fHx8MTc2NDQwMzkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Agricultural drone"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 157, 88, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(15, 157, 88, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <Target className="w-4 h-4" />
                <span className="text-sm">AI500 Hackathon 2025</span>
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                  AgroDrone Academy
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
                  Ekologik dron pilotlarini o‘rgatuvchi platforma
                </h2>
                <p className="text-xl text-muted-foreground">
                  Learn to fly agricultural drones safely — WebGL simulator + AI instructor + certification.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('demo')}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Live Demo
                </button>
                <button
                  onClick={() => onNavigate('simulator')}
                  className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-secondary/20"
                >
                  Hozir sinab ko‘ring
                </button>
              </div>

            </div>

            {/* 3D drone mockup shu yerda davom etadi... */}
          </div>
        </div>
      </section>
    </div>
  );
}
