import React from 'react';
import 'styles/globals.css';
import Bloques from 'components/bloques';
import Bloquesv2 from 'components/bloquesv2';
import Profile from 'components/profile';
import Footer from 'components/footer';

function Index() {
  return (
    <div className='xl:grid xl:place-items-center bg-gradient-to-br from-gray-500 w-full h-full font-montserrat'>
      <div>
        <Profile />
      </div>
      <div className='personalInfo bg-gray-300'>
        <div className='sm:basis-1/2'>
          <Bloquesv2
            title='INFO'
            date='DIRECTION'
            items='Itaguí, Antioquia, Colombia'
          />
          <Bloquesv2 date='PHONE' items='+57 301 XXX XXXX' />
          <Bloquesv2 date='EMAIL' items='juan.ramireza105@gmail.com' />
        </div>
        <div className='sm:basis-1/2'>
          <Bloques title='SKILLS' text='HTML, CSS and JavaScript, React.js' />
          <Bloques title='LANGUAGES' text='Spanish Native, English IDK' />
        </div>
      </div>
      <div className='bloquesv1All bg-gray-300'>
        <Bloques
          title='PROFILE'
          text='Junior web developer with experience in JavaScript, HTML and CSS, passionate about the creation (development & design) of interfaces and user experiences, lover of learning and sports.'
        />
      </div>
      <div className='bloquesv2All bg-gray-300'>
        <Bloquesv2
          title='ACADEMIC'
          subtitle='Servicio Nacional de Aprendizaje - SENA'
          date='2014 - 2015'
          text='Tecnología en Análisis y Desarrollo de sistemas de información'
          items='- Web development - Databases, SQL'
        />
        <Bloquesv2
          subtitle='Universidad de Antioquia'
          date='2016 - Present'
          text='Ingeniería en sistemas'
          items='- Web development - Databases, SQL - Software development (Java, Python, C#)'
        />
      </div>
      <div className='bloquesv2All bg-gray-300'>
        <Bloquesv2
          title='CERTIFICATIONS'
          subtitle='Duke University (coursera)'
          date='23 august 2020'
          text='programming foundations with javascript, html and CSS'
        />
        <Bloquesv2
          subtitle='Mongo DB (coursera)'
          date='1 june 2020'
          text='Introduction to Mongodb'
        />
      </div>
      <div className='bloquesv2All bg-gray-300'>
        <Bloquesv2
          title='EXPERIENCE'
          subtitle='Auxiliar de programación'
          date='2021 - Present'
          items='- Web development - Web interface design'
        />
      </div>
      <div className='bloquesv1All bg-gray-300'>
        <Bloques
          title='HOBBIES'
          text='I really like video games, watching series / movies, spending time with family or friends, and recently I also like crocheting'
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
