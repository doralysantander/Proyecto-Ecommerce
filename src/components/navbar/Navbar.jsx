import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [showMenu, setshowMenu]= useState(false);//valor estado
    const [open, setOpen] = useState(false);
    let menu 
    if(showMenu){
        
        <nav>
            <ul className={open ? 'nav-links active':'nav-links'}>
                <li className="nav-item">
                    <navLink to='/' className="nav-link"onClick={()=>setOpen(false)}>
                    Inicio
                    </navLink>
                </li>
                <li className="nav-item">
                    <navLink to='/' className="nav-link"onClick={()=>setOpen(false)}>
                   Quienes somos
                    </navLink>
                </li>
                <li className="nav-item">
                    <navLink to='/'className="nav-link"onClick={()=>setOpen(false)}>
                   Productos
                    </navLink>
                </li>

            </ul>   


        </nav>
        //menu=<div>the menu</div>
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