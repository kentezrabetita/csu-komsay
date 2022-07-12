import React from 'react';
import Navbar from './navbar';

export default function MainLayout({ children }) {
  return (
    <div className='flex flex-col space-y-6'>
      <Navbar />
      {children}
    </div>
  );
}
