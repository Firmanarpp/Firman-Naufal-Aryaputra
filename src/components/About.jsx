import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Database, BarChart2, Brain, Sparkles, User, MapPin, Mail, Phone } from "lucide-react";
import { personalInfo, skills } from "../data/portfolioData";

const iconMap = { Monitor, Server, Database, BarChart2, Brain, Sparkles };

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    bar: "bg-gradient-to-r from-cyan-400 to-cyan-300",
    icon: "text-cyan-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    bar: "bg-gradient-to-r from-emerald-400 to-teal-300",
    icon: "text-emerald-400",
  },
};

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const c = colorMap[color];

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className={`text-xs font-mono font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill, index }) {
  const Icon = iconMap[skill.icon] || Monitor;
  const c = colorMap[skill.color];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`gradient-border rounded-xl p-5 ${c.bg} ${c.border}`}
    >
      <div className={`flex items-center gap-3 mb-4`}>
        <div className={`p-2 rounded-lg ${c.bg} border ${c.border}`}>
          <Icon size={18} className={c.icon} />
        </div>
        <h3 className={`font-semibold text-sm ${c.text}`}>{skill.category}</h3>
      </div>
      {skill.items.map((item, i) => (
        <SkillBar key={item.name} name={item.name} level={item.level} color={skill.color} index={i} />
      ))}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle BG decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title-center">
            Who Am I?
          </h2>
        </motion.div>

        {/* Bio + info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative bracket */}
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
              <div className="pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Hello! I&apos;m{" "}
                  <span className="text-cyan-400">{personalInfo.name}</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base mb-6">
                  {personalInfo.about}
                </p>
                <p className="text-zinc-400 leading-relaxed text-base">
                  Saat ini saya sedang menyelesaikan studi S1 Teknik Informatika di Universitas Dian Nuswantoro sambil aktif meningkatkan keahlian di bidang AI dan pengembangan web. Saya percaya bahwa teknologi harus memberikan dampak nyata pada kehidupan manusia.
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "Semarang, Indonesia", color: "cyan" },
                { icon: Mail, label: "Email", value: personalInfo.email, color: "emerald" },
                { icon: Phone, label: "Phone", value: personalInfo.phone, color: "cyan" },
                { icon: User, label: "Status", value: "Open to Work", color: "emerald" },
              ].map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 p-3 rounded-lg ${colorMap[color].bg} border ${colorMap[color].border}`}
                >
                  <div className={`p-1.5 rounded-md ${colorMap[color].bg} mt-0.5`}>
                    <Icon size={14} className={colorMap[color].text} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 mb-0.5">{label}</div>
                    <div className="text-sm text-zinc-200 break-all">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "20s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-emerald-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              {/* Center avatar */}
              <div className="absolute inset-12 rounded-full overflow-hidden border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm z-10">
                <img 
                  src="/firman-naufal-aryaputra.png" 
                  alt="Foto Profil Firman Naufal Aryaputra" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              {/* Glow */}
              <div className="absolute inset-12 rounded-full bg-cyan-500/5 blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h3>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
