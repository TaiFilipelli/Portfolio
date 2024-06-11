import React from 'react'
import TypeComponent from '../TypeComponent';
import { Slide } from 'react-awesome-reveal';

const Intro = () => {
  return (
    <main>
      <Slide direction='up' delay={100}>
        <section className='flex justify-center flex-col font-normal text-2xl font-unisonBold ml-32 h-80vh max-[768px]:text-xl max-[768px]:m-5 max-[311px]:text-base max-[574px]:h-[70vh]'>
            <h1 className='text-white'>Hi,</h1> 
            <h1 className='text-white'> i am <span className='bg-gradient-to-r from-pink-800 to-yellow-500 rounded-md p-2 bg-clip-text text-transparent font-bold'>Taiel!</span></h1>
            <br />
            <TypeComponent/>
        </section>
      </Slide>
    </main>
  )
}

export default Intro;
