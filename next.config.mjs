/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["i.pravatar.cc", "images.unsplash.com"],
    // unoptimized: true,
  },
};

export default nextConfig;
