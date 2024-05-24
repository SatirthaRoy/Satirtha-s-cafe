
import { NavLink } from 'react-router-dom'
import { FaBook, FaHome, FaListUl } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import { PiUsersThreeFill } from 'react-icons/pi'

const AdminContent = () => {
  return (
    <>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaHome className='text-2xl'/>Admin Home</NavLink>
      <NavLink to='/dashboard/additem' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><ImSpoonKnife className='text-2xl'/>Add items</NavLink>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaListUl className='text-2xl'/>Manage Items</NavLink>
      <NavLink to='/dashboard/mycart' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaBook className='text-2xl'/>Manage bookings</NavLink>
      <NavLink to='/dashboard/allusers' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><PiUsersThreeFill className='text-2xl' />All users</NavLink>
    </>
  )
}

export default AdminContent