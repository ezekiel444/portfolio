// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ezekielmatomilucky.com'),
  title: 'Matomi Lucky Ezekiel | DevOps Engineer & Full Stack Developer',
  description: 'Portfolio of Matomi Lucky Ezekiel - DevOps Engineer specializing in Cloud Computing, Kubernetes, Docker, Azure, AWS, and Full Stack Development. Based in Lyon, France.',
  keywords: ['DevOps Engineer', 'Cloud Computing', 'Kubernetes', 'Docker', 'Full Stack Developer', 'Azure', 'AWS', 'React', 'Next.js', 'Matomi Lucky Ezekiel'],
  authors: [{ name: 'Matomi Lucky Ezekiel' }],
  creator: 'Matomi Lucky Ezekiel',
  publisher: 'Matomi Lucky Ezekiel',
  
  // Open Graph (for social media)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezekielmatomilucky.com',
    title: 'Matomi Lucky Ezekiel | DevOps Engineer & Full Stack Developer',
    description: 'Portfolio of Matomi Ezekiel - DevOps Engineer specializing in Cloud Computing, Kubernetes, and Full Stack Development',
    siteName: 'Matomi Ezekiel Portfolio',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Matomi Lucky Ezekiel | DevOps Engineer & Full Stack Developer',
    description: 'Portfolio of Matomi Ezekiel - DevOps Engineer specializing in Cloud Computing, Kubernetes, and Full Stack Development',
    creator: '@ezekielmatomilucky',
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  
  // Verification (optional - for Google Search Console)
  // verification: {
  //   google: 'your-google-verification-code-here', // Get this from Google Search Console
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <link rel="canonical" href="https://ezekielmatomilucky.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6b7566" />
      </head>
      <body>{children}</body>
    </html>
  )
}



// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'Matomi Ezekiel | DevOps Engineer & Full Stack Developer',
//   description: 'Portfolio of Matomi Ezekiel - DevOps Engineer specializing in Cloud Computing, Kubernetes, and Full Stack Development',
//   icons: {
//     icon: [
//       { url: '/favicon.ico' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//     ],
//     apple: [
//       { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
//     ],
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }