"use client";
import { useState, useEffect } from 'react';
import Header from '@/app/ui/Header';
import CustomCursor from '@/app/ui/CustomCursor';
import Footer from '@/app/ui/Footer/Footer';
import 'swiper/css';
import 'swiper/css/pagination';
import './scss/index.scss';
import { Poppins, Open_Sans } from 'next/font/google';
import Head from 'next/head';
import "./globals.css"
import { SideHeaderProvider } from '@/utils/SideHeaderToggle';

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

export default function RootLayout({ children }) {
  const [title, setTitle] = useState(metadata.title.default); // Initialize title state


  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <html lang="en">
      <Head>
        <title>{title}</title> {/* Use state for title */}
        <meta property="og:title" content={title} key="title" />
        <link rel="icon" href="/logo.ico" sizes="any" />
      </Head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <SideHeaderProvider>
          <Header />
          <CustomCursor />
          {children}
          <Footer />
        </SideHeaderProvider>
      </body>
    </html>
  );
}

const metadata = {
  title: {
    template: "%s - PixelBrainDesign",
    default: "Welcome - PixelBrainDesign"
  }
};
