// eslint-disable-next-line import/no-extraneous-dependencies
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const withTM = require("next-transpile-modules")([]);

module.exports = withTM(
  withMDX({
    async headers() {
      return [
        {
          source: "/(.*)?",
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
          ],
        },
      ];
    },
    pageExtensions: ["ts", "tsx", "mdx"],
    compiler: {
      emotion: true,
    },
    experimental: { esmExternals: true },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "static.gearbox.fi",
          port: "",
        },
      ],
    },
  }),
);
