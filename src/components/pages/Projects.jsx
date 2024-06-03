import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { PianoKeys,Coins,ShoppingCart } from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section className="projects-section text-white">
        <Fade direction="left" duration='1300' cascade className='flex justify-center pt-6' triggerOnce>
            <h1 className='font-unisonBold text-4xl'>Proyectos personales:</h1>
            <h3 className='font-unisonLight p-2 text-xl mb-7'>He trabajado en varios proyectos en los últimos 2 años y medio. Aquí los principales:</h3>
        </Fade>
        <div className="projects-container">
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          icon={<Coins/>}
          iconStyle={{backgroundColor:'white',color:'#000'}}
          contentStyle={{backgroundColor:'#000'}}
        >
          <h1 className="text-white font-bold text-2xl font-unisonIthalic">Nexus Pricing</h1>
          <h4 className='py-2'>Página simple con el objetivo de desplegar planes con distintos precios para adquirir un motor gráfico ficticio llamado Nexus.</h4>
          <a href="https://proyecto-pricing-o9or.vercel.app/" target='_blank'><img src='/src/assets/NexusPricingProject.gif' alt="Preview Project Pricing" /></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2024"
          icon={<PianoKeys/>}
          iconStyle={{backgroundColor:'white', color:"#000"}}
          contentStyle={{background:'#000'}}>
          <h1 className='text-white font-bold text-2xl font-unisonIthalic'>Piano Virtual con React</h1>
          <h4 className="py-2">Aplicación web que emula la reproducción de un teclado. Permite al usuario tocar el piano con las teclas de su teclado y cuenta con funciones secundarias 
          como un modo oscuro/modo claro, mostrar u ocultar referencias de teclas y varios sintetizadores de teclado.</h4>
          <a href="https://piano-virtual-gold.vercel.app/" target='_blank'><img src='/src/assets/PianoVirtualProject.gif' alt="Preview Piano Project" /></a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        icon={<ShoppingCart/>}
        iconStyle={{backgroundColor:'white',color:'#000'}}
        contentStyle={{background:'#000'}}>
          <h1 className='text-white font-bold text-2xl font-unisonIthalic'>MateLibre</h1>
          <h4 className='py-2'>Aplicación web que fetchea la API de Mercado Libre y usa su vasto repertorio de articulos subidos en linea para desplegarlos en forma de tarjetas. Añade
          conceptos como las animaciones, skeletons y otras herramientas que implementé por primera vez en mi proyecto para que quede más profesional.</h4>
          <a href="https://matelibre.vercel.app" target="_blank"></a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </section>
  )
}

export default Projects
