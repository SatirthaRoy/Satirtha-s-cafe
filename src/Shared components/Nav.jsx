import React, { useState } from 'react'

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
  


const Nav = () => {

  const [openNav, setOpenNav] = useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="*:font-bold *:uppercase *:text-white *:text-xl mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <NavLink to='/' className={({isActive}) => isActive ? `flex items-center text-[#EEFF25]` : `flex items-center`}>
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <NavLink className={({isActive}) => isActive ? `flex items-center text-[#EEFF25]` : `flex items-center`}>
          Contact Us
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <NavLink className={({isActive}) => isActive ? `flex items-center text-[#EEFF25]` : `flex items-center`}>
          Dashboard
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <NavLink to='/menu' className={({isActive}) => isActive ? `flex items-center text-[#EEFF25]` : `flex items-center`}>
          our menu
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1"
      >
        <NavLink to='/shop/salad' className={({isActive}) => isActive ? `flex items-center text-[#EEFF25]` : `flex items-center`}>
          our shop
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%)] mt-0 mx-0">
      <Navbar className=" bg-black bg-opacity-45 border-0 fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
          
            className="mr-4 cursor-pointer py-1.5 cinzel text-3xl font-black text-white"
          >
            BISTRO BOSS <br />
            <span className='text-2xl font-bold cinzel'>Restaurant</span>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block bg-yellow-800 text-white px-5 py-3"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block bg-orange-900 text-white px-5 py-3"
              >
                <span>Sign Up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="bg-yellow-800 text-white px-5 py-3">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="text" size="sm" className="bg-orange-900 text-white px-5 py-3">
              <span>Sign Up</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      
    </div>
  )
}

export default Nav