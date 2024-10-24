import React from 'react';
import Div from '../Div';

export default function MovingText({ text, variant }) {
  return (
    <Div
      className={`cs-moving_text_wrap cs-bold cs-primary_font ${variant ? variant : ''
        }`}
    >
      <Div className="cs-moving_text_in font-semibold">
        <Div className="cs-moving_text font-bold">{text}</Div>
        <Div className="cs-moving_text font-bold">{text}</Div>
      </Div>
    </Div>
  );
}
