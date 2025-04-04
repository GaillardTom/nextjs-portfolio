import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
export default function Page() {


  const projects = [
    // Add your projects here
     {title:'Game Night Poker AI', description: 'Worked with a team to create an AI that can detect hands and play poker. Used in an international challenge hosted by the british army', image: '/images/UIGameNightPoker.png', source: 'https://github.com/GaillardTom/GameNightPokerAI'},
     {title:'Instagram Stalker', description: 'OSINT project: Written in python with django/flask/mongoDB, this application can see the latest followings of an individual on instagram. Had to reverse their API using burpsuite and create logic to bypass the filters.', image: '/images/InstaStalkerUI.PNG', source: 'https://github.com/GaillardTom/InstaStalker'},
    { title: 'Wardriving', 
    description: 'Webapp to show Wi-Fi networks from a kismet scan on a map. Can also perform search and filter certain types of network', 
    image: '/wardriving.jpg',
    source: 'https://github.com/GaillardTom/Wardriving',},
    { title: 'Orientation Site', description: 'Webapp to get the educational requirements based on a given job, using data from the O*NET database',
     image: '/orientationSite.jpg',
     link: 'https://orientation-site.vercel.app/',
     source: 'https://github.com/GaillardTom/OrientationSite'},
     {title:'MakeUoT2022 Hackathon', description: 'First Hackathon ever! First time experiencing with RPI\'s GPIO. Project made in 36h to throw back a ball and count the number of times you put it in the net ', image: '/MakeUoT2022.jpg', link: 'https://devpost.com/software/makeuoftproject2022', source: 'https://github.com/GaillardTom/MakeUofTProject2022'},
     {title:'Epic Universe Online', description: 'Webapp that gets the RSS feed from NASA and displays it. First site deployed with vercel and first time using next.js!', image: '/epicUniverse.jpg', source: 'https://github.com/GaillardTom/EpicUniverseOnline', link:'https://www.epicuniverseonline.com/'},
    // ...
  ];

return (
    <section className="projects py-12 md:-ml-44">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center md:w-auto md:-mt-10">My Projects 🧪</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <Link href={project.source} passHref target="_blank" >
            <div key={index} className="relative w-96 sm:w-full h-auto md:h-[100%] group project-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-10">{project.description}</p>
              { project.link && <Link href={project.link} target="_blank" className="hover:scale-105 hover:animate-pulse absolute bottom-2 left-2 w-fill">
              
                <IconButton color="warning" aria-label="launch" component="span">
                        <LaunchIcon />
                </IconButton>
              </Link>}
              {project.source && 
                  <Link href={project.source} passHref target="_blank" >
                          <img src="/social.png" className="absolute hover:rotate-12 bottom-2 right-2" alt="GitHub Logo" style={{ width: '40px', height: '40px' }}/>
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
