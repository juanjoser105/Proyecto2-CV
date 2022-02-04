import React from 'react';
import 'styles/globals.css';
import foto from 'photo.jpg';

function Profile() {
  return (
    <div className='flex flex-col items-center text-center sm:place-content-center sm:flex sm:flex-row sm:box-content sm:w-full sm:p-4 xl:place-content-center xl:box-content xl:p-4'>
      <img
        className='w-44 mx-10 rounded-full ring-2 ring-black avatar'
        alt='me'
        src={foto}
      />
      <div className='mx-2 my-5'>
        <span className='block text-3xl xl:text-4xl'>JUAN JOSÉ</span>
        <span className='block text-3xl xl:text-4xl'>RAMÍREZ ACOSTA</span>
        <span className='block text-xl xl:text-3xl'>
          Enginner Systems Student
        </span>
      </div>
    </div>
  );
}

export default Profile;
