// Header.js
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Div from '../Div';
import Link from 'next/link';
import DropDown from './DropDown';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useSideHeader } from '@/utils/SideHeaderToggle';

export default function Header({ variant }) {
  const { isOpen, closeSideHeader, openSideHeader } = useSideHeader();
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const phoneNumber = "1234567890";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  useEffect(() => {


    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeSideHeaderHandler = () => {

  };

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''} cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left ">
                <Link className="cs-site_branding" href="/">
                  <Image
                    src="/images/finalMainLogo.png"
                    className='w-[200px] h-[300px]'
                    alt="Logo"
                    width={200}
                    height={300}
                  />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul className="cs-nav_list" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                    <li className="menu-item-has-children text-lg font-semibold">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li className='text-lg font-semibold'>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>
                    </li>
                    <li className="menu-item-has-children header-text text-lg font-semibold">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Portfolio
                      </Link>
                    </li>
                    <li className="menu-item-has-children text-lg font-semibold">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        App Development
                      </Link>
                    </li>
                    <li className='text-lg font-semibold'>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs-toggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => openSideHeader()}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
                <Div className="cs-toolbox ml-6">
                  <span
                    className="cs-icon_btn"
                    onClick={handleCallClick}
                  >
                    <Icon icon="mdi:phone" width={24} height={24} color="white" />
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={isOpen ? 'cs-side_header active' : 'cs-side_header'}
        style={{ overflowY: 'hidden' }}
      >
        <button className="cs-close" onClick={closeSideHeader} />
        <Div className="cs-side_header_overlay" onClick={closeSideHeader} />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            {/* <img src="/images/footer_logo.svg" alt="Logo" /> */}
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
