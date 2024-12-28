import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    
 <nav className='bg-blue-400/50 flex gap-7'>
 <div className="">HOME</div>
 <div className=" flex gap-5 *:bg-slate-500/50 py-2">
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"signin"}>SignIn</NavLink>
    <NavLink to={"signup"}>SignUp</NavLink>
    <NavLink to={"create-bio"}>create profile bio</NavLink>
 </div>
 </nav>
    
    </>
  )
}

export default Nav