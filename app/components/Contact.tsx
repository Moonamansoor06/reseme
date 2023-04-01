export default function Contact() {
    return (
      <div>
        <div
          className=" flex items-center h-full  max-w-7xl mx-auto leading-8 mb-10"
          id="contact"
        >
          <div className="text-rosyblack px-10 mt-32 mx-auto">
            <h1 className="text-center text-4xl font-head1Main ">Contact</h1>
            <p className="text-center text-rosyblack my-5">Get in touch with me</p>
            <form action="https://formspree.io/f/mayzpeqw" method="POST">
              <div>
                <input
                  placeholder="Your name"
                  type="text"
                  required
                  name="name"
                  className="p-2 w-80 bg-gray font-head2Main border-none rounded-md focus:outline-none text-rosyblack"
                />
              </div>
              <div className="my-5">
                <input
                  required
                  className="p-2 w-80 bg-gray border-none font-head2Main rounded-md focus:outline-none text-rosyblack"
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
                  className="p-2 w-80 bg-gray rounded-md font-head2Main focus:outline-none text-rosyblack"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="mx-auto block px-5  rounded-md  bg-gradient-to-b from-rosy text-white to-rosyblack"
              >
                Submit
              </button>
            </form>
          </div>
        </div></div>
    );
  }