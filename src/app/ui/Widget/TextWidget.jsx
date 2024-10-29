import React from 'react'
import Div from '../Div'
import Image from 'next/image'

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <Image
        src={logoSrc}
        alt="Logo"
        width={224} // Adjusted width
        height={280} // Adjusted height
        style={{
          maxWidth: '80%', // Adjust this value as needed
          height: 'auto', // Maintain aspect ratio
          transform: 'scale(1.0)', // Scale down the logo
          transition: 'transform 0.3s ease' // Optional: smooth scaling on hover
        }}
      />
      <p>{text}</p>
    </Div>
  )
}
