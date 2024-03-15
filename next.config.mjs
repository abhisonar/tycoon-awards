/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
