import React, { useState } from 'react'

import MealForm from './MealForm'

export const MealItem = ({ meal }) => {
    const [amount, setAmount] = useState(1)

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    return (
        <MealForm
            amountChangeHandler={amountChangeHandler}
            meal={meal}
            amount={amount}
        />
    )
}
