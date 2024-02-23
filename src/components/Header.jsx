import React from 'react'
import Cart from './UI/Cart'

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center bg-black text-white mb-5'>
      <div>
        <h2 className='font-bold text-2xl mx-20'>Ecommerce</h2>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default Header
