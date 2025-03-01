import Link from 'next/link';
import react from 'react'; 

export function Tags({tagsDict, redirect, selectedTag}) {
  //SImple fix for the tags now if already selected it will deselect it
  const selectedRedirect = redirect === '/blogtags/' ? '/blog/' : '/writeups/';
  return (
    <div className="invisible md:visible group left-2 md:right-4 md:left-auto bottom-32 md:bottom-auto md:top-16 sm:top-auto w-fit  xl:visible flex-wrap grid grid-cols-2 gap-2 fixed 2xl:left-32  2xl:right-auto   2xl:w-auto 2xl:top-auto border-b-2 border-gray-500 ">
        <h1 className=" font-bold text-2xl tracking-tighter w-32 lg:w-32 text-center border-solid border-2 border-gray-500 rounded-full ">Tags</h1>
        <div className='border-b-2 border-gray-500 mb-4 -ml-[6%]'></div>
    {Object.entries(tagsDict).map(([tag, count]) => (
       tag === selectedTag ?   <Link
            
       key={tag}
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
            className="group-hover:mb-8 wave-effect w-32 text-md text-center justify-items-center text-neutral-600 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-300 px-1 py-1 rounded-lg transition-all duration-200 ease-in-out hover:translate-y-1 hover:border-opacity-0"
            
        >
              <div className="flex flex-row text-center">
         <h2 className='ml-2 text-center align-middle justify-center mr-1 font-semibold'>{tag}</h2> 
         <h2 className=" text-orange-500 text-md font-semibold italic text-center">[{count?.toString()}]</h2>
              </div>
     
        </Link>
    ))}
    </div>
  );








}

