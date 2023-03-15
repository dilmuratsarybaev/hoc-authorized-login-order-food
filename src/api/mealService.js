import axiosInstance from '../config/mealInstance'

export const postMealRequest = (newMeal) => {
    return axiosInstance.post('/foods', newMeal, {})
}

export const getMealRequest = () => {
    return axiosInstance.get('/foods')
}

export const deleteMealRequest = (id) => {
    return axiosInstance.delete(`/foods/${id}`, {})
}

export const editMealRequest = (data) => {
    return axiosInstance.put(`/foods/${data.id}`, data, {})
}
