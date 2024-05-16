import React from 'react'

const SectionTitle = ({title, phrase}) => {
  return (
    <div className='max-w-96 mx-auto'>
      <p className='text-center text-xl italic text-[#D99904]'>---{phrase}---</p>
      <div className='divider'></div>
      <h1 className='text-center text-4xl uppercase'>{title}</h1>
      <div className='divider'></div>
    </div>
  )
}

export default SectionTitle