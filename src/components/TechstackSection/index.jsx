import TechStack from "./TechStack"
import techStachBg from "../../assets/images/techstack.svg"

const TechstackSection = ({ data }) => {
  return (
    <section className="h-full w-full max-w-[1280px] scroll-mt-14 p-4 md:min-h-[calc(100vh-4rem)] md:scroll-mt-16 md:p-8 lg:mx-auto" id="techstackSection">
      <div className="mb-8 text-center font-sansMed text-4xl md:text-6xl">{data?.sectionTitle}</div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center lg:gap-x-8">
        <div className="flex-1 p-4 md:p-0">
          <img src={techStachBg} className="lg:max-w-96 xl:max-w-[32rem]" />
        </div>
        <div className="flex-1">
          <TechStack />
          <div className="mt-4 flex flex-col text-xl text-[#868e96]">
            {data?.skillsDescription?.map((item, idx) => {
              return <span key={idx}>{item}</span>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default TechstackSection
