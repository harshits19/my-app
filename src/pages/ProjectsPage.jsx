import ProjectBox from "../components/ProjectSection/ProjectBox"
import UseTop from "../utilities/useTop"
import { ProjectPageData } from "../utilities/Constants"

const ProjectsPage = () => {
  const { movieApp, foodApp, videoApp, blogApp, foodApp2, newsApp, chatApp2, loginApp } = ProjectPageData
  return (
    <>
      <h1 className="flex w-full justify-center p-4 pb-4 pt-12 text-center font-sansMed text-4xl dark:text-white md:pb-8 md:pt-20 md:text-6xl lg:text-7xl">Projects I've worked on</h1>
      <ProjectBox data={movieApp} reversed="false" />
      <ProjectBox data={foodApp} reversed="true" />
      <ProjectBox data={videoApp} reversed="false" />
      {/* <ProjectBox data={blogApp} reversed="true" />
      <ProjectBox data={foodApp2} reversed="false" />
      <ProjectBox data={newsApp} reversed="true" />
      <ProjectBox data={chatApp2} reversed="false" />
      <ProjectBox data={loginApp} reversed="true" /> */}
      <UseTop />
    </>
  )
}
export default ProjectsPage