import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Construction() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-3xl font-bold'>Page is still under construction</div>
      <motion.div
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
  );
}
