import React, { useEffect } from 'react'
import HeroSection from '../Components/Home/HeroSection'
import CuratedCategories from '../Components/Home/CuratedCategories'
import ProductSection from '../Components/Home/ProductSection'
import NewArrivals from '../Components/Home/NewArrivals'
import CompleteTheLook from '../Components/Home/CompleteTheLook'
import ValuePropsBanner from '../Components/Home/ValuePropsBanner'
import { useProductStore } from '../../Store/useProductStore'

export default function Home() {
  const { products, getAllProducts } = useProductStore();
  
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='bg-gray-50/80 '>
      <HeroSection />
      <CuratedCategories />
      
      {/* التأكد من وجود منتج واحد على الأقل قبل عرضه */}
      {products && products.length > 0 && (
        <ProductSection product={products[5]} />
      )}
      {products && products.length > 0 && (
          <NewArrivals products={products} />
      )}
      <CompleteTheLook />
      <ValuePropsBanner />
    </div>
  )
}