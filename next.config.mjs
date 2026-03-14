/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // Since we export/deploy this as a standard static site on Vercel
  }
};

export default nextConfig;
