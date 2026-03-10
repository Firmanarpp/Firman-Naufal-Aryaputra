import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="/firman-naufal-aryaputra.png" 
                  alt="Logo Firman Naufal Aryaputra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-white font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Firman<span className="text-cyan-400">.</span>dev
              </span>
            </div>
            <p className="text-zinc-500 text-xs">
              Turning ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Firmanarpp", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="p-2 rounded-lg bg-zinc-800/80 border border-white/5 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/15 transition-all"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
