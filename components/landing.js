import React from 'react';
import Hero from './hero';
import MainLayout from './layout';

export default function Landing() {
  return (
    <MainLayout>
      <section className='flex flex-col h-screen'>
        <Hero />
      </section>
    </MainLayout>
  );
}
