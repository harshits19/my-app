import { IconsStack } from "../../assets/StackIcons"
const TechStack = () => {
  return (
    <div>
      <div className="mb-4 text-center font-sansMed text-3xl md:text-4xl">TechStack</div>
      <div className="flex flex-wrap justify-center gap-2">
        {IconsStack?.map((Icon,idx) => {
          return <Icon key={idx} classList="h-12 w-12 lg:h-16 lg:w-16" />
        })}
      </div>
    </div>
  )
}
export default TechStack
