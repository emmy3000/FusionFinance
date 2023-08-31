//helper functions

export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000));

const generateRandomColor = () => { 
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength *34} 65% 50%`;
};

// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
    const newItem = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: Date.now(),
            amount: +amount,
            color: generateRandomColor()
    }
    const existingBudget = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",
        JSON.stringify([...existingBudget, newItem]));
};

// create expense
export const createExpense = ({ name, amount, budgetId }) => {
    const newItem = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: Date.now(),
            amount: +amount,
            budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? [];
    return localStorage.setItem("expenses",
        JSON.stringify([...existingExpenses, newItem]));
};

// delete item from local storage
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key);
};

//total spent by budget
export const calculateSpentBudget = (budgetId) => { 
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => { 
        //check if expense.id === budgetId passed in
        if (expense.budgetId !== budgetId) return acc;
        
        //add the current expense amount to the accumulator
        return acc += expense.amount;
    }, 0)
    return budgetSpent;
}

//FORMATTING

// Format date
export const formatDateToLocaleString = (epoch) => {
    return new Date(epoch).toLocaleDateString();
 }

// Formating percentages
export const formatPercentage = (amt) => { 
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0
    });
}

// Format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD'
    });
}