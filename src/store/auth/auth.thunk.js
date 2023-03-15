import { createAsyncThunk } from '@reduxjs/toolkit'
import singUp, { singIn } from '../../api/authService'
import { STORAGE_KEYS } from '../../lib/constants/common'

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await singUp(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const signIn = createAsyncThunk(
    'auth/signIn',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await singIn(payload)
            localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
    return localStorage.removeItem(STORAGE_KEYS.AUTH)
})
