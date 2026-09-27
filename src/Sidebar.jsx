import React from 'react'
import logo_text from './assets/Instagram_text.png'

function Sidebar() {
  return (
    <div className='m-3'>
        <div className='d-flex flex-column gap-3 position-fixed'>
            <img src={logo_text} className='logo-text'/>
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat-fill"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>
        </div>
            
        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar
