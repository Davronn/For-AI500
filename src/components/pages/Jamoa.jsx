import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Database,
  Brain,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Jamoa() {
  const team = [
    {
      name: "O'rishev Madamin",
      nameUz: "Оришев Мадамин",
      role: "Backend Developer & Team Lead",
      roleUz: "Backend dasturchi va jamoa rahbari",
      skills: ["Convex", "TypeScript", "Database Design", "API Development"],
      stack: "Backend & 3D Graphics",
      bio: "Specialized in WebGL and real-time 3D applications. 1 years experience in drone simulation.",
      bioUz:
        "WebGL va real vaqt 3D ilovalarida mutaxassis. Dron simulyatsiyasida 1 yillik tajriba.",
      github: "https://github.com/placeholder",
      linkedin: "https://linkedin.com/in/placeholder",
      email: "alisher@agrodrone.academy",
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "Maxamadjonov Davron",
      nameUz: "Махамаджонов Даврон",
      role: "Frontend Developer",
      roleUz: "Frontend dasturchi",
      skills: ["React", "Tailwind CSS", "UI/UX Design", "Figma"],
      stack: "Frontend & Design & AI Integration",
      bio: "Expert in AI integration and flight analysis algorithms. Built the AI instructor system.",
      bioUz:
        "AI integratsiya va parvoz tahlili algoritmlarida mutaxassis. AI o'qituvchi tizimini yaratdi.",
      github: "https://github.com/Davronn",
      linkedin: "https://www.linkedin.com/in/davronn/",
      email: "davronmahamadjonov8@gmail.com",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      name: "Abdujabborova Soliha",
      nameUz: "Абдужабборова Солиха",
      role: "Frontend Developer",
      roleUz: "Frontend dasturchi",
      skills: ["React js","Node.js", "UI Development"],
      stack: "3D Graphics & Frontend",
      bio: "Architected the real-time database and authentication system. Expert in Convex.",
      bioUz:
        "Real vaqt ma'lumotlar bazasi va autentifikatsiya tizimini loyihalashtirdi. Convex mutaxassisi.",
      github: "https://github.com/solihaabdujabborova",
      linkedin: "https://linkedin.com/in/placeholder",
      email: "jasur@agrodrone.academy",
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: "O'ralboyeva Aziza",
      nameUz: "Оралбоева Азиза",
      role: "UI/UX Designer",
      roleUz: "UI/UX dizayner",
      skills: ["Figma", "Tailwind CSS", "Design Systems", "User Research"],
      stack: "Design & Frontend",
      bio: "Created the entire platform design system. Focus on accessibility and user experience.",
      bioUz:
        "Butun platforma dizayn tizimini yaratdi. Foydalanuvchi tajribasi va qulaylikka e'tibor.",
      github: "https://github.com/Uralbaeva",
      linkedin: "https://linkedin.com/in/placeholder",
      email: "madina@agrodrone.academy",
      icon: <Palette className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Jamoa
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our Team — experienced developers and designers building the future
            of drone education
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <Mail className="w-5 h-5" />
            <span className="text-sm">
              All team members registered via AI500 Telegram bot
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1752170080635-db168448f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2NDQwMzkwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {member.nameUz}
                    </p>
                    <p className="text-primary mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.roleUz}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-muted-foreground text-sm mb-2">
                      {member.bio}
                    </p>
                    <p className="text-muted-foreground/70 text-xs">
                      {member.bioUz}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      {member.icon}
                      <span className="text-sm text-primary">
                        {member.stack}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Strengths */}
        <section className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Team Strengths</h2>
            <p className="text-muted-foreground">
              Jamoa kuchi — combined expertise in AI, 3D graphics, and
              agricultural technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
              <div className="text-4xl mb-2 text-primary">15+</div>
              <p className="text-sm text-muted-foreground">
                Years Combined Experience
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Umumiy tajriba yillari
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
              <div className="text-4xl mb-2 text-primary">4</div>
              <p className="text-sm text-muted-foreground">Hackathons Won</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                G'olib hackathonlar
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-white/10 text-center">
              <div className="text-4xl mb-2 text-primary">100%</div>
              <p className="text-sm text-muted-foreground">
                Commitment to Innovation
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Innovatsiyaga sodiqlik
              </p>
            </div>
          </div>
        </section>

        {/* Registration Note */}
        <section className="mt-12">
          <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl">AI500 Registration</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All team members are officially registered for AI500 Hackathon
              2025 via the Telegram bot. Our team ID and verification can be
              provided upon request to judges.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-3">
              Barcha jamoa a'zolari AI500 Telegram bot orqali rasmiy ro'yxatdan
              o'tgan
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
