import React from 'react'

function Sidebar() {
  return (
    <div className='col-span-1 shadow-xl w-52 inline-flex flex-col'>
      <div className='px-6 py-3'>
        <ul>
          <li className='py-2'>🏠  Home</li>
          <li className='py-2'>📽️  Shorts</li>
          <li className='py-2'>🤑  Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div className='px-6 py-3'>
        <h1 className='text-lg font-medium'>You</h1>
        <ul>
          <li className='py-2'>Home</li>
          <li className='py-2'>Shorts</li>
          <li className='py-2'>Subscriptions</li>
        </ul>
      </div>
      <hr />
      <div className='px-6 py-3'>
        <h1 className='text-lg font-medium'>Subscription</h1>
        <ul>
          <li className='py-2'>Hello World</li>
          <li className='py-2'>Sheryians College</li>
          <li className='py-2'>Ranveer Allahbadia</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar