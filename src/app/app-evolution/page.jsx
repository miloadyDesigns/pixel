"use client"
import React, { useEffect } from 'react'
import PageHeading from "@/app/ui/PageHeading";
import Spacing from '../ui/Spacing';
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import aboutImg4 from '../../../public/images/about_img_4.jpeg'
import ProcessSlider from '../ui/ProcessSlider';
import { useSideHeader } from '@/utils/SideHeaderToggle';

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
const page = () => {
    const { addTitle } = useSideHeader()
    useEffect(() => {
        addTitle("App Evolution")
    })
    return (
        <>
            <PageHeading
                title="App Evolution"
                videoSrc="/video/blackWhiteVideo.mp4"
                pageLinkText="APP DEVELOPMENT"
            />
            <Spacing lg="90" md="80" />
            <Div className="container">
                <Div className="col-xl-12 col-lg-12 text-center">
                    <SectionHeading
                        title="Crafting Apps that Make an Impact"
                        subtitle=""
                    >
                        <Spacing lg="30" md="20" />
                        <p className="cs-m0 w-[60%] m-auto">
                            At Pixel Brain Designs, our passion is building apps that do more than function—they inspire.
                            From mobile experiences to robust backend support, our team brings innovation to every pixel.
                        </p>
                        <Spacing lg="30" md="30" />
                        {/* <Div className="cs-separator cs-accent_bg"></Div> */}
                    </SectionHeading>
                </Div>
                <Div className="row mt-16">
                    <div className="col-lg-6  flex flex-col justify-center items-center">
                        <SectionHeading
                            title="Android App Development"
                            subtitle="Expanding Boundaries in the Android Ecosystem"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our Android app solutions are designed to meet the demands of an ever-evolving market. From
                                concept to launch, we deliver apps that captivate with intuitive design and top-notch
                                performance, ensuring a seamless experience across devices.
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
                            title="iOS App Development"
                            subtitle="Elevating Experiences for iOS Users"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                We create iOS applications that are as beautiful as they are functional. Our iOS development
                                team builds apps optimized for the Apple ecosystem, ensuring high performance, security, and a
                                user-friendly interface to engage your audience.
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
                            title="Windows Store App Development"
                            subtitle="Optimized for Windows, Built for Success"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our Windows Store app development delivers streamlined, responsive applications tailored for
                                Windows devices. We ensure your app stands out, offering intuitive design and functionality that
                                maximizes user engagement within the Windows ecosystem.
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
                            title="Web App Development"
                            subtitle="Transforming Ideas into Interactive Web Applications"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Pixel Brain Designs builds powerful web applications designed for impact. Our web apps
                                perform seamlessly across devices, creating a cohesive experience for your audience that drives
                                results, whether it’s on desktop, tablet, or mobile.
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
                            title="Database Development"
                            subtitle="The Backbone of Your App’s Success"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                A reliable database is essential for smooth app performance. We design robust and scalable
                                databases to keep your data secure and accessible, supporting your app’s functionality without
                                compromising on speed or security.
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
                    <Div className="col-lg-6 flex flex-row justify-center items-center">
                        <Image src={"/images/demo/maintenence.svg"} width={400} height={400} />
                        <Spacing lg="25" md="25" />
                    </Div>
                    <div className="col-lg-6  flex flex-col justify-center  items-center">
                        <SectionHeading
                            title="App Maintenance"
                            subtitle="Future-Proofing Your App"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                Our relationship doesn’t end at launch. We offer comprehensive app maintenance services to
                                keep your app up-to-date, secure, and running smoothly, ensuring your app continues to provide
                                value as your business grows.
                            </p>
                            <Spacing lg="30" md="30" />
                            <Div className="cs-separator cs-accent_bg"></Div>
                            <Spacing lg="25" md="40" />
                        </SectionHeading>
                        {/* <Image src={"/images/demo/appdev.svg"} width={400} height={400} /> */}
                        <Spacing lg="25" md="25" />
                    </div>
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


            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Let’s disscuse make <br />something <i>cool</i> together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                    line={false}
                />
            </Div>
            <Spacing lg="150" md="80" />
            {/* End CTA Section */}
        </>
    )
}

export default page
