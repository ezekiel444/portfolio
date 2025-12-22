// 'use client';

// import Image from 'next/image';
// import { SiGmail, SiGooglemaps, SiFacebook, SiX, SiGithub } from '@icons-pack/react-simple-icons';
// import { useState } from 'react';
// import DOMPurify from 'isomorphic-dompurify';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
//     type: null,
//     message: ''
//   });

//   // Sanitize input to prevent XSS attacks
//   const sanitizeInput = (input: string): string => {
//     return DOMPurify.sanitize(input, { 
//       ALLOWED_TAGS: [], 
//       ALLOWED_ATTR: [] 
//     }).trim();
//   };

//   // Validate email format
//   const isValidEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: null, message: '' });

//     // Sanitize all inputs
//     const sanitizedData = {
//       firstName: sanitizeInput(formData.firstName),
//       lastName: sanitizeInput(formData.lastName),
//       email: sanitizeInput(formData.email),
//       message: sanitizeInput(formData.message)
//     };

//     // Validation
//     if (!sanitizedData.firstName || !sanitizedData.lastName) {
//       setStatus({ type: 'error', message: 'Please fill in your name.' });
//       setLoading(false);
//       return;
//     }

//     if (!isValidEmail(sanitizedData.email)) {
//       setStatus({ type: 'error', message: 'Please enter a valid email address.' });
//       setLoading(false);
//       return;
//     }

//     if (sanitizedData.message.length < 10) {
//       setStatus({ type: 'error', message: 'Message must be at least 10 characters long.' });
//       setLoading(false);
//       return;
//     }

//     try {
//       // Send to your API endpoint
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(sanitizedData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
//         setFormData({ firstName: '', lastName: '', email: '', message: '' });
//       } else {
//         setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <main className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-5xl font-bold text-center mb-16">Contact Me</h1>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Side - Contact Info */}
//           <div className="space-y-6">
//             {/* Address */}
//             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
//               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
//                 <SiGooglemaps className="text-teal-500" size={32} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Address</h3>
//                 <p className="text-gray-400">Lyon, France</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
//               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
//                 <SiGmail className="text-teal-500" size={32} />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Email</h3>
//                 <a href="mailto:matomiezekiel6@gmail.com" className="text-gray-400 hover:text-teal-500 transition-colors">
//                   matomiezekiel6@gmail.com
//                 </a>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
//               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
//                 {/* <Phone className="text-teal-500" size={32} /> */}
//                <Image 
//                     src="/logo/phone-call.svg"
//                     alt="Phone"
//                     width="32" 
//                     height="32" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-2">Phone</h3>
//                 <a href="tel:+33753432920" className="text-gray-400 hover:text-teal-500 transition-colors">
//                   +33 7 53 43 29 20
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-[#252525] p-8 rounded-lg">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
//                   required
//                   maxLength={50}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
//                   required
//                   maxLength={50}
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
//                   required
//                   maxLength={100}
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
//                   required
//                   maxLength={1000}
//                 ></textarea>
//               </div>

//               {/* Status Message */}
//               {status.type && (
//                 <div className={`p-4 rounded-lg ${
//                   status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
//                 }`}>
//                   {status.message}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {loading ? (
//                   <>
//                     <span className="animate-spin">⏳</span>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     {/* <Send size={20} /> */}
//                   <Image 
//                     src="/logo/send.png"
//                     alt="Send"
//                     width="32" 
//                     height="32" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer */}
//          <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
//            <p className="text-gray-400 text-sm">All right reserved EZEKIEL Matomi Lucky @ 2025</p>
          
//            <div className="flex gap-6">
//              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
//                <SiFacebook size={24} />
//              </a>
//              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
//                <SiX size={24} />
//              </a>
//              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
//                <SiGithub size={24} />
//              </a>
//            </div>
//          </footer> 
//       </div>
//     </main>
//   );
// }





// // 'use client';
// // import Image from 'next/image';
// // import { SiGmail, SiGooglemaps, SiFacebook, SiX, SiGithub } from '@icons-pack/react-simple-icons';
// // import { useState } from 'react';

// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     message: ''
// //   });

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //     // Add your form submission logic here
// //     alert('Message sent! (This is a demo)');
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   return (
// //     <main className="min-h-screen bg-[#1a1a1a] text-white py-16 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         <h1 className="text-5xl font-bold text-center mb-16">Contact Me</h1>

// //         <div className="grid md:grid-cols-2 gap-8">
// //           {/* Left Side - Contact Info */}
// //           <div className="space-y-6">
// //             {/* Address */}
// //             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
// //               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
// //                 <SiGooglemaps className="text-teal-500" size={32} />
// //               </div>
// //               <div>
// //                 <h3 className="text-2xl font-semibold mb-2">Address</h3>
// //                 <p className="text-gray-400">Lyon France</p>
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
// //               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
// //                 <SiGmail className="text-teal-500" size={32} />
// //               </div>
// //               <div>
// //                 <h3 className="text-2xl font-semibold mb-2">Email</h3>
// //                 <p className="text-gray-400">matomiezekiel6@gmail.com</p>
// //               </div>
// //             </div>

// //             {/* Phone */}
// //             <div className="bg-[#252525] p-8 rounded-lg flex items-start gap-6">
// //               <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0">
// //              <Image 
// //                     src="/logo/phone-call.svg"
// //                     alt="Phone"
// //                     width="32" 
// //                     height="32" />
// //               </div>
// //               <div>
// //                 <h3 className="text-2xl font-semibold mb-2">Phone</h3>
// //                 <p className="text-gray-400">(33)-3512197571</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side - Contact Form */}
// //           <div className="bg-[#252525] p-8 rounded-lg">
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="firstName"
// //                   placeholder="First Name"
// //                   value={formData.firstName}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <input
// //                   type="text"
// //                   name="lastName"
// //                   placeholder="Last Name"
// //                   value={formData.lastName}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Your Email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <textarea
// //                   name="message"
// //                   placeholder="Your Message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows={6}
// //                   className="w-full bg-transparent border border-gray-600 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
// //                   required
// //                 ></textarea>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition-colors"
// //               >
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <footer className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
// //           <p className="text-gray-400 text-sm">All right reserved EZEKIEL Matomi Lucky @ 2025</p>
          
// //           <div className="flex gap-6">
// //             <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
// //               <SiFacebook size={24} />
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
// //               <SiX size={24} />
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
// //               <SiGithub size={24} />
// //             </a>
// //           </div>
// //         </footer>
// //       </div>
// //     </main>
// //   );
// // }