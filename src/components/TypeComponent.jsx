import { TypeAnimation } from "react-type-animation"

const TypeComponent = () => {
  return (
    <TypeAnimation
        sequence={["FullStack Developer",1000,"Freelancer",1000,"Videogame enjoyer",1000,"Student",1000]}
        wrapper="span"
        repeat={Infinity}
        style={{display:'inline-block',fontSize:'1.2em',fontFamily:'Unison Pro Bold Italic',color:'white'}}
    />
  )
}

export default TypeComponent
