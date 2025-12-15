# 🚀 EmailJS Setup - Step by Step

## ⚡ Quick Start (5 minutes)

### Step 1: Sign Up for EmailJS
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Verify your email address

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"** button
3. Select **"Gmail"** (recommended) or your email provider
4. Click **"Connect Account"**
5. Sign in with your Gmail account (vijayshankarprajapati29@gmail.com)
6. Allow permissions
7. **Copy the Service ID** - it looks like: `service_xxxxxxxxx`

### Step 3: Create Email Template
1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Fill in the form:

   **Template Name:** `Contact Form`
   
   **Subject:** `New Contact Form Message from {{from_name}}`
   
   **Content (copy this exactly):**
   ```
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```
   
   **To Email:** `vijayshankarprajapati29@gmail.com`
   
   **From Name:** `Portfolio Contact Form`
   
   **Reply To:** `{{from_email}}`

4. Click **"Save"**
5. **Copy the Template ID** - it looks like: `template_xxxxxxxxx`

### Step 4: Get Your Public Key
1. Click **"Account"** → **"General"** (top right)
2. Scroll down to **"API Keys"** section
3. **Copy your Public Key** - it looks like: `xxxxxxxxxxxxxxxx`

### Step 5: Create .env File
1. In your project folder, create a new file named **`.env`** (exactly this name, no extension)
2. Open the `.env` file in a text editor
3. Add these three lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

**Example (with fake IDs):**
```env
VITE_EMAILJS_SERVICE_ID=service_abc12345
VITE_EMAILJS_TEMPLATE_ID=template_xyz78901
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz123456
```

**⚠️ IMPORTANT:**
- No spaces around the `=` sign
- No quotes around the values
- Replace `xxxxxxxxx` with your actual IDs
- File must be named exactly `.env` (not `.env.txt`)

### Step 6: Restart Your Dev Server
1. **Stop** your current dev server (press `Ctrl+C` in terminal)
2. **Start** it again: `npm run dev`
3. The warning message should disappear!

### Step 7: Test It!
1. Fill out the contact form on your website
2. Click **"Send Message"**
3. Check your email: **vijayshankarprajapati29@gmail.com**
4. You should receive the message! 🎉

---

## 📸 Visual Guide

### Where to Find Each ID:

**Service ID:**
- Dashboard → Email Services → Your service → Service ID

**Template ID:**
- Dashboard → Email Templates → Your template → Template ID

**Public Key:**
- Dashboard → Account → General → API Keys → Public Key

---

## ❌ Troubleshooting

### "Email service not configured" still showing?
- ✅ Check `.env` file exists in project root
- ✅ Check file is named exactly `.env` (not `.env.txt`)
- ✅ Check all three variables are filled in
- ✅ Restart dev server after creating `.env`

### "Invalid service ID" error?
- ✅ Check Service ID starts with `service_`
- ✅ Copy the full ID from EmailJS dashboard
- ✅ No extra spaces or quotes

### "Template not found" error?
- ✅ Check Template ID starts with `template_`
- ✅ Verify template is saved in EmailJS dashboard
- ✅ Check template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`

### "Invalid public key" error?
- ✅ Check Public Key is correct
- ✅ Get it from Account → General → API Keys
- ✅ No spaces or extra characters

### Still not working?
1. Open browser console (F12)
2. Look for error messages
3. Check the error details
4. Verify all IDs are correct in EmailJS dashboard

---

## 💡 Pro Tips

- The free tier gives you **200 emails/month** - perfect for a portfolio!
- For production deployment (Vercel/Netlify), add the same `.env` variables in your hosting platform's environment settings
- Never commit your `.env` file to Git (it's already in `.gitignore`)

---

## ✅ Checklist

Before testing, make sure:
- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created with correct variables
- [ ] `.env` file created in project root
- [ ] All three IDs added to `.env`
- [ ] Dev server restarted
- [ ] No warning message in form

---

**Need help?** Check the console for specific error messages, or refer to the EmailJS documentation: https://www.emailjs.com/docs/

