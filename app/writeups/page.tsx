import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getHTBPosts } from 'app/db/blog';

export const metadata = {
  title: 'Tom\'s HTB Writeups',
  description: 'Read my writeups on Hack The Box machines.',
  tags: 'cybersecurity;',
};

export default function WriteupsPage() {
  let htbWriteups = getHTBPosts();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        My Collection of Writeups
      </h1>
      {htbWriteups
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
