import Markdown from "react-markdown"
import { BsInstagram, BsGithub } from "react-icons/bs"
import { BiLogoLinkedin, BiLogoGmail} from "react-icons/bi"
import { IoMdChatbubbles } from "react-icons/io"
import {FiCode} from "react-icons/fi"

const IntroSection = ({data}) => {
  return (
    <section
      className="relative flex min-h-[calc(100vh-3.5rem)] w-full max-w-[1280px] scroll-mt-14 flex-row items-center p-4 md:min-h-[calc(100vh-4rem)] md:scroll-mt-16 md:items-center md:p-8 lg:mx-auto"
      id="introSection">
      <div className="flex flex-1 flex-col justify-center">
        <div className="font-sansBold text-5xl sm:text-6xl lg:text-7xl">{data?.sectionTitle}</div>
        <div className="mt-8 font-sansBold text-xl lg:text-3xl">
          <Markdown components={{strong:({children})=>(<strong className="text-ltPrimary">{children}</strong>)}}>
          {data?.description1}
          </Markdown>
        </div>
        <div className="mt-2 font-sansBold text-xl lg:text-3xl">{data?.description2}</div>
        <div className="mt-8 flex gap-x-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-myBlack hover:bg-[#2e2d2dd4] cursor-pointer">
            <a href={data?.socialLinks?.github} target="_blank" rel="noopener noreferrer">
              <BsGithub className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0e76a8] hover:bg-[#0e76a8eb] cursor-pointer">
            <a href={data?.socialLinks?.linkedin} target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4405f] hover:bg-[#e4405feb] cursor-pointer">
            <a href={data?.socialLinks?.instagram} target="_blank" rel="noopener noreferrer">
              <BsInstagram className="h-6 w-6 text-white" />
            </a>
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ea4335] hover:bg-[#ea4335eb] cursor-pointer">
            <a href={data?.socialLinks?.mail} rel="noopener noreferrer">
              <BiLogoGmail className="h-6 w-6 text-white" />
            </a>
          </span>
        </div>
        <div className="mt-8 flex gap-4 text-center font-sansBold text-sm uppercase text-white">
          <div
            className="max-w-[12rem] flex-1 cursor-pointer rounded bg-ltPrimary hover:bg-primaryHover active:hover:bg-primaryHover duration-200 px-3 py-2.5 flex items-center gap-x-1 justify-center"
            onClick={() => {
              document.getElementById("footerSection").scrollIntoView({ behavior: "smooth" })
            }}>
            <IoMdChatbubbles className="fill-white h-4 w-4"/>
            Contact me
          </div>
          <div
            className="max-w-[12rem] flex-1 cursor-pointer rounded bg-ltPrimary hover:bg-primaryHover active:hover:bg-primaryHover duration-200 px-3 py-2.5 flex items-center gap-x-1 justify-center leading-4"
            onClick={() => {
              document.getElementById("projectSection").scrollIntoView({ behavior: "smooth" })
            }}>
            <FiCode className=" h-5 w-5"/>
            See my work
          </div>
        </div>
      </div>
      <div className="hidden flex-1 justify-center sm:flex">
        <img src={data?.mainImg} className="max-w-80 lg:max-w-96 max-h-80 lg:max-h-96 xl:max-h-[32rem] xl:max-w-[32rem]" alt="Intro img" />
      </div>
    </section>
  )
}
export default IntroSection
