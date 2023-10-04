import { DownSeperator, UpSeperator } from "../../assets/SectionSeperators"

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
