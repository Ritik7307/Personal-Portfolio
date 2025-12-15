# Quick EmailJS Setup Guide

## The Problem
Your contact form isn't sending emails because EmailJS credentials are not configured.

## Quick Fix (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (or your email provider)
4. Click **Connect Account** and authorize
5. Copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Fill in:
   - **Template Name:** Contact Form
   - **Subject:** New Contact: {{from_name}}
   - **Content:**
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - **To Email:** vijayshankarprajapati29@gmail.com
   - **From Name:** Portfolio Contact Form
4. Click **Save**
5. Copy the **Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Scroll to **API Keys**
3. Copy your **Public Key** (looks like: `abcdefghijklmnop`)

### Step 5: Create .env File
1. In your project root folder, create a file named `.env`
2. Add these lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

**Important:** 
- Replace `service_abc123` with your actual Service ID
- Replace `template_xyz789` with your actual Template ID  
- Replace `abcdefghijklmnop` with your actual Public Key
- No spaces around the `=` sign
- No quotes needed

### Step 6: Restart Dev Server
1. Stop your current dev server (Ctrl+C)
2. Run `npm run dev` again
3. The form should now work!

## Test It
1. Fill out the contact form
2. Click "Send Message"
3. Check your email: vijayshankarprajapati29@gmail.com

## Still Not Working?

### Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Try submitting the form
4. Look for error messages

### Common Issues:
- **"Email service not configured"** → .env file missing or wrong values
- **"Invalid service ID"** → Check Service ID is correct
- **"Template not found"** → Check Template ID is correct
- **"Invalid public key"** → Check Public Key is correct

### Verify .env File:
- File must be named exactly `.env` (not `.env.txt`)
- Must be in project root (same folder as package.json)
- Must restart dev server after creating/editing .env

## Need Help?
Check the detailed guide in `EMAILJS_SETUP.md` or email directly at vijayshankarprajapati29@gmail.com

