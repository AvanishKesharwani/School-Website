import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@mankapublicschool.edu';
  const adminPassword = 'admin';

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
