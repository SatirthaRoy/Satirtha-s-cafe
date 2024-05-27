import React from 'react'
import SectionTitle from '../../Shared components/SectionTitle'
import useMenuFetch from '../../hooks/useMenuFetch'
import ManageTable from './Components/ManageTable';

const ManageItems = () => {
  const [menu, loading] = useMenuFetch();
  return (
    <div className='w-full space-y-4 py-20'>
      <SectionTitle title='MANAGE ALL ITEMS' phrase='Hurry Up'/>
      <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-4 md:p-10 space-y-4'>
        <h1 className='text-3xl cinzel font-bold'>Total items: {menu.length}</h1>
        <ManageTable items={menu}/>
      </div>
    </div>
  )
}

export default ManageItems