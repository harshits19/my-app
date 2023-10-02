import { Html5, Css3, Javascript, Reactjs, Nodejs, Expressjs, Mongodb, Mysql, Git, Tailwind, Firebase } from "../../assets/StackIcons"
const TechStack = () => {
  return (
    <div>
      <div className="font-sansMed mb-4 text-center text-3xl md:text-4xl">TechStack</div>
      <div className="flex flex-wrap justify-center gap-2">
        <Html5 classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Css3 classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Javascript classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Reactjs classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Nodejs classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Tailwind classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Expressjs classList="h-12 w-12 lg:h-16 lg:w-16 dark:fill-white" />
        <Mongodb classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Firebase classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Git classList="h-12 w-12 lg:h-16 lg:w-16" />
        <Mysql classList="h-12 w-12 lg:h-16 lg:w-16" />
      </div>
    </div>
  )
}
export default TechStack
