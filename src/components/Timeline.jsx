import VerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;
import 'react-vertical-timeline-component/style.min.css';
import { PianoKeys, Coins, ShoppingCart, Storefront, Moon, Snowflake } from '@phosphor-icons/react';
import { Fade } from 'react-awesome-reveal';
import React from 'react'

const Timeline = () => {
  return (
    <section className="text-white">
      <Fade delay={200} duration={600}>
        <VerticalTimeline>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2024" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<PianoKeys />}
        iconStyle={{ backgroundColor: 'white', color: "#000" }}
        contentStyle={{ background: '#000', boxShadow: 'none' }}>
        <h1 className="text-white font-bold text-2xl font-unisonBold">Virtual Piano</h1>
        <h4 className="py-2">
          Web App whose goal is to emulate, in the most respectful way, a virtual synthesizer. It allows you to play it just with the keys on your keyboard and
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
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2024" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<ShoppingCart/>} 
      iconStyle={{backgroundColor:'white',color:'#000'}} contentStyle={{background:'#000',boxShadow:'none'}}>
          <h1 className='text-white font-bold text-2xl font-unisonBold'>MateLibre</h1>
          <h4 className='py-2'>Web App that fetchs an external API (Mercado Libre) and uses its vast repertory of articles published online to deploy them in card-shaped containers.
          Adds new concepts and things like animations, skeletons and other tools that i used for the first time. This way, the app looks a bit more profesional.</h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>React</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
          </div>
          <a href="https://matelibre.vercel.app" target="_blank"><img src='/MateLibre.png' alt="Preview Mate Libre"/></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2024-Today" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<Snowflake/>}
          iconStyle={{backgroundColor:'white',color:'#000'}} contentStyle={{backgroundColor:'#000',boxShadow:'none'}}>
          <h1 className="text-white font-bold text-2xl font-unisonBold">Mateify</h1>
          <h4 className='py-2'>One of my newest projects: a landing page of a fictional company called Mateify. It is an Angular project, with pure css and
            with the goal of display information in a more design-oriented way. It is a small project, but it gives me the opportunity of showcase in a better way
            my knowledges from Angular and my design & coding skills.
          </h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Angular</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>CSS</p>
          </div>
          <a href="https://mateify.vercel.app" target='_blank' className="font-unisonBoldIthalic text-lg hover:underline"><img src="/Mateify.png" alt="Mateify" /></a>
        </VerticalTimelineElement>
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2024-Today" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<Storefront/>}
          iconStyle={{backgroundColor:'white',color:'#000'}} contentStyle={{backgroundColor:'#000',boxShadow:'none'}}>
          <h1 className="text-white font-bold text-2xl font-unisonBold">PadelPoint Official Store</h1>
          <h4 className='py-2'>My last work was as the Front developer on the official PadelPoint e-commerce. Using Next.js on the Front stack and Nest.js & MySQL on the Back stack. 
            The main focus is a SEO-oriented, user-friendly experience to display, in the best way possible, all that our client's store is about. On the other hand, the application also has 
            a fully functional admin panel, where a user whose rol is admin can create, edit and delete entities directly from the database.
          </h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Next.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Nest.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>MySQL</p>
          </div>
          <a href="https://padel-point.vercel.app/" target='_blank' className="font-unisonBoldIthalic text-lg hover:underline">
            <img src="/PadelPoint.png" alt="Preview PadelPoint site"/>
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{backgroundColor:'#000',color:'#fff'}} icon={<Moon/>} date="Work in progress...">
        </VerticalTimelineElement>
    </VerticalTimeline>
  </Fade>
</section>
  )
}
export default Timeline