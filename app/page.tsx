import { personalData } from "@/data/page-data";
import { aboutMe } from "@/data/page-data";
import Image from "next/image";
export default function Home() {
  const { name, role, education, contactLinks } = personalData;
  const { title, body } = aboutMe;
  return (
    <div className="[312px]:flex-col sm:flex md:flex justify-evenly mb-20 h-full">
      <div className="text-rosyblack flex flex-col  items-center  md:w-[60%] ">
          <h1 className="font-head1Main">{name}</h1>
          <h3 className="mb-2 font-head2Main">{role}</h3>
          
            {body.map((b: any, i: number) => {
              return (
                <p key={i} className=" font-semibold self-center text-center mx-auto  ">
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
      
      <div className="flex mt-10 [312]:mt-8 md:mt-10 lg:mt-10">
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
  );
}
