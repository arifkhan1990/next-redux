/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      'mongodb+srv://arifkhan:arif1990@cluster0.ukh2ylc.mongodb.net/sbh-shopping?retryWrites=true&w=majority',
    // or MONGODB_URI: 'mongodb+srv://xxxx.mongodb.net/?retryWrites=true&w=majority'
  },
};

module.exports = nextConfig;
