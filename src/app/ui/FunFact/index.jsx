import React, { useEffect } from 'react';
import Div from '../Div';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FunFact({ variant, title, subtitle, data }) {
  const { ref, inView } = useInView({ threshold: 0.25 });

  useGSAP(() => {
    gsap.from('.funfact_1', {
      y: 120,
      opacity: 0.1,
      duration: 1.7,
      scrollTrigger: {
        trigger: '.cs-funfact_wrap',
        start: 'top 80%', // Adjust as needed
        end: 'top 50%',   // Adjust as needed
        scrub: 1,
      },
    });
  });
  // useEffect(() => {
  //   if (inView) {
  //     gsap.from('.funfact_1', { y: 120, opacity: 0.1, duration: 0.7 });
  //   }
  // }, [inView]);

  return (
    <div
      ref={ref}
      className={variant ? `cs-funfact_wrap ${variant} funfact_1` : 'cs-funfact_wrap'}

    >


      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div
        className="cs-funfact_shape ml-[-14px]"
        style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
      />
      <Div className="cs-funfact_left ">
        <Div className="cs-funfact_heading">
          <h2 style={{ fontSize: '28px' }}>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>

      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <div>
              <Div className="cs-funfact cs-style1" key={index}>
                <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">

                  {inView && (
                    <CountUp
                      start={0}
                      end={item.factNumber}
                      duration={3}
                      suffix="K"
                    />
                  )}
                </Div>
                <br />
                <Div className="cs-funfact_text">
                  <span className="cs-accent_color">+</span>
                </Div>
              </Div>
              <h1 className='text-xl'>{item.title}</h1>
            </div>

          ))}
        </Div>

      </Div>
    </div>
  );
}
