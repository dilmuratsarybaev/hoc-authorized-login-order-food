import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { styled as styledMuiMaterial } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../../store/auth/auth.thunk'
export const SingIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
        setError('')
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
        setError('')
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            email,
            password,
        }
        dispatch(signIn(data))
            .unwrap()
            .then(() => navigate('/admin/meals'))
            .catch((e) => setError(e.response.data.message))
    }

    const isEmailValid = () => {
        return email.length === 0 || (email.length > 0 && email.includes('@'))
    }
    const isPasswordValid = () => {
        return (
            password.length === 0 ||
            (password.length >= 6 && password.length > 0)
        )
    }
    return (
        <StyledForm onSubmit={submitHandler}>
            <StyledTextField
                error={!isEmailValid}
                value={email}
                onChange={changeEmailHandler}
                label="email"
                type={'email'}
            />
            <StyledTextField
                error={!isPasswordValid}
                value={password}
                onChange={changePasswordHandler}
                label="password"
                type={'password'}
            />
            {error && (
                <Typography
                    textAlign={'center'}
                    sx={{ color: (theme) => theme.palette.error.main }}
                >
                    {error}
                </Typography>
            )}
            <Button variant="contained" type="submit">
                Sing In
            </Button>
            <StyledLink to={'/signup'}>Don't have an account </StyledLink>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    width: 40rem;
    background-color: #fff;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 1rem;
`
const StyledTextField = styledMuiMaterial(TextField)({
    marginBottom: '1rem',
    fontSize: '1.5rem',
})
const StyledLink = styled(Link)`
    margin-top: 1rem;
`
