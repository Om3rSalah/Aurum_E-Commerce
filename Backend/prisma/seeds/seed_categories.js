import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateCategories() {
  console.log('🔄 Updating categories to match actual store structure...');

  // 1. مسح الأقسام القديمة (لو حابب تبدأ نظيف - تنبيه: سيحذف المنتجات المرتبطة بها بسبب الـ foreign keys إلا لو عدلتها)
  // الأفضل استخدام upsert لتحديث الموجود أو إضافة الجديد مباشرة

  const newCategories = [
    { name: 'Shirts & Tunics', slug: 'shirts-tunics', description: 'Classic and modern shirts and tunics for daily wear.' },
    { name: 'Linen Tops', slug: 'linen-tops', description: 'Breathable and lightweight linen tops for effortless style.' },
    { name: 'Casual Polos', slug: 'casual-polos', description: 'Smart-casual polo shirts crafted with premium fabrics.' },
    { name: 'Oversized Tees', slug: 'oversized-tees', description: 'Comfortable, relaxed-fit oversized t-shirts.' },
  ];

  for (const cat of newCategories) {
    // نبحث بالاسم القديم أو ننشئ الجديد، أو نستخدم upsert بناء على الـ slug
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description },
      create: cat,
    });
    console.log(`✅ Category updated/created: ${cat.name}`);
  }

  console.log('✨ Categories successfully updated!');
}

updateCategories()
  .catch((e) => {
    console.error('❌ Error updating categories:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });