import React from 'react';
import Link from "next/link";
import Div from '../Div';

export default function PageHeading({ title, videoSrc, pageLinkText }) {
  return (
    <Div className="cs-page_heading cs-style1 cs-center text-center cs-bg" style={{ position: 'relative', overflow: '' }}>
      {/* Background Video */}
      <video
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
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
