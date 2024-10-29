"use client"
import React, { useEffect } from 'react'
import PageHeading from "@/app/ui/PageHeading";
import Spacing from '../ui/Spacing';
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import ProcessSlider from '../ui/ProcessSlider';
import { useSideHeader } from '@/utils/SideHeaderToggle';
const page = () => {
    const { addTitle } = useSideHeader()
    useEffect(() => {
        addTitle("Beyond Creativity")
    })
    return (
        <>
            <PageHeading
                title="Beyond Apps"
                videoSrc="/video/blackWhiteVideo.mp4"
                pageLinkText="OTHER SERVICES"
            />
            <Spacing lg="90" md="80" />
            <Div className="container">
                <Div className="col-xl-12 m-auto col-lg-12 text-center">
                    <SectionHeading
                        title="Elevate Your Brand with Comprehensive Digital Services"
                        subtitle=""
                    >
                        <Spacing lg="30" md="20" />
                        <p className="cs-m0 w-[70%] m-auto">
                            Pixel Brain Designs is more than an app development partner. We provide a full suite of services
                            to help your business shine, build brand loyalty, and reach new heights. Whatever your digital
                            needs, we have the expertise to bring them to life.
                        </p>
                        <Spacing lg="30" md="30" />
                        {/* <Div className="cs-separator cs-accent_bg"></Div> */}
                    </SectionHeading>
                </Div>
                <Spacing lg="120" md="60" />
                <Div className="row ">
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Creative Branding & Design"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Graphic Design</h1>
                            <p className="cs-m0">
                                Visual identity is at the heart of your brand. From custom logos and business stationery to
                                impactful advertising materials and unique merchandise, we create designs that resonate, engage,
                                and leave a lasting mark.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/appdev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/iosDev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="Content That Connects"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Content Creation</h1>
                            <p className="cs-m0">
                                Crafting stories that captivate—whether through blog articles, social media visuals, or
                                multimedia—is our specialty. Our content team works closely with you to communicate your
                                brand’s story in a way that connects authentically with your audience.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Your Brand’s Digital Home"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Website Development</h1>
                            <p className="cs-m0">
                                A website is more than an online presence; it’s your digital storefront. We build visually
                                engaging, user-friendly, and conversion-focused websites tailored to reflect your brand and
                                deliver a seamless experience across all devices.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/appStore.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/websiteDev.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="Powering Online Growth"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Social Media Marketing</h1>
                            <p className="cs-m0">
                                Your brand’s voice deserves to be heard. We handle end-to-end social media management,
                                building strategies that increase engagement and cultivate meaningful connections with your
                                audience.
                            </p>
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Search Engine Optimization (SEO)</h1>
                            <p className="cs-m0">
                                Our SEO solutions are tailored to amplify your digital presence, improve search rankings, and
                                drive targeted traffic to your website, fostering long-term growth and visibility
                            </p>
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Pay-Per-Click (PPC) Advertising</h1>
                            <p className="cs-m0">
                                For fast, impactful results, our data-driven PPC campaigns are optimized to get your brand
                                noticed, bringing you closer to your goals with strategic, cost-effective ads.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Engaging Visual Storytelling"
                            subtitle=""
                        >
                            <Spacing lg="30" md="20" />
                            <h1 className='text-2xl pb-2 font-semibold'>Video Animations</h1>
                            <p className="cs-m0">
                                Dynamic storytelling through video animation can transform how your audience interacts with
                                your brand. From explainer videos to product demos and social animations, our team crafts
                                compelling visuals that simplify complex messages and engage viewers in a unique way.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        <Spacing lg="25" md="25" />
                    </div>
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/database.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>

                </Div>
            </Div>

            <Spacing lg="75" md="55" />

            {/* Start Fun Fact Section */}
            <Div className="container">
                <SectionHeading
                    title="Our Process"
                    subtitle="Project Lifecycle"
                    variant="cs-style1"
                />
                <ProcessSlider />
            </Div>

            {/* Start CTA Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            <Spacing lg="150" md="80" />
            {/* End CTA Section */}
        </>
    )
}

export default page
