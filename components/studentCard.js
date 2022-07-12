import React from 'react';
import Image from 'next/image';

export default function StudentCard({ student }) {
  return (
    <div className='flex flex-col p-3 space-y-2 border rounded-lg lg:flex-row lg:p-6'>
      <div className='flex justify-center'>
        {student.sex === 'Female' ? (
          <Image src='/female_avatar.svg' width={150} height={150} />
        ) : (
          <Image src='/male_avatar.svg' width={150} height={150} />
        )}
      </div>
      <div className='flex flex-col justify-center pl-2 space-y-2 text-center lg:text-left lg:pl-6'>
        <div>
          <span className='text-gray-400'>SURNAME:</span> {student.surname}
        </div>
        <div>
          <span className='text-gray-400'>FIRST NAME:</span> {student.firstname}
        </div>
        <div>
          <span className='text-gray-400'>MIDDLE NAME:</span>{' '}
          {student.middlename}
        </div>
        <div>
          <span className='text-gray-400'>APP. NUMBER:</span>{' '}
          {student.applicationno}
        </div>
      </div>
    </div>
  );
}
