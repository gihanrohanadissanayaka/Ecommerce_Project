import React, { useState, useEffect } from 'react';
import { GetApp } from '@material-ui/icons';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyle from './styles';
import deliverylogo from '../../../assets/deliverylogo.jpg';
import logo from '../../../assets/download.jpg';
import logopro from '../../../assets/deliveproce.jpg';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
const steps = [ 'Shipping address', 'Payment details'];

const Checkout = ({ cart, refreshCart }) => {
    const [activeStep, setActiveStep ] = useState(0);
    const [ checkoutToken, setCheckoutToken ] = useState(null);
    const [ shippingData, setShippingData ] = useState({});

    const classes = useStyle();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                console.log(token);
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1 );
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1 );

    let printRecipt = () => {
        
        const doc = new jsPDF();

        doc.addImage(logo, "JPEG", 10, 10, 30, 20);
        doc.setFont("courier", "bold");
        doc.setFontSize(30);
        doc.text("Mura Developers", 60, 20);

        doc.setFont("courier", "normal");
        doc.setFontSize(12);
        doc.text("Happy Shopping !!", 110, 30);
        doc.text(cart.id, 150, 5);
        doc.line(10, 35, 200, 35); // horizontal line

        doc.setFont("times", "normal");
        doc.setFontSize(18);
        doc.text("Thank you for your purchase, " +shippingData.firstName+" "+shippingData.lastName,10, 45 );
        doc.text("Your Address:",10, 55 );
        doc.text(shippingData.address,20, 65 );
        doc.text("Contact Number:",10, 75 );
        doc.text(shippingData.mobile,20, 85 );

        doc.text("Your Item delivery within 3 days.",10, 95 );
        doc.addImage(logopro, "JPEG", 40, 100, 130, 50);

        doc.text("Sub Total :"+cart.subtotal.formatted_with_code,10, 160 );
        doc.setFontSize(11);
        doc.text("dissanayaka.gihanrohana@gmail.com-Gihan Dissanayaka", 55, 195);
        doc.line(10, 200, 200, 200); // horizontal line
        doc.save("Recipt.pdf");
    };

    const next = (data) => {
        setShippingData(data);
        //console.log(data);
        nextStep();
    }
    //console.log(shippingData)
    //console.log(cart)

    let Confirmation = () => (
        <>
        <div>
        <Typography variant="h5">Thank you for your purchase, {shippingData.firstName} {shippingData.lastName}!</Typography>
        
        <Typography variant="subtitle2">We will contact you - {shippingData.mobile}</Typography>
        <img src={deliverylogo} alt="somthing wrong...."style={{ margin:'20px'}} width='100%' height='auto' />
        </div>

      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Button component={ Link } to='/' variant='outlined' onClick={ refreshCart }>Back to Home</Button>
        <Button variant='contained' color='primary' onClick={ printRecipt }><GetApp/>Recipt</Button>
      </div>
    </>
    );

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken = { checkoutToken } next={next} />
        : <PaymentForm shippingData = { shippingData } checkoutToken={ checkoutToken} backStep={backStep} nextStep={nextStep}/>

    
    return(
        <>
        <div className={ classes.toolbar } />
        <main className={ classes.layout }>
            <Paper className={ classes.paper }>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={ classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/> }
            </Paper>
        </main>
        </>
    )
}

export default Checkout;