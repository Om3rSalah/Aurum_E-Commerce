import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedNewProducts() {
  console.log('🌱 Seeding new apparel products with variants, accurate images, and ratings...');

  // 1. جلب الأقسام الجديدة للحصول على الـ IDs الخاصة بها
  const shirtsTunics = await prisma.category.findUnique({ where: { slug: 'shirts-tunics' } });
  const linenTops = await prisma.category.findUnique({ where: { slug: 'linen-tops' } });
  const casualPolos = await prisma.category.findUnique({ where: { slug: 'casual-polos' } });
  const oversizedTees = await prisma.category.findUnique({ where: { slug: 'oversized-tees' } });

  if (!shirtsTunics || !linenTops || !casualPolos || !oversizedTees) {
    throw new Error('❌ يرجى التأكد من تشغيل سكريبت الأقسام الجديدة أولاً!');
  }

  // 2. قائمة المنتجات الجديدة بمقاسات وألوان منفصلة (SKUs فريدة) مع الـ rating
  const products = [
    // --- 1. قسم Shirts & Tunics ---
    {
      categoryId: shirtsTunics.id,
      name: 'Tailored Fit Poplin Dress Shirt',
      slug: 'tailored-fit-poplin-dress-shirt',
      description: 'A crisp, lightweight poplin dress shirt featuring a sharp collar and a tailored silhouette for an impeccably polished look.',
      basePrice: 48.00,
      rating: 4.80, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'POP-BLU-S', size: 'S', color: 'Light Blue', colorHex: '#ADD8E6', stockQuantity: 12 },
        { sku: 'POP-BLU-M', size: 'M', color: 'Light Blue', colorHex: '#ADD8E6', stockQuantity: 20 },
        { sku: 'POP-BLU-L', size: 'L', color: 'Light Blue', colorHex: '#ADD8E6', stockQuantity: 25 },
        { sku: 'POP-BLU-XL', size: 'XL', color: 'Light Blue', colorHex: '#ADD8E6', stockQuantity: 15 },
        { sku: 'POP-BLU-XXL', size: 'XXL', color: 'Light Blue', colorHex: '#ADD8E6', stockQuantity: 8 },
      ],
    },

    // --- 2. قسم Linen Tops ---
    {
      categoryId: linenTops.id,
      name: 'Striped Resort Collar Linen Blend Shirt',
      slug: 'striped-resort-collar-linen-shirt',
      description: 'Embrace vacation vibes with this breezy striped resort-collar shirt crafted from an ultra-soft linen and cotton blend.',
      basePrice: 52.00,
      rating: 4.65, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://image.hm.com/assets/hm/38/b9/38b9fbe48754986bc16c0b370183fbbb9f7e0d5f.jpg?imwidth=2160', isPrimary: true },
        { url: 'https://image.hm.com/assets/hm/0e/86/0e869ca422f9e096f61ba58b97bfb3454483849f.jpg?imwidth=2160', isPrimary: false },
        { url: 'https://image.hm.com/assets/hm/ff/63/ff63fa660bed59da3649662f969144071abd503f.jpg?imwidth=2160', isPrimary: false },
        { url: 'https://image.hm.com/assets/hm/f6/a8/f6a8f015890cc405acd749013e38222799f992e6.jpg?imwidth=2160', isPrimary: false },
      ],
      variants: [
        // لون أبيض (White)
        { sku: 'STR-WHT-S', size: 'S', color: 'White', colorHex: '#F8F9FA', stockQuantity: 10 },
        { sku: 'STR-WHT-M', size: 'M', color: 'White', colorHex: '#F8F9FA', stockQuantity: 16 },
        { sku: 'STR-WHT-L', size: 'L', color: 'White', colorHex: '#F8F9FA', stockQuantity: 20 },
        { sku: 'STR-WHT-XL', size: 'XL', color: 'White', colorHex: '#F8F9FA', stockQuantity: 12 },
        { sku: 'STR-WHT-XXL', size: 'XXL', color: 'White', colorHex: '#F8F9FA', stockQuantity: 5 },
        
        // لون كحلي (Navy)
        { sku: 'STR-NVY-S', size: 'S', color: 'Navy', colorHex: '#292931', stockQuantity: 8 },
        { sku: 'STR-NVY-M', size: 'M', color: 'Navy', colorHex: '#292931', stockQuantity: 14 },
        { sku: 'STR-NVY-L', size: 'L', color: 'Navy', colorHex: '#292931', stockQuantity: 18 },
        { sku: 'STR-NVY-XL', size: 'XL', color: 'Navy', colorHex: '#292931', stockQuantity: 10 },
        { sku: 'STR-NVY-XXL', size: 'XXL', color: 'Navy', colorHex: '#292931', stockQuantity: 4 },
      ],
    },

    // --- 3. قسم Casual Polos ---
    {
      categoryId: casualPolos.id,
      name: 'Vintage Knit Texture Polo Shirt',
      slug: 'vintage-knit-texture-polo-shirt',
      description: 'A sophisticated twist on the classic polo, designed with an open placket and a rich retro ribbed knit texture.',
      basePrice: 42.00,
      rating: 4.50, // <-- التقييم المضاف
      isFeatured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'POL-OLV-S', size: 'S', color: 'Olive Green', colorHex: '#556B2F', stockQuantity: 14 },
        { sku: 'POL-OLV-M', size: 'M', color: 'Olive Green', colorHex: '#556B2F', stockQuantity: 30 },
        { sku: 'POL-OLV-L', size: 'L', color: 'Olive Green', colorHex: '#556B2F', stockQuantity: 24 },
        { sku: 'POL-OLV-XL', size: 'XL', color: 'Olive Green', colorHex: '#556B2F', stockQuantity: 18 },
        { sku: 'POL-OLV-XXL', size: 'XXL', color: 'Olive Green', colorHex: '#556B2F', stockQuantity: 7 },
      ],
    },

    // --- 4. قسم Oversized Tees ---
    {
      categoryId: oversizedTees.id,
      name: 'Graphic Minimalist Streetwear Oversized Tee',
      slug: 'graphic-minimalist-streetwear-oversized-tee',
      description: 'Made from premium heavyweight carded cotton, featuring a stylish minimal back print and relaxed boxy cut.',
      basePrice: 34.00,
      rating: 4.90, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://i.etsystatic.com/66083675/r/il/8d0f82/8304988193/il_1588xN.8304988193_5exh.jpg', isPrimary: true },
        { url: 'https://i.etsystatic.com/66083675/r/il/8484a8/8257074206/il_1588xN.8257074206_su70.jpg', isPrimary: false },
        { url: 'https://i.etsystatic.com/66083675/r/il/12dd80/8257075388/il_1588xN.8257075388_db7w.jpg', isPrimary: false },
        { url: 'https://i.etsystatic.com/66083675/r/il/32d4d4/8257074750/il_1588xN.8257074750_d2qf.jpg', isPrimary: false },
      ],
      variants: [
        { sku: 'TEE-CHR-S', size: 'S', color: 'Charcoal', colorHex: '#36454F', stockQuantity: 20 },
        { sku: 'TEE-CHR-M', size: 'M', color: 'Charcoal', colorHex: '#36454F', stockQuantity: 35 },
        { sku: 'TEE-CHR-L', size: 'L', color: 'Charcoal', colorHex: '#36454F', stockQuantity: 30 },
        { sku: 'TEE-CHR-XL', size: 'XL', color: 'Charcoal', colorHex: '#36454F', stockQuantity: 22 },
        { sku: 'TEE-CHR-XXL', size: 'XXL', color: 'Charcoal', colorHex: '#36454F', stockQuantity: 12 },
      ],
    },
  ];

  // 3. إدخال المنتجات مع الصور والتنويعات الخاصة بها وتقييماتها
  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        description: p.description,
        basePrice: p.basePrice,
        rating: p.rating, // <-- التحديث هنا
        categoryId: p.categoryId,
        isFeatured: p.isFeatured,
      },
      create: {
        categoryId: p.categoryId,
        name: p.name,
        slug: p.slug,
        description: p.description,
        basePrice: p.basePrice,
        rating: p.rating, // <-- الإنشاء هنا
        isFeatured: p.isFeatured,
      },
    });

    // مسح الصور القديمة لهذا المنتج لو وجدت وإضافة الصور الجديدة
    await prisma.productImage.deleteMany({ where: { productId: product.id } });
    for (const img of p.images) {
      await prisma.productImage.create({
        data: {
          productId: product.id,
          imageUrl: img.url,
          isPrimary: img.isPrimary,
        },
      });
    }

    // إضافة أو تحديث التنويعات (Variants) لكل المقاسات والألوان
    for (const v of p.variants) {
      await prisma.productVariant.upsert({
        where: { sku: v.sku },
        update: {
          price: p.basePrice,
          stockQuantity: v.stockQuantity,
          color: v.color,
          colorHex: v.colorHex,
        },
        create: {
          productId: product.id,
          sku: v.sku,
          size: v.size,
          color: v.color,
          colorHex: v.colorHex,
          price: p.basePrice,
          stockQuantity: v.stockQuantity,
        },
      });
    }

    console.log(`✅ Successfully seeded product: ${product.name} (Rating: ${p.rating}) with variants and stock.`);
  }

  console.log('🎉 All new products seeded successfully with ratings!');
}

seedNewProducts()
  .catch((e) => {
    console.error('❌ Error seeding new products:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });