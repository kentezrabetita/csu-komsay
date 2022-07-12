import React from 'react';
import Navbar from './navbar';
import Hero from './hero';

export default function Landing() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <Hero />
    </div>
  );
}
