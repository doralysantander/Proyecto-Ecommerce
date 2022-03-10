import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Card from '../products/Card'
import { NavLink } from 'react-router-dom'
//import Card from '../products/Card'

export default function Navbar () {
const [open, setOpen] = useState(false)
//const [opencar, setOpencar] = useState(false)

return (
<>
<div className="w-full p-3 bg-green-900 z-50 sticky top-0 flex justify-around items-center md:h-1/3 xl:h-1/3" >
<FontAwesomeIcon icon={faBars} className="text-stone-50 h-8 w-8 md:h-16 w-16 " //icono menu hamburgesa
onClick={() =>(setOpen(!open))} 
/>
{open ? slideMenu():''}
<img
src={logo}
alt="logo"
className="sm:w-14 h-14 md:w-1/4 h-1/4 xl:w-36 h-36"
/>

<FontAwesomeIcon icon={faCartPlus} className="text-stone-50 h-8 w-8 md:h-16 w-16" 
onClick={() =>(setOpen(!open))} />{/*icono carro compras */}
{open ?<Card/>:''}
</div>

</>
)
}
function slideMenu() {
    return (
      <div className="bg-green-900 absolute w-2/6 px-8 left-16 top-16">
        <ul className="flex flex-col gap-x-1.5">
          <li className="menu-list-item py-2 hover:bg-slate-50"><NavLink to="/">Inicio</NavLink></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><NavLink to="#">Quienes somos</NavLink></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><NavLink to="#">Productos</NavLink></li>
          <li className="menu-list-item py-2 hover:bg-slate-50"><NavLink to="#">Contacto</NavLink></li>
          </ul>

  
      </div>
    )
  }

/*
  onClick={() =>
    (setOpencar(!opencar))}
    {opencar ? <Card/>:''}*/