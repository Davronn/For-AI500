import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Layout({ children,isUz, setIsUz }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  const navItems = [
    { id: "home", label: "Home", labelUz: "Bosh sahifa" },
    { id: "problem", label: "Problem & Solution", labelUz: "Muammo va Yechim" },
    { id: "team", label: "Team", labelUz: "Jamoa" },
    { id: "why-us", label: "Why us", labelUz: "Nega biz" },
    { id: "roadmap", label: "Road Map", labelUz: "Yo'l xaritasi" },
    { id: "tech", label: "Tech Solution", labelUz: "Texnik Yechim" },
  ];

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll orqali qaysi bo‘limda ekanimizni aniqlash
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // navbar offset
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav button render
  const renderNavButtons = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          scrollToSection(item.id);
          if (isMobile) setMobileMenuOpen(false);
        }}
        className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
          activeSection === item.id
            ? "bg-green-500 text-white"
            : "text-muted-foreground hover:text-white hover:bg-white/5"
        }`}
      >
        {isUz ? item.labelUz : item.label}
      </button>
    ));

  // Language toggle component
  const LanguageToggle = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsUz(true)}
        className={`px-3 py-1 rounded-lg transition cursor-pointer font-semibold ${
          isUz
            ? "text-green-500"
            : "text-gray-700 bg-gray-200 hover:bg-gray-300"
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => setIsUz(false)}
        className={`px-3 py-1 rounded-lg transition cursor-pointer font-semibold ${
          !isUz
            ? "text-green-500" // tanlangan til text yashil
            : "text-white bg-gray-700 hover:bg-gray-600"
        }`}
      >
        ENG
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 text-white text-lg font-bold">
              AgroDrone Academy
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-4">
              {renderNavButtons()}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 flex flex-col gap-2">
              <div className="flex justify-end gap-2 mb-2">
                <LanguageToggle />
              </div>
              {renderNavButtons(true)}
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-20">
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && typeof child.type !== "string"
            ? React.cloneElement(child, {
                id: child.props.id || child.type.name.toLowerCase(),
                isUz, // faqat React komponentlarga
              })
            : child
        )}
      </main>
    </div>
  );
}
