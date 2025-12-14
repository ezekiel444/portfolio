// app/about/page.tsx
import Link from 'next/link';
import { Code, Palette, Rocket, Users } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'AWS & Cloud', level: 75 }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-300">Get to know more about my journey and skills</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square rounded-2xl bg-[#2d4a2d] flex items-center justify-center">
                <span className="text-8xl font-bold text-[#e89b5c]">EML</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Hi, I'm EZEKIEL Matomi Lucky</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate full-stack developer and designer with over 5 years of experience creating beautiful and functional digital experiences. I specialize in modern web technologies and love turning complex problems into simple, intuitive solutions.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a fresh glass of vitamin C-packed juice!
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that people love to use.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#e89b5c]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-[#e89b5c] h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-[#e89b5c]" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2">Web Development</h3>
            <p className="text-gray-300 text-sm">Building modern, responsive websites</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-[#e89b5c]" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-300 text-sm">Creating beautiful user experiences</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-[#e89b5c]" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2">Product Launch</h3>
            <p className="text-gray-300 text-sm">Taking ideas from concept to reality</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
            <div className="w-16 h-16 bg-[#2d4a2d] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#e89b5c]" size={32} />
            </div>
            <h3 className="text-white font-bold mb-2">Consulting</h3>
            <p className="text-gray-300 text-sm">Technical guidance for your projects</p>
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