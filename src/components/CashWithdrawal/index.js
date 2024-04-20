// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrement = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    console.log(denominationsList)

    const {amount} = this.state
    console.log(amount)

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1>Sarah Williams</h1>
        </div>
        <div className="bg-card">
          <p>Your Balance</p>
          <p>{amount}</p>
        </div>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <ul className="list-container">
          {denominationsList.map(eachItem => (
            <DenominationItem
              details={eachItem}
              key={eachItem.id}
              onDecrement={this.onDecrement}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
