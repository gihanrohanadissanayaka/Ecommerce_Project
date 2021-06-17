import React from 'react';
import { AttachMoney } from '@material-ui/icons';
import { Typography, Button, Divider } from '@material-ui/core';
//import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

//const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, backStep, nextStep }) => {
    //console.log(checkoutToken)

    const payment = () => {
         nextStep();
    };
    return (
        <div>
            <Review checkoutToken={checkoutToken}/>
            <Divider/>
            <Typography variant='h6' gutterBottom style={{ margin:'20px 0' }}>Payment method</Typography>
            <Typography variant='subtitle1' gutterBottom style={{ margin:'20px 0', color: 'blue' }}>Cash on Delivery <AttachMoney/></Typography>
            <Divider/><br/>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <Button variant='outlined' onClick={backStep}>Back</Button>
                <Button type='submit' variant='contained' color="primary" onClick={ payment }>
                    Place Order
                </Button>
            </div>
        </div>
    )
} 

export default PaymentForm;