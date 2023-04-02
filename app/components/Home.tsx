import { personalData } from "@/data/page-data";
import { aboutMe } from "@/data/page-data";
import Image from "next/image";
import {NextPage} from 'next'

 const Home:NextPage=()=> {
  const { name, role, education, contactLinks } = personalData;
  const { title, body } = aboutMe;
  return (
    <div>
    <div className="  md:flex justify-evenly mt-20 mb-40  ml-8 h-full sm:h-full md:h-full lg:h-full"
    id="home"
    >
      <div className="text-rosyblack flex flex-col  items-center  md:w-[60%] ">
          <h1 className="font-head1Main">

            {name}</h1>
          <h3 className="mb-2 font-head2Main">
            
            {role}</h3>
          
            {body.map((b: any, i: number) => {
              return (
                <p key={i} className=" animate-[type_3s_steps(1)_1s_forwards_infinite] font-semibold self-center text-center mx-auto  ">
                  {b}
                </p>
              );
            })}
          
          <h3 className="mb-2 mt-4 font-head2Main">Qualification</h3>
          {education.map((edu: any, i: number) => {
            return (
              <p key={i} className="font-bold  mb-4 text-center">
                {edu}
              </p>
            );
          })}
        </div>
      
      <div className="flex mt-10 [312]:mt-8 sm:flex sm:items-center sm:justify-center sm:mr-4 md:mt-10 lg:mt-10">
        <Image
          priority
          width={400}
          height={400}
          className="animate-pulse rounded-xl h-full mb-6"
          src="/dev.jpg"
          alt=""
        />
      </div>
    </div></div>
  );
}
export default Home