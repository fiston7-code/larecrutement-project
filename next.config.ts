import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',  // ✅ Ajoutez le slash avant **
      },
      // Si vous stockez aussi des images sur Supabase :
     {
        protocol: "https",
        hostname: "plus.unsplash.com", // Add this one for the new image
      },
      {
        protocol: 'https',
        hostname: "media.istockphoto.com",
      },
      
      
    ],
  },
};

export default nextConfig;