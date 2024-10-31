import type { NextConfig } from "next";
const isGitHub = process.env.NEXT_PUBLIC_IS_GITHUB === "true";
const nextConfig: NextConfig = {
  /* config options here */
  output: isGitHub ? "export" : "standalone",
  basePath: isGitHub ? "/portfolio" : "",
  reactStrictMode: true,
};

export default nextConfig;
