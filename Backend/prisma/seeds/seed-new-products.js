import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedNewProducts() {
  console.log('🌱 Seeding new products with variants, images, and ratings...');

  // 1. جلب الأقسام الجديدة للحصول على الـ IDs الخاصة بها
  const shirtsTunics = await prisma.category.findUnique({ where: { slug: 'shirts-tunics' } });
  const linenTops = await prisma.category.findUnique({ where: { slug: 'linen-tops' } });
  const casualPolos = await prisma.category.findUnique({ where: { slug: 'casual-polos' } });
  const oversizedTees = await prisma.category.findUnique({ where: { slug: 'oversized-tees' } });

  if (!shirtsTunics || !linenTops || !casualPolos || !oversizedTees) {
    throw new Error('❌ يرجى التأكد من تشغيل سكريبت الأقسام الجديدة أولاً!');
  }

  // 2. قائمة المنتجات الجديدة بمقاسات (S, M, L, XL, XXL) و 4 صور لكل منتج مع حقل الـ rating
  const products = [
    // --- 1. قسم Shirts & Tunics ---
    {
      categoryId: shirtsTunics.id,
      name: 'Classic Oxford Cotton Button-Up Shirt',
      slug: 'classic-oxford-cotton-shirt',
      description: 'A timeless oxford cotton shirt tailored for a crisp, clean look suitable for both smart-casual and formal wear.',
      basePrice: 45.00,
      rating: 4.80, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:8dbff6f9-87e0-4b1c-b6a8-612cefcbf7b3/as/EID-3e96fe2879706433dfb4fad614056d6a10a96caa.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: true },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:5563548d-7e1a-47da-8bc7-fafc8633f844/as/EID-ede1a1a3eab294905cb755bbb84756d8f3bb11c4.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:db57e862-dd10-433e-82da-40c838f71fac/as/EID-92864701d253dd4a1f73b235937072a582b524df.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:21ca47b2-a824-41ff-85ae-d5c22d0b88ee/as/EID-fe786398a447977b1c7c5e9fc76b714c1683a08b.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
      ],
      variants: [
        { sku: 'OXF-WHT-S', size: 'S', color: 'White', colorHex: '#FFFFFF', stockQuantity: 10 },
        { sku: 'OXF-WHT-M', size: 'M', color: 'White', colorHex: '#FFFFFF', stockQuantity: 15 },
        { sku: 'OXF-WHT-L', size: 'L', color: 'White', colorHex: '#FFFFFF', stockQuantity: 20 },
        { sku: 'OXF-WHT-XL', size: 'XL', color: 'White', colorHex: '#FFFFFF', stockQuantity: 12 },
        { sku: 'OXF-WHT-XXL', size: 'XXL', color: 'White', colorHex: '#FFFFFF', stockQuantity: 5 },
      ],
    },

    // --- 2. قسم Linen Tops ---
    {
      categoryId: linenTops.id,
      name: 'Relaxed Fit Breathable Linen Shirt',
      slug: 'relaxed-fit-linen-shirt',
      description: 'Crafted from pure lightweight linen, designed to keep you cool and effortlessly stylish during warm days.',
      basePrice: 55.00,
      rating: 4.60, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:cc7dca31-e169-4af2-8a6b-37c9b475e4ff/as/EID-871819aa72e73da118a4e72236fa66feee803db4.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: true },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:a66fa02b-497f-45c5-87d5-adc25c7983a6/as/EID-a6c8b5e59304dd44db19f8f088e98d85be8fd95c.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:0cc75020-bf24-44bb-a400-0475bdf9b1ed/as/EID-417dfe129c46e6ab0936a0c1b85a1bac8e42276a.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
        { url: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:ece5c38e-c9e7-408e-8f75-b26d97838887/as/EID-a94b2f451ca3cae737bb85f92017758cfcdfd3b6.jpg?preferwebp=true&width=1920&auto=webp', isPrimary: false },
      ],
      variants: [
        { sku: 'LIN-BEG-S', size: 'S', color: 'Dark brown', colorHex: '#F5F5DC', stockQuantity: 8 },
        { sku: 'LIN-BEG-M', size: 'M', color: 'Dark brown', colorHex: '#F5F5DC', stockQuantity: 14 },
        { sku: 'LIN-BEG-L', size: 'L', color: 'Dark brown', colorHex: '#F5F5DC', stockQuantity: 18 },
        { sku: 'LIN-BEG-XL', size: 'XL', color: 'Dark brown', colorHex: '#F5F5DC', stockQuantity: 10 },
        { sku: 'LIN-BEG-XXL', size: 'XXL', color: 'Dark brown', colorHex: '#F5F5DC', stockQuantity: 4 },
      ],
    },

    // --- 3. قسم Casual Polos ---
    {
      categoryId: casualPolos.id,
      name: 'Pique Cotton Smart-Casual Polo',
      slug: 'pique-cotton-casual-polo',
      description: 'A refined knit polo featuring a soft collar and premium breathable cotton piqué texture for daily elegance.',
      basePrice: 38.00,
      rating: 4.50, // <-- التقييم المضاف
      isFeatured: false,
      images: [
        { url: 'https://media.mango.com/is/image/punto/37081368-56-001?wid=640', isPrimary: true },
        { url: 'https://media.mango.com/is/image/punto/37081368-56-004?wid=640', isPrimary: false },
        { url: 'https://media.mango.com/is/image/punto/37081368-56-900?wid=320', isPrimary: false },
        { url: 'https://media.mango.com/is/image/punto/37081368-56-001?wid=640', isPrimary: false },
      ],
      variants: [
        { sku: 'POL-NVY-S', size: 'S', color: 'Navy', colorHex: '#000080', stockQuantity: 12 },
        { sku: 'POL-NVY-M', size: 'M', color: 'Navy', colorHex: '#000080', stockQuantity: 25 },
        { sku: 'POL-NVY-L', size: 'L', color: 'Navy', colorHex: '#000080', stockQuantity: 22 },
        { sku: 'POL-NVY-XL', size: 'XL', color: 'Navy', colorHex: '#000080', stockQuantity: 15 },
        { sku: 'POL-NVY-XXL', size: 'XXL', color: 'Navy', colorHex: '#000080', stockQuantity: 6 },
      ],
    },

    // --- 4. قسم Oversized Tees ---
    {
      categoryId: oversizedTees.id,
      name: 'Heavyweight Drop-Shoulder Oversized Tee',
      slug: 'heavyweight-oversized-tee',
      description: 'Ultimate comfort heavyweight cotton t-shirt designed with a modern drop-shoulder oversized silhouette.',
      basePrice: 30.00,
      rating: 4.90, // <-- التقييم المضاف
      isFeatured: true,
      images: [
        { url: 'https://www.basiclook.com/cdn/shop/files/Copy_of_IMG_4169.jpg?crop=center&height=1008&v=1773224779&width=720', isPrimary: true },
        { url: 'https://www.basiclook.com/cdn/shop/files/Copy_of_IMG_4174.jpg?v=1773224779', isPrimary: false },
        { url: 'https://www.basiclook.com/cdn/shop/files/Rplace_the_white_tank_top_wiith_black_oversized_to_delpmaspu.jpg?crop=center&height=1008&v=1773224779&width=720', isPrimary: false },
        { url: 'https://www.basiclook.com/cdn/shop/files/oversized_tshirt_both.png?crop=center&height=1008&v=1773224779&width=720', isPrimary: false },
      ],
      variants: [
        { sku: 'TEE-BLK-S', size: 'S', color: 'Black', colorHex: '#000000', stockQuantity: 15 },
        { sku: 'TEE-BLK-M', size: 'M', color: 'Black', colorHex: '#000000', stockQuantity: 30 },
        { sku: 'TEE-BLK-L', size: 'L', color: 'Black', colorHex: '#000000', stockQuantity: 28 },
        { sku: 'TEE-BLK-XL', size: 'XL', color: 'Black', colorHex: '#000000', stockQuantity: 18 },
        { sku: 'TEE-BLK-XXL', size: 'XXL', color: 'Black', colorHex: '#000000', stockQuantity: 10 },
      ],
    },
  ];

  // 3. إدخال المنتجات مع الصور، التنويعات، والتقييمات
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

    // مسح الصور القديمة لهذا المنتج لو وجدت وإضافة الـ 4 صور الجديدة
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

    // إضافة أو تحديث التنويعات (Variants) لكل المقاسات S, M, L, XL, XXL
    for (const v of p.variants) {
      await prisma.productVariant.upsert({
        where: { sku: v.sku },
        update: {
          price: p.basePrice,
          stockQuantity: v.stockQuantity,
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

    console.log(`✅ Successfully seeded product: ${product.name} (Rating: ${p.rating}) with 4 images and 5 sizes (S-XXL).`);
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