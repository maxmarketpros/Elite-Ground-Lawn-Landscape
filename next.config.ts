import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Direct renames
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },

      // Old service slugs → best-fit new pages
      {
        source: "/lawn-care-maintenance-services",
        destination: "/services/lawn-mowing",
        permanent: true,
      },
      {
        source: "/hardscaping-decorative-enhancements",
        destination: "/services/landscaping-rocks",
        permanent: true,
      },

      // No direct match on the new site — point to home (hero H1 is
      // "Clean-Up Experts" and mentions sod in the subhead, so both land
      // somewhere highly relevant).
      {
        source: "/landscape-yard-cleanup-services",
        destination: "/",
        permanent: true,
      },
      { source: "/sod-installation", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
