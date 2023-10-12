import { motion } from "framer-motion"

const FrameContainer = ({ children, direction }) => {
  return (
    <motion.div
      key={direction === "left" ? "HomePage" : "ProjectsPage"}
      initial={direction === "left" ? { opacity: 0, x: -1000 } : { opacity: 0, x: +1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={direction === "left" ? { opacity: 1, x: -1000 } : { opacity: 1, x: +1000 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      {children}
    </motion.div>
  )
}
export default FrameContainer
