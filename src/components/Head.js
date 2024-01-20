import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Head() {
  return (
    <div className='grid grid-flow-col p-3 m-1'>
      <div className='inline-flex col-span-1'>
        <RxHamburgerMenu className='align-middle justify-center mx-2'  size={25} />
        {/* <img src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="hamburger" /> */}
        <img className='h-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="yt-logo" />
      </div>
      <div className='col-span-10 mx-60 flex'>
        <input type="text" placeholder='Search'
        className='border border-gray-400 w-3/4 h-10 p-1 rounded-l-full px-4' />
        <button className='border border-gray-400 bg-gray-200 p-1 h-10 rounded-r-full w-14 justify-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="search-logo"
          className='h-4 mx-4' />
        </button>
      </div>
      <div className='col-span-1'>
        <img className='h-6'  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
      </div>
    </div>
  )
}

export default Head