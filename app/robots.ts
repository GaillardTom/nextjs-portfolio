export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://tom-gaillard.vercel.app/sitemap.xml',
    host: 'https://tom-gaillard.vercel.app',
  };
}
