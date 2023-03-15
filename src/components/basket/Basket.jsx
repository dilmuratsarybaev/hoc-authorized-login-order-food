import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
    deleteBasketItem,
    updatedBasketItem,
} from '../../store/basket/basketSlice'
import { submitOrder } from '../../store/orders/order.thunk'
import { uiActions } from '../../store/ui/uiSlice'
import { Modal } from '../UI/Modal'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'

export const Basket = ({ onClose }) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.basket.items)

    const decrementAmount = (id, amount) => {
        if (amount > 1) {
            dispatch(updatedBasketItem({ amount: amount - 1, id }))
        } else {
            dispatch(deleteBasketItem(id))
        }
    }

    const incrementAmount = (id, amount) => {
        dispatch(updatedBasketItem({ amount: amount + 1, id }))
    }

    const getTotalPrice = () => {
        const sum = items.reduce(
            (sum, { amount, price }) => sum + amount * price,
            0
        )
        return sum
    }

    const onOrderSubmitHandler = async () => {
        try {
            await dispatch(submitOrder(getTotalPrice())).unwrap()
            dispatch(
                uiActions.showSnackbar({
                    message: 'Order completed successfully',
                    severity: 'success',
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showSnackbar({
                    severity: 'error',
                    message: 'Order failed try again later',
                })
            )
        } finally {
            onClose()
        }
    }

    return (
        <>
            <Modal onClose={onClose}>
                <Content>
                    {items.length ? (
                        <FixedHeightContainer>
                            {items.map((item) => {
                                return (
                                    <BasketItem
                                        key={item._id}
                                        item={item}
                                        decrementAmount={() =>
                                            decrementAmount(
                                                item._id,
                                                item.amount
                                            )
                                        }
                                        incrementAmount={() =>
                                            incrementAmount(
                                                item._id,
                                                item.amount
                                            )
                                        }
                                    />
                                )
                            })}
                        </FixedHeightContainer>
                    ) : null}

                    <TotalAmount
                        price={getTotalPrice()}
                        onClose={onClose}
                        onOrder={onOrderSubmitHandler}
                    />
                </Content>
            </Modal>
        </>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem 1rem;
`

const FixedHeightContainer = styled.div`
    max-height: 228px;
    overflow-y: scroll;
`
