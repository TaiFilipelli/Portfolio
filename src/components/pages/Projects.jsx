import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { PianoKeys,Coins,ShoppingCart,Moon } from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section className="projects-section text-white">
        <Fade direction="left" duration='1300' cascade className='flex justify-center pt-6' triggerOnce>
            <h1 className='font-unisonBold text-4xl'>Personal <span className="bg-gradient-to-r from-pink-800 to-yellow-500 bg-clip-text text-transparent">Projects</span></h1>
            <h3 className='font-unisonLight p-2 text-xl mb-7'>I've been working on many projects on the last 2 and a half years. Here are the main ones:</h3>
        </Fade>
        <div className="projects-container">
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          contentArrowStyle={{ borderRight: '7px solid black' }}
          icon={<Coins/>}
          iconStyle={{backgroundColor:'white',color:'#000'}}
          contentStyle={{backgroundColor:'#000',boxShadow:'none'}}
        >
          <h1 className="text-white font-bold text-2xl font-unisonBold">Nexus Pricing</h1>
          <h4 className='py-2'>SPA (Single Page Aplication) with the goal of display different pricing plans for a fictional Graphics Engine called Nexus. It's a 
          Vanilla project, wich means it uses only HTML and CSS. The page features a landing page with 3 different plans available and their respective price and another
          page that allows to insert fictional payment data to suscribe to the engine!</h4>
          <a href="https://proyecto-pricing-o9or.vercel.app/" target='_blank'><img src='/NexusPricingProject.gif' alt="Preview Project Pricing" /></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2024"
          contentArrowStyle={{ borderRight: '7px solid black' }}
          icon={<PianoKeys/>}
          iconStyle={{backgroundColor:'white', color:"#000"}}
          contentStyle={{background:'#000',boxShadow:'none'}}>
          <h1 className='text-white font-bold text-2xl font-unisonBold'>Virtual Piano</h1>
          <h4 className="py-2">Web App whose goal its to emulate, in the most respectful way, a music keyboard. It allows you to play it just with the keys in your keyboard and 
          has some secondary functions like a Dark Mode/Light Mode, show or hide the references on the keys on screen and 4 different kinds of keyboards synthesizers.</h4>
          <a href="https://piano-virtual-gold.vercel.app/" target='_blank'><img src='/PianoVirtualProject.gif' alt="Preview Piano Project" /></a>
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
          <a href="https://matelibre.vercel.app" target="_blank"><img src='/MateLibre.png' alt="Preview Mate Libre"/></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{backgroundColor:'#000',color:'#fff'}}
          icon={<Moon/>}
          date="Work in progress..."
        >
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </section>
  )
}

export default Projects
