import React from 'react'
import { Meals } from '../../components/meals/Meals'
import { Summary } from '../../components/summary/Summary'

export const MealsPage = () => {
    return (
        <div>
            <Summary />
            <Meals />
        </div>
    )
}
