import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className='container flex flex-row items-center justify-between p-4 mx-auto font-bold md:p-6 xl:px-32 min-w-fit'>
        <div className='flex flex-row items-center space-x-4'>
          <Image src='/csu.png' width={50} height={50} alt='csu icon' />
          <Link href='/'>
            <a className='transition hover:text-green-500'>Computer Science</a>
          </Link>
        </div>
        <div className='flex-row items-center hidden space-x-10 md:flex'>
          <div>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href='/news'>
              <a>News</a>
            </Link>
          </div>
          <div>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </div>
          <div>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className='flex-row items-center hidden space-x-6 md:flex'>
          <div>
            <Link href='/accepted/student'>
              <button className='p-2 px-8 text-white transition-all ease-in-out bg-green-700 rounded-lg hover:scale-105'>
                <a>Accepted Freshmen</a>
              </button>
            </Link>
          </div>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='p-2 px-4 text-white bg-green-700 rounded-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className='fixed top-0 z-50 flex bg-white flex-col items-center self-end justify-center py-8 space-y-2 text-black h-[100vh] left-0 right-0 font-bold'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='absolute p-2 px-4 text-white bg-green-700 rounded-full top-5 right-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <Link href='/about'>
            <a className='p-2 transition-all ease-in-out rounded-lg hover:bg-green-700 hover:text-white'>
              About
            </a>
          </Link>
          <Link href='/news'>
            <a className='p-2 transition-all ease-in-out rounded-lg hover:bg-green-700 hover:text-white'>
              News
            </a>
          </Link>
          <Link href='/services'>
            <a className='p-2 transition-all ease-in-out rounded-lg hover:bg-green-700 hover:text-white'>
              Services
            </a>
          </Link>
          <Link href='/contact'>
            <a className='p-2 transition-all ease-in-out rounded-lg hover:bg-green-700 hover:text-white'>
              Contact
            </a>
          </Link>
          <Link href='/accepted/student'>
            <a className='p-2 transition-all ease-in-out rounded-lg hover:bg-green-700 hover:text-white'>
              Accepted Freshmen
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
