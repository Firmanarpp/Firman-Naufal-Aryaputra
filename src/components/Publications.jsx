import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink, Calendar, Users, Award } from "lucide-react";
import { publications } from "../data/portfolioData";

function PublicationCard({ pub, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <BookOpen size={80} className="text-cyan-400" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="tech-badge bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Journal Publication
          </span>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
            <Calendar size={12} />
            {pub.year}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {pub.title}
        </h3>

        <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
          <Users size={14} className="text-cyan-500/70" />
          <p className="italic">{pub.authors}</p>
        </div>

        <div className="flex items-start gap-2 p-3 rounded-xl bg-zinc-950/50 border border-white/5 mb-4">
          <Award size={16} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-zinc-200 text-sm font-semibold">{pub.journal}</p>
            <p className="text-zinc-500 text-xs mt-1">
              Vol. {pub.vol}, No. {pub.no}, {pub.year}
            </p>
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {pub.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {pub.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400 text-[10px] font-medium border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={pub.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold text-sm hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
        >
          <ExternalLink size={16} />
          View Publication (DOI)
        </a>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Research</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">
            Scientific Publications
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl text-base leading-relaxed">
            Kontribusi akademik dalam bidang Kecerdasan Buatan dan Deep Learning melalui penelitian terstruktur yang telah dipublikasikan di jurnal ilmiah terakreditasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((span, i) => (
            <PublicationCard key={span.id} pub={span} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
