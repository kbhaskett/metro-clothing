import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotalPrice} from '../redux/cart/cart-selector'

import CheckoutItem from '../components/checkout-item'
import './checkoutPage.styles.scss'

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'><span>Product</span></div>
            <div className='header-block'><span>Description</span></div>
            <div className='header-block'><span>Quantity</span></div>
            <div className='header-block'><span>Price</span></div>
            <div className='header-block'><span>Remove</span></div>
        </div>
        <div className=''>
            {cartItems.map(
                cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
        </div>
        <div className='total'>Total: ${totalPrice}</div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps) (CheckoutPage)