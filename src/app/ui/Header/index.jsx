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
import Spacing from '../Spacing';

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
              <Div className="cs-main_header_in">
                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" href="/">
                    <Image
                      src="/images/pixelLogo.png"
                      alt="Logo"
                      width={140} // Adjusted width
                      height={300} // Adjusted height
                      style={{
                        maxWidth: '80%', // Adjust this value as needed
                        height: 'auto', // Maintain aspect ratio
                        transform: 'scale(1.4)', // Scale down the logo
                        transition: 'transform 0.3s ease', // Optional: smooth scaling on hover
                        marginLeft: 40
                      }}
                    />
                  </Link>
                </Div>

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
                      <Link href="/about" onClick={() => setMobileToggle(false)}>
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
                      <Link href="/contact" onClick={() => setMobileToggle(false)}>
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
            <Image
              src="/images/pixelLogo.png"
              alt="Logo"
              width={214} // Adjusted width
              height={280} // Adjusted height
              style={{
                maxWidth: '80%', // Adjust this value as needed
                height: 'auto', // Maintain aspect ratio
                transform: 'scale(1.2)', // Scale down the logo
                transition: 'transform 0.3s ease', // Optional: smooth scaling on hover
                marginLeft: 20
              }}
            />
          </Link>
          <Div className="cs-side_header_box pb-3">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading pb-4 font-semibold">
              Send a Message
            </h2>
            <div className=''>
              <div className=''>
                <form action="#" className="row">
                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Full Name*</label>
                    <input type="text" className="cs-form_field" placeholder='John Doe' />
                  </Div>

                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Email*</label>
                    <input type="text" className="cs-form_field" placeholder='john@gmail.com' />

                  </Div>
                  <Div className="col-sm-12 pb-2">
                    <label className="cs-primary_color">Project Type*</label>
                    <input type="text" className="cs-form_field" placeholder='Development' />

                  </Div>
                  <Div className="col-sm-12">
                    <label className="cs-primary_color">Message*</label>
                    <textarea
                      cols="20"
                      rows="5"
                      className="cs-form_field"
                      placeholder='Start a conversation'
                    ></textarea>
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-sm-12">
                    <button className="cs-btn cs-style1">
                      <span>Send Message</span>
                      <Icon icon="bi:arrow-right" />
                    </button>
                  </Div>
                </form>
              </div>
            </div>
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
