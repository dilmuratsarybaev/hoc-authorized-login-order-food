import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authSlice } from './auth/auth.slice'
import { basketSlice } from './basket/basketSlice'
import { mealsSlice } from './meals/mealsSlice'
import { orderSlice } from './orders/order.slice'
import { uiSlice } from './ui/uiSlice'

const rootReducer = combineReducers({
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [orderSlice.name]: orderSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
