import React from 'react'
import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
    return  <>
 <nav>
    <span className='text-4xl text-blue-600'>TheStore</span>
 </nav>
    <Outlet />
    </>
  };
  export default HomeLayout;