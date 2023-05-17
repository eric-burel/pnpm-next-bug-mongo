/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // it has no effect on the mongodb warning
        serverComponentsExternalPackages: ['db'],
    },

}

module.exports = nextConfig
