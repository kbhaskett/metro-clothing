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