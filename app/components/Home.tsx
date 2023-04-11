import { personalData } from "@/data/page-data";
import { aboutMe } from "@/data/page-data";
import Image from "next/image";
import {NextPage} from 'next'

 const Home:NextPage=()=> {
  const { name, role, education, contactLinks } = personalData;
  const { title, body } = aboutMe;
  return (
    
    <div className="md:flex md:pt-10 justify-between  mr-4 ml-4 mb-40 md:mb-20 h-full"
    id="home">
      {/* left side div */}
      <div className="text-rosyblack mt-14 flex flex-col md:w-[65%]  items-center ">
          <h1 className="font-head1Main">{name}</h1>
          <h3 className="mb-2 font-head2Main"> {role}</h3>
          {body.map((b: any, i: number) => {
              return (
                <p key={i} className=" animate-[type_3s_steps(1)_1s_forwards_infinite]
                 font-semibold self-center text-center mx-auto md:w-[65%]  ">
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
      {/* left div closed and right side div start */}
      <div className="mt-10 justify-center md:w-[45%] ">
        <Image
          priority
          width={800}
          height={800}
          className="animate-pulse rounded-xl h-full mb-6"
          src="/dev.jpg"
          alt=""
        />
      </div>
      {/* right div closed */}
    </div>
    
  );
}
export default Home