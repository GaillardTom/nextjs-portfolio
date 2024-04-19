import { getBlogPosts, getHTBPosts } from 'app/db/blog';

export default async function sitemap() {
  let writeups = getHTBPosts().map((post) => ({
    url: `https://tom-gaillard.vercel.app/writeups/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));
  let blogs = getBlogPosts().map((post) => ({
    url: `https://tom-gaillard.vercel.app/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/guestbook', '/uses', '/work', '/writeups'].map((route) => ({
    url: `https://tom-gaillard.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
