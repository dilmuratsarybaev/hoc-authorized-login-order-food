import React from 'react'
import styled from 'styled-components'
import { styled as styledMuiMaterial } from '@mui/material'
import { Button } from '../../UI/Button'
import { ReactComponent as PlusIcon } from '../../../assets/icons/Vector3.svg'
import { TextField } from '@mui/material'
import { styled as styledStyledMui } from '@mui/system'
import { withAuthModal } from '../../hoc/withAuthModal'
import { addToBasket } from '../../../store/basket/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
const MealForm = ({ meal, amountChangeHandler, amount, showAuthModal }) => {
    const isAuthorized = useSelector((state) => state.auth.isAuthozired)
    console.log(isAuthorized)
    const dispatch = useDispatch()
    const submitHandler = (event) => {
        event.preventDefault()
        if (!isAuthorized) {
            return showAuthModal()
        }
        const basketItem = {
            id: meal._id,
            price: meal.price,
            title: meal.title,
            amount: +amount,
        }
        dispatch(addToBasket(basketItem))
    }
    return (
        <Container key={meal._id}>
            <StyledItemInfo>
                <StyledTitle>{meal.title}</StyledTitle>
                <ParagraphStyle>{meal.description}</ParagraphStyle>
                <StyledNumber>${meal.price}</StyledNumber>
            </StyledItemInfo>

            <ContainerCount>
                <div>
                    <Label htmlFor={meal.id}>Amount</Label>
                    <StyledInputTextField
                        type="number"
                        id={meal.id}
                        size={'small'}
                        InputLabelProps={{ shrink: true }}
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>

                <Button
                    onClick={submitHandler}
                    variant="contained"
                    borderStyled={'rounded'}
                >
                    <StyledIcon />
                    Add
                </Button>
            </ContainerCount>
        </Container>
    )
}

export default withAuthModal(MealForm)

const StyledItemInfo = styledMuiMaterial('div')(({ theme }) => ({
    ' p': {
        fontFamily: theme.typography.fontFamily,
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: theme.palette.secondary.dark,
    },
    marginBottom: '20px',
    marginTop: ' 24px',
}))

const StyledTitle = styledMuiMaterial('h4')(({ theme }) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    color: theme.palette.secondary.dark,
    marginBottom: ' 4px',
}))

const StyledNumber = styledMuiMaterial('span')(({ theme }) => ({
    fontFamily: 'Poppins',
    fontStyle: ' normal',
    fontWeight: 700,
    fontSize: ' 20px',
    lineHeight: '30px',
    color: theme.palette.secondary.light,
}))

const ContainerCount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const StyledIcon = styled(PlusIcon)`
    margin-right: 10px;
`
const ParagraphStyle = styled.p`
    margin-bottom: 4px;
`
const Container = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    :last-child {
        border-bottom: none;
        margin-bottom: 0rem;
    }
`
const Label = styledMuiMaterial('label')(({ theme }) => ({
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: ' 27px',
    color: theme.palette.secondary.dark,
    marginRight: '20px',
}))

const StyledInputTextField = styledStyledMui(TextField)({
    width: '4rem',
    fontSize: '1.5rem',
    marginBottom: '12px',
    color: '#fff',
    backgroundColor: '#fff',
})
