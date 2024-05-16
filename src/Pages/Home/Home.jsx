import React from 'react'
import Banner from './components/Banner'
import Category from './components/Category'
import OurMenu from './components/OurMenu'
import OurRecomends from './components/OurRecomends'
import FromOurMenu from './components/FromOurMenu'

const Home = () => {
  return (
    <div className='space-y-20'>
      <Banner/>
      <Category/>
      {/* bistro boss */}
      <div className='my-12 w-11/12 mx-auto bg-[url(/bistro-boss-restaurant-resources-main/assets/home/chef-service.jpg)] bg-cover bg-no-repeat flex justify-center items-center p-10 lg:p-20'>
        <div className='bg-white py-10 md:py-24 px-6 flex flex-col justify-center items-center gap-5'>
          <h1 className='text-4xl cinzel'>
          Bistro Boss
          </h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident veniam adipisci perferendis explicabo vitae molestias quo consequatur quasi ratione consequuntur ea deleniti laudantium voluptatum natus incidunt rerum omnis, quod beatae. Id rerum quaerat impedit sit. Libero, quas optio. Cupiditate.</p>
        </div>
      </div>
      <OurMenu/>
      {/* call us now */}
      <div className='w-11/12 bg-black text-white py-24 mx-auto'>
        <h1 className='text-center text-5xl font-semibold'>Call Us: +88 0192345678910</h1>
      </div>
      <OurRecomends/>
      <FromOurMenu/>
    </div>
  )
}

export default Home