import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_t1i6G0rgycjrVPw2NtBJKnJf007DBFB6LG';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return (
        <StripeCheckout
            stripeKey={publishableKey}
            token={onToken}
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is R${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            currency="ZAR"
        />
    );
};

export default StripeButton;
