/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "www.apolloiot.com"
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
