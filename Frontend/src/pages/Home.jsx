import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import CuratedCategories from '../Components/Home/CuratedCategories'
import ProductSection from '../Components/Home/ProductSection'
import NewArrivals from '../Components/Home/NewArrivals'
import CompleteTheLook from '../Components/Home/CompleteTheLook'
import ValuePropsBanner from '../Components/Home/ValuePropsBanner'

export default function Home() {
  return (
    <div className='bg-gray-50/80'>
      <HeroSection/>
      <CuratedCategories/>
      <ProductSection/>
      <NewArrivals/>
      <CompleteTheLook/>
      <ValuePropsBanner/>
    </div>
  )
}
