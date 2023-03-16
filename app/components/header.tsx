import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
<section>
<div className="text-rosy flex justify-between ">
    <div className=' flex-shrink-0 transform skew-y-6 '>
        <Image
          priority
          width={80}
          height={80}
          className="rounded-xl h-full mb-6"
          src="/logo3.jpg"
          alt=""
        /> 
        </div>
        <ul className='text-rosy flex [312]: mx-5 font-navFont font-extrabold '>
        <li className='p-4 text-2xl'> <Link  href="/" >Home</Link></li>
        <li className='p-4 text-2xl'> <Link  href="/skill" >Skills</Link></li>
        <li className='p-4 text-2xl'> <Link  href="/experience" >Experience</Link></li>
            
        </ul>
        </div>
</section>
  )
}

export default Header