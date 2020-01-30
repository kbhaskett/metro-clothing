export const addItemToCart = (cart, newItem) => {
    const existingItem = cart.find(
        item => item.id === newItem.id
    )
    if (existingItem) {
        return cart.map(
            item => item.id === newItem.id
            ? {...item, quantity: item.quantity + 1 }
            : item 
        )
    }

    return [...cart, {...newItem, quantity: 1}]
}

export const removeItemFromCart = (cart, itemToRemove) => {
    const existingItem = cart.find(
        item => item.id === itemToRemove.id
    )
    if (existingItem) {
        if (existingItem.quantity === 1) {
            return cart.filter(cartItem => cartItem.id !== itemToRemove.id);
        } else {
            return cart.map(
            item => item.id === itemToRemove.id
            ? {...item, quantity: item.quantity - 1 }
            : item 
            )
        }
    }

    return [...cart]
}

export const clearItemfromCart = (cart, itemToClear) => {
    return cart.filter(cartItem => cartItem.id !== itemToClear.id);
}