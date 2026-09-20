/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a verification build use a separate output dir (NEXT_DIST_DIR=.next-verify)
  // so it never collides with a `next dev` server writing to .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Was `unoptimized: true`, which switched the image optimiser off entirely:
    // hero.jpg went out as a raw 1902px JPEG to every device, no AVIF/WebP and
    // no responsive srcset. The mobile hero panel in particular was paying for
    // a desktop-sized file.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1200, 1440, 1920],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // Trim what ships from icon/util packages that re-export a large surface.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  async redirects() {
    return [
      // The template's invented pricing tiers were replaced by the four real
      // engagement models; /testimonials is gone until real ones exist.
      { source: "/pricing", destination: "/how-we-work", permanent: false },
      { source: "/testimonials", destination: "/portfolio", permanent: false },
      { source: "/work", destination: "/portfolio", permanent: false },
      { source: "/work/:slug", destination: "/portfolio/:slug", permanent: false },
    ]
  },
}

export default nextConfig
