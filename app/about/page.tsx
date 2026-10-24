'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SiCodecrafters, SiIcloud } from '@icons-pack/react-simple-icons';
import SophisticatedPortraitMotion from './SophisticatedPortraitMotion';

export default function AboutPage() {
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-600';
      case 'Advanced':
        return 'bg-[#2d4a2d]';
      case 'Intermediate':
        return 'bg-[#e89b5c]';
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
          <p className="text-xl text-gray-200">DevOps Engineer | Cloud Architect | Full Stack Developer</p>
        </div>

        {/* Profile Section with Sophisticated Motion Graphics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Sophisticated 2026 Kinetic Motion Graphic for Portrait */}
            <div className="flex justify-center items-center">
              <SophisticatedPortraitMotion
                imageSrc="/about_profile_picx/about_me_picx.png"
                alt="EZEKIEL Matomi Lucky"
              />
            </div>

            {/* Right: Authentic Biography & Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">EZEKIEL Matomi Lucky</h2>
              <p className="text-gray-200 mb-4 leading-relaxed">
                A DevOps Engineer who is Curious about life and Passionate about living things. Committed to the use of technology and how things work. Anxious to take on new challenge and find creative way to solve past and present problems.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                In general i love what i do. In love with football and code writing. Proven experience in teaching web development, long time captain of my team & mentorship at Codeyourfuture South Africa 2021.
              </p>
              <p className="text-gray-100 leading-relaxed italic text-[#e89b5c] font-semibold text-lg">
                Motto: That that you do the most, will be That that you do the best. 💪
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-2 pt-4 border-t border-white/15">
                <p className="text-gray-200">
                  <span className="font-semibold text-white">📧 Email:</span>{' '}
                  <a href="mailto:matomiezekiel6@gmail.com" className="hover:text-[#e89b5c] transition-colors underline decoration-dotted">
                    matomiezekiel6@gmail.com
                  </a>
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold text-white">📱 Phone:</span>{' '}
                  <a href="tel:+33753432920" className="hover:text-[#e89b5c] transition-colors">
                    +33 7 53 43 29 20
                  </a>
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold text-white">📍 Location:</span> Lyon, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex justify-between items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5">
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-[#e89b5c] font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-200 text-sm mb-2">{edu.field}</p>
                  <p className="text-emerald-300 text-sm mb-3 font-mono">{edu.year}</p>
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">{edu.description}</p>
                  {edu.skills && (
                    <div className="pt-3 border-t border-white/10">
                      <p className="text-xs text-gray-200 leading-relaxed font-mono">{edu.skills}</p>
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {work.position}
                  </h3>
                  <p className="text-[#e89b5c] font-semibold mb-1">{work.company}</p>
                  <p className="text-emerald-300 text-sm mb-3 font-mono">{work.year}</p>
                  <p className="text-gray-200 text-sm mb-2 font-semibold">Responsibilities:</p>
                  <ul className="space-y-2">
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#e89b5c] rounded-full mt-2 flex-shrink-0"></span>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all border border-white/10">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <SiIcloud className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Cloud Architecture</h3>
              <p className="text-gray-200 text-sm">Azure, AWS & GCP solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all border border-white/10">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Image 
                    src="/logo/server.png"
                    alt="Server"
                    width={32} 
                    height={32} />
              </div>
              <h3 className="text-white font-bold mb-2">DevOps & CI/CD</h3>
              <p className="text-gray-200 text-sm">Kubernetes, Docker, Terraform</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all border border-white/10">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <SiCodecrafters className="text-[#e89b5c]" size={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Full Stack Development</h3>
              <p className="text-gray-200 text-sm">React, Node.js, Python</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all border border-white/10">
              <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Image 
                  src="/logo/users.svg"
                  alt="Users"
                  width={32} 
                  height={32} />
              </div>
              <h3 className="text-white font-bold mb-2">Mentorship</h3>
              <p className="text-gray-200 text-sm">Teaching & team leadership</p>
            </div>
          </div>
        </div>

        {/* Languages & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">🇳🇬 <span className="font-semibold text-white">Enwan</span> - Native</li>
              <li className="text-gray-200">🇬🇧 <span className="font-semibold text-white">English</span> - Native secondary</li>
              <li className="text-gray-200">🇫🇷 <span className="font-semibold text-white">French</span> - B1</li>
              <li className="text-gray-200">🇮🇹 <span className="font-semibold text-white">Italian</span> - A2</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Hobbies & Interests</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">⚽ Football - Playing since childhood</li>
              <li className="text-gray-200">🎾 Table Tennis</li>
              <li className="text-gray-200">💻 Web & Mobile App Development</li>
              <li className="text-gray-200">🎮 E-commerce & Gaming Platforms</li>
              <li className="text-gray-200">📚 Software Design & Algorithms</li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-[#e89b5c] hover:bg-[#d88a4b] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#e89b5c]/20 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
