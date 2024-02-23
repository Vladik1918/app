import React from 'react'
import {FaShoppingCart}  from 'react-icons/fa'

const Cart = () => {
  return (
    <div className=' flex relative items-center'>
      <button>
      <FaShoppingCart className='flex items-center ' size={28}/>
      </button>
      <span className='flex items-center absolute left-5 bottom-3 rounded-3xl bg-red-600 p-1'>1</span>
    </div>
  )
}

export default Cart
