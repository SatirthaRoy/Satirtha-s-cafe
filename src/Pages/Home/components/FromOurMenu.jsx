import React from 'react'
import img5 from '/bistro-boss-restaurant-resources-main/assets/home/featured.jpg'

const FromOurMenu = () => {
  return (
    <div className='bg-fixed bg-[url(/bistro-boss-restaurant-resources-main/assets/home/featured.jpg)] bg-cover bg-no-repeat'>
      <div className='bg-fixed bg-black bg-opacity-35 top-0 w-full h-full py-28'>
        <div className='max-w-96 mx-auto'>
          <p className='text-center text-xl italic text-[#D99904]'>---Check it Out---</p>
          <div className='divider before:bg-white after:bg-white'></div>
          <h1 className='text-center text-4xl uppercase text-white'>FROM OUR MENU</h1>
          <div className='divider before:bg-white after:bg-white'></div>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center gap-9 max-w-[1000px] mx-auto'>
          <img src={img5} alt="" className='w-[648px] h-[400px]'/>
          <div className='text-white'>
            <p className='text-2xl'>March 20, 2023
              <br /> WHERE CAN I GET SOME?</p>
            <p className='text-xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, autem obcaecati. In, voluptates commodi. Labore, vero perferendis dolorem totam repellat unde expedita doloribus quas reprehenderit, harum nulla obcaecati exercitationem numquam.
            </p>
            <button className='text-white border-b-4 border-b-white rounded-3xl p-5'>Read more</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default FromOurMenu