import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Div from '../Div';

const ProcessSlider = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

    const settings = {
        infinite: false, // Set to false to manage manual looping
        centerPadding: '0',
        slidesToShow: 3,
        speed: 800,
        arrows: false,
        afterChange: (index) => setCurrentSlide(index), // Update current slide index
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const totalSlides = 5; // Total number of slides
                if (currentSlide === 2) {
                    // If at last slide, go back to first
                    sliderRef.current.slickGoTo(0);
                    setCurrentSlide(0); // Reset current slide index
                } else {
                    sliderRef.current.slickNext(); // Go to next slide
                }
            }
        }, 4000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentSlide]);

    return (
        <div className="relative">
            {/* <h1 className='text-6xl font-semibold p-2 '>Our Process</h1> */}
            <div className='w-[80px] mb-4 ml-2 mt-2' style={{ border: '1px solid #ff4a17' }}></div>
            <Slider  {...settings} ref={sliderRef} className="cs-gap-24 cs-arrow_style1">
                <div className='shadow-lg h-[50vh]  rounded-md bg-[#000000] flex flex-col justify-center items-center p-6'>
                    <Image className='mb-4' src={"/images/process/process1.png"} width={150} height={150} alt="Process Step 1" style={{ display: 'block', margin: '0 auto' }} />
                    <h1 className='text-gray-400 text-2xl text-center p-2'>Step 01</h1>
                    <h1 className='text-white text-3xl font-semibold text-center p-3'>Ideation & Planning</h1>
                    <p className='text-white text-center p-2'>We start with a deep dive into your vision, mapping out the project’s goals and strategy
                        to create a roadmap for success.</p>
                </div>
                <div className='shadow-lg h-[50vh]  rounded-md bg-[#000000] flex flex-col justify-center items-center p-6'>
                    <Image className='mb-4' src={"/images/process/process2.png"} width={150} height={150} alt="Process Step 1" style={{ display: 'block', margin: '0 auto' }} />
                    <h1 className='text-gray-400 text-2xl text-center p-2'>Step 02</h1>
                    <h1 className='text-white text-3xl font-semibold text-center p-3'>Design & Prototyping</h1>
                    <p className='text-white text-center p-2'>Our design team crafts intuitive wireframes and prototypes, bringing your ideas to life
                        visually and refining the user experience.</p>
                </div>
                <div className='shadow-lg h-[50vh]  rounded-md bg-[#000000] flex flex-col justify-center items-center p-6'>
                    <Image className='mb-4' src={"/images/process/process3.png"} width={150} height={150} alt="Process Step 1" style={{ display: 'block', margin: '0 auto' }} />
                    <h1 className='text-gray-400 text-2xl text-center p-2'>Step 03</h1>
                    <h1 className='text-white text-3xl font-semibold text-center p-3'>Development</h1>
                    <p className='text-white text-center p-2'>From front-end to backend, we build robust applications tailored to your needs, ensuring quality at every step. We insure the process for you.</p>
                </div>
                <div className='shadow-lg h-[50vh] rounded-md bg-[#000000] flex flex-col justify-center items-center p-6'>
                    <Image className='mb-4' src={"/images/process/process4.png"} width={150} height={150} alt="Process Step 1" style={{ display: 'block', margin: '0 auto' }} />
                    <h1 className='text-gray-400 text-2xl text-center p-2'>Step 04</h1>
                    <h1 className='text-white text-3xl font-semibold text-center p-3 -ml-2  whitespace-nowrap'>
                        Testing & Quality Assurance
                    </h1>
                    <p className='text-white text-center p-2'>Rigorous testing is carried out to guarantee your app is seamless, secure, and ready for
                        launch.</p>
                </div>
                <div className='shadow-lg h-[50vh]  rounded-md bg-[#000000] flex flex-col justify-center items-center p-6'>
                    <Image className='mb-4' src={"/images/process/process5.png"} width={150} height={150} alt="Process Step 1" style={{ display: 'block', margin: '0 auto' }} />
                    <h1 className='text-gray-400 text-2xl text-center p-2'>Step 05</h1>
                    <h1 className='text-white text-3xl font-semibold text-center p-3 whitespace-nowrap'>
                        Launch & Ongoing Support
                    </h1>
                    <p className='text-white text-center p-2'>We handle the deployment and provide continuous support to keep your app performing
                        at its best.</p>
                </div>

            </Slider>
            {/* <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-3"
                onClick={() => sliderRef.current.slickPrev()}
            >
                &#10094;
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-3"
                onClick={() => sliderRef.current.slickNext()}
            >
                &#10095;
            </button> */}
        </div>
    );
}

export default ProcessSlider;
