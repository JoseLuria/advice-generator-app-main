import "./App.scss"
import AdviceCard   from "../../components/AdviceCard/AdviceCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { AnimatePresence } from "framer-motion" 

function App() {
  const [adviceData, setAdviceData] = useState({})

  const handleGetAdvice = () => {
    setAdviceData({})
    axios.get("https://api.adviceslip.com/advice")
      .then(response => setAdviceData(response.data.slip))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    handleGetAdvice()
  }, [])

  const {advice, id} = adviceData

  return (
    <div className="App">
      <AnimatePresence>
        {
          adviceData.advice && <AdviceCard id={id} action={handleGetAdvice}>{advice}</AdviceCard>
        }
      </AnimatePresence>
    </div>
  )
}

export default App
