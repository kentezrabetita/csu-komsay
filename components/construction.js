import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Construction() {
  return (
    <div className='container flex flex-col items-center justify-center text-center'>
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
      <div className='text-2xl'>
        The site is still under construction. Thank you for your patience.
      </div>
    </div>
  );
}
