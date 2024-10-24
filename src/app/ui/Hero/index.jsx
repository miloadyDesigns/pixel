import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSideHeader } from '@/utils/SideHeaderToggle';


gsap.registerPlugin(useGSAP);

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  bgImageUrl,
  videoUrl
}) {

  const { openSideHeader } = useSideHeader()
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".cs-hero_title", {
      scale: 0,
      duration: 2.4,
      ease: "expo.inOut",
      opacity: 0,
    });
    gsap.from(".cs-hero_subtitle", {
      x: 300,
      delay: 1.5,
      duration: 0.5,
      ease: "expo.inOut",
      opacity: 0,
    });
    gsap.from(".btnQuote", {
      scale: 0,
      delay: 1.5,
      duration: 0.5,
      ease: "power1.in",
      opacity: 0,
    });
  });

  const handleClick = () => {
    openSideHeader()
  };

  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className='absolute bg-black w-full h-full top-0 opacity-20'></div> */}
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />

      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className='cs-hero_title'>{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div className="btnQuote">
              <Button onClick={handleClick} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
