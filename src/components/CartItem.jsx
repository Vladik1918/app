import React from 'react'
import Star from './UI/Star'

const CartItem = ({imgData, dish, rating, address, price}) => {
  return (
    <div style={{width:400 }}
    className="p-4 rounded-2xl border-2 border-gray-300 duration-100 ease-in-out mb-10 mr-10 items-center"
  >
    <div className="rounded-lg mb-5">
      <img src={imgData}></img>
    </div>
    <div>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xl">{dish}</h4>
        <span className="p-1 bg-green-500 flex items-center rounded-lg text-white font-bold">
          {rating}
          <Star />
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <h5 className="text-lg">{address}</h5>
        <span className="text-lg">{price}$</span>
      </div>
      <div className="text-center">
        <button className="border-2 p-2 rounded-xl border-gray-300 hover:bg-gray-300 duration-200 ease-in-out">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default CartItem
