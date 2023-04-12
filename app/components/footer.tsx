import { Envelope, Twitter, Linkedin } from "./icons/";
import { personalData } from "@/data/page-data";

const Footer = () => {
  const { contactLinks } = personalData;
  return (
    <footer className="flex mt-8 mb-4  flex-col items-center">
      <div className=" text-rosy  w-28 flex justify-between  ">
        <a
          className="hover:scale-100 duration-100"
          href={contactLinks?.[0]}
          aria-label={"email link"}
        >
          <Envelope />
        </a>
        <a
          className="hover:scale-100 duration-100"
          href={contactLinks?.[1]}
          aria-label={"twitter link"}
        >
          <Twitter />
        </a>
        <a
          className="hover:scale-100 duration-100"
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
  );
};

export default Footer;
