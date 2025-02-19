'use client';
import Image from 'next/image';
import Link from 'next/link';
import Bubble from './bubble';
import React, { useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
export default function Page() {

  const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-down');
        } else {
          entry.target.classList.remove('animate-fade-in-down');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);



  return (
    <section>

      <div className='overscroll-contain'>
        <Bubble image="/aws_logo.jpg" />
        <Bubble image="/images/TS.png" />
        <Bubble image="https://www.mongodb.com/favicon.ico" />
        <Bubble image="https://trpc.io/img/logo.svg" />
        <Bubble image="https://nextjs.org/static/favicon/favicon-32x32.png" />
        <Bubble image="https://reactjs.org/favicon.ico" />
        <Bubble image="https://www.w3.org/html/logo/downloads/HTML5_Badge_32.png" />
        <Bubble image="https://cdn-icons-png.flaticon.com/512/5968/5968242.png " />
        <Bubble image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Fdpng%2Fd%2F543-5438423_mysql-logo-hd-png-download.png&f=1&nofb=1&ipt=32784e9cf4beb61c6b349689fadadeb76435b3ca11a589d45cafd27772bc4200&ipo=images" />

        <Bubble image="https://raw.githubusercontent.com/odb/official-bash-logo/master/assets/Logos/Icons/PNG/48x48.png" />
        <Bubble image="https://img.icons8.com/?size=256&id=cdYUlRaag9G9&format=png" />

        <Bubble image="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/817/180/datas/medium.png" />

        <Bubble image="/logo-htb.svg" />

        {/* <Bubble image="https://linuxhint.com/wp-content/uploads/2020/06/1-10.png" /> */}

        <Bubble image="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" />

        <Bubble image="https://img.icons8.com/?size=256&id=FwaVI1qCE7hQ&format=png" />
      {/* Add more bubbles as needed */}
      </div>
      <div className="flex flex-row sm:justify-between">
        <div className="flex flex-col ">
        <h1
        className="flex text-3xl mb-8 tracking-tighter font-extrabold">Tom Gaillard 👽</h1>
        <p className="prose prose-neutral dark:prose-invert text-lg mb-4 font-large font-semibold">
          🖖 Hey I'm Tom, a developer and a cyber security enthusiast.
        </p>
        <p className="prose prose-neutral dark:prose-invert sm:mr-2"> I love to participate in CTFs and hackathons during my freetime and am always ready to collaborate! I am currently working for the Canadian Army Reserve as a cybersecurity operator. There I had the opportunity to participate in a SOC and hone my skills with various CTF and Red vs Blue exercices.</p>
        </div>
        <Image src="/ArmyTom.jpg" alt="Tom Gaillard" width={200} height={100} className=" collapse sm:visible transition duration-300 ease-linear hover:ease-linear rounded-full hover:rotate-3 w-3/6" />
        <Image src="/male-coding.gif" alt="Tom Gaillard" width={250} height={100} className="absolute right-2 sm:hidden transition duration-300 ease-linear hover:ease-linear rounded-full" />
      </div>



      <div className="mt-10">
          <h1 className="text-2xl font-semibold mb-4">
            Certifications
          </h1>
          <div className="flex flex-wrap justify-around flex-row">
            <div className="card lg:w-full lg:h-[200px] md:w-64 md:h-full sm:h-auto sm:w-full p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"250px", }}>
              <div className="card-body flex-grow">
                <div className="flex flex-row">
                  <Image className="rounded-lg mr-4 mb-4" alt="aws logo" width={50} height={50} src="/aws_logo.jpg"/>
                  <h5 className="card-title">AWS Cloud Practitioner Essentials</h5>
                </div>
                <p className="card-text">Validates foundational, high-level understanding of AWS Cloud, services, and terminology.<br/></p>
                <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/9BJEVP828M4E1355" target="_blank" className="btn absolute bottom-2 left-1/4 right-2 w-2/4 text-center hover:scale-110 hover:animate-pulse">
                  Check
                </Link>
              </div>
            </div> 

            <div className="card lg:w-full  md:w-64 md:h-full sm:h-auto sm:w-full mb-5 p-2 flex flex-col relative transition ease-linear duration-300 hover:scale-110" style={{ maxWidth: "20rem" }}>
              <div className="card-body flex-grow">
                <div className="flex flex-row">
                  <Image className="rounded-lg mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/canada.jpg"/>
                  <h5 className="card-title">Amateur Radio License</h5>
                </div>
                <p className="card-text mb-16">Callsign: VA2QLF<br/>Delivered by Innovations, Science et development Canada</p>
                <Link href="https://apc-cap.ic.gc.ca/pls/apc_anon/query_amat_cs$.startup" target="_blank" className="btn absolute bottom-2 left-1/4 right-2  w-2/4 text-center hover:animate-pulse hover:scale-110">
                  Check
                </Link>
              </div>
            </div> 
          </div>
        </div>

    <div ref={ref} className="transition-all duration-500 ease-in-out transform-gpu opacity-0">

        <div className="work flex flex-col mt-10"> 
          <h1 className="text-2xl font-semibold mb-4">  Work Experience</h1>

          <div className="card w-full hover:backdrop-blur-xl  hover:backdrop-contrast-200 hover:backdrop-opacity-100	 p-2 flex flex-col relative hover:scale-110 hover:z-10 hover:saturate-200  transition ease-linear duration-300" style={{ maxWidth: "200rem", minHeight:"250px", }}>

            <div className="card-body flex-grow">
              <div className="flex flex-row">
                <Image className="rounded-full mr-4 mb-4 z-3" alt="Canadian flag" width={50} height={50} src="/army_logo.jpg"/>
                <div className="flex flex-col justify-center">
                <h5 className="card-title h-3">Canadian Army Reserve</h5>
                <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> April 2019 - Present </p>
                </div>
              </div>
              
              <p className="card-text font-semibold">Cyber Security Operator</p>
              <p className="card-text indent-4 mt-4">Cyber and numeric operator for the 35 signal unit.<br/>
                                       Participated in the Australian Defense Force CTF.<br/>
                                       Participated in multiple "Red vs Blue" exercise in conjunction with the 34 sigs.</p>
            </div>
          </div>
          <div className="card w-full p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "200rem", minHeight:"250px", }}>

            <div className="card-body flex-grow">
              <div className="flex flex-row">
                <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/chus_logo.jpg"/>
                <div className="flex flex-col justify-center">
                <h5 className="card-title h-3">CIUSSS de l'Estrie CHUS</h5>
                <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> Jan 2023 - Aug 2023 </p>

                </div>
              </div>
              
              <p className="card-text font-semibold">IT Support Technician</p>
              <p className="card-text indent-8 mt-4">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p>
            </div>
          </div>
        </div>


      <h1 className="text-2xl font-semibold mb-4 mt-10 transition-all duration-500 ease-in-out transform-gpu opacity-0 animate-fade-in-down">Education</h1>

      <div className="education grid md:grid-cols-2 sm:grid-cols-1 md:justify-around sm:flex-row transition-all duration-500 ease-in-out transform-gpu opacity-0 animate-fade-in-down">


        <div className="card w-full  p-2 mr-10 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"100px", }}>
            <div className="card-body flex-grow">
            <div className="flex flex-row">
            <Image className="rounded-full mr-4 mb-4" alt="UdeS logo" width={50} height={50}  src="/images/uds_logo.png"/>
              <div className="flex flex-col justify-center">
              <h5 className="card-title h-3">Universite de Sherbrooke</h5>
                  <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> Sept 2024 - 2027 </p>
              </div>
            </div>

              <p className="card-text text-left font-semibold">Bsc. Computer Science</p>
              {/* <p className="card-text">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p> */}
 
              </div>

        </div>

        <div className="card w-full  p-2 mr-10 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"100px", }}>
            <div className="card-body flex-grow">
            <div className="flex flex-row">
            <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/champlain_logo.jpg"/>
              <div className="flex flex-col justify-center">
              <h5 className="card-title h-3">Champlain's College</h5>
                  <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> Sept 2019 - Dec 2023 </p>
              </div>
            </div>

              <p className="card-text text-left font-semibold">Computer Science</p>
              {/* <p className="card-text">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p> */}
 
              </div>

        </div>
        <div className="card w-full  p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"100px", }}>
            <div className="card-body flex-grow">
            <div className="flex flex-row">
            <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/montcalm_logo.jpg"/>
              <div className="flex flex-col justify-center">
              <h5 className="card-title h-3">Montcalm's Highschool</h5>
                  <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> Sept 2015 - May 2019 </p>
              </div>
            </div>

              <p className="card-text text-left font-semibold">Sports, Multimedia & Photography</p>
              {/* <p className="card-text">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p> */}
 
              </div>

        </div>
</div>





      </div>
    </section>
  );
}
