import { BsInstagram, BsGithub } from "react-icons/bs"
import { BiLogoLinkedin, BiLogoGmail, BiChevronDown } from "react-icons/bi"
import introBg from "../../assets/images/introBg.svg"

const IntroSection = () => {
  return (
    <div className="relative flex h-[calc(100vh-3.5rem)] w-full flex-row items-center p-4 md:h-[calc(100vh-4rem)] md:items-center md:px-10 md:py-10 lg:px-16 xl:px-32">
      <div className="flex flex-1 flex-col justify-center">
        <div className="font-sansBold text-5xl sm:text-6xl lg:text-7xl">Hello 👋.</div>
        <div className="font-sansBold mt-8 text-xl lg:text-3xl">
          I'm <span className="text-ltPrimary">Harshit Gaur.</span> Full-stack Developer,
        </div>
        <div className="font-sansBold mt-2 text-xl lg:text-3xl">Tech Enthusiast 🔥. Always learning.</div>
        <div className="mt-8 flex gap-x-2">
          <span className="bg-myBlack flex h-11 w-11 items-center justify-center rounded-full">
            <a href="#">
              <BsGithub className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0e76a8]">
            <a href="#">
              <BiLogoLinkedin className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4405f]">
            <a href="#">
              <BsInstagram className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ea4335]">
            <a href="#">
              <BiLogoGmail className="h-6 w-6 text-white" />
            </a>
          </span>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="bg-ltPrimary font-sansBold max-w-[12rem] flex-1 cursor-pointer rounded px-3 py-2.5 text-center text-base text-white">Contact me</div>
          <div className="bg-ltPrimary font-sansBold max-w-[12rem] flex-1 cursor-pointer rounded px-3 py-2.5 text-center text-base text-white">See my work</div>
        </div>
      </div>
      <div className="hidden flex-1 justify-center sm:flex">
        <img src={introBg} className="max-w-80 lg:max-w-96 max-h-80 lg:max-h-96 xl:max-h-[32rem] xl:max-w-[32rem]" />
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <BiChevronDown className="text-ltPrimary h-12 w-12 rounded-full p-1 hover:bg-[#9797972b] active:bg-[#9797972b] dark:text-white" />
      </div>
    </div>
  )
}
export default IntroSection
