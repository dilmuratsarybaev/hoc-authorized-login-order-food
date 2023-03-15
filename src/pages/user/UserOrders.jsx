import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import { getOrders } from '../../store/orders/order.thunk'

export const UserOrders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    const meals = useSelector((state) => state.orders.meals)

    return (
        <div>
            <Header />
            <List>
                {meals.map((meal) => {
                    return (
                        <StyledListItem key={meal._id}>
                            <p>Date: {meal.createdAt}</p>
                            {meal.items.map((item) => {
                                return (
                                    <SecondList key={item._id}>
                                        <p>{item.title}</p>
                                        <span>$ {item.price}</span>
                                    </SecondList>
                                )
                            })}
                        </StyledListItem>
                    )
                })}
            </List>
        </div>
    )
}

const List = styled.ul`
    margin-top: 120px;
    padding: 40px;
    background-color: #ffff;
    list-style: none;
    h2 {
        color: black;
    }
    p {
        color: #080808;
        font-size: 20px;
        font-weight: 700;
    }
    span {
        color: green;
        background-color: antiquewhite;
        padding: 10px;
        font-size: 20px;
        font-weight: 800;
        cursor: pointer;
    }
`
const StyledListItem = styled('div')`
    border: 2px solid black;
    padding: 20px;
    margin-top: 30px;
    background-color: bisque;
`
const SecondList = styled('li')`
    padding: 10px 40px;
    border: 1px solid black;
    margin-top: 20px;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
