import Image from "next/image";
import Link from "next/link";

export default function Page() {


  const projects = [
    // Add your projects here
    { title: 'Wardriving', 
    description: 'Webapp to show Wi-Fi networks from a kismet scan on a map. Can also perform search and filter certain types of network', 
    image: '/wardriving.jpg',
    source: 'https://github.com/GaillardTom/Wardriving',},
    { title: 'Orientation Site', description: 'Webapp to get the educational requirements based on a given job, using data from the O*NET database',
     image: '/orientationSite.jpg',
     link: 'https://orientation-site.vercel.app/',
     source: 'https://github.com/GaillardTom/OrientationSite'},
     {title:'MakeUoT2022 Hackathon', description: 'First Hackathon ever! First time experiencing with RPI\'s GPIO. Project made in 36h to throw back a ball and count the number of times you put it in the net ', image: '/MakeUoT2022.jpg', link: 'https://devpost.com/software/makeuoftproject2022', source: 'https://github.com/GaillardTom/MakeUofTProject2022'},
    // ...
  ];

return (
    <section className="projects py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link href={project.source} passHref target="_blank" >
            <div key={index} className="relative project-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-10">{project.description}</p>
              { project.link && <Link href={project.link} target="_blank" className="hover:scale-105 hover:animate-pulse absolute btn bottom-2 left-2 text-center"> demo </Link>}
              {project.source && 
                  <Link href={project.source} passHref target="_blank" >
                          <img src="/social.png" className="absolute hover:scale-125 bottom-2 right-2" alt="GitHub Logo" style={{ width: '40px', height: '40px' }}/>
                  </Link>
                }
              
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
