'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <nav className='bg-blue-900 text-right'>
      <div className='flex justify-between md:items-center items:start py-2 px-3'>
        <h1 className='font-bold uppercase text-1xl lg:text-2xl text-primary-100 hover:text-red-600'>
          <Link href='/'>Tail-Food</Link>
        </h1>
        {!show && (
          <div className='px-4 cursor-pointer md:hidden' onClick={() => {
            setShow(show ? false : true);
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        )}
          {show && (
            <ul className='text-primary-200 md:flex duration-200' id='menu'>
              <div className='px-4 cursor-pointer md:hidden flex justify-end' onClick={() => {
                setShow(show ? false : true);
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
              <li className='py-1 border-r-2 border-secondary-200 cursor-pointer md:border-r-0'>
                <Link href='#' className='flex justify-between items-center mx-3'>
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </Link>
              </li>
              <li className='py-1 cursor-pointer'>
                <Link href='#' className='flex justify-between items-center mx-3'>
                  <span>About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </Link>
              </li>
              <li className='py-1 cursor-pointer'>
                <Link href='#' className='flex justify-between items-center mx-3'>
                  <span>Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                </Link>
              </li>
            </ul>
          )}
        <div className='hidden md:block'>
          <h3 className='text-primary-200 text-lg'>Hello Ninja</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
