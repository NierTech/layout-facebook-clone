import React from 'react'

const Copyright = ({props}) => {
  const description = [
    'Privacy',
    'Terms of use',
    'Advertising Prefences',
    'Cookies',
    '@ Meta, 2022'
  ]
  return (
    <div>
      <ul className='list-none mt-40 mx-2'>
        {description.map((item, id) => {
          return(
            <li key={`array id ${id}`}>
              <a href='/' className='font-questrial'>{item}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Copyright;