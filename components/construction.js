import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Construction() {
  return (
    <main>
      <div className='container flex flex-col items-center justify-center h-screen p-6 mx-auto text-center'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-5xl font-bold text-orange-500'>COMING SOON</h1>
          <p>The site is still under development. Stay tuned.</p>
        </div>
        <motion.div
          className='p-4'
          animate={{
            y: 10,
          }}
          transition={{ repeatType: 'mirror', repeat: Infinity, duration: 1 }}
        >
          <Image
            src='/under_construction.svg'
            width={600}
            height={600}
            alt='csu icon'
          />
        </motion.div>
      </div>
    </main>
  );
}
