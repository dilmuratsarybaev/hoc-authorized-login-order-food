import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { styled as styledMuiMaterial } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/auth/auth.thunk'
import { UserRole } from '../../lib/constants/common'
export const SingUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const changeNameHandler = (e) => {
        setName(e.target.value)
    }
    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const changeConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name,
            email,
            password,
            role: UserRole.USER,
        }
        dispatch(signUp(data))
            .unwrap()
            .then(() => navigate('/'))
    }
    return (
        <StyledForm onSubmit={submitHandler}>
            <StyledTextField
                value={name}
                onChange={changeNameHandler}
                label="name"
                type={'text'}
            />
            <StyledTextField
                value={email}
                onChange={changeEmailHandler}
                label="email"
                type={'text'}
            />
            <StyledTextField
                value={password}
                onChange={changePasswordHandler}
                label="password"
                type={'password'}
            />
            <StyledTextField
                value={confirmpassword}
                onChange={changeConfirmPasswordHandler}
                label="confirm password"
                type={'password'}
            />
            <Button variant="contained" type="submit">
                Sing Up
            </Button>
            <Link to={'/signin'}>Have an account?</Link>
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
