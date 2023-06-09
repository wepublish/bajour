//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: true,
  },

  compiler: {
    emotion: {
      importMap: {
        "@mui/material": {
          "styled": {
            "canonicalImport": ["@emotion/styled", "default"],
            "styledBaseImport": ["@mui/material", "styled"]
          }
        },
        "@mui/material/styles": {
          "styled": {
            "canonicalImport": ["@emotion/styled", "default"],
            "styledBaseImport": ["@mui/material/styles", "styled"]
          }
        }
      },
    },
  },

  publicRuntimeConfig: {
    env: {
      API_URL: process.env.API_URL || '',
    },
  },

  transpilePackages: ['@wepublish/ui', '@wepublish/website'],
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
