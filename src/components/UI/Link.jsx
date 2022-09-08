import React from 'react'

const Link = ({children}) => {
  return (
    <div className='flex justify-center'>
      <a href='/' className='bg-blue-600 p-2 m-4 text-white rounded-lg'>
        {children}
      </a>
    </div>
  )
}

export default Link