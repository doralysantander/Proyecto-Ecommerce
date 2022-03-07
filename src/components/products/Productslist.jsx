import React from 'react'
//import Card from '././components/products/Card';
import Card from "./Card";
//Apples
import trayapple1 from '../../assets/products/apples/thre-apples.png' 
import trayapple2 from '../../assets/products/apples/six-apples.png' 
import trayapple3 from '../../assets/products/apples/four-apples.png'
import trayapple4 from '../../assets/products/apples/eight-apples.png' 
import trayapple5 from '../../assets/products/apples/five-apples.png'
import trayapple6 from '../../assets/products/apples/five-apples-diferent.png' 
import trayapple7 from '../../assets/products/apples/four-apples.png'
//import trayapple8 from '../../assets/products/apples/aaa.png'



//Feijoas 
import trayfeijoas1 from '../../assets/products/feijoas/eight-feijoas.png'
import trayfeijoas2 from '../../assets/products/feijoas/eleven-feijoas.png'
import trayfeijoas3 from '../../assets/products/feijoas/nine-feijoas.png'
import trayfeijoas4 from '../../assets/products/feijoas/six-feijoas.png'
import trayfeijoas5 from '../../assets/products/feijoas/four-feijoas.png'

const Productslist = () => {
    const apples =[
        {
            id:1,
            description:"Manzana orgánica del huerto a su mesa",
            image:trayapple1,
            price: 5000
        },
        {
          id:2,
          description:"Manzana orgánica del huerto a su mesa",
          image:trayapple2,
          price: 5000
        },

        {
        id:3,
        description:"Manzana orgánica del huerto a su mesa",
        image:trayapple3,
        price: 5.000
        },

          {
          id:4,
          description:"Manzana orgánica del huerto a su mesa",
          image:trayapple4,
          price: 5000
          },

          {
          id:5,
          description:"Manzana orgánica del huerto a su mesa",
          image:trayapple5,
          price: 5000
          },

          {
            id:6,
            description:"Manzana orgánica del huerto a su mesa",
            image:trayapple6,
            price: 5000
            },
            {
              id:6,
              description:"Manzana orgánica del huerto a su mesa",
              image:trayapple7,
              price: 5000
              },

              {
                id:6,
                description:"Feijoa orgánica de alta calidad",
                image:trayfeijoas1,
                price: 5000
                },

                {
                  id:6,
                  description:"Feijoa orgánica de alta calidad",
                  image:trayfeijoas2,
                  price: 5000
                  },

                  {
                    id:6,
                    description:"Feijoa orgánica de alta calidad",
                    image:trayfeijoas3,
                    price: 5000
                    },

                    {
                      id:6,
                      description:"Feijoa orgánica de alta calidad",
                      image:trayfeijoas4,
                      price: 5000
                      },

                      {
                        id:6,
                        description:"Feijoa orgánica de alta calidad",
                        image:trayfeijoas4,
                        price: 5000
                        },

                        {
                          id:6,
                          description:"Feijoa orgánica de alta calidad",
                          image:trayfeijoas5,
                          price: 5000
                          }

                          
         
                  
              
      
    ]
  return (
    <div className="w-full h-5/6  gap-4 grid sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 rounded-lg">

      {
         apples.map(apple=>(<Card description={apple.description} image={apple.image} price={apple.price}></Card>))
      }
     
     
    </div>
  )
}

export default Productslist