import Link from 'next/link';
import react from 'react'; 

export function Tags({tagsDict, redirect, selectedTag}) {
  //SImple fix for the tags now if already selected it will deselect it
  const selectedRedirect = redirect === '/blogtags/' ? '/blog/' : '/writeups/';
  return (
    <div className="collapse group  md:invisible lg:visible flex-wrap grid grid-cols-2 gap-2 fixed lg:left-44 md:top-16 right-5 lg:right-auto w-32 lg:w-auto lg:top-auto border-b-2 border-gray-500 md:right-20">
        <h1 className="font-bold text-2xl tracking-tighter w-16 lg:w-32 text-center md:border-solid md:border-2 lg:border-gray-500 md:rounded-full ">Tags</h1>
        <div className='invisible  lg:visible  border-b-2 border-gray-500 mb-4 -ml-[6%]'></div>
    {Object.entries(tagsDict).map(([tag, count]) => (
       tag === selectedTag ?   <Link
            
       key={tag}
            //href = {/blog/} if the redirect is blogtag else its /writeups/

            href={selectedRedirect}
            className="mb-8 btn  text-md text-centers text-neutral-600 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-300 px-1 py-1 rounded-lg transition-all duration-200 ease-in-out hover:translate-y-1 hover:border-opacity-0"
            
        >
               <div className="flex flex-row text-center">
         <h2 className='ml-5 text-center align-middle mr-1 font-semibold'> {tag}  </h2> 
         <h2 className=" text-yellow-300 text-md font-semibold italic">[{count?.toString()}]</h2>
              </div> 
         </Link> 
         : 

        <Link
            key={tag}
            href={`${redirect}${tag}`}
            className="group-hover:visible invisible -mb-8  group-hover:mb-8 wave-effect w-32 text-md text-centers text-neutral-600 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-300 px-1 py-1 rounded-lg transition-all duration-200 ease-in-out hover:translate-y-1 hover:border-opacity-0"
            
        >
              <div className="flex flex-row text-center">
         <h2 className='ml-2 text-center align-middle justify-center mr-1 font-semibold'>{tag}</h2> 
         <h2 className=" text-yellow-600 text-md font-semibold italic text-center">[{count?.toString()}]</h2>
              </div>
     
        </Link>
    ))}
    </div>
  );








}

