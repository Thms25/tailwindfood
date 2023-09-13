import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='flex py-2 px-3'>
        <h1 className='font-bold uppercase text-1xl border-b border-gray-100'>
          <Link href='/'>Tail-Food</Link>
        </h1>
        <ul className='flex'>
          <li className='text-gray-700' ><Link href='#'>Home</Link></li>
          <li><Link href='#'>About</Link></li>
          <li><Link href='#'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
