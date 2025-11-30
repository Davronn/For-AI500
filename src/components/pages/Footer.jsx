import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

export function Footer({ isUz, id }) {
  return (
    <section id={id}>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          {/* Logo / Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              {isUz ? "Drone University" : "Drone University"}
            </h2>
            <p className="text-sm text-gray-400">
              {isUz
                ? "Dronlar va parvoz simulyatsiyasi bo‘yicha interaktiv platforma."
                : "Interactive platform for drones and flight simulation."}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              {isUz ? "Bo‘limlar" : "Sections"}
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a
                  href="#technical-solution"
                  className="hover:text-white transition-colors"
                >
                  {isUz ? "Texnik yechim" : "Technical Solution"}
                </a>
              </li>
              <li>
                <a
                  href="#ai-integration"
                  className="hover:text-white transition-colors"
                >
                  {isUz ? "AI Integratsiyasi" : "AI Integration"}
                </a>
              </li>
              <li>
                <a
                  href="#performance-security"
                  className="hover:text-white transition-colors"
                >
                  {isUz
                    ? "Samaradorlik va Xavfsizlik"
                    : "Performance & Security"}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  {isUz ? "Bog‘lanish" : "Contact"}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {isUz ? "Ijtimoiy tarmoqlar" : "Social Media"}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/1_makxamadjonoff/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Davronn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="davronmahamadjonov8@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} Drone University.{" "}
              {isUz ? "Barcha huquqlar himoyalangan." : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
