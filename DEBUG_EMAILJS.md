# 🔍 Debug EmailJS Public Key Issue

## Quick Diagnostic Steps

### Step 1: Check Your .env File

1. **Open your `.env` file** in the project root
2. **Verify the format** - it should look exactly like this:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 2: Verify Public Key Format

Your Public Key should:
- ✅ Be a long string (usually 20-40+ characters)
- ✅ Contain only letters and numbers (no special characters usually)
- ✅ NOT start with "private_"
- ✅ NOT have spaces or quotes around it

**Example of CORRECT format:**
```env
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnopqrstuvwxyz1234567890
```

**Examples of WRONG format:**
```env
VITE_EMAILJS_PUBLIC_KEY = abc123          # ❌ Spaces around =
VITE_EMAILJS_PUBLIC_KEY="abc123"          # ❌ Quotes
VITE_EMAILJS_PUBLIC_KEY=private_abc123    # ❌ Using private key
VITE_EMAILJS_PUBLIC_KEY=abc 123           # ❌ Spaces in key
```

### Step 3: Get Fresh Public Key from EmailJS

1. **Go to:** https://dashboard.emailjs.com/admin/account
2. **Make sure you're logged in** to the correct EmailJS account
3. **Scroll down** to find "API Keys" section
4. **Look for "Public Key"** (NOT Private Key)
5. **Click the copy button** next to Public Key
6. **Paste it directly** into your .env file

### Step 4: Check Browser Console

1. **Open your website** in browser
2. **Press F12** to open DevTools
3. **Go to Console tab**
4. **Look for these messages:**
   - "EmailJS initialized successfully" ✅ Good!
   - "Using Public Key: abc..." ✅ Shows first 10 chars
   - "EmailJS Public Key not found" ❌ Problem!

### Step 5: Verify Environment Variables Are Loaded

1. **Open browser console** (F12)
2. **Type this in console:**
   ```javascript
   console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
   ```
3. **Check the output:**
   - If it shows `undefined` → .env file not loaded
   - If it shows your key → Good! But might be wrong key
   - If it shows `"your_public_key_here"` → Not updated

### Step 6: Common Issues & Fixes

#### Issue: "Public Key is invalid"
**Possible causes:**
1. ❌ Copied the wrong key (Private Key instead of Public Key)
2. ❌ Key has extra spaces or characters
3. ❌ Key is from a different EmailJS account
4. ❌ .env file not saved properly
5. ❌ Dev server not restarted after editing .env

**Fix:**
1. Get a fresh Public Key from EmailJS dashboard
2. Delete the old line in .env
3. Add new line: `VITE_EMAILJS_PUBLIC_KEY=your_new_key`
4. Save file
5. Restart dev server completely

#### Issue: Environment variable is undefined
**Possible causes:**
1. ❌ .env file not in project root
2. ❌ File named wrong (should be `.env` not `.env.txt`)
3. ❌ Dev server not restarted
4. ❌ Variable name typo (must be `VITE_EMAILJS_PUBLIC_KEY`)

**Fix:**
1. Make sure .env is in same folder as package.json
2. Check file name is exactly `.env` (no extension)
3. Restart dev server: Stop (Ctrl+C) then `npm run dev`

### Step 7: Test with Fresh Setup

If still not working, try this:

1. **Delete your .env file**
2. **Create a new .env file** from scratch
3. **Get fresh credentials** from EmailJS:
   - New Service ID
   - New Template ID  
   - New Public Key
4. **Add all three** to .env:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxx
   ```
5. **Save and restart** dev server
6. **Test again**

### Step 8: Verify EmailJS Account Settings

1. Go to https://dashboard.emailjs.com/admin/account
2. Check **Security** settings:
   - Make sure "Use Private Key" is **OFF** (for public key usage)
   - Or enable "Allow EmailJS API for non-browser applications" if needed

### Step 9: Check EmailJS Service Status

1. Go to **Email Services** in dashboard
2. Make sure your service shows as **"Active"**
3. If it's inactive, reactivate it

### Step 10: Verify Template Settings

1. Go to **Email Templates** in dashboard
2. Make sure your template:
   - Is **saved** and **active**
   - Has correct variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Has correct "To Email": `vijayshankarprajapati29@gmail.com`

---

## 🧪 Quick Test

Run this in browser console to test:

```javascript
// Check if env variables are loaded
console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 10) + "...");
```

If any show `undefined`, your .env file isn't being read!

---

## 📞 Still Need Help?

1. Check browser console for specific error messages
2. Verify all three IDs in EmailJS dashboard match your .env file
3. Try creating a new EmailJS account and starting fresh
4. Check EmailJS documentation: https://www.emailjs.com/docs/

---

## ✅ Checklist

Before testing, verify:
- [ ] .env file exists in project root
- [ ] .env file has all three variables
- [ ] Public Key is from EmailJS dashboard (API Keys section)
- [ ] Public Key has no spaces or quotes
- [ ] Dev server was restarted after editing .env
- [ ] EmailJS service is active
- [ ] EmailJS template is saved and active
- [ ] Browser console shows "EmailJS initialized successfully"

