import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is served from a sub-path
// (/oficina-auto-pro), set through BASE_PATH in the deploy workflow;
// local `npm run dev` runs from the root.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages has no image optimisation server; the photos are
    // already resized and compressed by scripts/prepare-images.mjs.
    unoptimized: true,
  },
};

export default nextConfig;
