import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({total}) => {
    const totalForStripe = total * 100
    const publishableKey = 'pk_test_T7oLIIPPbIyu5LNu21Wyj0Lk00h7EOv6VU'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Metro Clothing' 
        billingAddress 
        shippingAddress 
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${total}`}
        amount={totalForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton