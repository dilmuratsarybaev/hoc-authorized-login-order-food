import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { styled as StyledMui } from '@mui/system'
import { Modal } from '../../components/UI/Modal'
import { AdminMealForm } from './AdminMealForm'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../../store/meals/meals.thunk'
import { AdminMealItem } from './AdminMealItem'
export const AdminMeals = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [edit, setEdit] = useState(false)
    const [mealId, setMealId] = useState('')
    const newMeals = useSelector((state) => state.meals.meals)
    const [isModalVisible, setModalVisible] = useState(false)
    useEffect(() => {
        dispatch(getMeals())
    }, [dispatch])
    const openModalHandler = (e) => {
        e.preventDefault()
        setModalVisible((prevState) => !prevState)
    }

    return (
        <Container>
            <StyledButton variant="contained" onClick={openModalHandler}>
                ADD MEALS
            </StyledButton>
            {isModalVisible && (
                <Modal onClose={openModalHandler}>
                    <AdminMealForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        setModalVisible={setModalVisible}
                        price={price}
                        setPrice={setPrice}
                        edit={edit}
                        setEdit={setEdit}
                        mealId={mealId}
                    />{' '}
                </Modal>
            )}
            <AdminMealItem
                newMeals={newMeals}
                setTitle={setTitle}
                setDescription={setDescription}
                setPrice={setPrice}
                setModalVisible={setModalVisible}
                setEdit={setEdit}
                setMealId={setMealId}
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: #d8c12b;
    padding: 0rem 3rem;
`
const StyledButton = StyledMui(Button)({
    marginTop: '1rem',
    backgroundColor: '#a16b6b',
})
