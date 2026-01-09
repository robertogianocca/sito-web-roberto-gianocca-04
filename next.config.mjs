/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  /* custum config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/video",
        permanent: false, // Use false for a temporary redirect (307 status code)
      },
    ];
  },
};

export default nextConfig;
