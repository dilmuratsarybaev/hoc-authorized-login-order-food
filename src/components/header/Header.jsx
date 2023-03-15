import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getBasket } from '../../store/basket/basketSlice'
import { uiActions } from '../../store/ui/uiSlice'
import { BasketButton } from '../basket/BasketButton'
import { styled as styleMuiMaterial } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '../../store/auth/auth.thunk'
import { withAuthModal } from '../hoc/withAuthModal'
const Header = ({ onShowBasket, showAuthModal, ...rest }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthorized = useSelector((state) => state.auth.isAuthozired)
    const items = useSelector((state) => state.basket.items)
    const theme = useSelector((state) => state.ui.themeMode)
    const [animationClass, setAnimationClass] = useState('')
    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch])
    const calculateSumAmout = () => {
        const sum = items.reduce((s, item) => {
            return s + item.amount
        }, 0)
        return sum
    }

    useEffect(() => {
        setAnimationClass('bump')

        const id = setTimeout(() => {
            setAnimationClass('')
        }, 300)

        return () => {
            clearTimeout(id)
        }
    }, [items])

    const themeChangeHandler = () => {
        const themeMode = theme === 'light' ? 'dark' : 'light'
        dispatch(uiActions.changeTheme(themeMode))
    }
    const signInHandler = () => {
        navigate('/signin')
    }
    const signOutHandler = () => {
        dispatch(signOut())
        navigate('/signup')
    }
    const showBasketHandler = () => {
        if (!isAuthorized) {
            return showAuthModal()
        }
        return onShowBasket()
    }
    return (
        <Container {...rest}>
            <Logo>
                <StyledLink to={'/'}>React Meals</StyledLink>
            </Logo>
            <BasketContainer>
                <BasketButton
                    className={animationClass}
                    onClick={showBasketHandler}
                    count={calculateSumAmout()}
                />
                <StyledLink to="/userorders">My orders</StyledLink>
                <StyledMuiButton
                    onClick={themeChangeHandler}
                    variant="contained"
                >
                    {theme === 'light' ? 'Turn dark mode' : 'Turn light mode'}
                </StyledMuiButton>
                {isAuthorized ? (
                    <Button onClick={signOutHandler} variant="contained">
                        Sign Out
                    </Button>
                ) : (
                    <Button onClick={signInHandler} variant="contained">
                        Sign IN
                    </Button>
                )}
            </BasketContainer>
        </Container>
    )
}
export default withAuthModal(Header)
const BasketContainer = styled.div`
    display: flex;
    align-items: center;
`
const Container = styleMuiMaterial('header')(({ theme }) => ({
    position: 'fixed',
    zIndex: 1,
    top: 0,
    width: '100%',
    height: '101px',
    display: ' flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ' 0px 120px',
    backgroundColor: theme.palette.primary.main,
    '.bump ': {
        animation: 'bump 300ms ease-out',
    },

    ' @keyframes bump': {
        '0% ': {
            transform: 'scale(1)',
        },
        '10% ': {
            transform: 'scale(0.9)',
        },
        ' 30% ': {
            transform: 'scale(1.1)',
        },
        '50%': {
            transform: ' scale(1.15)',
        },
        ' 100%': {
            transform: 'scale(1)',
        },
    },
}))

const Logo = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #ffffff;
`
const StyledMuiButton = styleMuiMaterial(Button)(({ theme }) => ({
    fontSize: '10px',
    background: theme.palette.primary.light,
    marginLeft: '10px',
    marginRight: '10px',
}))
const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 1rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: 800;
`
