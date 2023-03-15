import { Button, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { styled as StyledMui } from '@mui/system'
import { useDispatch } from 'react-redux'
import { postMeals, updateMeals } from '../../store/meals/meals.thunk'
export const AdminMealForm = ({
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    edit,
    mealId,
    setModalVisible,
}) => {
    const dispatch = useDispatch()

    const changeTitleHandler = (e) => {
        setTitle(e.target.value)
    }
    const changeDescriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const changePriceHandler = (e) => {
        setPrice(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newData = {
            title,
            description,
            price: +price,
        }
        dispatch(postMeals(newData))
        setModalVisible(false)
    }
    const editHandler = (e) => {
        e.preventDefault()
        const editData = {
            title,
            description,
            price: +price,
            id: mealId,
        }
        dispatch(updateMeals(editData))
        setModalVisible(false)
    }
    return (
        <Container>
            <StyledTextField
                type={'text'}
                label="Title"
                value={title}
                onChange={changeTitleHandler}
            />
            <StyledTextField
                type={'text'}
                label="Description"
                value={description}
                onChange={changeDescriptionHandler}
            />
            <StyledTextField
                type={'number'}
                label="Price"
                value={price}
                onChange={changePriceHandler}
            />
            {edit ? (
                <Button variant="contained" onClick={editHandler}>
                    Edit
                </Button>
            ) : (
                <Button variant="contained" onClick={submitHandler}>
                    Send
                </Button>
            )}
        </Container>
    )
}
const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`
const StyledTextField = StyledMui(TextField)({
    width: '30rem',
    marginBottom: '1rem',
})
