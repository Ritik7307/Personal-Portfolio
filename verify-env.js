// Verification script for EmailJS environment variables
// Run: node verify-env.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');

console.log('🔍 EmailJS Environment Variables Checker\n');
console.log('=' .repeat(50));

if (!fs.existsSync(envPath)) {
  console.log('❌ .env file NOT FOUND!');
  console.log('\n📝 Create a .env file in the project root with:');
  console.log('   VITE_EMAILJS_SERVICE_ID=your_service_id');
  console.log('   VITE_EMAILJS_TEMPLATE_ID=your_template_id');
  console.log('   VITE_EMAILJS_PUBLIC_KEY=your_public_key');
  process.exit(1);
}

console.log('✅ .env file found!\n');

// Read .env file
const envContent = fs.readFileSync(envPath, 'utf-8');
const lines = envContent.split('\n').filter(line => line.trim() && !line.trim().startsWith('#'));

let serviceId = null;
let templateId = null;
let publicKey = null;

lines.forEach(line => {
  const [key, ...valueParts] = line.split('=');
  const value = valueParts.join('=').trim();
  
  if (key.trim() === 'VITE_EMAILJS_SERVICE_ID') {
    serviceId = value;
  } else if (key.trim() === 'VITE_EMAILJS_TEMPLATE_ID') {
    templateId = value;
  } else if (key.trim() === 'VITE_EMAILJS_PUBLIC_KEY') {
    publicKey = value;
  }
});

console.log('📋 Environment Variables Status:\n');

// Check Service ID
if (!serviceId || serviceId === 'your_service_id_here' || serviceId === 'your_service_id') {
  console.log('❌ VITE_EMAILJS_SERVICE_ID: NOT SET or using placeholder');
} else if (serviceId.startsWith('service_')) {
  console.log(`✅ VITE_EMAILJS_SERVICE_ID: ${serviceId.substring(0, 15)}...`);
} else {
  console.log(`⚠️  VITE_EMAILJS_SERVICE_ID: ${serviceId.substring(0, 15)}... (should start with "service_")`);
}

// Check Template ID
if (!templateId || templateId === 'your_template_id_here' || templateId === 'your_template_id') {
  console.log('❌ VITE_EMAILJS_TEMPLATE_ID: NOT SET or using placeholder');
} else if (templateId.startsWith('template_')) {
  console.log(`✅ VITE_EMAILJS_TEMPLATE_ID: ${templateId.substring(0, 15)}...`);
} else {
  console.log(`⚠️  VITE_EMAILJS_TEMPLATE_ID: ${templateId.substring(0, 15)}... (should start with "template_")`);
}

// Check Public Key
if (!publicKey || publicKey === 'your_public_key_here' || publicKey === 'your_public_key') {
  console.log('❌ VITE_EMAILJS_PUBLIC_KEY: NOT SET or using placeholder');
} else {
  const keyLength = publicKey.length;
  const hasSpaces = publicKey.includes(' ');
  const hasQuotes = publicKey.startsWith('"') || publicKey.startsWith("'");
  
  if (hasSpaces) {
    console.log(`❌ VITE_EMAILJS_PUBLIC_KEY: Contains spaces! (Length: ${keyLength})`);
  } else if (hasQuotes) {
    console.log(`❌ VITE_EMAILJS_PUBLIC_KEY: Contains quotes! Remove quotes. (Length: ${keyLength})`);
  } else if (keyLength < 10) {
    console.log(`⚠️  VITE_EMAILJS_PUBLIC_KEY: Very short (${keyLength} chars). Might be incomplete.`);
  } else {
    console.log(`✅ VITE_EMAILJS_PUBLIC_KEY: Set (Length: ${keyLength} chars, First 10: ${publicKey.substring(0, 10)}...)`);
  }
}

console.log('\n' + '='.repeat(50));

// Summary
const allSet = serviceId && templateId && publicKey &&
  serviceId !== 'your_service_id_here' && 
  serviceId !== 'your_service_id' &&
  templateId !== 'your_template_id_here' && 
  templateId !== 'your_template_id' &&
  publicKey !== 'your_public_key_here' && 
  publicKey !== 'your_public_key' &&
  !publicKey.includes(' ') &&
  !publicKey.startsWith('"') &&
  !publicKey.startsWith("'");

if (allSet) {
  console.log('\n✅ All environment variables are set!');
  console.log('💡 Make sure to restart your dev server if you just updated .env');
  console.log('💡 Run: npm run dev');
} else {
  console.log('\n❌ Some environment variables are missing or incorrect.');
  console.log('📖 See SETUP_EMAILJS.md or FIX_PUBLIC_KEY.md for help');
}

