import { MainIconStack } from "../../utilities/StackIcons"

const TechStack = () => {
  return (
    <>
      <div className="mb-4 text-center font-medium text-4xl md:text-5xl">TechStack</div>
      <div className="flex flex-wrap justify-start">
        {MainIconStack?.map((Icon, idx) => {
          return (
            <div className="flex w-1/5 flex-col items-center p-2 sm:px-4 sm:py-2" key={idx}>
              <p className="pb-0.5 text-xs sm:font-medium text-gray-900 dark:text-white/50">{Icon.displayName}</p>
              <Icon classList="max-h-[5rem] max-w-[5rem]" />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default TechStack
