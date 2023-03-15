import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRole } from '../../lib/constants/common'
import { signIn, signOut, signUp } from './auth.thunk'

const getInialstate = () => {
    const json = localStorage.getItem(STORAGE_KEYS.AUTH)
    if (json) {
        const userData = JSON.parse(json)
        return {
            isAuthorized: true,
            token: userData.token,
            user: {
                name: userData.user.name,
                email: userData.user.email,
                role: userData.user.role,
            },
        }
    }
    return {
        isaAuthorized: false,
        token: '',
        user: { name: '', email: '', role: UserRole.GUEST },
    }
}

const initialState = {
    isAuthozired: false,
    ...getInialstate(),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.isAuthozired = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.isAuthozired = true
            state.token = payload.token
            state.user = {
                name: payload.user.name,
                email: payload.user.email,
                role: payload.user.role,
            }
        })
        builder.addCase(signOut.fulfilled, (state) => {
            state.isAuthozired = false
            state.token = ''
            state.user = {
                name: '',
                email: '',
                role: UserRole.GUEST,
            }
        })
    },
})
