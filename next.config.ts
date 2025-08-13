/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'raw.githubusercontent.com',
      'botpress.com',
      'n8n.io',
      'fastapi.tiangolo.com',
      'www.mastra.ai',
      'gemini.google.com',
      'www.perplexity.ai',
      'vercel.com',
      'avatars.githubusercontent.com' // <-- add this for LangChain logo
    ],
  },
}

module.exports = nextConfig 