/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  /* custum config options here */

  // REDIRECT CONFIGURATION
  async redirects() {
    return [
      {
        source: "/",
        destination: "/video",
        permanent: false, // Use false for a temporary redirect (307 status code)
      },
    ];
  },
  // CLOUDINARY CONFIGURATION
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
