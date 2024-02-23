import React from 'react'
import {FaShoppingCart}  from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='mx-20 flex items-center'>
      <button>
      <FaShoppingCart className='flex items-center relative' size={28}/>
      </button>
      <span className='flex items-center absolute ml-5 mb-7 rounded-3xl bg-red-600 p-1'>1</span>
    </div>
  )
}

export default Cart
