import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='px-12 py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-4xl font-bold text-black'>
                    KCasa.
                </div>
                <ul className='flex text-xl text-black'>
                    <li className=' cursor-pointer'>Menu</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar