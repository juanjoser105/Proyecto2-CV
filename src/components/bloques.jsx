import React from 'react';
import 'styles/globals.css';

const Bloques = ({ title, text }) => (
  <div className='flex flex-col items-center my-5 mx-5 sm:items-start'>
    <span className='block font-medium text-2xl my-3 sm:text-left'>
      {title}
    </span>
    <span className='block text-xl sm:text-left'>{text}</span>
  </div>
);

export default Bloques;
