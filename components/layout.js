import React from 'react';
import Navbar from './navbar';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
