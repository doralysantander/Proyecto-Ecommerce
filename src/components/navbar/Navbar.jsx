import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

 export default function Navbar () {
const [open, setOpen] = useState(false)


return (
<>
<div className="w-full p-7 bg-green-900 z-50 sticky top-0 flex justify-around items-center md:h-1/3 xl:h-1/3" >
<FontAwesomeIcon icon={faBars} className="text-stone-50 h-8 w-8 md:h-16 w-16 " //icono menu hamburgesa
onClick={() =>(setOpen(!open))} 
/>
{open ? slideMenu():''}
<img
src={logo}
alt="logo"
className="sm:w-12 h-12 md:w-1/4 h-1/4 xl:w-1/6 h-1/6"
/>
<FontAwesomeIcon icon={faCartPlus} className="text-stone-50 h-8 w-8 md:h-16 w-16" />{/*icono carro compras */}


</div>

</>
)
}
function slideMenu() {
    return (
      <div className="bg-green-900 bottom-60">
        <ul>
          <li className="menu-list-item py-2 hover:bg-slate-50"><a href="/">Inicio</a></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><a href="#">Quienes somos</a></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><a href="#">Productos</a></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><a href="#">Contacto</a></li>
          </ul>

  
      </div>
    )
  }