import { DownSeperator, UpSeperator } from "../../assets/SectionSeperators"
import ItemBox from "./ItemBox"
import ItemBoxII from "./ItemBoxII"
import ItemBoxIII from "./ItemBoxIII"

const ProjectSection = () => {
  return (
    <section className="mt-16 scroll-mt-14 md:scroll-mt-16" id="projectSection">
      <div className="text-center font-sansMed text-4xl md:text-6xl mb-8">Featured Projects</div>
      <UpSeperator classList="dark:fill-dkSecondary fill-ltSecondary"/>
      <ItemBox />
      <DownSeperator classList="dark:fill-dkSecondary fill-ltSecondary"/>
      <ItemBoxII />
      <UpSeperator classList="dark:fill-dkSecondary fill-ltSecondary"/>
      <ItemBoxIII />
      <DownSeperator classList="dark:fill-dkSecondary fill-ltSecondary"/>
    </section>
  )
}
export default ProjectSection
