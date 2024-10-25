'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/utils/useIsMobile';
gsap.registerPlugin(useGSAP, ScrollTrigger);
// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
// FunFact Data
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40',
  },
  {
    title: 'Project Completed',
    factNumber: '50',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
];

export default function Home() {
  const isMobile = useIsMobile();

  // const lineRef = useRef()
  // useEffect(() => {
  //   const line = lineRef.current;
  //   if (line) {
  //     const length = line.getTotalLength();
  //     // Set up the dash properties
  //     gsap.set(line, {
  //       strokeDasharray: length,
  //       strokeDashoffset: length,
  //     });

  //     gsap.to(line, {
  //       strokeDashoffset: 0,
  //       duration: 2, // Adjust the duration as needed
  //       scrollTrigger: {
  //         trigger: ".line",
  //         start: "top 40%", // Adjust as needed
  //         end: "bottom 50%", // Adjust as needed
  //         scrub: 1,
  //       },
  //     });
  //   }
  // }, []);


  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-section-1',
          start: isMobile ? 'top 60%' : 'top 100%',
          end: isMobile ? 'bottom 30%' : 'bottom 90%',
          scrub: 4
        },
      });

      tl.from('.services-heading', { x: isMobile ? -30 : -800, opacity: 0, duration: 0.5 });
      tl.from('.card-1', { x: isMobile ? -30 : -400, opacity: 0, duration: 0.5 });
      tl.from('.card-2', { x: isMobile ? -30 : -400, opacity: 0, duration: 0.5 });
      tl.from('.card-3', { x: isMobile ? 30 : 400, opacity: 0, duration: 0.5 });
      tl.from('.card-4', { x: isMobile ? 30 : 400, opacity: 0, duration: 0.5 });

      gsap.from('.marquee', {
        y: isMobile ? 50 : 160,
        opacity: 0.1,
        duration: 1.7,
        scrollTrigger: {
          trigger: '.marquee',
          start: isMobile ? 'top 60%' : 'top 80%',
          end: isMobile ? 'top 50%' : 'top 50%',
          scrub: 1,
        },
      });

      gsap.from('.portfolio', {
        y: isMobile ? 50 : 260,
        opacity: 0.1,
        duration: 1.7,
        delay: 4,
        scrollTrigger: {
          trigger: '.portfolio',
          start: isMobile ? 'top 70%' : 'top 80%',
          end: 'bottom bottom',
          scrub: 4,
        },
      });

      gsap.from('.testimonialSlider', {
        y: isMobile ? 50 : 200,
        opacity: 0,
        duration: 1.6,
        delay: 1,
        scrollTrigger: {
          trigger: '.testimonialSlider',
          start: isMobile ? 'top 90%' : 'top 90%',
          end: isMobile ? 'top 60%' : 'top 40%',
          scrub: 4,
          onEnter: () => gsap.to('.testimonialSlider', { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to('.testimonialSlider', { autoAlpha: 0 }),
        },
      });

      gsap.from('.blog', {
        y: isMobile ? 50 : 200,
        opacity: 0,
        duration: 1.6,
        delay: 1,
        scrollTrigger: {
          trigger: '.blog',
          start: isMobile ? 'top 90%' : 'top 90%',
          end: isMobile ? 'top 60%' : 'top 40%',
          scrub: 2,
          onEnter: () => gsap.to('.blog', { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to('.blog', { autoAlpha: 0 }),
        },
      });

      gsap.from('.cta', {
        y: isMobile ? 50 : 200,
        opacity: 0,
        duration: 1.6,
        delay: 1,
        scrollTrigger: {
          trigger: '.cta',
          start: isMobile ? 'top 90%' : 'top 90%',
          end: isMobile ? 'top 60%' : 'top 40%',
          scrub: 2,
          onEnter: () => gsap.to('.cta', { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to('.cta', { autoAlpha: 0 }),
        },
      });
    });
  });


  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
        videoUrl={"/video/redVideoBack.mp4"}
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container" >
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
      {/* <div className='absolute line border'>
        <svg width="1670" height="802" viewBox="0 0 1670 802" fill="none" xmlns="http://www.w3.org/2000/svg" re>
          <path d="M2.5 233.5C8.1 233.5 410 85 608 211.5C806 338 907.703 399.394 873 570C835.168 755.991 637.5 808.5 430.5 771C223.5 733.5 155 642.5 180 495.5C205 348.5 257.372 265.271 366.5 165C605.611 -54.703 936.076 -26.9357 1198 165C1273.3 220.178 1355.5 270 1364 337C1372.5 404 1407.5 674.5 1182 771C956.5 867.5 877 603.5 887.5 488.5C896.857 386.016 1049.17 313.313 1082.21 298.702C1086.41 296.846 1090.12 294.254 1093.85 291.571C1104.76 283.709 1134.16 267.314 1198 258.5C1284 246.627 1348 221.5 1313 363C1278 504.5 1528 415.5 1618.5 481C1709 546.5 1621.5 495.5 1621.5 495.5" stroke="#FF0000" stroke-opacity="0.97" stroke-width="19" />
        </svg>

      </div> */}
      {/* Start Service Section */}
      <Spacing lg="120" md="80" />
      <div id="service" className="services-section-1" >
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4 services-heading">
              <SectionHeading
                title="App Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-1">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-2">
                  <Card
                    title="App Maintenance"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 card-3">
                  <Card
                    title="Hybird App Development (IOS/ANDROID)"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-4">
                  <Card
                    title="Backend Development"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>

                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </div>
      {/* End Service Section */}
      <Spacing lg="150" md="50" />
      <MovingText text="WE BUILD DYNAMIC, SECURE, AND EFFICIENT SOFTWARE APPLICATIONS SEAMLESSLY." />
      <Spacing lg="150" md="50" />
      <div className='marquee xs:flex-col lg:flex-row h-[250px] rounded-xl relative overflow-y-hidden'>
        <div className='absolute inset-0' style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(170,170,170,0.5) 50%, rgba(255,255,255,1) 100%)',
          opacity: 0.6
        }}></div>
        <div className='first xs:w-[100%] lg:w-[50%] p-4 relative z-10'>
          <h3 className="xs:text-[24px] lg:text-4xl text-white">Partners we are working with currently</h3>
        </div>
        <div className='second xs:w-[100%] relative overflow-hidden'>
          <Marquee className='overflow-hidden'>
            <Image src="/images/client-logos/PNG-1.png" width={140} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/PNG-2.png" width={140} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/PNG-3.png" width={140} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/PNG-4.png" width={140} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/PNG-5.png" width={140} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
          </Marquee>
        </div>
      </div>


      {/* <Spacing lg="150" md="50" /> */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div className="portfolio overflow-hidden">
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      <Spacing lg="150" md="50" />
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <div className='testimonialSlider'>
        <TestimonialSlider />
      </div>
      {/* End Testimonial Section */}
      <Spacing lg="150" md="80" />
      <MovingText text="WE DESIGN ROBUST, INTUITIVE, AND SCALABLE MOBILE APPS WITH EASE" />
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4 blog">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* End Blog Section */}

      <Spacing lg="125" md="70" />
      <Spacing lg="125" md="70" />
      {/* Start MovingText Section */}
      {/* 
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div> */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container cta">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="125" md="70" />
      {/* End CTA Section */}
    </>
  );
}
