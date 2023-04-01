import { priorExperience } from "@/data/page-data";
import Image from "next/image";
import Link from "next/link";

interface Data {
  projects: {
    id: number;
    name: string;
    tool: string;
    image: string;
    github: string;
    live: string;
  }[];
}

const Experience = () => {
  const { projects }: Data = priorExperience;
  let img: string;
  return (
    <div>
      <div className=" w-full md:h-full text-rosyblack" id="experience">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className=" ">
            <h2 className="text-center font-head1Main text-4xl mb-8 ">Portfolio</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((item, index) => {
              img = `/${item.image}`;

              return (
                <div
                  key={index}
                  className="shadow-lg  group container rounded-md 
                        flex justify-center text-center items-center
                         mx-auto content-div "
                >
                  <div className="">
                    <span className="opacity-0 group-hover:opacity-100 text-2xl font-head2Main font bold text-rosyblack tracking-wider ">
                      {item.name}
                    </span>
                    <img
                      className="h-full opacity-100 group-hover:opacity-80 flex items-stretch"
                      src={img}
                      alt=""
                    />
                    <div className="opacity-0 group-hover:opacity-100 text-2xl font-head2Main font bold text-rosyblack tracking-wider ">
                      <div className=" text-center ">
                        <a href={item.github} target="_blank">
                          <button
                            className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg"
                          >
                            {" "}
                            Code
                          </button>
                        </a>

                        <a href={item.live} target="_blank">
                          <button
                            className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-rosyblack font-bold text-lg"
                          >
                            Live
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
