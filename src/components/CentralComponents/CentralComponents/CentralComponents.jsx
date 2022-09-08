import React from 'react'
import Copyright from '../../Copyrights/Copyright'
import Main from '../../../layout/Main/Main'
const CentralComponents = () => {
  const leftSideMenu = [
    {
      id: Math.floor(Math.random() * 10),
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F1f97d9be1fefa651c4892142581dce9d%2Ftumblr_ox1yo5UIYQ1vy2tgqo3_400.jpg&f=1&nofb=1',
      title: "Kotonoha Katsura",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: 'https://img.icons8.com/color/344/friends--v1.png',
      title: "Finding Friends",
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/fluency/344/conference-foreground-selected.png",
      title: "Group Frieds"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/344/external-TV-entertainment-and-hobbies-smashingstocks-flat-smashing-stocks.png",
      title: "Watch"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/color/344/collage.png",
      title: "Memories"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/dusk/344/bookmark-ribbon.png",
      title: "Bookmark"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/cotton/344/flag--v1.png",
      title: "Pages"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-events-dance-flaticons-flat-flat-icons-2.png",
      title: "Events"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/stickers/344/christmas-star.png",
      title: "Loved"
    },
    {
      id: Math.floor(Math.random() * 10),
      img: "https://img.icons8.com/stickers/344/vertical-timeline.png",
      title: "Ads Manager"
    },
  ]
  return (
    <div className='flex items-center'>
    {/* Left side Menu */}
        <ul className='gap-6 list-none'>
          {leftSideMenu.map((item,i) => {
            return(
                <li className='hover:bg-slate-100 transition rounded-lg' key={i}>
                  <a className='flex items-center p-3 px-1.5 gap-4' href='/'>
                  <img className='h-9 w-9 rounded-full overflow-hidden' src={item.img} alt={item.title}/>
                  <span>{item.title}</span>
                </a>
              </li>
            )
          })}
          <div>
              <Copyright />
          </div>
        </ul>
        <Main />
    </div>
  )
}

export default CentralComponents;