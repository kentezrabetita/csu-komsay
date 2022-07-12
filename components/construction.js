import React from 'react';
import Image from 'next/image';

export default function Construction() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-3xl font-bold'>Page is still under construction</div>
      <div>
        <Image
          src='/under_construction.svg'
          width={600}
          height={600}
          alt='csu icon'
        />
      </div>
    </div>
  );
}
