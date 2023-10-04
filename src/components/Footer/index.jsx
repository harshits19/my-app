import { BsInstagram, BsGithub } from "react-icons/bs"
import { IoSendSharp } from "react-icons/io5"
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi"

const Footer = () => {
  return (
    <section className="h-full w-full max-w-[1280px] scroll-mt-14 p-4 md:scroll-mt-16 md:p-8 lg:mx-auto" id="footerSection">
      <div className="flex flex-col gap-4 md:flex-row lg:gap-x-8">
        <div className="flex-1">
          <h1 className="mb-8 text-4xl">Connect with me</h1>
          <div className="mt-8 flex flex-col items-start gap-y-2">
            <div className="flex items-center justify-center gap-x-4 py-1 font-sansMed text-lg hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://github.com/harshits19" target="_blank" className="contents">
                <BsGithub className="h-6 w-6" /> Github
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-4 py-1 font-sansMed text-lg hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://www.linkedin.com/in/harshitgaur19/" target="_blank" className="contents">
                <BiLogoLinkedin className="h-6 w-6" /> Linkedin
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-4 py-1 font-sansMed text-lg hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://www.instagram.com/_harshitz/" target="_blank" className="contents">
                <BsInstagram className="h-6 w-6" /> Instagram
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-4 py-1 font-sansMed text-lg hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="mailto:jai191912101@gmail.com" className="contents">
                <BiLogoGmail className="h-6 w-6" /> Gmail
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mb-8 text-4xl">Say Hi!</h1>
          <form className="flex flex-col gap-y-2.5" onSubmit={(e) => e.preventDefault()} data-netlify="true">
            <div className="relative">
              <input
                className="customInput w-full rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-myBlack focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                type="text"
                name="nameVal"
                id="nameVal"
                required
                spellCheck="false"
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2.5 flex origin-[0%_0%] items-center bg-none px-1 text-lg transition-all duration-[0.2s] dark:text-[#e7e7e7c2]">
                Name*
              </span>
            </div>
            <div className="relative">
              <input
                className="customInput w-full rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-myBlack focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                type="text"
                name="emailVal"
                id="emailVal"
                required
                spellCheck="false"
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2.5 flex origin-[0%_0%] items-center bg-none px-1 text-lg transition-all duration-[0.2s] dark:text-[#e7e7e7c2]">
                Email*
              </span>
            </div>
            <div className="relative">
              <textarea
                className="customInput h-24 w-full resize-none rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-myBlack focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                name="msgVal"
                id="msgVal"
                required
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2.5 flex origin-[0%_0%] items-center bg-none px-1 text-lg transition-all duration-[0.2s] dark:text-[#e7e7e7c2]">
                Message*
              </span>
            </div>
            <button className="flex w-min items-center gap-x-2 rounded bg-ltPrimary hover:bg-primaryHover px-4 py-1 font-sansMed text-white">
              Send
              <IoSendSharp className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Footer
