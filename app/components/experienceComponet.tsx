import Image from "next/image";
import { NextPage } from "next";
import { priorExperience } from "@/data/page-data"
interface Data  {
  projects: {
    tool: string;
    links: string[];
  }[]

};


const ExperienceComponent = () => {
    const {projects}:Data=priorExperience
    
    
  return (
    <div className='mt-10 [312px]:flex-col sm:flex md:flex justify-evenly h-[90%]'>
      <div className="text-rosyblack flex   items-left">
        <div className="text-rosyblack  md:flex sm:flex [312]:flex-col">
          <div className="text-rosyblack box-border h[600]- w-[300] p-10 flex flex-col   ">
            <h2 className="mb-2 font-head1Main">Projects</h2>

           
                  {projects.map((prdata,i) => {
                    return (
                      <div key={i}>
                        <h3 className="text-rosyblack font-head2Main flex flex-col  ">
                          {prdata.tool} :
                        </h3>
                        <div>
                          {prdata.links.map((link, i) => {
                            return <div key={i}>{link}</div>;
                          })}
                        </div>
                      </div>
                    );
                  })}
            
          </div>
         

        <div className="flex mt-4">
          <Image
            priority
            width={500}
            height={300}
            className="animate-pulse rounded-xl h-full mb-6"
            src="/dev.png"
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
};
export default ExperienceComponent;
