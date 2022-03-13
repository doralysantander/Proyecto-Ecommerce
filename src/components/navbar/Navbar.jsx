import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'





export default function Navbar () {
const [open, setOpen] = useState(false)
//console.log(open)


return (
<>
<div className="w-full p-8 bg-green-900 z-30 sticky top-0 flex justify-around items-center md:h-1/3 xl:h-1/4" >

<FontAwesomeIcon icon={faBars}  className="text-stone-50 h-6 w-6 sm:h-8 w-8 md:h-10 w-10 lg:h-14 w-14 " //icono menu hamburgesa
onClick={() =>(setOpen(!open))} 
/>
{open ? slideMenu():''}

<img
src={logo}
alt="logo"
className="h-14 w-14 sm:h-20 w-20 md:h-24 w-24 lg:h-28 w-28 xl:w-36 h-36 "
/>

{/*<CartProvider className="text-stone-50 h-6 w-6 sm:h-8 w-8 md:h-10 w-10 lg:h-14 w-14">
  <Cart className="text-stone-50 h-6 w-6 sm:h-8 w-8 md:h-10 w-10 lg:h-14 w-14"/>
</CartProvider>*/}


</div>
</>
)
}
function slideMenu() {
    return (
      <div className="bg-green-900 px-10 py-10 h-screen absolute w-3/6 top-22 sm:top-32  xl:w-1/6  left-0 top-28 ">
        <ul className="flex flex-col gap-8">
          <li className="menu-list-item py-2 text-sm text-slate-100"><NavLink to="/">Inicio</NavLink></li>
          <li className="menu-list-item py-2 text-slate-100"><NavLink to="#">Quienes somos</NavLink></li>
          <li className="menu-list-item py-2 text-slate-100"><NavLink to="#">Productos</NavLink></li>
          <li className="menu-list-item py-2 text-slate-100"><NavLink to="#">Contacto</NavLink></li>
          </ul>
      </div>

    )
    
  }

/*
  onClick={() =>
    (setOpencar(!opencar))}
    {opencar ? <Card/>:''}
    {open ?<Card/>:''}
    text-slate-100

    bg-green-900


return (
<>
<div className="w-full p-3  bg-green-900 z-30 sticky top-0 flex justify-around items-center md:h-1/3 xl:h-1/4" >
<FontAwesomeIcon icon={faBars} className="text-stone-50 h-8 w-8 md:h-16 w-16 " //icono menu hamburgesa
onClick={() =>(setOpen(!open))} 
/>
{open ? slideMenu():''}
<img
src={logo}
alt="logo"
className="sm:w-20 h-20 md:w-1/4 h-1/4 xl:w-36 h-36"
/>
<FontAwesomeIcon icon={faCartPlus} className="text-stone-50 h-8 w-8 md:h-16 w-16" 
onClick={() =>(setOpencar(!opencar))} />
</div>
</>
)
}

{/*<FontAwesomeIcon icon={faCartPlus} className="text-stone-50 h-6 w-6 sm:h-8 w-8 md:h-10 w-10 lg:h-14 w-14 " 
onClick={() =>(setOpencar(!opencar))} />


    */
