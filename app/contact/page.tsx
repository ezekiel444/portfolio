// app/contact/page.tsx
'use client';

import { Send, Mail, Phone, MapPin, Facebook, Twitter, Github, Dribbble } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-teal-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Address</h3>
                <p className="text-gray-400">5th Avenue, 34th floor,</p>
                <p className="text-gray-400">Lyon France</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
                <Mail className="text-teal-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">ezekielmatomi588@gmail.com</p>
                <p className="text-gray-400">matomiezekiel6@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
              <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
                <Phone className="text-teal-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">(33)-3512197571</p>
                <p className="text-gray-400">(33)-3512197571</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#252525] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">All right reserved EZEKIEL Matomi Lucky @ 2025</p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <Dribbble size={24} />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}