import backIcon from '../assets/arrow.png';
import { Users } from '../constant/Data';

const SideBar = () => {
  return (
    <div className='flex-1 flex-col justify-between min-w-[500px] border-yellow-50 max-h-screen border-r-2 shadow-2xl sm:w-full lg:flex-1 relative'>
<div className="p-4 flex justify-between items-center">
        <img className='shadow-lg shadow-gray-600 w-8 bg-white border-none rounded-full p-1 cursor-pointer' src={backIcon} alt="" />
      </div>

    
      <div className='sm:flex-1 overflow-y-auto p-3 border-b-2 md:w-full lg:w-auto hide-scrollbar'>
        {Users.map((users, id) => (
          <div key={id} className="border-b-2 py-3 hover:bg-gray-100 cursor-pointer transition duration-100 flex items-start justify-between gap-4">
            <div className='flex items-center gap-5'>
              <img className='size-12 object-cover rounded-full' src={users.images} alt="" />
              <div className='flex-col justify-center'>
                <h2 className='font-bold text-xl'>{users.name}</h2>
                <p className='text-8 '>{users.greeting}</p>
              </div>
            </div>
            <span className="bg-purple-500 rounded-full px-1 text-white text-8 text-center my-2 font-semibold">
              LOOKING
            </span>
          </div>
        ))}
      </div>
    
     

         <div className='
          w-full mx-auto
         md:w-full  bg-white   border-red-700 border-2 m-4 rounded-lg shadow-sm  
           shadow-red-400 p-4 bg-red-200/20'>
       
        <span className='text-white bg-red-500 px-2 rounded-sm'>SAFETY TIPS: </span>
    
    <div className='text-red-600 font-medium  '>
    <p className='sm:min-w-max text-sm'>-Roomi support Will NOT reach out via email </p>
    <p className='sm:min-w-max text-sm'>-DO NOT send money before meeting in person</p>
    <p className='sm:min-w-max text-sm'>-Please flag suspicious behavior</p>
    
    </div>            
    </div>
       </div>
    
  );
}

export default SideBar;
