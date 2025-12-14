// app/portfolio/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    description: 'Modern online shopping experience with React and Node.js'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    description: 'Secure mobile banking solution with biometric authentication'
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    description: 'Complete brand identity for a tech startup'
  },
  {
    id: 4,
    title: 'AI Analytics Dashboard',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Real-time analytics dashboard with AI predictions'
  },
  {
    id: 5,
    title: 'Social Media Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    description: 'Community-focused social platform for creators'
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    description: 'Track workouts and nutrition with personalized plans'
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
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#e89b5c] font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
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