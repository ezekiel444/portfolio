
# Contact Form Email Setup Guide

## Step 1: Install Required Packages

```bash
pnpm add nodemailer isomorphic-dompurify
pnpm add -D @types/nodemailer
```

## Step 2: Setup Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. After enabling 2FA, go back to Security
5. Search for "App passwords" or scroll down to find it
6. Click "App passwords"
7. Select "Mail" and "Other (Custom name)"
8. Enter "Portfolio Contact Form"
9. Click "Generate"
10. Copy the 16-character password (save it securely!)

## Step 3: Create Environment Variables

Create a `.env.local` file in your project root:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

**Important:** Add `.env.local` to your `.gitignore` file!

## Step 4: Project Structure

Your project should look like this:

```
app/
├── api/
│   └── contact/
│       └── route.ts        (The API endpoint)
├── contact/
│   └── page.tsx           (The contact form)
├── portfolio/
│   └── page.tsx           (Portfolio with links)
└── ...

.env.local                 (Your email credentials)
```

## Security Features Implemented

### 1. **XSS Protection** (Cross-Site Scripting)
- Uses `DOMPurify` to sanitize all user inputs
- Strips all HTML tags and dangerous characters
- Prevents malicious script injection

### 2. **Input Validation**
- Email format validation with regex
- Length limits on all fields (prevents buffer overflow)
- Required field validation

### 3. **Rate Limiting** (Recommended)
For production, add rate limiting to prevent spam:

```bash
pnpm add @upstash/ratelimit @upstash/redis
```

## Alternative Email Services

### Using SendGrid (Recommended for production)

```bash
pnpm add @sendgrid/mail
```

Update your API route:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: process.env.EMAIL_USER,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `New Contact from ${firstName} ${lastName}`,
  html: `...`
};

await sgMail.send(msg);
```

### Using Resend (Modern alternative)

```bash
pnpm add resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your-email@gmail.com',
  subject: 'New Contact Form',
  html: '...'
});
```

## Testing Your Contact Form

1. Start your dev server: `pnpm dev`
2. Go to `http://localhost:3000/contact`
3. Fill out the form with test data
4. Check your email inbox
5. Check browser console for any errors

## Production Considerations

1. **Add reCAPTCHA** to prevent spam bots
2. **Implement rate limiting** (max 5 emails per hour per IP)
3. **Use a professional email service** (SendGrid, Resend, AWS SES)
4. **Add email queue** for better reliability
5. **Log all submissions** for tracking

## Troubleshooting

### "Invalid credentials" error
- Double-check your Gmail App Password
- Make sure 2FA is enabled
- Regenerate the App Password

### Emails not sending
- Check your `.env.local` file exists
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Check spam folder
- Look at server console for error messages

### CORS errors
- Make sure your API route is at `app/api/contact/route.ts`
- Restart your dev server after adding env variables

## Portfolio Links Setup

In `portfolio/page.tsx`, update the `projects` array with your actual project URLs:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    // ... other fields
    liveUrl: 'https://your-live-project.com',
    githubUrl: 'https://github.com/yourusername/project',
  }
];
```