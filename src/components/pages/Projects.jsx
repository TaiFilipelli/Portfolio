import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { PianoKeys } from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section className="text-white">
        <Fade direction="left" duration='1300' cascade>
            <h1 className='font-unisonBold text-4xl'>Proyectos personales:</h1>
            <h3 className='font-unisonIthalic p-2 text-xl mb-7'>He trabajado en varios proyectos en los últimos 2 años.</h3>
        </Fade>
        <VerticalTimeline>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2023"
          icon={<PianoKeys/>}
          iconStyle={{backgroundColor:'white', color:"#000"}}
          contentStyle={{background:'#000'}}
        >
          <h1 className='text-white font-bold text-2xl font-unisonIthalic'>Piano Virtual con React</h1>
          <h4 className="vertical-timeline-element-subtitle">Hola</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default Projects
