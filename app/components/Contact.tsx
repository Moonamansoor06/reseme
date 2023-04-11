export default function ContactComponent() {
  return (
    <div
      className="md:flex md:pt-10 justify-between  
        mr-4 ml-4 mb-40 mt-20 h-full "
      id="contact"
    >
      <h1 className="text-center text-2xl md:text-4xl font-head1Main ">
        Contact
      </h1>
      <p className="text-center text-rosyblack my-5">Get in touch with me</p>
      <form
        className="flex flex-col items-center"
        action="https://formspree.io/f/mayzpeqw"
        method="POST"
      >
        <div>
          <input
            placeholder="Your name"
            type="text"
            required
            name="name"
            className="  w-60 md:w-80 bg-gray font-head2Main border-none
                   rounded-md focus:outline-none text-rosyblack"
          />
        </div>
        <div className="my-5">
          <input
            required
            className="  w-60 md:w-80 bg-gray border-none 
                  font-head2Main rounded-md focus:outline-none text-rosyblack"
            placeholder="Your email"
            type="email"
            name="email"
          />
        </div>
        <div>
          <textarea
            rows={8}
            name="message"
            required
            className=" w-60 md:w-80 bg-gray rounded-md font-head2Main 
                  focus:outline-none text-rosyblack"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-4 block px-5  rounded-md  bg-gradient-to-b from-rosy text-white to-rosyblack"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
