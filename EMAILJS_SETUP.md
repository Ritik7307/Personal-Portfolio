# EmailJS Setup Instructions

Follow these steps to set up email functionality for your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Set **To Email** to: `vijayshankarprajapati29@gmail.com`
5. Set **From Name** to: `Portfolio Contact Form`
6. Copy your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root of your project
2. Add the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from steps 2, 3, and 4

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email inbox

## Important Notes:
- The `.env` file should be in `.gitignore` (already included in most React projects)
- Never commit your EmailJS keys to version control
- The free tier allows 200 emails per month
- For production, make sure to add your `.env` variables to your hosting platform (Vercel, Netlify, etc.)

## Troubleshooting:
- If emails aren't sending, check the browser console for errors
- Verify all environment variables are set correctly
- Make sure your EmailJS service is active
- Check that the template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`

