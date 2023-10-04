import Markdown from "react-markdown"
import { BsGithub } from "react-icons/bs"
import { MdOpenInNew } from "react-icons/md"
import { filterStack } from "../../assets/StackIcons"

const ProjectBox = ({ data, reversed }) => {
  const newStack = filterStack(data.stackUsed)

  return (
    <div className={`-my-0.5 h-full w-full py-8 md:py-16 ${reversed ? "dark:text-white" : "bg-ltSecondary dark:bg-dkSecondary dark:text-white"}`}>
      <div className="text-center text-4xl md:text-6xl">{data?.title}</div>
      <div className="relative flex max-w-[1280px] flex-col gap-4 p-4 md:flex-row md:px-10 md:py-10 lg:mx-auto lg:gap-8">
        <div className={`flex-1 ${reversed && "order-1 md:order-2"}`}>
          <img src={data?.mainImg} className="aspect-video w-full rounded" loading="lazy" alt="project img"/>
        </div>
        <div className={`flex-1 text-left ${reversed && "order-2 md:order-1"}`}>
          <div className="text-base">
            {data?.description?.map((item, idx) => (
              <Markdown
                key={idx}
                components={{
                  strong: ({ children }) => <span className="text-ltPrimary">{children}</span>,
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-ltPrimary">
                      {children}
                    </a>
                  ),
                }}>
                {item}
              </Markdown>
            ))}
          </div>
          <div className="mt-2 flex gap-4 text-center font-sansBold text-sm text-white">
            <a href={data?.links?.github} className="contents" target="_blank" rel="noopener noreferrer">
              <div className="hover:bg-primaryHover active:hover:bg-primaryHover flex max-w-fit flex-1 cursor-pointer items-center gap-x-1 rounded-3xl bg-ltPrimary px-2.5 py-1.5 leading-4 duration-200">
                Source Code
                <BsGithub />
              </div>
            </a>
            <a href={data?.links?.liveDemo} className="contents" target="_blank" rel="noopener noreferrer">
              <div className="hover:bg-primaryHover active:hover:bg-primaryHover flex max-w-fit flex-1 cursor-pointer items-center gap-x-1 rounded-3xl bg-ltPrimary px-2.5 py-1.5 leading-4 duration-200">
                Live Project
                <MdOpenInNew />
              </div>
            </a>
          </div>
          <div className="my-4 flex flex-wrap justify-start gap-2">
            {newStack?.map((Component, index) => (
              <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center" key={index}>
                <Component />
                <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">{Component?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectBox
