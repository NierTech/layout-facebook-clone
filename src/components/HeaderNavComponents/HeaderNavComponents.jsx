import React, { useState } from 'react'
import Search from '../UI/Search'
import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  EyeOutlined,
  ShoppingOutlined,
  CopyOutlined,
  WechatOutlined,
  BellOutlined
} from '@ant-design/icons';
import facebookLogo from '../../images/facebook-logo.svg'

const HeaderNavComponents = () => {

  const [searchText, setSearchText] = useState('');
  const navIcons = [HomeOutlined, UserOutlined, TeamOutlined, EyeOutlined, ShoppingOutlined];
  const menuIcons = [CopyOutlined, WechatOutlined, BellOutlined];

  return (
    <div className='flex w-full p-2  items-center shadow-lg'>

      {/* Search Bar & Logo */}
      <div className='flex items-center gap-1'>
        <a href='/'>
          <img className='w-28' src="https://img.icons8.com/fluency/344/facebook-new.png" alt='facebook-logo' />
        </a>
        <div>
          <Search searchText={searchText} setSearchText={setSearchText}>Search in Facebook</Search>
        </div>
      </div>

      {/* Central Header Menu */}
      <nav className='flex justify-center items-center  w-5/6'>
        <div className='flex gap-12'>
          {navIcons.map((Icon, i) => {
            return (
              <div className='px-12 py-4 rounded-md hover:bg-slate-100 transition' key={i}>
                <a href='/'>
                  <Icon className='flex items-center text-gray-600  text-2xl ' />
                </a>
              </div>
            )
          })}
        </div>


      </nav>
        {/* Right Header Menu  */}
        <div className='flex mr-20 gap-4'>
          {menuIcons.map((Icon, i) => {
            return (
              <div key={i}>
                <a href='/'>
                  <Icon className='flex items-center text-xl p-2 bg-slate-200  rounded-full hover:bg-slate-100 transition ' />
                </a>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default HeaderNavComponents;