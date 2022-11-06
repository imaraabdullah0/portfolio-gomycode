import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import {AiFillCode ,AiOutlineMore,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav]=useState(false);
    const handleClick =() => setNav(!nav);

  return (
    <div className='navbar h-12 w-full  navbar flex justify-between  bg-slate-400 items-center opacity-80 fixed  z-10'>
        <div className='logo px-5 flex text-2xl font-bold m-1 justify-center text-gray-200 hover:text-green-300 cursor-pointer'>
           <p>A.IMARA</p>  <AiFillCode className='pt-1 hover:translate-x-2 text-3xl'/>
           <p>CODE</p>
        </div>
        <div className='links'>
            <ul className='hidden md:flex m-1 pr-2 items-center'>
                <li href='/' className='pr-9 text-gray-200 hover:text-green-300 cursor-pointer '>home</li>
                <li href='/name' className='pr-9 text-gray-200 hover:text-green-300 cursor-pointer'>my projets</li>
                <li href='/my-project' className='pr-9 text-gray-200 hover:text-green-300 cursor-pointer'>contacts</li>
            </ul>
        </div>

        <div className='md:hidden text-2xl  pr-3 text-gray-200 hover:text-green-300 cursor-pointer z-10 ' onClick={handleClick}>
        {!nav ? <AiOutlineMore  /> : <AiOutlineClose />}
        </div>

     <ul className=  {!nav ? 'hidden  ease-in-out': 'ease-in-out  absolute  bg-violet-200 w-full  px-12 h-[300px] top-[50px]  text-center font-bold text-3xl'}>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white  mt-8 cursor-pointer'>Home</li>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white  mt-8 cursor-pointer'>My Works</li>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white  mt-8 cursor-pointer'>Contacts</li>
       <button className='hover:-translate-y-1 hover:scale-110 hover:text-gray-400  text-sm bg-transparent ml-12 text-blue-400 mt-8'>Sing in</button>
       <button className='  mb-[2px]  hover:-translate-y-1  hover:text-gray-400 px-8 py-3 text-sm text-gray-500 mt-8'>Sing up</button>
     </ul>
    </div>
  )
}

export default Navbar