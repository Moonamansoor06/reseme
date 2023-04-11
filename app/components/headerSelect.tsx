"use client"
import { useState, useEffect } from 'react';
import Nav from './nav';
import Header from './header';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';

const HeaderSelect = () => {
  const router = usePathname();
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsContactPage(router === '/contact');
  }, [router]);

  return (
    <div className='h-auto z-20 sticky inset-0 backdrop-blur-md'>
      {isContactPage ? <Nav/> :  <Header/>}
     
    </div>
  );
};

export default HeaderSelect;
