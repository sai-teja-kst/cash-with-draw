// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onDecrement} = props
  const {value} = details

  const clickBtn = () => {
    onDecrement(value)
  }

  return (
    <li>
      <button type="button" onClick={clickBtn}>
        <p>{value}</p>
      </button>
    </li>
  )
}

export default DenominationItem
