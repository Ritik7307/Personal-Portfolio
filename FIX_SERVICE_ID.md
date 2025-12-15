# 🔧 Fix "Service ID not found" Error

## ✅ Good News!
Your Public Key is working! The error is now about the **Service ID**.

---

## 🎯 Quick Fix

### Step 1: Check Your Email Service in EmailJS

1. **Go to:** https://dashboard.emailjs.com/admin/integration
2. **Click "Email Services"** in the left sidebar
3. **Check if you have a service:**
   - ✅ If you see a service listed → Copy its Service ID
   - ❌ If you see "No services" → You need to create one (see Step 2)

### Step 2: Create Email Service (if you don't have one)

1. **Click "Add New Service"** button
2. **Choose your email provider:**
   - **Gmail** (recommended) - easiest to set up
   - Outlook
   - Or your email provider
3. **Click "Connect Account"**
4. **Sign in** with your email account
5. **Allow permissions** when prompted
6. **Service will be created** and you'll see the Service ID
7. **Copy the Service ID** - it looks like: `service_abc12345`

### Step 3: Get Your Service ID

**If you already have a service:**

1. Go to **Email Services** in dashboard
2. Find your service in the list
3. **Check it shows as "Active"** (not inactive)
4. **Copy the Service ID** - it's usually displayed prominently
   - Format: `service_xxxxxxxxx`
   - Example: `service_abc12345`

**If service is inactive:**
- Click on it to reactivate
- Or create a new one

### Step 4: Update Your .env File

1. **Open your `.env` file**
2. **Find this line:**
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   ```
3. **Replace it with your actual Service ID:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc12345
   ```
   (Replace `service_abc12345` with YOUR actual Service ID)

4. **Make sure:**
   - ✅ Service ID starts with `service_`
   - ✅ No spaces around `=`
   - ✅ No quotes
   - ✅ You copied the ENTIRE Service ID

### Step 5: Verify Your Setup

Run this command to check:
```bash
node verify-env.js
```

You should see:
- ✅ Service ID: `service_xxxxx...`
- ✅ Template ID: `template_xxxxx...`
- ✅ Public Key: Set (Length: XX chars)

### Step 6: Restart Dev Server

1. **Stop server:** Press `Ctrl+C`
2. **Start again:** `npm run dev`
3. **Try the form again!**

---

## 🔍 Common Issues

### Issue: "Service ID not found"

**Possible causes:**
1. ❌ Service ID is wrong (typo or wrong ID)
2. ❌ Service is inactive in EmailJS
3. ❌ Service was deleted
4. ❌ Using Service ID from different EmailJS account

**Fix:**
1. Go to EmailJS dashboard → Email Services
2. Verify service exists and is ACTIVE
3. Copy the Service ID again
4. Update .env file
5. Restart server

### Issue: Service ID doesn't start with "service_"

**Wrong:**
```env
VITE_EMAILJS_SERVICE_ID=abc12345  ❌
```

**Correct:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc12345  ✅
```

### Issue: Service is inactive

1. Go to Email Services in dashboard
2. Click on your service
3. Reactivate it or reconnect your email account
4. Make sure it shows as "Active"

---

## 📋 Complete .env File Example

Here's what your `.env` file should look like (with example values):

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc12345
VITE_EMAILJS_TEMPLATE_ID=template_xyz78901
VITE_EMAILJS_PUBLIC_KEY=K8xY2mN9pQ4rT7vW1zA5bC6dE8fG0hI3jL5
```

**All three should:**
- ✅ Have real values (not "your_xxx_here")
- ✅ No spaces around `=`
- ✅ No quotes
- ✅ Service ID starts with `service_`
- ✅ Template ID starts with `template_`
- ✅ Public Key is a long string

---

## 🧪 Test Your Setup

1. **Run verification:**
   ```bash
   node verify-env.js
   ```

2. **Check browser console** (F12):
   - Should see: "EmailJS initialized successfully"
   - Should see: "Service ID: service_xxxxx"
   - Should see: "Template ID: template_xxxxx"

3. **Try submitting the form:**
   - Fill out the contact form
   - Click "Send Message"
   - Check your email: **vijayshankarprajapati29@gmail.com**

---

## ✅ Checklist

Before testing:
- [ ] Email Service exists in EmailJS dashboard
- [ ] Service shows as "Active"
- [ ] Service ID copied correctly (starts with `service_`)
- [ ] .env file updated with correct Service ID
- [ ] No spaces or quotes in .env
- [ ] Dev server restarted
- [ ] Verified with `node verify-env.js`

---

## 🆘 Still Not Working?

### Check 1: Service Status
- Go to Email Services in dashboard
- Make sure service is **Active** (green/active status)
- If inactive, reactivate it

### Check 2: Service ID Format
- Must start with `service_`
- Usually looks like: `service_abc12345`
- Check for typos

### Check 3: Account Match
- Make sure Service ID is from the SAME EmailJS account
- As your Public Key and Template ID
- All three should be from one account

### Check 4: Browser Console
1. Open DevTools (F12)
2. Go to Console
3. Look for error messages
4. Check what Service ID is being used

---

**Once you update the Service ID in your .env file and restart the server, it should work!** 🎉

