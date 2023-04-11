import { personalData } from "@/data/page-data";
import { aboutMe } from "@/data/page-data";
import Image from "next/image";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skill from "./components/Skill";
export default function Page() {
 return(
 <div>

   <Home/>
 <Skill/>
  <Experience/>

    </div>
  );
}
