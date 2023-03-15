import axiosInstance from '../config/mealInstance'

export const getBasketRequest = (token) => {
    return axiosInstance.get('/basket', { headers: { Authorization: token } })
}
export const addToBasketReq = (newItem, token) => {
    return axiosInstance.post(
        `/foods/${newItem.id}/addToBasket`,
        {
            amount: newItem.amount,
        },
        { headers: { Authorization: token } }
    )
}

export const updateBasketItemReq = (id, basketAmount, token) => {
    return axiosInstance.put(
        `/basketItem/${id}/update`,
        {
            amount: basketAmount,
        },
        { headers: { Authorization: token } }
    )
}
export const deleteBasketItemReq = (id, token) => {
    return axiosInstance.delete(`/basketItem/${id}/delete`, {
        headers: { Authorization: token },
    })
}
