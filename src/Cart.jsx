import React from 'react'
import {useCart} from 'react-use-cart'

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        carTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h1 className="text-center">Su carrito esta vacio</h1>
  return (
      <section className="py-4">
        <div>
            <div>
                <h5>Cart({totalUniqueItems}) Total:items({totalItems}) </h5>
                <div>
                    {items.map((item, index) => {
                        return (
                        <div className=" shadow-black w-full flex gap-4 items-center "key={index}> 
                          <div className="flex flex-col">
                            <img src={item.image} alt="" className="w-3/6 h-3/6 overflow-hidden aspect-square"/>
                            <p>{item.description}</p>
                         </div>
                         <div className="flex gap-8">
                            <span>Precio:{item.price}</span>
                            <span>Cantidad({item.quantity})</span>
                            </div>
                            <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}
                            >-
                            </button>

                            <button onClick={()=>updateItemQuantity(item.id,  item.quantity + 1)}>
                                +
                            </button>

                            <button onClick={()=> removeItem(item.id)}>
                               Borrar 
                            </button>
                            
                        </div>
                        
                        )

                    })}
                </div>
              
            </div>
            <div> 
                 <h2>Precio Total:{carTotal}</h2>
                </div>
        </div>
      </section>
    
  )
}

export default Cart