import { BsInstagram, BsGithub } from "react-icons/bs"
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi"
import introBg from "../../assets/images/introBg.svg"

const IntroSection = () => {
  return (
    <section
      className="relative flex h-[calc(100vh-3.5rem)] w-full max-w-[1280px] scroll-mt-14 flex-row items-center p-4 md:h-[calc(100vh-4rem)] md:scroll-mt-16 md:items-center md:p-8 lg:mx-auto"
      id="introSection">
      <div className="flex flex-1 flex-col justify-center">
        <div className="font-sansBold text-5xl sm:text-6xl lg:text-7xl">Hello 👋.</div>
        <div className="mt-8 font-sansBold text-xl lg:text-3xl">
          I'm <span className="text-ltPrimary">Harshit Gaur.</span> Full-stack Developer,
        </div>
        <div className="mt-2 font-sansBold text-xl lg:text-3xl">Tech Enthusiast 🔥. Always learning.</div>
        <div className="mt-8 flex gap-x-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-myBlack">
            <a href="https://github.com/harshits19" target="_blank">
              <BsGithub className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0e76a8]">
            <a href="https://www.linkedin.com/in/harshitgaur19/" target="_blank">
              <BiLogoLinkedin className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4405f]">
            <a href="https://www.instagram.com/_harshitz/" target="_blank">
              <BsInstagram className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ea4335]">
            <a href="mailto:jai191912101@gmail.com">
              <BiLogoGmail className="h-6 w-6 text-white" />
            </a>
          </span>
        </div>
        <div className="mt-8 flex gap-4 text-center font-sansBold text-base text-white">
          <div className="max-w-[12rem] flex-1 cursor-pointer rounded bg-ltPrimary px-3 py-2.5"  onClick={() => {
          document.getElementById("footerSection").scrollIntoView({ behavior: "smooth" })
        }}>Contact me</div>
          <div className="max-w-[12rem] flex-1 cursor-pointer rounded bg-ltPrimary px-3 py-2.5"  onClick={() => {
          document.getElementById("projectSection").scrollIntoView({ behavior: "smooth" })
        }}>See my work</div>
        </div>
      </div>
      <div className="hidden flex-1 justify-center sm:flex">
        <img src={introBg} className="max-w-80 lg:max-w-96 max-h-80 lg:max-h-96 xl:max-h-[32rem] xl:max-w-[32rem]" />
      </div>
    </section>
  )
}
export default IntroSection
