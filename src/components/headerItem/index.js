import React from 'react'

function HeaderItem({ Icon, title }) {
    return (

        <div className='flex 
    flex-col
     group 
     items-center 
     cursor-pointer 
     w-12 sm:w-20
     hover:text-white
     '>
            <Icon className='h-6 group-hover:animate-bounce' />
            <p className='transition duration-300 ease-in-out opacity-0 group-hover:opacity-100'>{title}</p>
        </div>

    )
}

export default HeaderItem