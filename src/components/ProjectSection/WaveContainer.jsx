import { DownSeperator, UpSeperator } from "../../utilities/SectionSeperators"

const WaveContainer = ({ children }) => {
  return (
    <>
      <UpSeperator classList="dark:fill-dkSecondary fill-ltSecondary" />
      {children}
      <DownSeperator classList="dark:fill-dkSecondary fill-ltSecondary" />
    </>
  )
}
export default WaveContainer
