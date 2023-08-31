//helper functions
import { calculateSpentBudget, formatCurrency, formatPercentage } from "../helpers";


const BudgetItem = ({ budget }) => {
    const { id, name, amount, color } = budget;
    const spent = calculateSpentBudget(id);

  return (
      <div
          className="budget"
          style={{
              "--accent": color,
          }}
      >
          <div className="progress-text">
              <h4>{name}</h4>
              <p>{formatCurrency(amount)} Budgeted</p>
              <progress max={amount} value={spent}>
                  {formatPercentage(spent / amount)}
              </progress>
              <div className="progress-text">
                  <small>{formatCurrency(spent)}spent</small>
                  <small>{ formatCurrency(amount - spent) }remaining</small>
              </div>
          </div>
      </div>
  )
}

export default BudgetItem
