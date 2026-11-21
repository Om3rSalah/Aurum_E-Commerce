import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedAccessoryCategories() {
  console.log('🔄 Adding accessories categories...');

  const accessoryCategories = [
    {
      name: 'Sunglasses & Eyewear',
      slug: 'sunglasses-eyewear',
      description: 'Stylish sunglasses and everyday eyewear frames for sun protection and modern looks.',
    },
    {
      name: 'Bags & Backpacks',
      slug: 'bags-backpacks',
      description: 'Everyday crossbody bags, totes, and durable backpacks designed for utility and style.',
    },
    {
      name: 'Belts & Leather Goods',
      slug: 'belts-leather-goods',
      description: 'Classic leather belts, cardholders, and wallets crafted for durability and polish.',
    },
    {
      name: 'Hats & Caps',
      slug: 'hats-caps',
      description: 'Casual caps, bucket hats, and beanies to complete your daily outfit.',
    },
  ];

  for (const cat of accessoryCategories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
      },
      create: cat,
    });
    console.log(`✅ Category upserted: ${cat.name}`);
  }

  console.log('✨ Accessories categories seeded successfully!');
}

seedAccessoryCategories()
  .catch((e) => {
    console.error('❌ Error seeding accessory categories:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });