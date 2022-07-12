import React from 'react';
import MainLayout from '../../components/layout';
import AcceptedStudents from '../../components/acceptedStudent';
import Head from 'next/head';

export default function Students() {
  return (
    <>
      <Head>
        <title>Accepted Students</title>
      </Head>
      <MainLayout>
        <AcceptedStudents />
      </MainLayout>
    </>
  );
}
