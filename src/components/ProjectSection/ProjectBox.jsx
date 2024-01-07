import Markdown from "react-markdown"
import WaveContainer from "./WaveContainer"
import { BsGithub } from "react-icons/bs"
import { MdOpenInNew } from "react-icons/md"
import { filterStack } from "../../utilities/StackIcons"

const ProjectBox = ({ data, reversed }) => {
  const newStack = filterStack(data?.stackUsed)

  const Project = () => {
    const imgURL = new URL(`${data?.imageURL}`, import.meta.url).href
    return (
      <div className={`-my-0.5 h-full w-full py-8 md:py-16 ${reversed === "true" ? "dark:text-white" : "bg-ltSecondary dark:bg-dkSecondary dark:text-white"}`}>
        <div className="text-4xl font-medium text-center md:text-6xl">{data?.title}</div>
        <div className="relative flex max-w-[1280px] flex-col gap-4 p-4 md:px-10 md:py-10 lg:mx-auto lg:flex-row lg:gap-8">
          {data?.imageURL && (
            <div className={`flex-1 ${reversed === "true" && "order-1 lg:order-2"}`}>
              <img src={imgURL} className="w-full rounded aspect-video" alt="project img" />
            </div>
          )}
          <div className={`flex-1 text-left ${reversed === "true" && "order-2 lg:order-1"}`}>
            <div className="text-base">
              {data?.description?.map((item, idx) => (
                <Markdown
                  className="py-0.5"
                  key={idx}
                  components={{
                    strong: ({ children }) => <span className="text-primaryHover dark:text-ltPrimary">{children}</span>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primaryHover dark:text-ltPrimary">
                        {children}
                      </a>
                    ),
                  }}>
                  {item}
                </Markdown>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-sm font-medium text-center text-white">
              {data?.links?.github && (
                <a href={data?.links?.github} className="contents" target="_blank" rel="noopener noreferrer">
                  <div className="flex max-w-fit flex-1 cursor-pointer items-center gap-x-1 rounded-3xl bg-ltPrimary px-2.5 py-1.5 leading-4 duration-200 hover:bg-primaryHover active:hover:bg-primaryHover">
                    Source Code
                    <BsGithub />
                  </div>
                </a>
              )}
              {data?.links?.liveDemo && (
                <a href={data?.links?.liveDemo} className="contents" target="_blank" rel="noopener noreferrer">
                  <div className="flex max-w-fit flex-1 cursor-pointer items-center gap-x-1 rounded-3xl bg-ltPrimary px-2.5 py-1.5 leading-4 duration-200 hover:bg-primaryHover active:hover:bg-primaryHover">
                    Live Project
                    <MdOpenInNew />
                  </div>
                </a>
              )}
            </div>
            <div className="grid grid-cols-6 pt-4 gap-x-2 sm:gap-x-4">
              {newStack?.map((Component, index) => (
                <div className="flex flex-col items-center group" key={index}>
                  <Component classList="aspect-square" />
                  <p className="invisible pt-1 text-xs font-medium group-hover:visible md:text-sm">{Component?.displayName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return reversed === "false" ? (
    <WaveContainer>
      <Project />
    </WaveContainer>
  ) : (
    <Project />
  )
}
export default ProjectBox
