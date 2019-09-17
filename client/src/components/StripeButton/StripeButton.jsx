import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_t1i6G0rgycjrVPw2NtBJKnJf007DBFB6LG';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment, Please make sure you use the provider credit card.');
        });
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
