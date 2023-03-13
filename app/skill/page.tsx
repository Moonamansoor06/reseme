
import { skills } from "@/data/page-data"
import Image from 'next/image'

export default function Skill() {
  const {soft,hard}=skills 
 
  return (
    <div className='[312px]:flex-col sm:flex md:flex justify-evenly h-[90%]'>
    <div className="text-rosyblack flex   items-left h-[90%]" >
                <div className="text-rosyblack  md:flex sm:flex [312]:flex-col   ">
               <div className="text-rosyblack box-border h[600]- w-[300] p-4 flex flex-col  ">
                <h2 className="mb-2 ">Soft Skills</h2>
                 {soft.map((sk)=>{
                      return <div className="text-rosyblack  flex items-center   "> <p className='m-2' >{sk.icon}</p> <p>{sk.text}</p>    </div>})}
                   </div>
                   <div className="text-rosyblack  box-border h[600]- w-[300] p-4 flex flex-col  ">
                      <h2 className="mb-2 ">Hard Skills</h2>
                   {hard.map((hsk)=>{
                        return <div className="text-rosyblack  flex items-center "><p className='m-2' >{hsk.icon}</p> <p>{hsk.text}</p>   </div>})}
                    </div>
                </div> 
                 </div>
                        <div className='flex '>
                        <Image
                          priority
                          width={400}
                          height={400}
                          className="animate-pulse rounded-xl h-full mb-6"
                          src="/dev.png"
                          alt=""
                        /> 
                        </div>
      
        </div>
    



  )
}
