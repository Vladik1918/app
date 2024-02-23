import React from 'react'
import Cardsdata from './CardData'
import { useState } from 'react'
import Star from './UI/Star'
import Layout from './Layout/Layout'

const Home = () => {
  const [cartData, setCartData] = useState(Cardsdata)
  return (
    <Layout>
      <section className="">
        <h2 className="font-bold text-3xl ">Restaurents in Ahmedabad Open now</h2>
        <div className="grid   md:grid-cols-4 mt-10 gap-5">
          {cartData.map((item) => (
            <div className=" flex flex-col gap-3  rounded-2xl border w-full  border-gray-300 p-4">
                <img className="flex-1 rounded-lg" src={item.imgData} />

              <div className="flex w-full justify-between ">
                <h4 className="font-bold text-xl">{item.dish}</h4>
                <div className="p-1 bg-green-500 flex items-center rounded-lg text-white font-bold">
                  {item.rating}
                  <Star />
                </div>
              </div>
              <div className="flex  justify-between w-full ">
                <h5 className="text-lg whitespace-nowrap">{item.address}</h5>
                <span className="text-lg font-semibold">{item.price}$</span>
              </div>
              <div className="flex justify-center items-end">
                <button className="border-2 p-2 rounded-xl border-gray-300 hover:bg-gray-300 duration-200 ease-in-out">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Home
