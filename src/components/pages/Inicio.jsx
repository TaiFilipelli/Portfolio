import React from 'react'
import About from './About';
import TypeComponent from '../TypeComponent';

const Intro = () => {
  return (
    <main>
        <section className='flex justify-center flex-col font-normal text-2xl font-unisonBold ml-32 h-80vh'>
            <h1 className='text-white'>Hola,</h1> 
            <h1 className='text-white'> soy <span className='bg-gradient-to-r from-pink-800 to-yellow-500 rounded-md p-2 bg-clip-text text-transparent font-bold'>Taiel!</span></h1>
            <br />
            <TypeComponent/>
            
        </section>
    </main>
  )
}

export default Intro;
