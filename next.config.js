module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMG_HOST,
        port: '',
        pathname: '/t/p/original/**',
      },
    ],
  },
}