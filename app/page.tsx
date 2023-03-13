
import { personalData } from "@/data/page-data"
import { aboutMe } from "@/data/page-data";
import Image from 'next/image'
export default function Home() {
  const { name, role, education, contactLinks } = personalData;
  const {title,body} =aboutMe
  return (
    <div className='[312px]:flex-col sm:flex md:flex justify-evenly mb-20 h-full'>
      
      <div className="text-rosyblack flex flex-col  items-left  md:w-[60%] " >
        <div className="text-rosyblack  flex flex-col  items-center">
        <h1 className="mb-2 ">{name}</h1>
        <h2 className="mb-2">{role}</h2>
        <div className=" flex items-center">
        {body.map((b:any,i:number)=>{
          return <p key={i} className=" ">{b}</p>})}
        </div>
        <h2 className="mb-2 mt-4 ">Qualification</h2>
        {education.map((edu: any, i: number) => {
          return (
            <p key={i} className="font-bold mb-2">
              {edu}
            </p>
          );
        })}
      </div>
      </div>
      <div className='flex mt-10 '>
        <Image
          priority
          width={400}
          height={400}
          className="animate-pulse rounded-xl h-full mb-6"
          src="/dev.jpg"
          alt=""
        /> 
        </div>
    

 </div>

  )
}
