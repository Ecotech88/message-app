import SideBar from './SideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className='flex items-center justify-center max-w-full max-h-screen overflow-hidden '>
        <SideBar/>
        <Chats/>
    </div>
  )
}

export default MessageTab
