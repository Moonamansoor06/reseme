import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
<header>
<div className="text-rosy sm:flex md:flex md:justify-between sm:justify-between [312]:flex  p-10 ">
    <div className=' [312]:flex sm:flex md:flex  '>
        <Image
          priority
          width={100}
          height={100}
          className="rounded-xl h-full mb-6"
          src="/logo3.jpg"
          alt=""
        /> 
        </div>
        <div className='text-rosy flex [312]:justify-left md:justify-between sm:justify-between'>
        <p className='p-4'> <Link  href="/" >Home</Link></p>
        <p className='p-4'> <Link  href="/skill" >Skills</Link></p>
        <p className='p-4'> <Link  href="/experience" >Experience</Link></p>
            


     
        </div>
        </div>
</header>
  )
}

export default Header