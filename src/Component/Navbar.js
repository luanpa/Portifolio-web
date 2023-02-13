
import React,{Fragment, useState} from 'react'
import "../CSS/Navbar.css"
import {NavLink} from "react-router-dom"


function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Fragment>

     <nav>
       
    <div className={ showMenu ? " bar deactive" : "bar"} onClick = {() => setShowMenu(!showMenu)}>
        <i class="fa-solid fa-bars"></i>
    </div>
       
       <div className={showMenu ? "menu actives" : "menu"}>
        <ul>
            <i class="fa-solid fa-xmark" onClick = {() => setShowMenu(!showMenu)}></i>
            <li><NavLink to='/'><i class="fa-sharp fa-solid fa-house"></i> Home </NavLink></li>
            <li><NavLink to='/About'> <i class="fa-solid fa-user"></i> Sobre mim </NavLink></li>
            <li><NavLink to='/portifolio'> <i class="fa-solid fa-briefcase"></i> Portifolio </NavLink></li>
        </ul>
       </div>
     </nav>

    </Fragment>
  )
}

export default Navbar