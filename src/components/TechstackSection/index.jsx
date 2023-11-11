import TechStack from "./TechStack"
import techStachBg from "/images/techstack.svg"

const TechstackSection = ({ data }) => {
  return (
    <section className="h-full w-full max-w-[1280px] scroll-mt-14 p-4 md:min-h-[calc(100vh-4rem)] md:scroll-mt-16 md:p-10 lg:mx-auto" id="techstackSection">
      <div className="mb-8 text-center font-medium text-4xl sm:text-5xl md:text-7xl">{data?.sectionTitle}</div>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-x-8">
        <div className="w-4/5 flex-1">
          <img src={techStachBg} className="lg:max-w-96 xl:max-w-[32rem]" />
        </div>
        <div className="flex-1">
          <TechStack />
          <div className="mt-4 flex flex-col justify-center text-[#868e96] sm:text-xl">
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
