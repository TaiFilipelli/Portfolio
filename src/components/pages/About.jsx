import { UserFocus,GraduationCap,TerminalWindow } from "phosphor-react";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <section className="projects-section flex justify-center items-center flex-col text-white">
      <Fade triggerOnce direction="left" className="items-left w-2/3 mb-6 my-10">
        <h1 className='font-unisonBoldIthalic max-[572px]:text-4xl max-[572px]:mt-16'>About <span className="bg-gradient-to-r from-pink-800 to-yellow-500 bg-clip-text text-transparent">me</span></h1>
      </Fade>
      <Fade triggerOnce className="about-container h-2/4 flex text-left w-2/3 flex-col max-[600px]:w-[60vh] max-[480px]:w-[50vh] max-[410px]:w-[40vh] " delay={250} duration={2000}>
      <section className='rounded-md bg-black p-10 max-[410px]:p-4'>
        <div className='flex justify-between'>
          <h1 className='font-unisonBold text-3xl mb-6 max-[410px]:text-2xl'>Personal</h1>
          <UserFocus size={40}/> 
        </div>
        <p className='text-xl pb-5'>I was born on February 2004, on San Nicolas de los Arroyos, Argentina. My programming and computing interest started in the 2020 pandemic, where thanks to multiple online courses
        (and while i was still in high school) i started to learn and practice thanks to online content. In just one month, i learned about computers, their structure and functioning and
        algorythmics and programming principles. In 2022, about 4 months after my graduation, i started in the Facultad Regional San Nicolas, on the University Degree on Programming. Since July 2024, my studies on the 
        university are oficially finished! The only thing left is to work on my final project to finally get my title!</p>
        <hr />
        <div className='flex justify-between my-6'>
          <h1 className='font-unisonBold text-3xl max-[410px]:text-2xl'>Education</h1>
          <GraduationCap size={35}/> 
        </div>
        <p className='text-xl pb-5'>I studied on the Club Belgrano High School(2016-2021). The degree followed right next to it, since 2022 to 2024. Even tho, most of my knowledges are 
        from extracurricular courses that i acquired thanks to online content and study constancy. Even today, i still learning new technologies and new ways to do stuff.</p>
        <hr />
        <div className='flex justify-between my-6'>
          <h1 className='font-unisonBold text-3xl max-[410px]:text-2xl'>Atributtes</h1>
          <TerminalWindow size={35}/> 
        </div>
        <p className='text-xl pb-5'>I am a very active person, that likes team work and have a great social ease. I am always aware to details and things so i can 
        perfect and improve my work. In the same way, i can adapt to almost any new tech that is needed thanks to my always growing eager to learn new things constantly. I am responsible, 
        formal and hardworking, I use to be very demaning with myself and my work. I also love to be working in my projects and abilites all the time, so i can expand myself and my knowledges!</p>
      </section>
      </Fade>
    </section>
  )
}

export default About;
