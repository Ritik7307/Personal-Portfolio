// Helper script to create .env file
// Run: node create-env.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `# EmailJS Configuration
# Fill in your actual EmailJS credentials below
# Get them from: https://www.emailjs.com/

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
`;

const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  console.log('If you want to recreate it, delete the existing .env file first.');
} else {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('📝 Now edit .env and add your EmailJS credentials:');
  console.log('   1. Service ID (from Email Services)');
  console.log('   2. Template ID (from Email Templates)');
  console.log('   3. Public Key (from Account → API Keys)');
  console.log('\n📖 See SETUP_EMAILJS.md for detailed instructions');
}

