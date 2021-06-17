import React from 'react';
import { Link } from 'react-router-dom';
//import { AddToPhotosTwoTone } from '@material-ui/icons';
import { Container, Typography, Button, Grid, Divider } from "@material-ui/core";
import CartItem from './CartItem/CartItem';
import logo from '../../assets/noItem.png';
import useStyle from './styles';

const Cart = ( { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } ) => {
    const classes = useStyle();

    const EmptyCart =() => (
        <Typography variant="h5" style={{ color: 'red' }}>Oops... No items in your cart.<Typography/>
        <Grid container justify="center">
        <img src={logo} alt="MyStore" height='400px' className={classes.image} />
        </Grid>
        <Button variant='outlined' ><Link to='/product' className={classes.link}>shopping!</Link></Button>
        
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container justify="center" spacing={4}>
                {cart.line_items.map((item) => (
                    <Grid item xs={6} sm={3} md={3} lg={2} key={item.id} >
                        < CartItem item={item} onUpdateQty={handleUpdateCartQty} onRemoveQty={handleRemoveFromCart}/>
                    </Grid>
                ))}  
            </Grid>
            <div className={ classes.cardDetails }>
                <Typography variant="h5" >Subtotal : {cart.subtotal.formatted_with_symbol }</Typography>
                
                <div>
                    
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="yellow" onClick={ handleEmptyCart } >Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={ Link } to="/checkout" >Checkout</Button>
                
                </div>
            </div><br/>
            <Divider/><br/>
            <Grid container justify="center">
            <div style={{ color: 'black',margin: '10px'}}>
             <Typography>muradevelopers@gmail.com - Mura Developers,Sri Lanka.</Typography>
            </div>
            </Grid>
        </>
    );

    if(!cart.line_items) return 'Loading....';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h4" className={classes.title} gutterBottom>My Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </Container>
    )

    

} 

export default Cart;