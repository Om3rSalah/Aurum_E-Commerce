import prisma from '../config/db.js';


export const getAllProducts = async ( req , res ) => {
  const TARGET_CATEGORY_SLUGS = [
    'linen-tops',
    'casual-polos',
    'oversized-tees',
    'shirts-tunics',
  ];
    const products = await prisma.product.findMany({
      where:{
        category:{
          slug:{
            in:TARGET_CATEGORY_SLUGS
          }
        }
      },
    include: {
    variants: true,
    images: true,
    category: true,
  },
    });
    return res.status(200).json(products);
}



export const getAllAccessories = async (req, res) => {
  const TARGET_CATEGORY_SLUGS = [
    'sunglasses-eyewear',
    'bags-backpacks',
    'belts-leather-goods',
    'hats-caps',
  ];
  try {

    const products = await prisma.product.findMany({
      where: {
        category: {
          slug: {
            in: TARGET_CATEGORY_SLUGS,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        category: true,
        images: {
          orderBy: {
            isPrimary: 'desc', // الصورة الرئيسية تظهر أولاً
          },
        },
        variants: true,
      },
    });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('❌ Error fetching products by categories:', error);
    return res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب المنتجات',
    });
  }
};