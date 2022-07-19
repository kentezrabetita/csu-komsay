import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MainLayout from './layout';

export default function Construction() {
  return (
    <MainLayout>
      <div className='container h-[100vh] flex flex-col p-6 mx-auto text-center'>
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
        <div className='text-lg md:text-2xl'>
          The site is still under construction. Thank you for your patience.
        </div>
      </div>
    </MainLayout>
  );
}
