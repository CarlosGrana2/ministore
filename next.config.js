/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.lorem.space', 'placeimg.com', 'cdn.lorem.space'],
    },
};

module.exports = nextConfig;