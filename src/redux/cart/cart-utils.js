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

export const clearItemfromCart = (cart, itemToClear) => {
    return cart.filter(cartItem => cartItem.id !== itemToClear.id);
}