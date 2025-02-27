
const Messages = () => { 
  return (
    <div className=' p-10 h-[70%] w-full items-start gap-4 
     hidden md:hidden lg:flex'>

        <div className='rounded-full w-10 h-10 bg-green-800 text-white text-center
         flex items-center justify-center font-bold text-3xl p-6'>A</div>

        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl flex gap-2 items-center'>Anu 
            <span className='text-sm text-gray-300'>01/31/24 4 : 56 am</span>
          </h2>
          <p className='text-xl font-light'>Number</p>
        </div>
      </div>
  )
}

export default Messages