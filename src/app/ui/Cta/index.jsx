import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import Spacing from '../Spacing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Cta({ title, btnText, btnLink, bgSrc, variant }) {
  const lineRef = useRef()
  useGSAP(() => {
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
        delay: 1,
        scrollTrigger: {
          trigger: ".line2",
          start: "top 60%",
          end: "bottom bottom",
          scrub: 2,
        
        },
      },);
    })

  }, [])
  return (
    <Div
      className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${variant ? variant : ''
        }`}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      {/* className="absolute -top-1 right-[5px]" */}
      <div className='line2 '>
        <svg className="absolute -top-1 right-[5px]" width="1504" height="413" viewBox="0 0 1482 410" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1473.5 0.5C1472.5 42 1456.99 79.7021 1408 112.354C1382.19 129.551 1340.41 142.55 1294.69 141.884C1248.97 141.217 1196.6 112.439 1159.3 92.7194C1122 73 1050.99 40.7806 978.492 61C905.992 81.2194 866.492 131 836.586 177.891C799.5 236.04 785.251 287.321 712.999 303C681.514 309.832 643.06 309.194 611 306C554.472 300.368 517.198 286.442 466 264.5C417 243.5 350.34 221 256 221C147.5 221 84.5 280 58 312.5C31.5 345 9 404 8 408" stroke="url(#paint0_linear_31_30)" stroke-width="16" ref={lineRef} />
          <defs>
            <linearGradient id="paint0_linear_31_30" x1="-13.6217" y1="402.655" x2="1478.48" y2="-74.0543" gradientUnits="userSpaceOnUse">
              <stop stop-color="#090909" />
              <stop offset="0.325" stop-color="#D01010" />
              <stop offset="0.6" stop-color="#FF4A17" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-cta_in">
        <h2 className="cs-cta_title cs-semi_bold cs-m0">{parse(title)}</h2>
        {btnText && (
          <>
            <Spacing lg="70" md="30" />
            <Button btnLink={btnLink} btnText={btnText} />
          </>
        )}
      </Div>
    </Div>
  );
}
