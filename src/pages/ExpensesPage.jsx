
//RRD imports
import { useLoaderData } from "react-router-dom";

//helper imports
import { fetchData } from "../helpers";

//loader
export function expensesLoader(){
  const expenses = fetchData("expenses");
  return { expenses }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div>ExpensesPage</div>
  )
}

export default ExpensesPage
