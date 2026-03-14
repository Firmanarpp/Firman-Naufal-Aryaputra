/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // Since we export/deploy this as a standard static site on Vercel
  },
  eslint: {
    // Warning refers to unused variables in template Vite, it's safe to ignore for aesthetic project
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
