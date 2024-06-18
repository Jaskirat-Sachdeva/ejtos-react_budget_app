import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, remaining, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);

        if (value > 20000) {
            alert("The budget cannot exceed £20,000");
        } else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending £" + totalExpenses);
        } else if (value < remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
        } else {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
