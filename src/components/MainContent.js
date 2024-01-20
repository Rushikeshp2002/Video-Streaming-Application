import React from 'react'
import ButtonList from "./ButtonList"
import VideoContainer from './VideoContainer'

function MainContent() {
  return (
    <div className='col-span-11'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContent