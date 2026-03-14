import '../index.css';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500']
});

export const metadata = {
  title: 'Firman Naufal Aryaputra - Web Developer Portfolio',
  description: 'Portfolio resmi Firman Naufal Aryaputra. Saya adalah seorang Web Developer yang tertarik pada pembuatan aplikasi website yang interaktif, integrasi AI, dan solusi digital cerdas.',
  keywords: 'Firman Naufal Aryaputra, Web Developer Portfolio, Jasa Pembuatan Website, Frontend Developer, React Developer, Next.js Developer, Aplikasi Web',
  openGraph: {
    title: 'Firman Naufal Aryaputra - Web Developer Portfolio',
    description: 'Portfolio profesional Firman Naufal Aryaputra. Berpengalaman di Frontend Next.js, React, UI/UX, dan AI Integrations.',
    url: 'https://firman-naufal-aryaputra.vercel.app', 
    siteName: 'Firman Naufal Aryaputra',
    images: [
      {
         url: '/firman-naufal-aryaputra.png', // Main Image URL
         width: 1200,
         height: 630,
         alt: 'Preview Portfolio Firman Naufal Aryaputra'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firman Naufal Aryaputra | Web Developer',
    description: 'Portfolio profesional Firman Naufal Aryaputra. Berpengalaman di Frontend Next.js, React, UI/UX, dan AI Integrations.',
    images: ['/firman-naufal-aryaputra.png'],
  },
  verification: {
    google: 'e3muWUds8C3okjMwupCYVzVu1gMGALkeCnVr2A0d2XE',
  },
  alternates: {
    canonical: 'https://firman-naufal-aryaputra.vercel.app', // Ganti nanti jika ingin URL final beda
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased text-white bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
