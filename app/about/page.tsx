'use client';

import Link from 'next/link';
import { Code, Palette, Rocket, Users, Cloud, Database, Server, Globe } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'Kubernetes & Docker', level: 'Expert' },
    { name: 'Cloud Computing (Azure, AWS, GCP)', level: 'Expert' },
    { name: 'DevOps & CI/CD', level: 'Expert' },
    { name: 'React & Next.js', level: 'Advanced' },
    { name: 'Python & Bash', level: 'Advanced' },
    { name: 'Terraform & Ansible', level: 'Expert' },
    { name: 'GraphQL & REST APIs', level: 'Advanced' },
    { name: 'MySQL & PostgreSQL', level: 'Intermediate' }
  ];

  const education = [
    {
      degree: "Master's degree",
      school: 'ESGI',
      field: 'Systèmes, Réseaux et Cloud Computing',
      year: 'Nov 2023 - Sep 2025',
      description: 'Expert en architectures systèmes-réseaux et en sécurité informatique. Specializing in Cloud Computing, Kubernetes, Cisco Networking, Network Administration, and Solution Architecture.',
      skills: 'Project Management · Kubernetes · Cisco Networking · Network Administration · Solution Architect · Python · Microsoft Azure · Cloud Computing · REST APIs · Google Cloud Platform (GCP) · AWS · Bash · Ansible · Powershell · Docker · Pipelines · DevOps · Gitlab · GitHub'
    },
    {
      degree: 'Cloud Administrator',
      school: 'Simplon Grand Ouest',
      field: 'Devops',
      year: 'May 2022 - Nov 2022',
      description: 'Grade: Niveau 6. Focused on cloud infrastructure deployment and management using Microsoft Azure.',
      skills: 'Kubernetes · Bash · Powershell · MySQL · Microsoft Azure · Networking · Docker · Gitlab · Pipelines · Terraform'
    },
    {
      degree: 'Full Stack Web Developer',
      school: 'Code Your Future',
      field: 'Computer Programming',
      year: '2019 - 2020',
      description: 'Grade: Level 5. Formation à la programmation and application development for humanitarian projects.',
      skills: 'GraphQL · React Hooks · JavaScript · Node.js · HTML5 · CSS · Bootstrap · REST APIs · GitHub · Group Communication'
    },
    {
      degree: 'National Diploma',
      school: 'Federal Polytechnic, Auchi',
      field: 'Computer Science',
      year: '2013 - 2016',
      description: 'OND of Computer (Niveau BAC, équivalent BAC). Foundation in computer science and programming fundamentals.',
      skills: 'Visual Basic for Applications (VBA) · COBOL · Fortran · HTML · Statistics'
    }
  ];

  const workExperience = [
    {
      position: 'Consultant Cloud',
      company: 'Teamwork (Azure et AWS)',
      year: 'Mai 2022 - Present',
      responsibilities: [
        'Build infrastructure (Hub & Spoke) - Eye2scan',
        'Monitoring & Supervision: Istio service mesh (Prothemeus, Grafana, Kiali), FluentD, Elastic-search et Kibana'
      ]
    },
    {
      position: 'Online Coding Tutor',
      company: 'Code your future South Africa',
      year: 'Jan 2021 - Aug 2021',
      responsibilities: [
        'Online tutoring 30h/week',
        'Taught 6 students coding techniques and communication skills',
        'Mentorship at Codeyourfuture South Africa 2021'
      ]
    },
    {
      position: 'Erasmus+ Project Member',
      company: 'Anbhe Kele Youth Pass et Humacoop - Grenoble',
      year: 'Mar 2021 - May 2021',
      responsibilities: [
        'International mobility helping refugees',
        'Created educational games and activities',
        'Welcomed refugees and proposed activities'
      ]
    },
    {
      position: 'App Developer (Internship)',
      company: 'Alma, Grenoble',
      year: 'Feb 2021',
      responsibilities: [
        'Developed collaborative application integration',
        'Information sharing platform development',
        'Integrated Rossum software'
      ]
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-300">DevOps Engineer | Cloud Architect | Full Stack Developer</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="w-full aspect-square rounded-2xl bg-[#2d4a2d] flex items-center justify-center overflow-hidden relative cursor-pointer"
                onMouseMove={handleMouseMove}
                style={{
                  backgroundImage: 'url(/profile.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Water ripple effect */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 155, 92, 0.4), transparent)`,
                    filter: 'blur(20px)',
                    transition: 'all 0.1s ease-out'
                  }}
                />
                {/* Fallback */}
                <img 
                  src="./about_profile_picx/about_me_picx.png" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* <span className="text-8xl font-bold text-[#e89b5c] z-10">EML</span> */}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">EZEKIEL Matomi Lucky</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A DevOps Engineer who is Curious about life and Passionate about living things. Committed to the use of technology and how things work. Anxious to take on new challenge and find creative way to solve past and present problems.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                In general i love what i do. In love with football and code writing. Proven experience in teaching web development, long time captain of my team & mentorship at Codeyourfuture South Africa 2021.
              </p>
              <p className="text-gray-300 leading-relaxed italic text-[#e89b5c] font-semibold">
                Motto: That that you do the most, will be That that you do the best. 💪
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">📧 Email:</span> matomiezekiel6@gmail.com
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">📱 Phone:</span> +33 7 53 43 29 20
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">📍 Location:</span> Lyon, France
                </p>
                <p className="text-gray-300">
                  {/* <span className="font-semibold text-white">🔗 Portfolio:</span>{' '}
                  <a href="https://matomi.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#e89b5c] hover:underline">
                    matomi.netlify.app
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <span className="text-white font-medium">{skill.name}</span>
                <span className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Work Experience Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-300 text-sm mb-2">{edu.field}</p>
                  <p className="text-teal-400 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">{edu.description}</p>
                  {edu.skills && (
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-xs text-gray-200 leading-relaxed">{edu.skills}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {work.position}
                  </h3>
                  <p className="text-teal-400 font-semibold mb-1">{work.company}</p>
                  <p className="text-teal-400 text-sm mb-3">{work.year}</p>
                  <p className="text-gray-300 text-sm mb-2 font-semibold">Responsibilities:</p>
                  <ul className="space-y-2">
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services/Expertise Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What I Do</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Cloud Architecture</h3>
              <p className="text-gray-300 text-sm">Azure, AWS & GCP solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">DevOps & CI/CD</h3>
              <p className="text-gray-300 text-sm">Kubernetes, Docker, Terraform</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Full Stack Development</h3>
              <p className="text-gray-300 text-sm">React, Node.js, Python</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Mentorship</h3>
              <p className="text-gray-300 text-sm">Teaching & team leadership</p>
            </div>
          </div>
        </div>

        {/* Languages & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">🇳🇬 <span className="font-semibold">Enwan</span> - Native</li>
              <li className="text-gray-300">🇬🇧 <span className="font-semibold">English</span> - Native secondary</li>
              <li className="text-gray-300">🇫🇷 <span className="font-semibold">French</span> - B1</li>
              <li className="text-gray-300">🇮🇹 <span className="font-semibold">Italian</span> - A2</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Hobbies & Interests</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">⚽ Football - Playing since childhood</li>
              <li className="text-gray-300">🎾 Table Tennis</li>
              <li className="text-gray-300">💻 Web & Mobile App Development</li>
              <li className="text-gray-300">🎮 E-commerce & Gaming Platforms</li>
              <li className="text-gray-300">📚 Software Design & Algorithms</li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
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

// import Link from 'next/link';
// import { Code, Palette, Rocket, Users } from 'lucide-react';
// import { useState } from 'react';

// export default function AboutPage() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const skills = [
//     { name: 'React & Next.js', level: 'Expert' },
//     { name: 'TypeScript', level: 'Expert' },
//     { name: 'UI/UX Design', level: 'Advanced' },
//     { name: 'Node.js', level: 'Advanced' },
//     { name: 'Python', level: 'Intermediate' },
//     { name: 'AWS & Cloud', level: 'Intermediate' }
//   ];

//   const education = [
//     {
//       degree: 'Art & Multimedia From',
//       school: 'Oxford University',
//       year: '2005-2008',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
//     },
//     {
//       degree: 'Art & Multimedia From',
//       school: 'Oxford University',
//       year: '2005-2008',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
//     },
//     {
//       degree: 'Art & Multimedia From',
//       school: 'Oxford University',
//       year: '2005-2008',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L orem Ipsum'
//     }
//   ];

//   const workExperience = [
//     {
//       position: 'UI/UX Designer',
//       company: 'IronSketch',
//       year: '2005-2008',
//       responsibilities: [
//         'Validate CSS',
//         'Project Management'
//       ]
//     },
//     {
//       position: 'Art & Multimedia From',
//       company: 'Oxford University',
//       year: '2005-2008',
//       responsibilities: [
//         'Validate CSS',
//         'Project Management'
//       ]
//     },
//     {
//       position: 'Art & Multimedia From',
//       company: 'Oxford University',
//       year: '2005-2008',
//       responsibilities: [
//         'Validate CSS',
//         'Project Management'
//       ]
//     }
//   ];

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     });
//   };

//   const getLevelColor = (level: string) => {
//     switch (level) {
//       case 'Expert':
//         return 'bg-green-500';
//       case 'Advanced':
//         return 'bg-blue-500';
//       case 'Intermediate':
//         return 'bg-yellow-500';
//       default:
//         return 'bg-gray-500';
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
//           <p className="text-xl text-gray-300">Get to know more about my journey and skills</p>
//         </div>

//         {/* Profile Section */}
//         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div 
//                 className="w-full aspect-square rounded-2xl bg-[#2d4a2d] flex items-center justify-center overflow-hidden relative cursor-pointer"
//                 onMouseMove={handleMouseMove}
//                 style={{
//                   backgroundImage: 'url(/your-profile-image.jpg)',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center'
//                 }}
//               >
//                 {/* Water ripple effect */}
//                 <div 
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 155, 92, 0.4), transparent)`,
//                     filter: 'blur(20px)',
//                     transition: 'all 0.1s ease-out'
//                   }}
//                 />
//                 {/* Fallback text if no image */}
//                 <span className="text-8xl font-bold text-[#e89b5c] z-10">HJ</span>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-white mb-6">Hi, I'm Hydra Juice</h2>
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 I'm a passionate full-stack developer and designer with over 5 years of experience creating beautiful and functional digital experiences. I specialize in modern web technologies and love turning complex problems into simple, intuitive solutions.
//               </p>
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a fresh glass of vitamin C-packed juice!
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 I believe in writing clean, maintainable code and creating user experiences that people love to use.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
//           <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             {skills.map((skill) => (
//               <div key={skill.name} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
//                 <span className="text-white font-medium">{skill.name}</span>
//                 <span className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${getLevelColor(skill.level)}`}>
//                   {skill.level}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Education & Work Experience Side by Side */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {/* Education Section */}
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
//             <div className="space-y-6">
//               {education.map((edu, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
//                   <h3 className="text-xl font-bold text-white mb-1">
//                     {edu.degree} <span className="text-teal-400">{edu.school}</span>
//                   </h3>
//                   <p className="text-teal-400 text-sm mb-3">{edu.year}</p>
//                   <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Work Experience Section */}
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
//             <div className="space-y-6">
//               {workExperience.map((work, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
//                   <h3 className="text-xl font-bold text-white mb-1">
//                     {work.position} <span className="text-teal-400">{work.company}</span>
//                   </h3>
//                   <p className="text-teal-400 text-sm mb-3">{work.year}</p>
//                   <p className="text-gray-300 text-sm mb-2">Responsibility :</p>
//                   <ul className="space-y-1">
//                     {work.responsibilities.map((resp, idx) => (
//                       <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
//                         <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
//                         {resp}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Services Section */}
//         <div className="grid md:grid-cols-4 gap-6 mb-12">
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
//             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Code className="text-[#e89b5c]" size={32} />
//             </div>
//             <h3 className="text-white font-bold mb-2">Web Development</h3>
//             <p className="text-gray-300 text-sm">Building modern, responsive websites</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
//             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Palette className="text-[#e89b5c]" size={32} />
//             </div>
//             <h3 className="text-white font-bold mb-2">UI/UX Design</h3>
//             <p className="text-gray-300 text-sm">Creating beautiful user experiences</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
//             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Rocket className="text-[#e89b5c]" size={32} />
//             </div>
//             <h3 className="text-white font-bold mb-2">Product Launch</h3>
//             <p className="text-gray-300 text-sm">Taking ideas from concept to reality</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
//             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="text-[#e89b5c]" size={32} />
//             </div>
//             <h3 className="text-white font-bold mb-2">Consulting</h3>
//             <p className="text-gray-300 text-sm">Technical guidance for your projects</p>
//           </div>
//         </div>

//         {/* Back Button */}
//         <div className="text-center">
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

// // // app/about/page.tsx
// // import Link from 'next/link';
// // import { Code, Palette, Rocket, Users } from 'lucide-react';

// // export default function AboutPage() {
// //   const skills = [
// //     { name: 'React & Next.js', level: 95 },
// //     { name: 'TypeScript', level: 90 },
// //     { name: 'UI/UX Design', level: 85 },
// //     { name: 'Node.js', level: 88 },
// //     { name: 'Python', level: 80 },
// //     { name: 'AWS & Cloud', level: 75 }
// //   ];

// //   return (
// //     <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
// //           <p className="text-xl text-gray-300">Get to know more about my journey and skills</p>
// //         </div>

// //         {/* Profile Section */}
// //         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <div className="w-full aspect-square rounded-2xl bg-[#2d4a2d] flex items-center justify-center">
// //                 <span className="text-8xl font-bold text-[#e89b5c]">EML</span>
// //               </div>
// //             </div>
// //             <div>
// //               <h2 className="text-3xl font-bold text-white mb-6">Hi, I'm EZEKIEL Matomi Lucky</h2>
// //               <p className="text-gray-300 mb-4 leading-relaxed">
// //                 I'm a passionate full-stack developer and designer with over 5 years of experience creating beautiful and functional digital experiences. I specialize in modern web technologies and love turning complex problems into simple, intuitive solutions.
// //               </p>
// //               <p className="text-gray-300 mb-4 leading-relaxed">
// //                 When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a fresh glass of vitamin C-packed juice!
// //               </p>
// //               <p className="text-gray-300 leading-relaxed">
// //                 I believe in writing clean, maintainable code and creating user experiences that people love to use.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Skills Section */}
// //         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
// //           <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {skills.map((skill) => (
// //               <div key={skill.name}>
// //                 <div className="flex justify-between mb-2">
// //                   <span className="text-white font-medium">{skill.name}</span>
// //                   <span className="text-[#e89b5c]">{skill.level}%</span>
// //                 </div>
// //                 <div className="w-full bg-gray-700 rounded-full h-3">
// //                   <div
// //                     className="bg-[#e89b5c] h-3 rounded-full transition-all duration-1000"
// //                     style={{ width: `${skill.level}%` }}
// //                   ></div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Services Section */}
// //         <div className="grid md:grid-cols-4 gap-6 mb-12">
// //           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
// //             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Code className="text-[#e89b5c]" size={32} />
// //             </div>
// //             <h3 className="text-white font-bold mb-2">Web Development</h3>
// //             <p className="text-gray-300 text-sm">Building modern, responsive websites</p>
// //           </div>

// //           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
// //             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Palette className="text-[#e89b5c]" size={32} />
// //             </div>
// //             <h3 className="text-white font-bold mb-2">UI/UX Design</h3>
// //             <p className="text-gray-300 text-sm">Creating beautiful user experiences</p>
// //           </div>

// //           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
// //             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Rocket className="text-[#e89b5c]" size={32} />
// //             </div>
// //             <h3 className="text-white font-bold mb-2">Product Launch</h3>
// //             <p className="text-gray-300 text-sm">Taking ideas from concept to reality</p>
// //           </div>

// //           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
// //             <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Users className="text-[#e89b5c]" size={32} />
// //             </div>
// //             <h3 className="text-white font-bold mb-2">Consulting</h3>
// //             <p className="text-gray-300 text-sm">Technical guidance for your projects</p>
// //           </div>
// //         </div>

// //         {/* Back Button */}
// //         <div className="text-center">
// //           <Link
// //             href="/"
// //             className="inline-block px-8 py-4 bg-[#e89b5c] hover:bg-[#d88a4b] text-white font-semibold rounded-full transition-colors"
// //           >
// //             Back to Home
// //           </Link>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }