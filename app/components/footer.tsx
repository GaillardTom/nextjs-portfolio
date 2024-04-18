'use client';
import Link from 'next/link';

import Image from 'next/image';
import {useState, useEffect} from 'react';
const socials = {
    "github": "https://github.com/GaillardTom",
    "linkedin": "https://www.linkedin.com/in/tom-gaillard-b94895255",
    "email": "mailto:tomgaillard1@gmail.com",
};

export function Footer() {

    const [visible, setVisible] = useState(false);

  return (
    <aside className="sm:fixed relative bottom-0 justify-center content-center items-center w-auto sm:right-8  tracking-tight">
      <div className="lg:sticky md:bot-15 lg:bot-20">

        <nav
          className="  items-start px-0 pb-0 rounded-lg md:overflow-auto md:relative"
          id="nav"
        >

<div className="flex flex-col-reverse space-x-0 pr-10 group mt-16">


        <h1 className="sm:collapse prose-headings visible text-center item-center  align-middle justify-center text-xl font-semibold mb-5 mt-6">Contacts</h1>
    <button onClick={() => setVisible(!visible)} className="z-1 group border-gray-600 border-solid border-2 text-lg text-center footer-circle align-middle items-center content-center self-center justify-center">

                <div className="flex flex-col">


                    
                <Image width={75} height={75} alt="Contacts" src="/images/address-book.png" className='group-hover:animate-pulse' />
                {/* <h1 className="text-sm prose prose-neutral dark:prose-invert group-hover:animate-pulse font-bold">Contacts</h1> */}
                </div> 
            </button>



    <div className="flex align-middle content-center justify-center">
        
           {visible && Object.entries(socials).map(([social, link]) => {
              return (
                <Link
                  key={social}
                  href={link}
                  className=" z-1 text-xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200  align-middle items-center content-center relative py-1 px-2 focus:bg-green-900"
                >
                    <Image className='relative fade-in hover:-translate-y-1 mb-5' alt="test" width={30} height={30} src={"/images/"+social+".jpg"}></Image>
                </Link>
              );
            })}
    </div>
            
</div>
            
        </nav>
      </div>
    </aside>
  );
}
