import React from 'react';
import { Icon } from '@iconify/react';
import Link from "next/link";;

export default function Button({ onClick, btnText, variant, icon }) {
  return (
    <a
      href='#'
      className={variant ? `cs-text_btn ${variant}` : 'cs-text_btn'}
      onClick={onClick}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </a>
  );
}
