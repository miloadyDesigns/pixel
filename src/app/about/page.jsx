'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'
import { useSideHeader } from "@/utils/SideHeaderToggle";
import { useEffect } from "react";



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

export default function AboutPage() {
  const { addTitle } = useSideHeader()
  useEffect(() => {
    addTitle("Behind Creativity")
  })
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Behind Creativity"
        videoSrc="/video/blackWhiteVideo.mp4"
        pageLinkText="about"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle=" "
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Pixel Brain Designs, we believe that every idea has the potential to become extraordinary. Founded on a passion for innovation and a commitment to excellence, we are more than just a design agency—we are your partners in crafting digital experiences that inspire and engage.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-6">

            <SectionHeading
              title="Our Story"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Born from a collective dream of tech enthusiasts and creative minds, Pixel Brain Designs was established with the goal of merging technology and artistry. Our journey began with a small team fueled by curiosity and ambition, and has since evolved into a vibrant agency that thrives on collaboration and innovation.
                Every project we undertake tells a unique story. From the initial brainstorming session to the final launch, we immerse ourselves in our clients’ visions, ensuring that each solution reflects their brand’s essence. Our diverse team of designers, developers, and strategists brings a wealth of experience and creativity to the table, enabling us to tackle challenges with fresh perspectives and innovative ideas.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">

            <SectionHeading
              title="Our Mission"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                To empower businesses and individuals by transforming visions into reality through innovative design and technology. We strive to create solutions that not only meet our clients' needs but also exceed their expectations, fostering a sense of collaboration and creativity in every project.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            {/* <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            /> */}
            <SectionHeading
              title="Our Vision"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                To be a beacon of creativity in the digital landscape, setting trends and pushing boundaries. We envision a future where our designs help shape a better world—one that is more connected, engaging, and beautiful.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Impressive Milestones"
          subtitle="Did you know? Our journey is marked by impressive achievements that reflect our commitment to innovation and excellence. Here’s what we’ve accomplished so far"
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Join Us on This Journey"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                As we continue to grow and evolve, we invite you to join us on this exciting journey. Let’s create something amazing together and turn your ideas into reality. At Pixel Brain Designs, your vision is our inspiration, and together, we can push the boundaries of what’s possible.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Every project we undertake tells a unique story. From the initial brainstorming session to the final launch, we immerse ourselves in our clients’ visions, ensuring that each solution reflects their brand’s essence. Our diverse team of designers, developers, and strategists brings a wealth of experience and creativity to the table, enabling us to tackle challenges with fresh perspectives and innovative ideas.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
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
  );
}
