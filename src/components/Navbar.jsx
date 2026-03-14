"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label, href) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-cyan-500/30">
            <img 
              src="/firman-naufal-aryaputra.png" 
              alt="Logo Firman Naufal Aryaputra" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-semibold text-lg hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Firman<span className="text-cyan-400">.</span>dev
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => handleNavClick(label, href)}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  active === label ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:firmanarpp@gmail.com"
          className="hidden md:flex btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(label, href)}
                    className={`block text-sm font-medium w-full text-left py-2 ${
                      active === label ? "text-cyan-400" : "text-zinc-400"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:firmanarpp@gmail.com"
                  className="btn-primary block text-center text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
