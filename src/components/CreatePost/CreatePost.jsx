import React from 'react'
import Search from '../UI/Search'
const CreatePost = () => {
  const postIcons = [
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/fluency/344/camera.png",
      title: "Watch live",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/color/344/gallery.png",
      title: "Photos/Videos",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/office/344/happy--v1.png",
      title: "Feelings/Actions",
    },
  ]
  return (
    <div className='shadow-lg rounded-lg p-2 gap-4 px-32'>
      <div className='mb-3'>
        <a className='flex flex-col items-center justify-center' href='/'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F1f97d9be1fefa651c4892142581dce9d%2Ftumblr_ox1yo5UIYQ1vy2tgqo3_400.jpg&f=1&nofb=1'
            className='h-9 w-9 rounded-full overflow-hidden '
            alt="Kotonoha Katsura"
            />
            <span>Kotonoha Katsura</span>
        </a>
      </div>
      <div>
        <Search>
          Write your first post
        </Search>
      </div>
      <div className='flex justify-around m-3'>
        {postIcons.map((item, i) => {
          return(
            <div className='flex items-center hover:bg-gray-100 rounded-lg p-2 px-8 transition' key={i}>
              <a className='flex justify-center items-center gap-3' href='/'>
                  <img className='h-9 w-9' src={item.img} alt={item.title} />
                  <p>{item.title}</p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreatePost