import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.currency}{props.cost}</td>
            <td>
                <FaPlusCircle
                    size='1.5em'
                    color="green"
                    cursor="pointer"
                    onClick={() => increaseAllocation(props.name)}
                />
            </td>
            <td>
                <FaMinusCircle
                    size='1.5em'
                    color="red"
                    cursor="pointer"
                    onClick={() => decreaseAllocation(props.name)}
                />
            </td>
            <td>
                <TiDelete
                    size='1.5em'
                    cursor="pointer"
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;
