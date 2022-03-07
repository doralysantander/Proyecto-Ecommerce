import React from 'react'
import trayapple7 from '../../assets/products/apples/four-apples.png'

const Apple = () => {
  return (
  
       <div className="container">
           <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
                <div className="w-4/5 h-4/5 text-center bg-blue-200">
                 <img 
                 src={trayapple7}
                 alt="apple"
                 className="w-40 h-40 flex justify-center items-center"
                 />
                 <p >Manzana orgánica del huerto a su mesa</p>
                 <p>valor:5.000</p>
                 <div className="flex gap-4 justify-center">
                    <bottom className="bg-green-900 w-6 h-6 rounded-xl">+</bottom>
                    <input type="text" size="1"></input>
                    <bottom className="bg-green-900 w-6 h-6 rounded-xl">-</bottom>
                    <bottom className="bg-green-900  px-2 py-2  rounded-md">Comprar</bottom>
                 </div>
                 </div>
                 
                <div className="bg-blue-300"> 

                <div className="w-4/5 h-4/5 text-center bg-blue-200">
                 <img 
                 src={trayapple7}
                 alt="apple"
                 className="w-40 h-40 flex justify-center items-center"
                 />
                 <p >Manzana orgánica del huerto a su mesa</p>
                 <p>valor:5.000</p>
                 <div className="flex gap-4 justify-center">
                    <bottom className="bg-green-900 w-6 h-6 rounded-xl">+</bottom>
                    <input type="text" size="1"></input>
                    <bottom className="bg-green-900 w-6 h-6 rounded-xl">-</bottom>
                    <bottom className="bg-green-900  px-2 py-2  rounded-md">Comprar</bottom>
                 </div>
                 </div>
                
                </div>
                <div className="bg-blue-400">C </div>
                <div className="bg-blue-500">D </div>
           </div>

       </div>

 
  )
}

export default Apple