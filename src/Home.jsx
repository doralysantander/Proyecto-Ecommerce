import React from 'react'
import ItemCard from './ItemCard'
import data from './data'

const Home = () => {
  return (
      <>
       <h1>ALL ITEMS</h1>
       <div  className="w-full h-5/6 gap-4 grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
           {data.productData.map((item, index) => {
               
               return(
                <ItemCard 
                image={item.image}
                 description={item.description} 
                 desc={item.desc} price={item.price}
                  item ={item} 
                  key={index}
                  />
               )

           })}
      

       </div>
      </>
   
  )
}

export default Home

/* {data.productData.map((item, index) => {
               return(
                <ItemCard image={item.image} description={item.description} desc={item.desc} price={item.price}/>
               )

           })} */