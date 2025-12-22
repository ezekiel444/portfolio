// // app/api/contact/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { firstName, lastName, email, message } = await request.json();

//     // Validate required fields
//     if (!firstName || !lastName || !email || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Create transporter using Gmail (you can use other services)
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail
//         pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
//       },
//     });

//     // Email to yourself
//     const mailOptionsToYou = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // Your email
//       subject: `New Contact Form Submission from ${firstName} ${lastName}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>From:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message.replace(/\n/g, '<br>')}</p>
//       `,
//     };

//     // Confirmation email to sender
//     const mailOptionsToSender = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Thanks for contacting me!',
//       html: `
//         <h2>Hi ${firstName},</h2>
//         <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
//         <p><strong>Your message:</strong></p>
//         <p>${message.replace(/\n/g, '<br>')}</p>
//         <br>
//         <p>Best regards,</p>
//         <p>Matomi Ezekiel</p>
//       `,
//     };

//     // Send both emails
//     await transporter.sendMail(mailOptionsToYou);
//     await transporter.sendMail(mailOptionsToSender);

//     return NextResponse.json(
//       { message: 'Email sent successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// }