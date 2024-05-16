import React from 'react'
import SectionTitle from '../../../Shared components/SectionTitle'
import img from '/bistro-boss-restaurant-resources-main/assets/home/slide5.jpg'

const Card = () => {
  return (
    <div className="card rounded-none bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" className='object-cover w-full max-h-[424px]'/></figure>
      <div className="card-body text-center space-y-7">
        <h2 className="text-2xl font-semibold">Chesser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions justify-center">
          <button className="border-[#BB8506] hover:border-0 font-medium px-10 py-6 border-b-4 rounded-3xl bg-white text-[#BB8506] hover:bg-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}



const OurRecomends = () => {
  return (
    <div className='w-11/12 mx-auto space-y-9'>
      <SectionTitle title='CHEF RECOMMENDS' phrase='Should Try'/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default OurRecomends