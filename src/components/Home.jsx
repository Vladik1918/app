import React from 'react'
import Cardsdata from './CardData'
import { useState } from 'react'
import Star from './UI/Star'

const Home = () => {
  const [cartData, setCartData] = useState(Cardsdata)
  return (
    <section className="mx-20">
      <h2 className="font-bold text-3xl mb-16">Restaurents in Ahmedabad Open now</h2>
      <div className='grid grid-cols-4 gap-5'>
      {cartData.map((item, id) => {
        return (
          <>
            <div style={{width:400}}
              className="p-4 rounded-2xl border-2 border-gray-300 items-center"
            >
              <div className="rounded-lg  mb-5">
                <img src={item.imgData}></img>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-xl">{item.dish}</h4>
                  <span className="p-1 bg-green-500 flex items-center rounded-lg text-white font-bold">
                    {item.rating}
                    <Star />
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <h5 className="text-lg">{item.address}</h5>
                  <span className="text-lg">{item.price}$</span>
                </div>
                <div className="text-center">
                  <button className="border-2 p-2 rounded-xl border-gray-300 hover:bg-gray-300 duration-200 ease-in-out">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      })}
      </div>
    </section>
  )
}

export default Home
