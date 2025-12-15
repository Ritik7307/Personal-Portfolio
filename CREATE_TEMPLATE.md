# 📝 Create EmailJS Template - Step by Step

## You Don't Have a Template Yet? No Problem!

Let's create one right now. It takes about 2 minutes!

---

## 🚀 Step-by-Step Guide

### Step 1: Go to Email Templates

1. **Go to:** https://dashboard.emailjs.com/admin/integration
2. **Click "Email Templates"** in the left sidebar
3. You'll see "No templates" or an empty list
4. **Click "Create New Template"** button (usually a big blue/green button)

### Step 2: Fill in Template Details

You'll see a form. Fill it in like this:

#### **Template Name:**
```
Contact Form
```
(Or any name you like - this is just for your reference)

#### **Subject:**
```
New Contact Form Message from {{from_name}}
```
(This will be the email subject line)

#### **Content (Email Body):**
Copy and paste this exactly:

```
You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{from_email}}

This email was sent from your portfolio contact form.
```

**Important:** Keep the `{{from_name}}`, `{{from_email}}`, and `{{message}}` exactly as shown - these are variables that will be replaced with actual form data.

#### **To Email:**
```
vijayshankarprajapati29@gmail.com
```
(This is where you'll receive the emails)

#### **From Name:**
```
Portfolio Contact Form
```
(This is what will show as the sender name)

#### **Reply To:**
```
{{from_email}}
```
(This allows you to reply directly to the person who filled the form)

### Step 3: Save the Template

1. **Click "Save"** button (usually at the bottom)
2. You'll see your template in the list
3. **Copy the Template ID** - it looks like: `template_abc12345`
   - It's usually displayed next to the template name
   - Or click on the template to see its details

### Step 4: Update Your .env File

1. **Open your `.env` file**
2. **Find this line:**
   ```env
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```
3. **Replace it with your actual Template ID:**
   ```env
   VITE_EMAILJS_TEMPLATE_ID=template_abc12345
   ```
   (Replace `template_abc12345` with YOUR actual Template ID from Step 3)

4. **Save the file**

### Step 5: Restart Dev Server

1. **Stop server:** Press `Ctrl+C`
2. **Start again:** `npm run dev`
3. **Try the form!**

---

## 📸 Visual Guide

### What the Template Form Looks Like:

```
┌─────────────────────────────────────┐
│ Template Name:                      │
│ [Contact Form              ]        │
│                                     │
│ Subject:                            │
│ [New Contact from {{from_name}}]    │
│                                     │
│ Content:                            │
│ ┌─────────────────────────────┐   │
│ │ From: {{from_name}}          │   │
│ │ Email: {{from_email}}        │   │
│ │                              │   │
│ │ Message:                     │   │
│ │ {{message}}                  │   │
│ └─────────────────────────────┘   │
│                                     │
│ To Email:                           │
│ [vijayshankarprajapati29@gmail.com] │
│                                     │
│ From Name:                          │
│ [Portfolio Contact Form]            │
│                                     │
│ Reply To:                           │
│ [{{from_email}}]                    │
│                                     │
│        [Save]  [Cancel]             │
└─────────────────────────────────────┘
```

---

## ✅ Template Variables Explained

These are the variables you MUST use in your template:

- `{{from_name}}` - The person's name from the form
- `{{from_email}}` - The person's email from the form
- `{{message}}` - The message they wrote

**These match what we're sending from the contact form!**

---

## 🎨 Customize Your Template (Optional)

You can customize the email template to look however you want! Just make sure to keep these variables:

- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`

**Example of a fancier template:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW MESSAGE FROM PORTFOLIO CONTACT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{from_name}}
📧 Email: {{from_email}}

💬 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this email to respond directly to {{from_name}}.
```

---

## 🔍 Verify Your Template

After creating the template:

1. **Check it's saved:**
   - Go to Email Templates
   - You should see your template in the list
   - It should show as "Active" or have a green checkmark

2. **Check the Template ID:**
   - Click on your template
   - The Template ID should be visible
   - It should start with `template_`

3. **Test it:**
   - Update your .env file with the Template ID
   - Restart your dev server
   - Try submitting the contact form
   - Check your email: **vijayshankarprajapati29@gmail.com**

---

## ❓ Common Issues

### Issue: "Template not found" after creating

**Fix:**
1. Make sure you copied the ENTIRE Template ID
2. Make sure it starts with `template_`
3. Check for typos in .env file
4. Restart dev server after updating .env

### Issue: Template variables not working

**Fix:**
- Make sure you used exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- No spaces inside the curly braces
- Double curly braces on both sides

### Issue: Can't find Template ID

**Fix:**
1. Go to Email Templates
2. Click on your template name
3. The Template ID should be in the template details
4. Or look in the URL - it might be in the address bar

---

## ✅ Final Checklist

Before testing:
- [ ] Template created in EmailJS dashboard
- [ ] Template has correct variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- [ ] "To Email" set to: `vijayshankarprajapati29@gmail.com`
- [ ] Template ID copied (starts with `template_`)
- [ ] .env file updated with Template ID
- [ ] Dev server restarted
- [ ] Verified with `node verify-env.js` (should show ✅ for Template ID)

---

## 🎉 You're Almost There!

Once you:
1. ✅ Create the template
2. ✅ Copy the Template ID
3. ✅ Update .env file
4. ✅ Restart server

Your contact form should work perfectly! 🚀

---

**Need help?** Check the main setup guide: `SETUP_EMAILJS.md`

