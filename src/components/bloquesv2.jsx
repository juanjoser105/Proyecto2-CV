import React from 'react';
import 'styles/globals.css';

const Bloquesv2 = ({ title, subtitle, date, text, items }) => (
  <div className='flex flex-col items-center text-center sm:items-start my-5 mx-5'>
    <span className='block font-medium text-2xl my-3 sm:text-left'>
      {title}
    </span>
    <span className='block font-medium text-2xl sm:text-left'>{subtitle}</span>
    <span className='block font-medium text-xl sm:text-left'>{date}</span>
    <span className='block text-xl sm:text-left'>{text}</span>
    <span className='block text-xl sm:text-left'>{items}</span>
  </div>
);

export default Bloquesv2;
