/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: '/nextjswebsite', // Replace with your actual GitHub repo name
  assetPrefix: '/nextjswebsite/', // Ensures assets load correctly
};

export default nextConfig;
