import React from 'react'
import { Outlet } from 'react-router-dom';
const HomeLayout = () => {
    return  <>
 <nav>
    <span class='text-4xl text-primary underline'>TheStore</span>
 
 </nav>
 

    <Outlet />
    </>
  };
  export default HomeLayout;