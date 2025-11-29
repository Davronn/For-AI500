import { Award, TrendingUp, Clock, Target, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Progress() {
  const flightHoursData = [
    { month: 'Jan', hours: 2 },
    { month: 'Feb', hours: 5 },
    { month: 'Mar', hours: 8 },
    { month: 'Apr', hours: 12 },
    { month: 'May', hours: 18 },
    { month: 'Jun', hours: 25 },
  ];

  const scoreHistoryData = [
    { flight: 'F1', score: 62 },
    { flight: 'F2', score: 68 },
    { flight: 'F3', score: 71 },
    { flight: 'F4', score: 75 },
    { flight: 'F5', score: 78 },
    { flight: 'F6', score: 82 },
    { flight: 'F7', score: 85 },
    { flight: 'F8', score: 87 },
    { flight: 'F9', score: 90 },
    { flight: 'F10', score: 92 },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Basic Drone Operator',
      titleUz: 'Asosiy dron operatori',
      level: 'Level 1',
      status: 'earned',
      date: '2025-03-15',
      score: 87,
      description: 'Completed basic flight training and safety protocols',
    },
    {
      id: 2,
      title: 'Agricultural Surveying',
      titleUz: "Qishloq xo'jaligi tekshiruvi",
      level: 'Level 2',
      status: 'earned',
      date: '2025-06-20',
      score: 90,
      description: 'Mastered field scanning and crop monitoring missions',
    },
    {
      id: 3,
      title: 'Advanced Flight Maneuvers',
      titleUz: "Ilg'or parvoz manevralar",
      level: 'Level 3',
      status: 'in_progress',
      date: null,
      score: null,
      description: 'Complex navigation and emergency procedures',
    },
    {
      id: 4,
      title: 'Commercial Pilot Certification',
      titleUz: 'Kommertsiya uchuvchisi sertifikati',
      level: 'Level 4',
      status: 'locked',
      date: null,
      score: null,
      description: 'Professional-grade certification for commercial operations',
    },
  ];

  const stats = [
    { label: 'Total Flight Hours', labelUz: 'Umumiy parvoz soatlari', value: '25.5', icon: <Clock /> },
    { label: 'Missions Completed', labelUz: 'Bajarilgan missiyalar', value: '42', icon: <Target /> },
    { label: 'Average Score', labelUz: "O'rtacha ball", value: '87', icon: <TrendingUp /> },
    { label: 'Certifications', labelUz: 'Sertifikatlar', value: '2', icon: <Award /> },
  ];

  const employerPreview = {
    name: 'AgriCorp Solutions',
    position: 'Drone Operator Intern',
    status: 'Verified',
    verificationCode: 'AGD-2025-8472',
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Progress & Sertifikat
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Progress & Certification — track your learning journey and earn recognized certificates
          </p>
        </div>

        {/* Stats Overview */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-white/10 backdrop-blur-sm text-center hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-primary">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl mb-2 text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground/70 mt-1">{stat.labelUz}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Performance Analytics</h2>
            <p className="text-muted-foreground">
              Samaradorlik tahlili — visualize your progress over time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Flight Hours Chart */}
            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Flight Hours Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={flightHoursData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F1724',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line type="monotone" dataKey="hours" stroke="#0F9D58" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Score History Chart */}
            <div className="p-8 rounded-2xl bg-card border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl mb-6">Score Progression</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={scoreHistoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="flight" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F1724',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="score" fill="#0B3D91" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Certifications</h2>
            <p className="text-muted-foreground">
              Sertifikatlar — industry-recognized credentials for your career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all ${
                  cert.status === 'earned'
                    ? 'bg-primary/5 border-primary/30'
                    : cert.status === 'in_progress'
                    ? 'bg-secondary/5 border-secondary/30'
                    : 'bg-card border-white/10 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        cert.status === 'earned'
                          ? 'bg-primary/20'
                          : cert.status === 'in_progress'
                          ? 'bg-secondary/20'
                          : 'bg-white/5'
                      }`}
                    >
                      <Award
                        className={`w-8 h-8 ${
                          cert.status === 'earned'
                            ? 'text-primary'
                            : cert.status === 'in_progress'
                            ? 'text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div>
                      <div
                        className={`text-xs mb-1 ${
                          cert.status === 'earned'
                            ? 'text-primary'
                            : cert.status === 'in_progress'
                            ? 'text-secondary'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {cert.level}
                      </div>
                      <h3 className="text-lg">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.titleUz}</p>
                    </div>
                  </div>

                  <div>
                    {cert.status === 'earned' && (
                      <div className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Earned</span>
                      </div>
                    )}
                    {cert.status === 'in_progress' && (
                      <div className="px-3 py-1 rounded-lg bg-secondary/20 text-secondary text-sm">
                        In Progress
                      </div>
                    )}
                    {cert.status === 'locked' && (
                      <div className="px-3 py-1 rounded-lg bg-white/5 text-muted-foreground text-sm">
                        Locked
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">{cert.description}</p>

                {cert.status === 'earned' && (
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Score: {cert.score}/100</div>
                      <div className="text-xs text-muted-foreground">Earned: {cert.date}</div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                )}

                {cert.status === 'in_progress' && (
                  <div className="pt-6 border-t border-white/10">
                    <div className="mb-2 text-sm text-muted-foreground">Progress: 65%</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[65%]"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Employer Dashboard Preview */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Employer Dashboard</h2>
            <p className="text-muted-foreground">
              Ish beruvchi paneli — verification system for employers
            </p>
          </div>

          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4">Certificate Verification</h3>
                <p className="text-muted-foreground mb-8">
                  Employers can verify pilot credentials instantly using our verification system.
                  All certificates are blockchain-backed for authenticity.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-card border border-white/10">
                    <div className="text-sm text-muted-foreground mb-1">Pilot Name</div>
                    <div>{employerPreview.name}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/10">
                    <div className="text-sm text-muted-foreground mb-1">Position Applied</div>
                    <div>{employerPreview.position}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/10">
                    <div className="text-sm text-muted-foreground mb-1">Verification Code</div>
                    <div className="text-primary">{employerPreview.verificationCode}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <span>Status: {employerPreview.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  <h4 className="text-lg mb-4">Skills Verified</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Basic Flight Operations</span>
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">87%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Agricultural Surveying</span>
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">90%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Safety Protocols</span>
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">95%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-white/10">
                  <h4 className="text-lg mb-4">Flight Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl text-primary">25.5h</div>
                      <div className="text-xs text-muted-foreground">Total Hours</div>
                    </div>
                    <div>
                      <div className="text-2xl text-primary">42</div>
                      <div className="text-xs text-muted-foreground">Missions</div>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-white transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Full Report</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
