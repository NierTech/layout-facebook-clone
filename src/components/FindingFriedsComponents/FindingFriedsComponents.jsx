import React from 'react'
import Link from '../UI/Link'

const FindingFriedsComponents = () => {
  return (
    <div className="flex justify-start items-center shadow-lg rounded-lgp-2 px-20 gap-4 mt-4">
    {/* Create a window to add in other history */}
      <div className='m-auto'>
        <a className='flex flex-col items-center justify-center' href='/'>
            <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F1f97d9be1fefa651c4892142581dce9d%2Ftumblr_ox1yo5UIYQ1vy2tgqo3_400.jpg&f=1&nofb=1'
            alt="name"
            className='h-9 w-9 rounded-full'
            />
            <h1>Kotanoha Katsura</h1>
        </a>
        <div className='flex flex-col items-center'>
          <h1 className='font-questrial text-2xl font-bold'>No more publications?</h1>
          <p className='font-questrial text-slate-500'>Add new friends to see even more posts in your Feed.</p>
        </div>
        <Link>
          Finding Friends
        </Link>
      </div>

    </div>
  )
}

export default FindingFriedsComponents