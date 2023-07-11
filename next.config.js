// @ts-check

/**
 * @type {import('next').NextConfig}
 **/


const nextConfig = {

    reactStrictMode: true,
    experimental: { appDir: true },
    typescript: {
        ignoreBuildErrors: true,
    },
    transpilePackages: ['@fancyapps/ui', 'vanilla-cookieconsent'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            // @ts-ignore
            require("./scripts/sitemap-generator");
        }
        return config;
    },
}

module.exports = nextConfig