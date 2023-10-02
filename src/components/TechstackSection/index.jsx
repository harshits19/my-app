import techstack from "../../assets/images/techstack.svg"
import TechStack from "./TechStack"

const TechstackSection = () => {
  return (
    <section className="h-full w-full max-w-[1280px] scroll-mt-14 p-4 md:h-[calc(100vh-4rem)] md:scroll-mt-16 md:p-8 lg:mx-auto" id="techstackSection">
      <div className="mb-8 text-center font-sansMed text-4xl md:text-6xl">Here's what I do</div>
      <div className="flex flex-col gap-4 lg:gap-x-8 md:flex-row md:items-center">
        <div className="flex-1 p-4 md:p-0">
          <img src={techstack} className="lg:max-w-96 xl:max-w-[32rem]" />
        </div>
        <div className="flex-1">
          <div className="">
            <TechStack />
          </div>
          <div className="mt-4 flex flex-col text-xl text-[#868e96]">
            <span>⚡ Develop highly interactive Front end / User Interfaces for your web applications</span>
            <span>⚡ Building responsive website front end using ReactJS</span>
            <span>⚡ Creating application backend in Node, Express & MongoDb</span>
            <span>⚡ Integration of third party services such as Firebase/ AWS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TechstackSection
