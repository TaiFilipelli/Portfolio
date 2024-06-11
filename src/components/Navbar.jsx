import React from 'react'
import { Link } from 'wouter'
import { Code } from 'phosphor-react'
const Navbar = () => {
  return (
    <nav className='bg-transparent p-4 w-full h-20 flex flex-row max-[733px]:w-1/3 max-[571px]:flex-col'>
      <div className='container mx-auto flex justify-between gap-40 items-center max-[731px]:gap-4 max-[571px]:flex-col max-[571px]:w-screen'>
        <div className='text-white text-xl flex justify-between'>
          <Code size={28} className='mr-4'/>
          <Link to='/'><p className='font-unisonBold cursor-pointer'>Filipelli</p></Link>
        </div>
        <div className='space-x-4 flex gap-8 max-[768px]:gap-2 max-[571px]:flex-col max-[571px]:space-x-0 max-[571px]:pl-6'>
          <Link to='/about' className='text-white hover:text-slate-600 font-unisonLight'>About</Link>
          <Link to='/projects' className='text-white hover:text-slate-600 font-unisonLight'>Projects</Link>
          <Link to='/contact' className='text-white hover:text-slate-600 font-unisonLight'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
