import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { projects } from "../data/portfolioData";

const imageMap = {
  1: "/project-batik.png",
  2: "/project-sholat.png",
};

const categoryColors = {
  Fullstack: "from-cyan-500/20 to-blue-500/20",
  Frontend: "from-emerald-500/20 to-teal-500/20",
  "API Integration": "from-violet-500/20 to-purple-500/20",
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card group gradient-border rounded-2xl overflow-hidden bg-zinc-900/60 backdrop-blur-sm"
      style={{
        boxShadow: hovered ? `0 20px 60px ${project.glowColor}` : "none",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`} />
        <img
          src={imageMap[project.id]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-sm text-zinc-200 border border-white/10">
            {project.category}
          </span>
        </div>
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-zinc-950/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-zinc-950 text-sm font-bold hover:bg-cyan-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-2">
          <div className="p-1.5 rounded-lg bg-zinc-800 border border-white/5 shrink-0 mt-0.5">
            <Layers size={14} className="text-zinc-400" />
          </div>
          <h3 className="font-semibold text-white text-base leading-tight">{project.title}</h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Bottom buttons (visible always, for accessibility) */}
        <div className="flex gap-2">
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold hover:bg-cyan-500/20 transition-colors"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-zinc-800 border border-white/5 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 transition-colors"
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-violet-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title-center">
            Portfolio Showcase
          </h2>
          <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-base">
            Kumpulan proyek yang mencerminkan keahlian fullstack, desain UI/UX, dan integrasi teknologi modern.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Firmanarpp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors text-sm border-b border-zinc-700 hover:border-cyan-400 pb-0.5"
          >
            <Github size={16} />
            Lihat lebih banyak di GitHub
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
