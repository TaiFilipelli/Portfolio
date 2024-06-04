import { UserFocus,GraduationCap,TerminalWindow } from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <section className="flex justify-center items-center flex-col text-white">
      <Fade triggerOnce direction="left" className="items-left w-2/3 mb-6 my-10">
        <h1 className='font-unisonBoldIthalic'>About <span className="bg-gradient-to-r from-pink-800 to-yellow-500 bg-clip-text text-transparent">me</span></h1>
      </Fade>
      <Fade triggerOnce className="h-2/4 flex text-left w-2/3 flex-col" delay={250} duration={2000}>
      <section className='rounded-md bg-black p-10'>
        <div className='flex justify-between'>
          <h1 className='font-unisonBold text-3xl mb-6'>Personal</h1>
          <UserFocus size={40}/> 
        </div>
        <p className='text-xl pb-5'>Naci el 22 de Febrero del 2004. Mi interés por la programación y la informática surgió en la pandemia del 2020, donde gracias a varios cursos
        (y mientras cursaba quinto año del secundario) empecé a capacitarme con cursos en linea y videos en YouTube. En un mes aprendí la estructura básica de una computadora y
        los principios de la programación y la algoritmia. En 2022, unos 4 meses después de mi graduación, pude anotarme en la UTN a la carrera de Tecnicatura Universitaria en Programación.
        Y desde ahi no paré.</p>
        <hr />
        <div className='flex justify-between my-6'>
          <h1 className='font-unisonBold text-3xl'>Educacion</h1>
          <GraduationCap size={35}/> 
        </div>
        <p className='text-xl pb-5'>Mis estudios obligatorios los cumpli en la Escuela Secundaria Club Belgrano (2016-2021). La tecnincatura siguió inmediatamente después,
        desde 2022 a 2024 en la Facultad Regional San Nicolas. Obviamente, gran parte de mis conocimientos se deben a aprendizajes extracurriculares que adquiri por mi cuenta gracias a cursos, 
        videos, foros y mucho más.  </p>
        <hr />
        <div className='flex justify-between my-6'>
          <h1 className='font-unisonBold text-3xl'>Atributtes</h1>
          <TerminalWindow size={35}/> 
        </div>
        <p className='text-xl pb-5'>Soy una persona muy activa, con gran capacidad de trabajo en equipo y facilidad social. Suelo estar atento a los detalles y perfeccionar mis 
        trabajos, asi como puedo adaptarme a cualquier tecnologia nueva que surja en el camino, gracias a mis ganas de aprender cosas nuevas constantemente. Soy responsable y puntual,
        suelo ser muy exigente conmigo mismo y mi trabajo, me encanta estar todo el tiempo haciendo proyectos variados y poder ampliar mis conocimientos!</p>
        <hr />
      </section>
      </Fade>
    </section>
  )
}

export default About;
