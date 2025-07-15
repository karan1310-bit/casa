import React from 'react'
import FlairButton from './Button'

const Navbar = () => {
  return (
    <div>
        <nav className='px-6 md:px-12 py-4 md:py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-xl md:text-4xl font-bold text-black'>
                    Casa K.
                </div>
                <ul className='flex text-xl text-black'>
                    <li className=' cursor-pointer'><FlairButton /></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar