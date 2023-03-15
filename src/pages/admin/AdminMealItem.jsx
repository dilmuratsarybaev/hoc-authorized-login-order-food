import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeMeals } from '../../store/meals/meals.thunk'

export const AdminMealItem = ({
    newMeals,
    setTitle,
    setPrice,
    setDescription,
    setModalVisible,
    setEdit,
    setMealId,
}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {newMeals.map((meal) => {
                const deleteMealHandler = (e) => {
                    dispatch(removeMeals(meal._id))
                }
                const editMealHandler = () => {
                    setTitle(meal.title)
                    setPrice(meal.price)
                    setDescription(meal.description)
                    setModalVisible(true)
                    setEdit((prevState) => !prevState)
                    setMealId(meal._id)
                }

                return (
                    <List key={meal._id}>
                        <li>{meal.title}</li>
                        <li>
                            {meal.description} <span>{meal.price}$</span>
                        </li>
                        <Container>
                            <Button
                                variant="contained"
                                onClick={editMealHandler}
                            >
                                edit
                            </Button>
                            <Button
                                variant="contained"
                                onClick={deleteMealHandler}
                            >
                                X
                            </Button>
                        </Container>
                    </List>
                )
            })}
        </div>
    )
}
const List = styled.ul`
    background-color: #fff;
    margin-top: 1rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
const Container = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-around;
`
