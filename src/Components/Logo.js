import React from 'react'
import Nav from './Nav'

const Logo = () => {
  return (
    <div className='flex justify-between items-center p-3'>
        <span className='text-xl font-extrabold'>AppName</span>
        <Nav />
    </div>
  )
}

export default Logo