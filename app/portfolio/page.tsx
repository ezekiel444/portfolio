
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {SiGithub} from '@icons-pack/react-simple-icons';

const projects = [
  {
    id: 1,
    title: 'Old portfolio before LLm 😁',
    category: 'Web Development',
    image: 'https://matomi.netlify.app/static/6f0dcde8b629a10220eea161d026c9c8/07142/hero-img.webp',
    description: 'Check out my old portfolio where i used to practice my react-Hooks skills',
    liveUrl: 'https://matomi.netlify.app/',
    githubUrl: 'https://github.com/ezekiel444/portfolio-gatsby.git',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    description: 'Modern online shopping experience with React and Node.js',
    liveUrl: null, // 'https://your-live-project.com',
    githubUrl: null //'https://github.com/yourusername/project',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    description: 'Secure mobile banking solution with biometric authentication',
    liveUrl: null, //'https://your-live-project.com',
    githubUrl: null // 'https://github.com/yourusername/project',
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: 'Complete brand identity for a tech startup',
    liveUrl: null, // 'https://your-live-project.com',
    githubUrl: null //'https://github.com/yourusername/project',
  },
  {
    id: 5,
    title: 'AI Analytics Dashboard',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time analytics dashboard with AI predictions',
    liveUrl: null, // 'https://your-live-project.com',
    githubUrl: null //'https://github.com/yourusername/project',
  },
  {
    id: 6,
    title: 'Social Media Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    description: 'Community-focused social platform for creators',
    liveUrl: null, // 'https://your-live-project.com',
    githubUrl: null //'https://github.com/yourusername/project',
  },
  {
    id: 7,
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    description: 'Track workouts and nutrition with personalized plans',
    liveUrl: null, // 'https://your-live-project.com',
    githubUrl: null //'https://github.com/yourusername/project',
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-300">Check out my latest projects and work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#e89b5c] hover:bg-[#d88a4b] text-white p-3 rounded-full transition-colors"
                      aria-label="View live project"
                    >
                      {/* <ExternalLink size={24} /> */}
                   <Image 
                    src="/logo/link-external.png"
                    alt="External-link"
                    width="32" 
                    height="32" />
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                      aria-label="View on GitHub"
                    >
                      <SiGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-[#e89b5c] font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-[#e89b5c] hover:bg-[#d88a4b] text-white rounded-lg transition-colors text-sm font-semibold"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm font-semibold"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#e89b5c] hover:bg-[#d88a4b] text-white font-semibold rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}





// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// // import { ExternalLink, Github } from 'lucide-react';
// // import {, SiTiktok, SiFacebook, SiGithub} from '@icons-pack/react-simple-icons';


// const projects = [
//   {
//     id: 1,
//     title: 'Old portfolio before LLm 😁',
//     category: 'Web Development',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
//     description: 'Check out my old portfolio where i used to practice my react-Hooks skills',
//     liveUrl: 'https://matomi.netlify.app/',
//     githubUrl: 'https://github.com/ezekiel444/portfolio-gatsby.git',
//   },
//   {
//     id: 2,
//     title: 'E-Commerce Platform',
//     category: 'Web Development',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
//     description: 'Modern online shopping experience with React and Node.js',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: null //'https://github.com/yourusername/project',
//   },
//   {
//     id: 3,
//     title: 'Mobile Banking App',
//     category: 'Mobile App',
//     image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
//     description: 'Secure mobile banking solution with biometric authentication',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: 'https://github.com/yourusername/project',
//   },
//   {
//     id: 4,
//     title: 'Brand Identity Design',
//     category: 'Design',
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//     description: 'Complete brand identity for a tech startup',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: 'https://github.com/yourusername/project',
//   },
//   {
//     id: 5,
//     title: 'AI Analytics Dashboard',
//     category: 'Data Science',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
//     description: 'Real-time analytics dashboard with AI predictions',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: 'https://github.com/yourusername/project',
//   },
//   {
//     id: 6,
//     title: 'Social Media Platform',
//     category: 'Web Development',
//     image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
//     description: 'Community-focused social platform for creators',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: 'https://github.com/yourusername/project',
//   },
//   {
//     id: 7,
//     title: 'Fitness Tracker App',
//     category: 'Mobile App',
//     image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
//     description: 'Track workouts and nutrition with personalized plans',
//     liveUrl: 'https://your-live-project.com',
//     githubUrl: 'https://github.com/yourusername/project',
//   }
// ];

// export default function PortfolioPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4">My Portfolio</h1>
//           <p className="text-xl text-gray-300">Check out my latest projects and work</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               <div className="relative h-64">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="text-sm text-[#e89b5c] font-semibold">{project.category}</span>
//                 <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
//                 <p className="text-gray-300">{project.description}</p>
//               </div>
//             </div>

            
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             href="/"
//             className="inline-block px-8 py-4 bg-[#e89b5c] hover:bg-[#d88a4b] text-white font-semibold rounded-full transition-colors"
//           >
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }