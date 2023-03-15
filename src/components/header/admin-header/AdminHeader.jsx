import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled as StyledMui } from '@mui/system'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/auth/auth.thunk'

const menus = [
    {
        path: 'meals',
        title: 'Meals',
    },
    {
        path: 'orders',
        title: 'Orders',
    },
]

export const AdminHeader = () => {
    const dispatch = useDispatch()
    const signOutHandler = () => {
        dispatch(signOut())
    }
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Grid>
                    {menus.map((item) => (
                        <StyledNavlink key={item.path} to={item.path}>
                            {item.title}
                        </StyledNavlink>
                    ))}
                </Grid>
                <StyledButton variant="contained" onClick={signOutHandler}>
                    Log Out
                </StyledButton>
            </StyledToolbar>
        </AppBar>
    )
}

const StyledToolbar = StyledMui(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
})
const StyledButton = StyledMui(Button)({
    color: '#01010',
    background: '#9c9393',
})
const StyledNavlink = styled(NavLink)`
    font-size: 1.5rem;
    margin-left: 1rem;
    text-decoration: none;
    color: #97afc3;
    font-weight: 800;
    &.active {
        color: #151617;
    }
`
