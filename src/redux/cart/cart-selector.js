import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotalQuantity = createSelector(
    [selectCartItems],
     cartItems =>
        cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
)
