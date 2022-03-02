import "./CustomButton.scss"
import IconDice from "../../assets/icon-dice.svg"

const CustomButton = ({action}) => {
  return (
    <button
      onClick={action}
      className="advice-button"
    >
      <img src={IconDice} alt="Dice Icon"/>
    </button>
  )
}

export default CustomButton
