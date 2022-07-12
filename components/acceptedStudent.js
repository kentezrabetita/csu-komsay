import React, { useState } from 'react';
import StudentData from '../data/students.json';
import StudentCard from './studentCard';
import { motion } from 'framer-motion';

export default function AcceptedStudents() {
  const [searchTerm, setSearchTerm] = useState('');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className='container flex flex-col p-6 mx-auto space-y-5'>
      <div className='text-3xl font-bold text-center lg:text-5xl'>
        <h1>CONGRATULATIONS!</h1>
      </div>
      <div>
        <input
          className='w-full p-2 border rounded-lg'
          type='text'
          name='search'
          placeholder='ENTER NAME...'
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='flex flex-col space-y-4 lg:flex-row md:grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0 md:gap-8'
      >
        {StudentData.filter((student) => {
          if (searchTerm === '') return student;
          else if (
            student.firstname
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            student.surname.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return student;
          }
          return false;
        }).map((student) => {
          return (
            <motion.div key={student.applicationno} variants={item}>
              <StudentCard student={student} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
