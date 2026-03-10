import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send, MessageCircle, Linkedin, Github, CheckCircle, XCircle } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-block">Kontak</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title-center">
            Let&apos;s Work Together
          </h2>
          <p className="text-zinc-400 mt-6 max-w-lg mx-auto">
            Punya proyek menarik atau butuh kolaborasi? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:glow-cyan transition-all">
                <Mail size={18} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-0.5">Email</div>
                <div className="text-sm text-zinc-200 break-all">{personalInfo.email}</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <MessageCircle size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-0.5">WhatsApp</div>
                <div className="text-sm text-zinc-200">{personalInfo.phone}</div>
              </div>
            </a>

            {/* Social */}
            <div className="pt-2">
              <div className="text-xs text-zinc-500 mb-3">Find me on</div>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Firmanarpp", label: "GitHub", color: "bg-zinc-800 border-zinc-700 hover:border-zinc-500 text-zinc-300" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40 text-blue-400" },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`p-3 rounded-xl border transition-all ${color}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-2 mt-2 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium">Tersedia untuk freelance & full-time</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="gradient-border rounded-2xl p-6 sm:p-8 bg-zinc-900/60 backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Nama Anda</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Anda</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Pesan</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Ceritakan proyek atau kebutuhan Anda..."
                  className="form-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 resize-none"
                  required
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-4 text-emerald-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Pesan berhasil dikirim! Saya akan segera membalas.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mb-4 text-red-400 text-sm"
                >
                  <XCircle size={16} />
                  Terjadi kesalahan. Silakan coba lagi.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
