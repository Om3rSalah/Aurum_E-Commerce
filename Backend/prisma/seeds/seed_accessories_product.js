import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedAccessoryProducts() {
  console.log('🌱 Seeding accessory products with variants and images...');

  // 1. جلب أقسام الإكسسوارات للحصول على الـ IDs الخاصة بها
  const sunglassesEyewear = await prisma.category.findUnique({ where: { slug: 'sunglasses-eyewear' } });
  const bagsBackpacks = await prisma.category.findUnique({ where: { slug: 'bags-backpacks' } });
  const beltsLeatherGoods = await prisma.category.findUnique({ where: { slug: 'belts-leather-goods' } });
  const hatsCaps = await prisma.category.findUnique({ where: { slug: 'hats-caps' } });

  if (!sunglassesEyewear || !bagsBackpacks || !beltsLeatherGoods || !hatsCaps) {
    throw new Error('❌ يرجى التأكد من تشغيل سكريبت أقسام الإكسسوارات أولاً!');
  }

  // 2. قائمة الـ 4 منتجات للإكسسوارات بنفس هيكل البيانات المطلوب
  const products = [
    // --- 1. Sunglasses & Eyewear ---
    {
      categoryId: sunglassesEyewear.id,
      name: 'Classic Polarized Acetate Sunglasses',
      slug: 'classic-polarized-acetate-sunglasses',
      description: 'Timeless square-frame sunglasses crafted from lightweight acetate with UV400 polarized lenses for clear daily vision.',
      basePrice: 39.00,
      isFeatured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'SUN-BLK-OS', size: 'One Size', color: 'Black', colorHex: '#111111', stockQuantity: 25 },
        { sku: 'SUN-TRT-OS', size: 'One Size', color: 'Tortoise', colorHex: '#6E4726', stockQuantity: 18 },
      ],
    },

    // --- 2. Bags & Backpacks ---
    {
      categoryId: bagsBackpacks.id,
      name: 'Everyday Utility Crossbody Bag',
      slug: 'everyday-utility-crossbody-bag',
      description: 'Compact and durable crossbody bag with adjustable strap and zippered compartments for essentials on the move.',
      basePrice: 54.00,
      isFeatured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'BAG-BLK-OS', size: 'One Size', color: 'Black', colorHex: '#18181B', stockQuantity: 20 },
        { sku: 'BAG-BRN-OS', size: 'One Size', color: 'Tan Brown', colorHex: '#A0522D', stockQuantity: 15 },
      ],
    },

    // --- 3. Belts & Leather Goods ---
    {
      categoryId: beltsLeatherGoods.id,
      name: 'Full-Grain Leather Pin Buckle Belt',
      slug: 'full-grain-leather-pin-buckle-belt',
      description: 'Supple leather belt finished with a brushed metal buckle, versatile enough for chinos, denim, or tailored trousers.',
      basePrice: 36.00,
      isFeatured: false,
      images: [
        { url: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1553704520-0f18b279d0d6?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'BLT-BRN-85', size: '85cm', color: 'Dark Brown', colorHex: '#4A2C18', stockQuantity: 10 },
        { sku: 'BLT-BRN-95', size: '95cm', color: 'Dark Brown', colorHex: '#4A2C18', stockQuantity: 16 },
        { sku: 'BLT-BRN-105', size: '105cm', color: 'Dark Brown', colorHex: '#4A2C18', stockQuantity: 12 },
        { sku: 'BLT-BLK-85', size: '85cm', color: 'Black', colorHex: '#111111', stockQuantity: 9 },
        { sku: 'BLT-BLK-95', size: '95cm', color: 'Black', colorHex: '#111111', stockQuantity: 15 },
        { sku: 'BLT-BLK-105', size: '105cm', color: 'Black', colorHex: '#111111', stockQuantity: 11 },
      ],
    },

    // --- 4. Hats & Caps ---
    {
      categoryId: hatsCaps.id,
      name: 'Washed Cotton 6-Panel Baseball Cap',
      slug: 'washed-cotton-6-panel-baseball-cap',
      description: 'Relaxed unstructured cotton cap with an adjustable back strap for comfortable everyday wear.',
      basePrice: 24.00,
      isFeatured: true,
      images: [
        { url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop', isPrimary: true },
        { url: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
        { url: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1000&auto=format&fit=crop', isPrimary: false },
      ],
      variants: [
        { sku: 'CAP-NVY-OS', size: 'One Size', color: 'Navy', colorHex: '#1E293B', stockQuantity: 22 },
        { sku: 'CAP-BGE-OS', size: 'One Size', color: 'Beige', colorHex: '#D6C7B2', stockQuantity: 19 },
        { sku: 'CAP-BLK-OS', size: 'One Size', color: 'Black', colorHex: '#111111', stockQuantity: 24 },
      ],
    },
  ];

  // 3. إدخال المنتجات مع الصور والتنويعات الخاصة بها
  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        description: p.description,
        basePrice: p.basePrice,
        categoryId: p.categoryId,
        isFeatured: p.isFeatured,
      },
      create: {
        categoryId: p.categoryId,
        name: p.name,
        slug: p.slug,
        description: p.description,
        basePrice: p.basePrice,
        isFeatured: p.isFeatured,
      },
    });

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

    for (const v of p.variants) {
      await prisma.productVariant.upsert({
        where: { sku: v.sku },
        update: {
          price: p.basePrice,
          stockQuantity: v.stockQuantity,
          size: v.size,
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

    console.log(`✅ Successfully seeded accessory: ${product.name}`);
  }

  console.log('🎉 All accessory products seeded successfully!');
}

seedAccessoryProducts()
  .catch((e) => {
    console.error('❌ Error seeding accessory products:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });