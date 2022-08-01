import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoerVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider'

const Sidebar = () => {
    const[{}, dispatch] = useStateValue()

  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src={user?.photoURL}/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <donutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoerVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input type="text" placeholder="Search or start new chat" />
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar