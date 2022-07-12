import React from 'react';
import Landing from '../components/landing';
import Head from 'next/head';

export default function News() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Landing />
    </>
  );
}
