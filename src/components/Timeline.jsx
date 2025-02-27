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

      <VerticalTimelineElement className="vertical-timeline-element--education" date="2024-2025" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<Storefront/>}
          iconStyle={{backgroundColor:'white',color:'#000'}} contentStyle={{backgroundColor:'#000',boxShadow:'none'}}>
          <h1 className="text-white font-bold text-2xl font-unisonBold">PadelPoint Store</h1>
          <h4 className='py-2'>My last work was as the Web developer on the official PadelPoint e-commerce. Using Next.js on the Front stack and Nest.js & MySQL on the Back stack. 
            The main focus of the project is a SEO-oriented, user-friendly experience to display, in the best way possible, all that our client's store is about. On the other hand, the application has 
            a fully functional admin panel, where a user who has the said role can create, edit and delete entities directly from the database.
          </h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Next.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Nest.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>MySQL</p>
          </div>
          <a href="https://padel-point.vercel.app/" target='_blank' className="font-unisonBoldIthalic text-lg hover:underline"><img src="/PadelPoint.png" alt="PadelPoint Store"/></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="In progress" contentArrowStyle={{ borderRight: '7px solid black' }} icon={<Snowflake/>}
          iconStyle={{backgroundColor:'white',color:'#000'}} contentStyle={{backgroundColor:'#000',boxShadow:'none'}}>
          <h1 className="text-white font-bold text-2xl font-unisonBold">Tech-Cave</h1>
          <h4 className='py-2'>One of my newest projects: This one is an e-commerce, that it looks like any other. But there's a twist: this app doesn't have a dedicated database or API, 
          instead, all of the information is stored in a .csv file of Google Sheets. Using axios, the app fetches the data from a sheet and displays it in the app. Every single change that 
          we made in the Google Sheet it's inmediately reflected and displayed in the app. This way, some minor entrepreneurships can have it's own e-commerce without the need of a dedicated
          API or database (not to mention the high costs that those things have).
          </h4>
          <div className='w-full gap-3 flex flex-wrap mb-8 cursor-default'>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Next.js</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>TailwindCSS</p>
            <p className='bg-white text-black py-1 px-3 rounded-xl'>Google Sheets</p>
          </div>
          <a href="https://tech-cave.vercel.app/" target='_blank' className="font-unisonBoldIthalic text-lg hover:underline"><img src="/Mateify.png" alt="Mateify" /></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{backgroundColor:'#000',color:'#fff'}} icon={<Moon/>} date="Work in progress...">
        </VerticalTimelineElement>
    </VerticalTimeline>
  </Fade>
</section>
  )
}
export default Timeline