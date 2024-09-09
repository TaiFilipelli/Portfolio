import VerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;
import 'react-vertical-timeline-component/style.min.css';
import { PianoKeys, Coins, ShoppingCart, Storefront, Moon } from '@phosphor-icons/react';
import { Fade } from 'react-awesome-reveal';
import React from 'react'

const Timeline = () => {
  return (
    <section className="text-white">
      <Fade delay={400} duration={1000}>
        <VerticalTimeline>
          <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          contentArrowStyle={{ borderRight: '7px solid black' }}
          icon={<Coins />}
          iconStyle={{ backgroundColor: 'white', color: '#000' }}
          contentStyle={{ backgroundColor: '#000', boxShadow: 'none' }}>
        <h1 className="text-white font-bold text-2xl font-unisonBold">Nexus Pricing</h1>
        <h4 className="py-2">
          SPA (Single Page Application) with the goal of displaying different pricing plans for a fictional Graphics Engine called Nexus. It is a
          Vanilla project, which means it uses only HTML and CSS. The page features a landing page with 3 different plans available and their respective price and another
          page that allows you to insert fictional payment data to subscribe to the engine!
        </h4>
        <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
          <p className='bg-white text-black py-1 px-3 rounded-xl'>HTML</p>
          <p className='bg-white text-black py-1 px-3 rounded-xl'>CSS</p>
        </div>
        <a href="https://proyecto-pricing-o9or.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="/NexusPricingProject.gif" alt="Preview Project Pricing" />
        </a>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2024" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<PianoKeys />}
        iconStyle={{ backgroundColor: 'white', color: "#000" }}
        contentStyle={{ background: '#000', boxShadow: 'none' }}>
        <h1 className="text-white font-bold text-2xl font-unisonBold">Virtual Piano</h1>
        <h4 className="py-2">
          Web App whose goal is to emulate, in the most respectful way, a music keyboard. It allows you to play it just with the keys on your keyboard and
          has some secondary functions like Dark Mode/Light Mode, show or hide the references on the keys on screen, and 4 different kinds of keyboard synthesizers.
        </h4>
        <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
          <p className='bg-white text-black py-1 px-3 rounded-xl'>React</p>
          <p className='bg-white text-black py-1 px-3 rounded-xl'>CSS</p>
        </div>
        <a href="https://piano-virtual-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="/PianoVirtualProject.gif" alt="Preview Piano Project" />
        </a>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        contentArrowStyle={{ borderRight: '7px solid black' }}
        icon={<ShoppingCart/>}
        iconStyle={{backgroundColor:'white',color:'#000'}}
        contentStyle={{background:'#000',boxShadow:'none'}}>
          <h1 className='text-white font-bold text-2xl font-unisonBold'>MateLibre</h1>
          <h4 className='py-2'>Web App that use a fetch to an external API (Mercado Libre) and uses its vast repertory of articles published online to deploy them on card-shaped containers.
          Adds new concepts and things like animations, skeletons and other tools that i used for the first time. This way, the app looks every day a bit more profesional.</h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>React</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
          </div>
          <a href="https://matelibre.vercel.app" target="_blank"><img src='/MateLibre.png' alt="Preview Mate Libre"/></a>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024-Today"
          contentArrowStyle={{ borderRight: '7px solid black' }}
          icon={<Storefront/>}
          iconStyle={{backgroundColor:'white',color:'#000'}}
          contentStyle={{backgroundColor:'#000',boxShadow:'none'}}
        >
          <h1 className="text-white font-bold text-2xl font-unisonBold">PadelPoint Official Store</h1>
          <h4 className='py-2'>Currently working on the official PadelPoint e-commerce! Using Next.js on the Front stack and Nest.js & MySQL on the Back stack. My first official work
            and my first programming-related job! Loving the process so far, learning a lot of useful stuff! Hopefully, this ends good! I am counting on it. When we deploy the API and 
            database to production, webpage deploy will work. Until so, we are working on local.
          </h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Next.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Nest.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>MySQL</p>
          </div>
          <a href="https://github.com/TaiFilipelli/PadelPoint" target='_blank' className="font-unisonBoldIthalic text-lg hover:underline">Preview soon! Link to repository here!</a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{backgroundColor:'#000',color:'#fff'}}
          icon={<Moon/>}
          date="Work in progress..."
        >
        </VerticalTimelineElement>
    </VerticalTimeline>
  </Fade>
</section>
  )
}
export default Timeline