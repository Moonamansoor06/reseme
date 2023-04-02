import { skills } from "@/data/page-data";
import Image from "next/image";

interface Skills {
  soft: Soft[];
  hard: Hard[];
}
interface Soft {
  icon: string;
  text: string;
}
interface Hard {
  icon: string;
  text: string;
}

export default function Skill() {
  const { soft, hard }: Skills = skills;
let img:string
  return (
    <div>
    <div className="mt-40  h-full mb-10"  id="skills">
      <div className="text-rosyblack px-10    ">
        <h3 className="text-center font-head1Main text-4xl mb-10 ">Soft Skills</h3>
        <div className="text-rosyblack p-4 m-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {soft.map((sk, i) => {
           img = `/${sk.icon}`
          return (
            <div key={i} className=" flex justify-center items-center  ">
              <div className="flex flex-col font-head2Main items-center p-2 shadow-md  h-40 w-60 hover:scale-105 duration-75 ">
               <Image alt="" src={img} width={80} height={80} className="text-4xl flex justify-center items-center"/>
                 <p className="text-lg flex justify-center items-center">{sk.text}</p>
              </div>
             
            </div>
          );
        })}</div>
      </div>
         <div className="text-rosyblack px-10    ">
        <h3 className="text-center font-head1Main text-4xl mb-10 ">Hard Skills</h3>
        <div className="text-rosyblack p-4 m-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hard.map((hsk, i) => {
             img = `/${hsk.icon}`
         return (
              <div key={i} className="   flex justify-center items-center  ">
                <div className="flex flex-col font-head2Main items-center p-2 shadow-md shadow-gray-600 h-40 w-60 hover:scale-105 duration-75 ">
                <Image  alt="" src={img} width={80} height={80} className="text-4xl flex justify-center items-center"/>
                   <p className="text-xl flex justify-center items-center">{hsk.text}</p>
                </div>
               
              </div>
            );
          })}</div>
        </div>
    </div></div>
  );
}
