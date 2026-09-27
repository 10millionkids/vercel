import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/novadrop-landing-page",
  assetPrefix: "/novadrop-landing-page/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
