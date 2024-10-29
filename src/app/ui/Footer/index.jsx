import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms & Conditions',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'Behind Creativity',
    href: '/service/service-details',
  },
  {
    title: 'Creatvity Showcase',
    href: '/service/service-details',
  },
  {
    title: 'App Evalutuion',
    href: '/service/service-details',
  },
  {
    title: 'Connect',
    href: '/service/service-details',
  },
  // {
  //   title: 'Privacy Policy',
  //   href: '/service/service-details',
  // },
  // {
  //   title: 'Terms & Conditions',
  //   href: '/service/service-details',
  // },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/pixelLogo.png"
                  logoAlt="Logo"
                  text="At Pixel Brain Designs, we’re committed to crafting digital experiences that inspire and connect. Let’s bring your ideas to life."
                />
                {/* <SocialWidget /> */}
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Stay Inspired!"
                  subtitle="Join our community and let’s create together."
                  placeholder="Enter email"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} PixelBrainDesign.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
