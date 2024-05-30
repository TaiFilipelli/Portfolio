import React from 'react'
import { Link } from 'wouter'
import { Code } from 'phosphor-react'
const Navbar = () => {
  return (
    <nav className='bg-transparent p-4 w-full h-20 flex '>
      <div className='container mx-auto flex justify-between gap-40 items-center'>
        <div className='text-white text-xl flex justify-between'>
          <Code size={28} className='mr-4'/>
          <Link to='/'><p className='font-unisonBold cursor-pointer'>Filipelli</p></Link>
        </div>
        <div className='space-x-4 flex gap-8'>
          <Link to='/about' className='text-white hover:text-slate-600 font-unisonLight'>About</Link>
          <Link to='/projects' className='text-white hover:text-slate-600 font-unisonLight'>Projects</Link>
          <Link to='/contact' className='text-white hover:text-slate-600 font-unisonLight'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
