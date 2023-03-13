import { priorExperience } from "@/data/page-data"
import Image from 'next/image'

export default function Experience() {
  const {projects}=priorExperience
 
  return (
    <div className='[312px]:flex-col sm:flex md:flex justify-evenly h-[90%]'>
    <div className="text-rosyblack flex   items-left h-[90%]" >
                <div className="text-rosyblack  md:flex sm:flex [312]:flex-col   ">
               <div className="text-rosyblack box-border h[600]- w-[300] p-8 flex flex-col  ">
                <h2 className="mb-2 ">Projects</h2>
                
                    {projects.map((pr,i)=>{
                      return <div key={i}><h3 className="text-rosyblack  flex flex-col  ">{pr.tool} :  </h3>
                    <div>{pr.links.map((link,i)=>{
                      return <div key={i}>{link}</div>})}</div>
                    </div>
                    })
                      
                      }
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
