import React from 'react'
import PageBanner from '../../Shared components/PageBanner'
import shopBanner from '/bistro-boss-restaurant-resources-main/assets/shop/banner2.jpg'
import ShopItems from './Components/ShopItems'

const Shop = () => {
  return (
    <div>
      <PageBanner img={shopBanner} title='Our Shop' para='Would you like to try a dish?'/>
      <ShopItems/>
    </div>
  )
}

export default Shop