import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Tom\'s Blog',
  description: 'Read my thoughts on software development, design, and more.',
  tags: 'blog; software; cybersecurity; design',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-3 rounded-full w-full"
            href={`/blog/${post.slug}`}
          >
          <div className="flex flex-row justify-between border-b mt-3 hover:translate-y-1">
          
            <div className=" flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-xl">
                {post.metadata.title}
              </p>
              
                </div>

          
          {post.metadata.tags &&
                <div className="flex flex-col md:flex-row space-x-2  mb-5 ">
                  {post.metadata.tags.split(";").map((tag: string) => (
                    <h1
                      key={tag}
                      className="flex justify-center text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-2 py-1 rounded-lg w-24"
                    >
                      {tag}
                    </h1>
                  ))}
              
            </div>}
            <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
            
            </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
