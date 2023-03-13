import { Envelope, Twitter, Linkedin } from "./icons/";
import { personalData } from "@/data/page-data";

const Footer = () => {
    const {  contactLinks } = personalData;
  return (
    <footer className= 'flex mb-4 flex-col items-center'>
        <div className=" text-rosy flex  ">
     
          
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[3]}
              aria-label={"medium link"}
            ></a>
          </div>
        </footer>
    
    
  )
}

export default Footer