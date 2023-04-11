import { priorExperience } from "@/data/page-data";

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
    <div className="md:pt-10 mr-4 ml-4  mb-40 md:mb-20 shadow-lg shadow-black">
      <div className=" flex flex-col justify-center px-10 ">
        <h2 className="text-center font-head1Main text-4xl mt-10 mb-10 ">
          Portfolio
        </h2>
      </div>

      <div
        id="experience"
        className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {projects.map((item, index) => {
          img = `/${item.image}`;

          return (
            <div
              key={index}
              className="shadow-lg  group container rounded-md 
                        flex flex-col justify-center text-center items-center
                          hover:scale-105 duration-75 "
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="opacity-100 group-hover:opacity-80 
                    bg-cover w-full h-60"
              ></div>

              <div
                className="flex flex-col justify-evenly items-center 
                    opacity-0 group-hover:opacity-100 text-2xl font-head2Main
                     font bold text-rosyblack tracking-wider "
              >
                <div
                  className="block  text-2xl font-head2Main
                      font bold text-rosyblack tracking-wider "
                >
                  {item.name}
                </div>
                <div className=" text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                             text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>

                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 text-rosyblack font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
