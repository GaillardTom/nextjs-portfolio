import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import { Tags } from 'app/components/tags';
import { Chip } from '@mui/material';
export const metadata = {
  title: 'Tom\'s Blog',
  description: 'Read my thoughts on software development, cybersecurity, and more.',
  tags: 'blog; software; cybersecurity; design',
};
function countTags(posts) {
  const tagCounts = {};

  posts.forEach((post) => {
    if (post.metadata.tags) {
    const tags = post.metadata.tags.split(';');
    tags.forEach((tag) => {
      if (tag in tagCounts) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  }
  });

  return tagCounts;
}

export default function BlogPage({params}) {
  let allBlogs = getBlogPosts();
  allBlogs = allBlogs.filter((post) => {
    if (post.metadata.tags) {
      for (let tag of post.metadata.tags.split(';')) {
        if (tag == params.tag) {
          return true;
        }
      }
      return false;
    }
  
  });

  const tags = countTags(allBlogs);
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        read my blog 📚
      </h1>
      <Tags tagsDict={tags} redirect={"/blogtags/" } selectedTag={params.tag}></Tags>
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
            className="wave-effect flex flex-col space-y-1 mb-3 rounded-lg  w-full px-3 py-2 hover:translate-y-1 transition-all duration-200 ease-in-out "
            href={`/blog/${post.slug}`}
          >
          <div className="rounded-lg flex flex-row justify-between  mt-3 items-center content-center">
          
            <div className="flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-xl">
                {post.metadata.title}
              </p>
              
                </div>

          
          {post.metadata.tags &&
                <div className="flex flex-col md:flex-row space-x-2">
                  {post.metadata.tags.split(";").map((tag: string) => (
                    <Chip key={tag} label={tag} size="medium" variant="filled" color="warning" clickable sx={{color: "#f5f6f7"}}/>
 
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
