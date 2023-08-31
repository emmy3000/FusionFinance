// Desc: Dashboard page

//RRD imports
import { Link, useLoaderData } from 'react-router-dom';

//helper functions
import { createBudget, createExpense, fetchData, waait } from '../helpers'

// components
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Table from '../components/Table';

// Library imports
import { toast } from 'react-toastify';

//loader
export function dashboardLoader(){
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    const expenses = fetchData("expenses");
    return { userName, budgets, expenses }
}

// loader
export async function dashboardAction({ request }) {
    await waait()

    const data = await request.formData()
    const { _action, ...values } = Object.fromEntries(data)
    
    //new user submission
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome ${values.userName}!`)
        } catch (error) {
            throw new Error("There was a problem creating your account")
        }
    }

    if (_action === "createBudget") {
        try {
            // Create a new budget
            createBudget({
                name: values.newBudget,
                amount: values.newbudgetAmount,
            });
            return toast.success(`Budget created!`);
        } catch (error) {
            throw new Error("There was a problem creating your budget");
        }
    }

    if (_action === "createExpense") {
        try {
            // Create an expense
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })

            return toast.success(`Expense ${values.newExpense} created!`);
        } catch (error) {
            throw new Error("There was a problem creating your budget");
        }
    }
}    

const Dashboard = () => {
    const { userName, budgets, expenses } = useLoaderData()

    return (
        <>
            {userName ? (
                <div
                    className="dashboard"
                >
                    <h1>Welcome back <span className="accent">{userName}</span></h1>
                    <div
                        className='grid-sm'>
                        {
                            budgets && budgets.length > 0 ? (
                                <div className="grid-lg">
                                    <div className="flex-lg">
                                        <AddBudgetForm />
                                        <AddExpenseForm budgets={ budgets } />
                                    </div>
                                    <h3>Existing Budgets</h3>
                                    <div className="budgets">
                                        {
                                            budgets.map((budget) => (
                                                <BudgetItem key={budget.id} budget={budget} />
                                            ))
                                        }
                                    </div>
                                    {
                                        expenses && expenses.length > 0 && (
                                            <div className="grid-md">
                                                <h3>Recent Expenses</h3>
                                                <Table expenses={expenses.sort((a, b) => b.createdAt - a.createdAt).slice(0, 8)
                                                }
                                                />
                                                {
                                                    expenses.length > 8 && (
                                                        <Link to="expenses" className="btn btn--dark">
                                                            View all expenses
                                                        </Link>
                                                )}
                                            </div>
                                        )
                                    }
                                </div>) : (
                                    <div className="grid-sm">
                                        <p>Personal budgeting is the secret to financial freedom.</p>
                                        <p>Create a budget to get started!</p>
                                        <AddBudgetForm />
                                    </div>
                                )
                        }
                    </div>
                </div>
            ) : <Intro />}
        </>
    )
};

export default Dashboard
