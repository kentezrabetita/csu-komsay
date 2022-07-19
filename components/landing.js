import React from 'react';
import MainLayout from './layout';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <MainLayout>
      <section className='h-[80vh]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center h-full bg-center bg-no-repeat bg-cover bg-saiyans'
        >
          <div className='inset-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50'>
            <h1 className='text-2xl font-bold text-center text-white uppercase md:text-5xl'>
              Caraga State University - Computer Science
            </h1>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
