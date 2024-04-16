import Image from 'next/image';
import Link from 'next/link';
import Bubble from './bubble';
export default function Page() {

  return (
    <section>
      <div>
        <Bubble image="/aws_logo.jpg" />
        <Bubble image="/images/TS.png" />
        <Bubble image="https://www.mongodb.com/favicon.ico" />
        <Bubble image="https://trpc.io/img/logo.svg" />
        <Bubble image="https://nextjs.org/static/favicon/favicon-32x32.png" />
        <Bubble image="https://reactjs.org/favicon.ico" />
        <Bubble image="https://www.w3.org/html/logo/downloads/HTML5_Badge_32.png" />
        <Bubble image="https://cdn-icons-png.flaticon.com/512/5968/5968242.png " />
      {/* Add more bubbles as needed */}
      </div>
      <div className="flex flex-row justify-between">

        <div className="flex flex-col ">
        <h1 className="flex text-3xl mb-8 tracking-tighter font-extrabold">Tom Gaillard</h1>
        <p className="prose prose-neutral dark:prose-invert text-lg mb-4 font-large font-semibold">
          Hey I'm Tom, a developer and a cyber security enthusiast.
        </p>
        <p className="prose prose-neutral dark:prose-invert mr-2"> I love to participate in CTFs and hackathons during my freetime and am always ready to collaborate! I am currently working for the Canadian Army Reserve as a cybersecurity operator. There I had the opportunity to participate in a SOC and hone my skills with various CTF and Red vs Blue exercices.</p>
        </div>
        <Image src="/ArmyTom.jpg" alt="Tom Gaillard" width={200} height={200} className=" transition duration-500 ease-linear hover:ease-linear rounded-full hover:scale-125 w-2/6" />
        
      </div>



      <div className="mt-10">
          <h1 className="text-2xl font-semibold mb-4">
            Certifications
          </h1>
          <div className="flex flex-wrap justify-between">
            <div className="card w-1/2 p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"250px", }}>
              <div className="card-body flex-grow">
                <div className="flex flex-row">
                  <Image className="rounded-full mr-4 mb-4" alt="aws logo" width={50} height={50} src="/aws_logo.jpg"/>
                  <h5 className="card-title">AWS Cloud Practitioner Essentials</h5>
                </div>
                <p className="card-text">Validates foundational, high-level understanding of AWS Cloud, services, and terminology.</p>
                <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/9BJEVP828M4E1355" target="_blank" className="btn absolute bottom-2 left-1/4 right-2 w-2/4 text-center hover:scale-110 hover:bg-green-600">
                  Check
                </Link>
              </div>
            </div> 

            <div className="card w-1/2 p-2 flex flex-col relative transition ease-linear duration-300 hover:scale-110 " style={{ maxWidth: "20rem" }}>
              <div className="card-body flex-grow">
                <div className="flex flex-row">
                  <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/canada.jpg"/>
                  <h5 className="card-title">Amateur Radio License</h5>
                </div>
                <p className="card-text">Callsign: VA2QLF<br/>Delivered by Innovations, Science et development Canada</p>
                <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/9BJEVP828M4E1355" target="_blank" className="btn absolute bottom-2 left-1/4 right-2  w-2/4 text-center hover:scale-110 hover:bg-green-600">
                  Check
                </Link>
              </div>
            </div> 
          </div>
        </div>

        <div className="work flex flex-col mt-10"> 
          <h1 className="text-2xl font-semibold mb-4">  Work Experience</h1>

          <div className="card w-full p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "200rem", minHeight:"250px", }}>

            <div className="card-body flex-grow">
              <div className="flex flex-row">
                <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/army_logo.jpg"/>
                <div className="flex flex-col justify-center">
                <h5 className="card-title h-3">Canadian Army Reserve</h5>
                <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> April 2019 - Present </p>
                </div>
              </div>
              
              <p className="card-text font-semibold">Cyber Security Operator</p>
              <p className="card-text">- Cyber and numeric operator for the 35th communication regiment.<br/>
                                       - Participated in the Australian Defense Force CTF.<br/>
                                       - Participated in multiple "Red vs Blue" exercise in conjunction with the 34th sigs.</p>
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
              <p className="card-text">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p>
            </div>
          </div>
        </div>


      <h1 className="text-2xl font-semibold mb-4 mt-10">Education</h1>
      <div className="education flex flex-row justify-around">




        <div className="card w-1/2 h-1/2 p-2 mr-10 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"100px", }}>
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

        <div className="card w-1/2 h-1/2 p-2 flex flex-col relative hover:scale-110 transition ease-linear duration-300" style={{ maxWidth: "20rem", minHeight:"100px", }}>
            <div className="card-body flex-grow">
            <div className="flex flex-row">
            <Image className="rounded-full mr-4 mb-4" alt="Canadian flag" width={50} height={50} src="/montcalm_logo.jpg"/>
              <div className="flex flex-col justify-center">
              <h5 className="card-title h-3">Montcalm's Highschool</h5>
                  <p className="text-md prose prose-neutral  dark:prose-invert mt-0 font-semibold justify-center text-left"> Sept 2019 - Dec 2023 </p>
              </div>
            </div>

              <p className="card-text text-left font-semibold">Sports, Multimedia & Photography</p>
              {/* <p className="card-text">On site support technicians for health workers at the CHUS de l'Estrie working on different sites, from hardware to application problems, and updated some of their powershell scripts.</p> */}
 
              </div>

        </div>






      </div>

        
    </section>
  );
}
