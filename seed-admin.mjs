import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Load .env manually if not already present in environment
if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      envContent.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const index = trimmed.indexOf('=');
          if (index !== -1) {
            const key = trimmed.slice(0, index).trim();
            let value = trimmed.slice(index + 1).trim();
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            } else if (value.startsWith("'") && value.endsWith("'")) {
              value = value.slice(1, -1);
            }
            process.env[key] = value;
          }
        }
      });
    }
  } catch (err) {
    console.warn('Warning: Failed to load .env file manually:', err.message);
  }
}

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD environment variables must be defined to seed the admin user.');
  }

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        email: adminEmail,
        passwordHash,
        role: 'SUPER_ADMIN',
      }
    });
    console.log('Created default admin user!');
  } else {
    console.log('Admin user already exists!');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
