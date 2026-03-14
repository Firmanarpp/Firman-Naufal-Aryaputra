import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Publications from '../components/Publications'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Firman Naufal Aryaputra',
      jobTitle: 'Web Developer',
      description: 'Web Developer yang mengkhususkan diri dalam pengembangan frontend, Next.js, React, dan integrasi AI.',
      url: 'https://firman-naufal-aryaputra.vercel.app', // Update soon if you buy domain
      sameAs: [
        'https://github.com/Firmanarpp',
        'https://linkedin.com/in/firman-naufal-aryaputra' // Sesuaikan jika punya linkedin
      ]
    }
  };
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
