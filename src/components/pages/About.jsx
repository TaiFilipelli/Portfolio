import { UserFocus,GraduationCap } from "phosphor-react";
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
        <p className='text-xl pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur rerum necessitatibus facilis eaque soluta 
        omnis fuga repudiandae quas reprehenderit! Aliquam odio porro dolor rerum animi nostrum ullam ipsum excepturi.</p>
        <hr />
        <div className='flex justify-between my-6'>
          <h1 className='font-unisonBold text-3xl'>Educacion</h1>
          <GraduationCap size={35}/> 
        </div>
        <p className='text-xl pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur rerum necessitatibus facilis eaque soluta 
        omnis fuga repudiandae quas reprehenderit! Aliquam odio porro dolor rerum animi nostrum ullam ipsum excepturi.</p>
        <hr />
      </section>
      </Fade>
    </section>
  )
}

export default About;
