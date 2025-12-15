// Interactive script to help edit .env file
// Run: node edit-env.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

console.log('📝 EmailJS .env File Editor\n');
console.log('This will help you update your .env file with your EmailJS credentials.\n');
console.log('You can find these values at: https://dashboard.emailjs.com/\n');
console.log('='.repeat(60));

async function main() {
  try {
    // Read existing .env if it exists
    let existingServiceId = '';
    let existingTemplateId = '';
    let existingPublicKey = '';
    
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach(line => {
        if (line.startsWith('VITE_EMAILJS_SERVICE_ID=')) {
          existingServiceId = line.split('=')[1]?.trim() || '';
        } else if (line.startsWith('VITE_EMAILJS_TEMPLATE_ID=')) {
          existingTemplateId = line.split('=')[1]?.trim() || '';
        } else if (line.startsWith('VITE_EMAILJS_PUBLIC_KEY=')) {
          existingPublicKey = line.split('=')[1]?.trim() || '';
        }
      });
    }

    console.log('\n📋 Current values in .env:');
    console.log(`Service ID: ${existingServiceId || '(not set)'}`);
    console.log(`Template ID: ${existingTemplateId || '(not set)'}`);
    console.log(`Public Key: ${existingPublicKey ? existingPublicKey.substring(0, 20) + '...' : '(not set)'}`);
    console.log('\n');

    // Get Service ID
    const serviceId = await question('Enter your Service ID (starts with "service_"): ');
    if (!serviceId.trim()) {
      console.log('❌ Service ID is required!');
      rl.close();
      return;
    }

    // Get Template ID
    const templateId = await question('Enter your Template ID (starts with "template_"): ');
    if (!templateId.trim()) {
      console.log('❌ Template ID is required!');
      rl.close();
      return;
    }

    // Get Public Key
    const publicKey = await question('Enter your Public Key (long string from API Keys): ');
    if (!publicKey.trim()) {
      console.log('❌ Public Key is required!');
      rl.close();
      return;
    }

    // Validate
    if (publicKey.includes(' ')) {
      console.log('⚠️  Warning: Public Key contains spaces. This might cause issues.');
    }

    if (publicKey.startsWith('"') || publicKey.startsWith("'")) {
      console.log('⚠️  Warning: Public Key has quotes. Removing them...');
      publicKey = publicKey.replace(/^["']|["']$/g, '');
    }

    // Create .env content
    const envContent = `# EmailJS Configuration
# Fill in your actual EmailJS credentials below
# Get them from: https://www.emailjs.com/

VITE_EMAILJS_SERVICE_ID=${serviceId.trim()}
VITE_EMAILJS_TEMPLATE_ID=${templateId.trim()}
VITE_EMAILJS_PUBLIC_KEY=${publicKey.trim()}
`;

    // Write to file
    fs.writeFileSync(envPath, envContent);

    console.log('\n✅ .env file updated successfully!');
    console.log('\n📋 New values:');
    console.log(`Service ID: ${serviceId.trim()}`);
    console.log(`Template ID: ${templateId.trim()}`);
    console.log(`Public Key: ${publicKey.trim().substring(0, 20)}...`);
    console.log('\n⚠️  IMPORTANT: Restart your dev server now!');
    console.log('   1. Stop server (Ctrl+C)');
    console.log('   2. Run: npm run dev');
    console.log('   3. Try the form again!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();

