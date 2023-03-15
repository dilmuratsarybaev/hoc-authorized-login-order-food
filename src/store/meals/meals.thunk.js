import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    deleteMealRequest,
    editMealRequest,
    getMealRequest,
    postMealRequest,
} from '../../api/mealService'

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await getMealRequest()
            return data.data
        } catch (error) {
            return rejectWithValue('Something wents wrong')
        }
    }
)

export const postMeals = createAsyncThunk(
    'meals/Postmeals',
    async (newMeal, { getState, rejectWithValue, dispatch }) => {
        try {
            await postMealRequest(newMeal)
            dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removeMeals = createAsyncThunk(
    'meals/deleteMeals',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            await deleteMealRequest(id)
            dispatch(getMeals())
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateMeals = createAsyncThunk(
    'meals/updateMeals',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            await editMealRequest(data)
            dispatch(getMeals())
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
