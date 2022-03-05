import React,{useState} from 'react'
//import './navbar.css'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setshowMenu]= useState(false);//valor estado
    const [open, setOpen] = useState(false);
    let menu 
    if(showMenu){
        
       /* <nav>
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
        </nav>*/
        menu=<div>the menu</div>
    }

  return (
    <> 
    <div className = "w-screen  bg-green-900 flex justify-around items-center md:h-1/3 xl:h-1/3" >
    <FontAwesomeIcon icon={faBars} className="text-stone-50 h-8 w-8 md:h-16 w-16 "  //icono menu hamburgesa
     onClick={()=>setshowMenu(!showMenu)}//true
    />
        <img
            src={logo}
            alt="logo"
            className="w-2/5 h-2/5 md:w-1/4 h-1/4 xl:w-1/6 h-1/6 "
        />
    <FontAwesomeIcon icon={faCartPlus} className="text-stone-50 h-8 w-8 md:h-16 w-16"/>{/*icono carro compras */}
    {menu}
    </div>
 
    </>
  )
}

export default Navbar