import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getHTBPosts } from 'app/db/blog';
import { Tags } from 'app/components/tags';
export const metadata = {
  title: 'Tom\'s Writeups',
  description: 'Read my homemade writeups.',
  tags: 'cybersecurity;',
  image: 'path_to_image',
};



function countTags(posts) {
  const tagCounts = {};

  posts.forEach((post) => {
    const tags = post.metadata.tags.split(';');
    tags.forEach((tag) => {
      if (tag in tagCounts) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  return tagCounts;
}

export default function WriteupsTagsPage({params}) {
  let htbWriteups = getHTBPosts();

  const tags = countTags(htbWriteups); 
  console.log(params.tag)
  htbWriteups = htbWriteups.filter((post) => post.metadata?.tags?.includes(params.tag));
  console.log(tags)
  console.log(params)
  console.log(htbWriteups)
    
  return (
    <section>
    <h1 className="font-bold text-2xl mb-8 tracking-tighter">
      My Writeups Collection 
    </h1>
    
    <Tags tagsDict={tags} redirect={"/tags/" } selectedTag={params.tag}></Tags>
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
          className="flex flex-col space-y-1 mb-3 rounded-lg lg:w-full"
          href={`/writeups/${post.slug}`}
        >
          
        <div className="lg:relative px-2 flex justify-between md:grid md:grid-cols-4 items-center wave-effect flex-row  rounded-lg h-16 mt-3 hover:translate-y-1 transition-all duration-200 ease-in-out hover:border-opacity-0">
        
            {post.metadata.image && <img src={post.metadata.image} className="md:visible w-14 h-14 rounded-lg" alt="writeup image" />}


            
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-xl lg:right-20">
              {post.metadata.title}
            </p>
           
           <div className='flex flex-col'>
              {post.metadata.tags &&
                <div className="flex md:justify-start text-center justify-start align-middle sm:flex-row space-x-[2px] md:space-x-2 lg:right-20">
                  {post.metadata.tags.split(";").map((tag: string) => (
                  <h1
                    key={tag}
                    className="text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-2 py-1 rounded-lg w-12 lg:w-16"
                  >
                    {tag}
                  </h1>
                ))}
            
              </div>}
                </div>
         
          <Suspense fallback={<p className="h-6" />}>
              <Views  slug={post.slug} />
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
