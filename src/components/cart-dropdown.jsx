import React from 'react'
import {connect} from 'react-redux'

import CustomButton from './custom-button'
import CartItem from './cart-item'
import { selectCartItems } from '../redux/cart/cart-selector'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(
                cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            )}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropdown) 