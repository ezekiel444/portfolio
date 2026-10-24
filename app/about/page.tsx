'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Cloud, 
  Server, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Users, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Trophy, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import MotionCard from './MotionCard';

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const stats = [
    { label: 'Cloud & DevOps Experience', value: '5+', suffix: 'Years', accent: 'from-amber-400 to-orange-500' },
    { label: 'Production Architectures', value: '15+', suffix: 'Deployments', accent: 'from-emerald-400 to-teal-500' },
    { label: 'Service Availability Focus', value: '99.9%', suffix: 'Uptime Mindset', accent: 'from-cyan-400 to-blue-500' },
    { label: 'Engineers & Students Mentored', value: '100+', suffix: 'Coached', accent: 'from-purple-400 to-pink-500' },
  ];

  const skillCategories = [
    {
      title: 'Cloud & Platforms',
      icon: Cloud,
      color: 'text-amber-400',
      skills: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Cloudflare']
    },
    {
      title: 'Containers & Orchestration',
      icon: Server,
      color: 'text-emerald-400',
      skills: ['Kubernetes (K8s)', 'Docker', 'Istio Service Mesh', 'Helm']
    },
    {
      title: 'Infrastructure as Code & CI/CD',
      icon: Terminal,
      color: 'text-cyan-400',
      skills: ['Terraform', 'Ansible', 'GitLab CI/CD', 'GitHub Actions', 'Bash Scripting']
    },
    {
      title: 'Observability & Telemetry',
      icon: ShieldCheck,
      color: 'text-rose-400',
      skills: ['Prometheus', 'Grafana', 'Kiali', 'FluentD', 'Elasticsearch & Kibana']
    },
    {
      title: 'Software Development',
      icon: Code2,
      color: 'text-blue-400',
      skills: ['Python', 'TypeScript / JavaScript', 'React & Next.js', 'REST & GraphQL APIs']
    },
    {
      title: 'Databases & Networking',
      icon: Layers,
      color: 'text-indigo-400',
      skills: ['PostgreSQL', 'MySQL', 'Cisco Networking', 'Hub & Spoke Topology']
    }
  ];

  const workExperience = [
    {
      role: 'Consultant Cloud & DevOps',
      company: 'Teamwork (Azure & AWS)',
      period: 'May 2022 — Present',
      location: 'France',
      highlights: [
        'Architected & deployed enterprise Hub & Spoke network infrastructures on Microsoft Azure.',
        'Engineered full-stack monitoring & observability platforms with Istio Service Mesh, Prometheus, Grafana, Kiali, FluentD, and ELK Stack.',
        'Automated multi-region cloud workloads with Terraform and declarative GitOps pipelines.'
      ],
      tags: ['Azure', 'AWS', 'Kubernetes', 'Istio', 'Prometheus', 'Grafana', 'Terraform']
    },
    {
      role: 'Online Coding Tutor & Technical Mentor',
      company: 'Code Your Future South Africa',
      period: 'Jan 2021 — Aug 2021',
      location: 'Remote',
      highlights: [
        'Delivered 30h/week of intensive software engineering instruction and mentorship.',
        'Mentored emerging engineers in modern JavaScript, web architectures, and collaborative Git practices.',
        'Fostered problem-solving methodologies and communication skills for tech industry placement.'
      ],
      tags: ['Mentorship', 'JavaScript', 'React', 'Git', 'Leadership']
    },
    {
      role: 'Erasmus+ Project Engineer & Community Lead',
      company: 'Anbhe Kele Youth Pass & Humacoop',
      period: 'Mar 2021 — May 2021',
      location: 'Grenoble, France',
      highlights: [
        'Drove international social impact initiatives empowering and onboarding refugees.',
        'Designed interactive digital educational tools and community workshops.',
        'Facilitated cross-cultural collaboration and educational engagement.'
      ],
      tags: ['Social Impact', 'Community', 'Facilitation']
    },
    {
      role: 'Software Developer (Internship)',
      company: 'Alma',
      period: 'Feb 2021',
      location: 'Grenoble, France',
      highlights: [
        'Built collaborative application features and data-sharing interfaces.',
        'Integrated Rossum cognitive document processing software into enterprise workflows.'
      ],
      tags: ['App Dev', 'Rossum AI', 'System Integration']
    }
  ];

  const education = [
    {
      degree: "Master's Degree in Systems, Networks & Cloud Computing",
      school: 'ESGI (École Supérieure de Génie Informatique)',
      period: 'Nov 2023 — Sep 2025',
      location: 'France',
      details: 'Specialization in Cloud Computing, Kubernetes orchestration, Cisco networking, system security, and enterprise solution architecture.',
      skills: 'Solution Architecture, Kubernetes, Azure, AWS, GCP, Terraform, Ansible, Python, Network Security'
    },
    {
      degree: 'Cloud Administrator & DevOps Engineer (Niveau 6)',
      school: 'Simplon Grand Ouest',
      period: 'May 2022 — Nov 2022',
      location: 'France',
      details: 'Intensive French national certified program focused on Azure cloud infrastructure deployment, automation, and CI/CD operations.',
      skills: 'Azure, Kubernetes, Docker, Terraform, GitLab CI, PowerShell, Linux Administration'
    },
    {
      degree: 'Full Stack Web Developer (Level 5)',
      school: 'Code Your Future',
      period: '2019 — 2020',
      location: 'Europe / UK',
      details: 'Hands-on practical full stack development with modern web architectures and social-impact real world applications.',
      skills: 'React Hooks, Node.js, GraphQL, REST APIs, Git, Agile Methodology'
    },
    {
      degree: 'National Diploma in Computer Science (OND)',
      school: 'Federal Polytechnic, Auchi',
      period: '2013 — 2016',
      location: 'Nigeria',
      details: 'Foundations of computer science, algorithmic logic, computer systems, and mathematical statistics.',
      skills: 'Algorithms, Data Structures, System Architecture, Statistics'
    }
  ];

  const disciplines = [
    {
      icon: Cloud,
      title: 'Cloud Architecture & Multi-Cloud',
      description: 'Designing resilient, secure, and cost-optimized infrastructures across Azure, AWS, and GCP with Hub & Spoke networks and Zero Trust security.',
      badge: 'Azure · AWS · GCP',
      borderHover: 'hover:border-amber-500/40'
    },
    {
      icon: Server,
      title: 'Kubernetes & Container Platforms',
      description: 'Deploying high-density microservices on containerized Kubernetes clusters with automated scaling, ingress controllers, and service meshes.',
      badge: 'K8s · Docker · Istio',
      borderHover: 'hover:border-emerald-500/40'
    },
    {
      icon: Terminal,
      title: 'Infrastructure as Code & GitOps',
      description: 'Transforming manual operations into immutable, version-controlled code using Terraform, Ansible, and reproducible CI/CD delivery pipelines.',
      badge: 'Terraform · GitOps',
      borderHover: 'hover:border-cyan-500/40'
    },
    {
      icon: Users,
      title: 'Mentorship & Team Leadership',
      description: 'Long-time football team captain and passionate tech mentor. Dedicated to elevating engineering teams through clear communication and shared knowledge.',
      badge: 'Leadership · Coaching',
      borderHover: 'hover:border-purple-500/40'
    }
  ];

  return (
    <main className="min-h-screen bg-[#070a10] text-gray-200 antialiased selection:bg-[#e89b5c]/30 selection:text-white relative overflow-hidden">
      {/* Dynamic Background Noise / Aurora Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#e89b5c]/10 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#10b981]/10 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[500px] bg-gradient-to-t from-blue-600/5 to-transparent rounded-full blur-[160px]" />
        
        {/* Subtle MotionSites Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e89b5c]/40 text-sm font-medium text-gray-300 hover:text-white transition-all shadow-sm"
          >
            <ArrowLeft size={16} className="text-[#e89b5c] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-medium">Available for Hire</span>
          </div>
        </header>

        {/* HERO SECTION: The MotionSites 3D Interactive Portrait + Executive Narrative */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24">
          
          {/* Column 1: The MotionSites Signature 3D Holographic Tilt Card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <MotionCard 
              imageSrc="/about_profile_picx/about_me_picx.png"
              name="EZEKIEL Matomi Lucky"
              role="Senior Cloud & DevOps Engineer"
              location="Lyon, France"
            />
          </div>

          {/* Column 2: Executive Bio & Interactive Contact Hub */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e89b5c]/10 border border-[#e89b5c]/25 text-[#e89b5c] text-xs font-mono font-semibold tracking-wide uppercase">
                <Sparkles size={12} />
                DevOps Engineer · Cloud Architect · Mentor
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                EZEKIEL <span className="bg-gradient-to-r from-[#e89b5c] via-amber-200 to-[#10b981] bg-clip-text text-transparent">Matomi Lucky</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                Transforming complex infrastructure into reliable, automated, and self-healing cloud ecosystems.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-gray-300/90 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Curious about life and passionate about the living systems behind modern technology. I specialize in architecting high-availability infrastructure on Azure, AWS, and GCP, operating battle-tested Kubernetes clusters, and building automated pipelines that let engineering teams ship with speed and certainty.
              </p>
              <p>
                Proven experience in mentoring aspiring engineers, leading team communication, and serving as a long-time captain both on the football pitch and in collaborative tech sprints.
              </p>
            </div>

            {/* Inspiring Brand Motto Card */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-r from-[#e89b5c]/10 to-transparent border-l-4 border-[#e89b5c] bg-white/[0.02] backdrop-blur-sm shadow-inner">
              <p className="text-xs uppercase tracking-wider text-[#e89b5c] font-mono font-semibold mb-1">Guiding Principle</p>
              <p className="text-white text-base sm:text-lg font-medium italic">
                &ldquo;That that you do the most, will be That that you do the best.&rdquo; 💪
              </p>
            </div>

            {/* Interactive Contact & Copy Hub */}
            <div className="pt-3 grid sm:grid-cols-2 gap-3">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={() => copyToClipboard('matomiezekiel6@gmail.com', 'email')}
                className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e89b5c]/40 transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[#e89b5c]/15 text-[#e89b5c] flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-mono">Email Me</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">matomiezekiel6@gmail.com</p>
                  </div>
                </div>
                <div className="shrink-0 pl-2">
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded">
                      <Check size={13} /> Copied!
                    </span>
                  ) : (
                    <Copy size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </div>
              </button>

              {/* Call / Copy Phone Button */}
              <button
                type="button"
                onClick={() => copyToClipboard('+33 7 53 43 29 20', 'phone')}
                className="group relative flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-mono">Direct Phone</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">+33 7 53 43 29 20</p>
                  </div>
                </div>
                <div className="shrink-0 pl-2">
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded">
                      <Check size={13} /> Copied!
                    </span>
                  ) : (
                    <Copy size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </div>
              </button>
            </div>

            {/* Quick Location & Direct Mail CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin size={15} className="text-[#e89b5c]" />
                <span>Based in <strong className="text-white font-medium">Lyon, France</strong> (Open to Remote & Hybrid)</span>
              </div>

              <a
                href="mailto:matomiezekiel6@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e89b5c] to-amber-600 hover:from-[#d88a4b] hover:to-amber-500 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#e89b5c]/20 hover:scale-[1.02]"
              >
                <span>Send Direct Inquiry</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </section>

        {/* METRICS ROW (MotionSites Bento Stats) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r text-white group-hover:scale-105 transition-transform origin-left mb-1">
                <span className={`bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}>
                  {item.value}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-mono font-medium mb-1">
                {item.suffix}
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* WHAT I DO: Interactive Bento Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Engineering Disciplines & Expertise
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Enterprise cloud infrastructure, container orchestration, and automated continuous delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {disciplines.map((d, idx) => {
              const IconComp = d.icon;
              return (
                <div
                  key={idx}
                  className={`p-7 rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] backdrop-blur-md border border-white/10 ${d.borderHover} transition-all duration-300 group shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e89b5c] group-hover:scale-110 transition-transform">
                      <IconComp size={24} />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {d.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#e89b5c] transition-colors">
                    {d.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* TECHNICAL SKILLS MATRIX */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Technical Skill Matrix
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Tools, frameworks, and infrastructure platforms deployed in production environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <IconComp size={18} className={cat.color} />
                    </div>
                    <h3 className="text-base font-semibold text-white">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION INTERACTIVE TABS */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Career & Academic Journey</h2>
              <p className="text-gray-400 text-sm mt-1">Verified track record of enterprise delivery and technical qualification.</p>
            </div>

            {/* Tab Controller */}
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'experience'
                    ? 'bg-[#e89b5c] text-neutral-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Briefcase size={14} />
                <span>Work Experience</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-[#e89b5c] text-neutral-950 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <GraduationCap size={14} />
                <span>Education & Degrees</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Work Experience Content */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {workExperience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/10 hover:border-[#e89b5c]/30 transition-all backdrop-blur-md relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#e89b5c] transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-emerald-400 mt-0.5">
                        {item.company} · <span className="text-gray-400">{item.location}</span>
                      </p>
                    </div>

                    <span className="self-start sm:self-auto text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {item.highlights.map((resp, hIdx) => (
                      <li key={hIdx} className="text-sm text-gray-300/90 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e89b5c] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Education Content */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-all backdrop-blur-md group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-medium text-[#e89b5c] mt-0.5">
                        {item.school} · <span className="text-gray-400">{item.location}</span>
                      </p>
                    </div>

                    <span className="self-start sm:self-auto text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {item.details}
                  </p>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-xs text-gray-400">
                      <strong className="text-gray-300 font-mono">Competencies: </strong>
                      {item.skills}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* LANGUAGES & PERSONAL INTERESTS */}
        <section className="grid md:grid-cols-2 gap-6 mb-24">
          {/* Languages */}
          <div className="p-7 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#e89b5c]">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400 font-mono">Enwan</p>
                <p className="text-sm font-semibold text-white">🇳🇬 Native</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400 font-mono">English</p>
                <p className="text-sm font-semibold text-white">🇬🇧 Fluent / Secondary</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400 font-mono">French</p>
                <p className="text-sm font-semibold text-white">🇫🇷 B1 Professional</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-gray-400 font-mono">Italian</p>
                <p className="text-sm font-semibold text-white">🇮🇹 A2 Elementary</p>
              </div>
            </div>
          </div>

          {/* Interests & Leadership */}
          <div className="p-7 rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400">
                <Trophy size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Interests & Leadership</h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-lg">⚽</span>
                <span><strong>Football Captain:</strong> Playing and leading competitive teams since childhood.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-lg">🎾</span>
                <span><strong>Table Tennis:</strong> Keen competitive amateur player.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-lg">💻</span>
                <span><strong>Open Source & Systems:</strong> Exploring bleeding-edge kernel, container, and cloud tools.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-lg">🌱</span>
                <span><strong>Community Mentorship:</strong> Guiding emerging developers into the tech ecosystem.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION & RETURN */}
        <section className="text-center py-12 px-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let&apos;s Build Something Resilient Together
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Open to senior DevOps engineering roles, cloud architecture contracts, and technical advisory.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:matomiezekiel6@gmail.com"
                className="px-8 py-3.5 rounded-full bg-[#e89b5c] hover:bg-[#d88a4b] text-neutral-950 font-bold text-sm transition-all shadow-xl shadow-[#e89b5c]/20 hover:scale-105"
              >
                Get in Touch via Email
              </a>

              <Link
                href="/"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-all hover:border-white/30"
              >
                Return to Home Hub
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
