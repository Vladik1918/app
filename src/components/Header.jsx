import React from 'react'
import Cart from './UI/Cart'

const Header = () => {
  return (
    <div className='h-[80px] flex justify-between px-20 items-center bg-black text-white '>
        <h2 className='font-bold text-2xl'>Ecommerce</h2>
        <Cart/>
    </div>
  )
}

export default Header
