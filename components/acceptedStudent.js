import React, { useState } from 'react';
import StudentData from '../data/students.json';
import StudentCard from './studentCard';

export default function AcceptedStudents() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='container flex flex-col p-6 mx-auto space-y-5'>
      <div className='text-4xl font-bold text-center'>
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
      <div className='flex flex-col space-y-4 lg:flex-row md:grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0 md:gap-8'>
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
          return <StudentCard key={student.applicationno} student={student} />;
        })}
      </div>
    </div>
  );
}
