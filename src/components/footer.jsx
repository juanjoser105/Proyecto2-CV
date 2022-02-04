import React from 'react';
import github from 'github.png';
import instagram from 'instagram.png';
import linkedin from 'linkedin.png';

function Footer() {
  return (
    <div className='flex flex-col items-center place-content-center sm:w-full md:box-content md:w-full md:p-4'>
      <div className=''>
        <span className='block font-medium text-base lg:text-xl xl:text-xl'>
          © 2022 Juan José Ramírez Acosta
        </span>
      </div>
      <div className='flex flex-row'>
        <a href='https://github.com/juanjoser105'>
          <img className='w-10 mx-2' alt='github' src={github} />
        </a>
        <a href='https://www.linkedin.com/in/juan-jos%C3%A9-ram%C3%ADrez-b45478228/'>
          <img className='w-10 mx-2' alt='linkedin' src={linkedin} />
        </a>
        <a href='https://instagram.com/juanjose.random'>
          <img className='w-10 mx-2' alt='instagram' src={instagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
