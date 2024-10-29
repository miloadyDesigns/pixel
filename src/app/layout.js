"use client";
import { useState, useEffect } from 'react';
import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer/index';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import Head from 'next/head';
import "./globals.css"
import { SideHeaderProvider, useSideHeader } from '@/utils/SideHeaderToggle';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--primary-font',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--secondary-font',
});
const RootLayout = ({ children }) => {
  return (
    <SideHeaderProvider>
      <InnerLayout>{children}</InnerLayout>
    </SideHeaderProvider>
  );
};
const InnerLayout = ({ children }) => {
  const { title } = useSideHeader();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <html lang="en">
      <Head>
        <title>{title} - PixelBrainDesign</title>
        <meta property="og:title" content={title} key="title" />
        <link rel="icon" href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png" type="image/png" sizes="32x32" />
      </Head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

// const metadata = {
//   title: {
//     template: "%s - PixelBrainDesign",
//     default: "Welcome - PixelBrainDesign"
//   }
// };
