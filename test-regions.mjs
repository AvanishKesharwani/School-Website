import { PrismaClient } from '@prisma/client';

const regions = [
  'ap-south-1',
  'ap-south-2',
  'ap-southeast-1',
  'ap-southeast-2',
  'ap-northeast-1',
  'ap-northeast-2',
  'ap-northeast-3',
  'us-east-1',
  'us-east-2',
  'us-west-1',
  'us-west-2',
  'eu-west-1',
  'eu-west-2',
  'eu-west-3',
  'eu-central-1',
  'eu-central-2',
  'eu-north-1',
  'ca-central-1',
  'sa-east-1',
  'me-central-1',
  'af-south-1'
];

async function testRegion(region) {
  const url = `postgresql://postgres.yfkdtcnipnnatackplvv:MPSADMIN%402026%21@aws-0-${region}.pooler.supabase.com:6543/postgres?pgbouncer=true`;
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url,
      },
    },
  });
  try {
    const res = await prisma.$queryRaw`SELECT NOW()`;
    console.log(`SUCCESS for region ${region}!`, res);
    return true;
  } catch (err) {
    if (!err.message.includes('not found') && !err.message.includes('ENOTFOUND') && !err.message.includes('timed out')) {
      console.log(`INTERESTING error for region ${region}:`, err.message);
    } else {
      // console.log(`Failed for region ${region} (not found)`);
    }
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function run() {
  console.log('Testing regions...');
  for (const region of regions) {
    const success = await testRegion(region);
    if (success) {
      console.log(`Found working region: ${region}`);
      break;
    }
  }
}

run();
