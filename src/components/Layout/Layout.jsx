import React from 'react'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div className=''>
      <Header/>
      <div className=' p-6 md:p-20'>
        {children}
      </div>
      
    </div>
  )
}

export default Layout
