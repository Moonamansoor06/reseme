import Link from 'next/link';

import Image from 'next/image';

const Nav= () => {
return(
<div className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 
       bg-opacity-90 text-rosy flex justify-between w-[90%] lg:w-full "> 
        <div className=' flex-shrink-0 transform skew-y-6 w-20 h-16  md:h-20 md:w-20'>
        <Image
      
          priority
          fill
          className="rounded-xl p-4"
          src="/logo3.jpg"
          alt=""
        /> 
        </div>
 <div className=' '>
        <ul className='text-rosy  flex md: mx-5 font-navFont font-extrabold '>
        <li className='p-4 text-2xl'> 
        <Link className='btn'  href="/" >Home</Link></li>
       
        </ul>
        </div>
        </div> 
)
}



export default Nav