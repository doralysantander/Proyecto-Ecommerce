import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
//import { GiHamburgerMenu } from 'react-icons/fa';

const Navbar = () => {
    
    const [showMenu, setshowMenu]= useState(false);//valor estado
    let menu 
    if(showMenu){
        menu=<div>the menu</div>
    }

  return (
    <>
    <div className="navbarContainer">

    <FontAwesomeIcon icon={faBars} className="icons"
     onClick={()=>setshowMenu(!showMenu)}//true
    />
        <img
        src={logo}
        alt={""}
        className="img-logo"
       
        />

    <FontAwesomeIcon icon={faCartPlus} className="icons"/>
    {menu}
    </div>
 
    </>
  )
}

export default Navbar