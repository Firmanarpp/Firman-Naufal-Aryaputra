import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences, education, certifications } from "../data/portfolioData";

const iconMap = { Briefcase, GraduationCap, Award };

const typeConfig = {
  experience: {
    color: "cyan",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    label: "Pengalaman",
  },
  education: {
    color: "emerald",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    label: "Pendidikan",
  },
  certification: {
    color: "violet",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    dot: "bg-violet-400",
    label: "Sertifikasi",
  },
};

function TimelineItem({ item, index, side }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = iconMap[item.icon] || Award;
  const cfg = typeConfig[item.type];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${side === "right" ? "flex-row" : "flex-row-reverse"} gap-0 md:gap-8 mb-8`}
    >
      {/* Card */}
      <div className={`w-full md:w-5/12 ${side === "right" ? "md:ml-auto" : "md:mr-auto"}`}>
        <div
          className={`gradient-border rounded-xl p-5 ${cfg.bg} hover:shadow-lg transition-all duration-300`}
          style={{
            boxShadow: inView ? `0 4px 30px rgba(0,0,0,0.3)` : "none",
          }}
        >
          {/* Type badge */}
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.bg} ${cfg.text} ${cfg.border} border mb-3`}
          >
            {cfg.label}
          </span>

          <div className="flex items-start gap-3 mb-3">
            <div className={`p-2 rounded-lg ${cfg.bg} border ${cfg.border} shrink-0`}>
              <Icon size={16} className={cfg.text} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm leading-tight">{item.title}</h4>
              <p className={`text-xs font-medium ${cfg.text} mt-0.5`}>{item.organization}</p>
            </div>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-3">{item.description}</p>

          {/* Period */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">{item.period}</span>
            <div className="flex flex-wrap gap-1 justify-end">
              {item.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center dot - hidden on mobile */}
      <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 hidden md:flex flex-col items-center z-10">
        <div className={`w-4 h-4 rounded-full ${cfg.dot} border-2 border-zinc-950 shadow-lg`} />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Merge all items into a single sorted timeline
  const timelineItems = [
    ...experiences.map((e) => ({ ...e, sortKey: 3 })),
    ...education.map((e) => ({ ...e, sortKey: 2 })),
    ...certifications.map((c) => ({ ...c, sortKey: 1 })),
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* BG decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Perjalanan</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title-center">
            Experience & Education
          </h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(typeConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2 text-xs text-zinc-400">
              <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
              {cfg.label}
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px timeline-line opacity-40" />

          {timelineItems.map((item, index) => (
            <TimelineItem
              key={`${item.type}-${index}`}
              item={item}
              index={index}
              side={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
