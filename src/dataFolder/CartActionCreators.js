import { ActionTypes } from "./Types";

export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});
export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: {
        product,
        quantity
    }
});
export const removeCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_REMOVE,
    payload: {
        product, quantity
    }
});
export const clearCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_CLEAR,

})