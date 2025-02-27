import Messages from './Messages.jsx'
import setingIcons from '../assets/cogwheel.png'
import Input from './Input.jsx'

 const Chats = () =>{
   return (

    <div className=' w-full lg:w-3/4 h-screen hidden md:hidden lg:flex flex-col justify-center
    '>
      <div className="flex justify-end p-5">
        <img className='w-8 cursor-pointer' src={setingIcons} alt="" />
      </div>
      <Messages />
      <Input />
    </div>
  )
 }
export default Chats