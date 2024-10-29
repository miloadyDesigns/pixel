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
import { useSideHeader } from '@/utils/SideHeaderToggle';
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
    title: 'Solutions Delivered',
    factNumber: '40',
  },
  {
    title: 'Clients Served',
    factNumber: '50',
  },
  {
    title: 'Cooperative Work',
    factNumber: '245',
  },
  {
    title: 'Code Crafted',
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
  const lineRef = useRef()
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Home")
    let md = gsap.matchMedia();
    const line = lineRef.current;

    const length = line.getTotalLength();
    md.add("(min-width:800px)", () => {
      gsap.set(line, {
        strokeDasharray: length
      });

      gsap.fromTo(line,
        {
          strokeDashoffset: length
        }, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".line",
          start: "top 60%",
          end: "bottom bottom",
          scrub: 1,
        },
      },);
    })


  }, []);


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

      // gsap.from('.cta', {
      //   y: isMobile ? 50 : 200,
      //   opacity: 0.8,
      //   duration: 1.6,
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: '.cta',
      //     start: isMobile ? 'top 90%' : 'top 90%',
      //     end: isMobile ? 'top 60%' : 'top 40%',
      //     scrub: 2,
      //     onEnter: () => gsap.to('.cta', { autoAlpha: 1 }),
      //     onLeaveBack: () => gsap.to('.cta', { autoAlpha: 0 }),
      //   },
      // });
    });
  });


  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We craft solutions that solve today’s challenges and set you up for tomorrow’s success, delivering results that look as sharp as they perform."
        btnText="Request Estimate"
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
          title="Impressive Milestones"
          subtitle="Did you know? Our journey is marked by impressive achievements that reflect our commitment to innovation and excellence. Here’s what we’ve accomplished so far"
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
      <svg className='absolute line -mt-56 -ml-12' width="2183" height="4021" viewBox="0 0 2183 4021" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 3.73413C132.97 103.122 442.808 305.467 636.406 319.744C878.404 337.591 1123.61 132.267 1281.64 218.767C1439.67 305.268 1408.53 440.11 1197.56 711.442C986.599 982.773 948.957 1129.09 999.107 1246.98C1049.26 1364.86 1268.66 1360.91 1627.76 1056.95C1986.86 752.995 2165.75 1166.04 2178.61 1478.27C2191.46 1790.5 1863.04 1934.32 1515.9 2070.72C1168.75 2207.13 494.585 2164.02 351.464 2474.93C208.344 2785.84 412.714 2979.44 630.109 3064.88C847.505 3150.31 1134.51 2970.19 1381 3036.5C1627.49 3102.81 1631.39 3520.84 1544.91 3680.54C1448 3859.5 1739 3864 1739 4020.5" stroke="url(#paint0_linear_29_11)" stroke-width="15" ref={lineRef} />
        <defs>
          <linearGradient id="paint0_linear_29_11" x1="127.654" y1="199.797" x2="1928.96" y2="4053.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#090909" />
            <stop offset="0.115" stop-color="#D01010" />
            <stop offset="0.22" stop-color="#670000" />
            <stop offset="0.325" stop-color="#FF4A17" />
            <stop offset="0.445" stop-color="#A90E0A" />
            <stop offset="0.57" stop-color="white" />
            <stop offset="0.7" stop-color="#E95334" />
            <stop offset="0.82" stop-color="#910000" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>
      {/* <svg className='absolute line -mt-52 -ml-12' width="2224" height="4404" viewBox="0 0 2224 4404" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.2501 3.5875C173.97 102.975 483.808 305.321 677.406 319.598C919.404 337.444 1164.61 132.12 1322.64 218.62C1480.67 305.121 1449.53 439.963 1238.56 711.295C1027.6 982.626 989.957 1128.95 1040.11 1246.83C1090.26 1364.72 1309.66 1360.76 1668.76 1056.8C2027.86 752.848 2206.75 1165.9 2219.61 1478.13C2232.46 1790.36 1904.04 1934.17 1556.9 2070.58C1209.75 2206.98 535.585 2163.87 392.464 2474.78C249.344 2785.69 453.714 2979.3 671.109 3064.73C888.505 3150.16 1265.99 2834.51 1512.47 2900.82C1758.96 2967.14 1850 3262.46 1585.91 3680.4C1321.81 4098.33 776.965 3780.71 487.183 4005.43C255.357 4185.21 67.9426 4344.04 3.21375 4400.98" stroke="url(#paint0_linear_24_592)" stroke-width="16" ref={lineRef} />
        <defs>
          <linearGradient id="paint0_linear_24_592" x1="168.654" y1="199.65" x2="1969.96" y2="4053.43" gradientUnits="userSpaceOnUse">
            <stop stop-color="#090909" />
            <stop offset="0.115" stop-color="#D01010" />
            <stop offset="0.22" stop-color="#670000" />
            <stop offset="0.325" stop-color="#FF4A17" />
            <stop offset="0.43" stop-color="#A90E0A" />
            <stop offset="0.53" stop-color="white" />
            <stop offset="0.65" stop-color="#E95334" />
            <stop offset="0.775" stop-color="#910000" />
            <stop offset="0.87" stop-color="white" />
            <stop offset="1" stop-color="#260708" />
          </linearGradient>
        </defs>
      </svg> */}
      {/* Start Service Section */}
      <Spacing lg="120" md="80" />
      <div id="service" className="services-section-1" >
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4 services-heading">
              <SectionHeading
                title="Our Capabilities"
                subtitle="Empowering Your Vision Through Technology."
                subtitle2="We blend innovation with technology to bring your ideas to life. Our expert team specializes in crafting mobile apps and robust backend solutions, ensuring your vision is realized seamlessly."
                btnText="Explore Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-1">
                  <Card
                    title="Mobile App Mastery"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-2">
                  <Card
                    title="Backend Brilliance"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 card-3">
                  <Card
                    title="App Care"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 card-4">
                  <Card
                    title="Beyond Apps"
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
      {/* <Spacing lg="150" md="50" />
      <MovingText text="WE BUILD DYNAMIC, SECURE, AND EFFICIENT SOFTWARE APPLICATIONS SEAMLESSLY." />
      <Spacing lg="150" md="50" /> */}
      <Spacing lg="150" md="50" />
      <div className='marquee xs:flex-col lg:flex-row h-[250px] rounded-xl z-50 relative overflow-hidden'>
        <div className='absolute inset-0' style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.5) 100%)',
          opacity: 1
        }}></div>
        <div className='first xs:w-[100%] lg:w-[50%] p-4 relative z-10'>
          <h3 className="xs:text-[24px] lg:text-4xl text-white ">Our Trusted Allies in Technology</h3>
        </div>
        <div className='second xs:w-[100%] relative overflow-hidden'>
          <Marquee className='overflow-hidden'>
            <Image src="/images/client-logos/icone-1.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-2.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-3.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-4.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-5.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-6.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-7.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
            <Image src="/images/client-logos/icone-8.png" width={100} height={100} alt="Partner Logo" style={{ marginLeft: "50px" }} />
          </Marquee>
        </div>
      </div>


      {/* <Spacing lg="150" md="50" /> */}

      {/* Start Portfolio Section */}
      <Spacing lg="70" md="50" />
      <Div className="portfolio overflow-hidden">
        <Div className="container">
          <SectionHeading
            title="What We’ve Achieved: Get Inspired!"
            subtitle="Recent Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="70" md="45" />
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
      <Spacing lg="120" md="60" />
      <MovingText text="EMPOWERING VISIONS, BUILDING SUCCESS" />
      {/* Start Blog Section */}
      <Spacing lg="120" md="60" />
      <Div className="cs-shape_wrap_4 blog">
        {/* <Div className="cs-shape_4" style={{ border: '1px solid radial-gradient(circle, rgba(255, 74, 23, 0.8), rgba(153, 44, 14, 0.8))' }}></Div> */}
        <Div className="cs-shape_4" style={{ border: '3px solid #ff4a17', borderRadius: '80px' }}></Div>
        <Div className="cs-shape_4" style={{ border: '3px solid #ff4a17', borderRadius: '810px' }}></Div>

        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore Our recent publication"
                subtitle=""
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
          title="Eager to start your next project? <br />Let’s <i>Collaborate!</i> "
          btnText="Book Your Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      <Spacing lg="125" md="70" />
      {/* End CTA Section */}
    </>
  );
}
