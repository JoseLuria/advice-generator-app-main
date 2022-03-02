import { useEffect, useState } from "react"
import "./AdviceCard.scss"
import PatternDividerDesktop from "../../assets/pattern-divider-desktop.svg"
import PatternDividerMobile from "../../assets/pattern-divider-mobile.svg"
import CustomButton from "../CustomButton/CustomButton"
import { motion } from "framer-motion"

const AdviceCard = ({id, children, action}) => {
  const [isMobile, setIsMobile] = useState(true)

  const adviceAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  useEffect(() => {
    if(window.innerWidth > 768){
      setIsMobile(false)
    }
  }, [])

  return (
    <motion.div
      variants={adviceAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="advice-container"
    >
      <main className="advice-card">
        <h1 className="advice-title">Advice #{id}</h1>
        <p className="advice-text">{`"${children}"`}</p>
        <img className="pattern-divider" src={ isMobile ? PatternDividerMobile : PatternDividerDesktop } alt="Pattern Divider"/>
      </main>
      <CustomButton action={action}/>
    </motion.div>
  )
}

export default AdviceCard
