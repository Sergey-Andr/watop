/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        scrollRestoration: true,
    },
    env: {
        NEXT_API_URL: process.env.API_URL,
        NEXT_GOOGLE_KEY: process.env.GOOGLE_KEY
    }
};

export default nextConfig;
