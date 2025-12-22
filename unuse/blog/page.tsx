// // app/blog/page.tsx
// import Link from 'next/link';
// // import { Calendar, Clock, User } from '@icons-pack/react-simple-icons';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Getting Started with Next.js 14',
//     excerpt: 'Learn how to build modern web applications with the latest features of Next.js 14, including Server Components and improved routing.',
//     date: 'December 10, 2024',
//     readTime: '5 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
//     category: 'Web Development'
//   },
//   {
//     id: 2,
//     title: 'The Art of Clean Code',
//     excerpt: 'Discover principles and practices for writing maintainable, readable code that your future self will thank you for.',
//     date: 'December 8, 2024',
//     readTime: '8 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80',
//     category: 'Programming'
//   },
//   {
//     id: 3,
//     title: 'Mastering TypeScript in 2024',
//     excerpt: 'Essential TypeScript patterns and best practices every developer should know to write type-safe applications.',
//     date: 'December 5, 2024',
//     readTime: '10 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
//     category: 'TypeScript'
//   },
//   {
//     id: 4,
//     title: 'UI/UX Design Trends 2024',
//     excerpt: 'Explore the latest design trends that are shaping the future of digital products and user experiences.',
//     date: 'December 1, 2024',
//     readTime: '6 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//     category: 'Design'
//   },
//   {
//     id: 5,
//     title: 'Building Scalable APIs with Node.js',
//     excerpt: 'Learn how to design and build RESTful APIs that can handle millions of requests efficiently.',
//     date: 'November 28, 2024',
//     readTime: '12 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
//     category: 'Backend'
//   },
//   {
//     id: 6,
//     title: 'The Power of CSS Grid & Flexbox',
//     excerpt: 'Master modern CSS layout techniques to create responsive and beautiful web layouts without frameworks.',
//     date: 'November 25, 2024',
//     readTime: '7 min read',
//     author: 'EZEKIEL Matomi Lucky',
//     image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
//     category: 'CSS'
//   }
// ];

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4">Latest Posts</h1>
//           <p className="text-xl text-gray-300">Thoughts, tutorials, and insights on web development</p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {blogPosts.map((post) => (
//             <article
//               key={post.id}
//               className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <span className="absolute top-4 left-4 bg-[#e89b5c] text-white px-3 py-1 rounded-full text-sm font-semibold">
//                   {post.category}
//                 </span>
//               </div>
              
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-white mb-3 hover:text-[#e89b5c] transition-colors">
//                   {post.title}
//                 </h2>
                
//                 <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
//                 <div className="flex items-center gap-4 text-sm text-gray-400">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={16} />
//                     <span>{post.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock size={16} />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 pt-4 border-t border-gray-700">
//                   <div className="flex items-center gap-2 text-gray-400">
//                     <User size={16} />
//                     <span className="text-sm">{post.author}</span>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
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