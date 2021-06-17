import React, { useState } from 'react';
import Modal from 'react-modal';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Divider, List, ListItem, ListItemText, Container } from '@material-ui/core';
import { AddShoppingCart, Description, Cancel, Category, LocalOffer, StoreMallDirectoryTwoTone, VerifiedUserTwoTone } from '@material-ui/icons';
import useStyle from './styles';

 Modal.setAppElement('#root') 
const Product = ( {product, onAddToCart} ) => {
    const classes = useStyle();
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    return(
        <>
        <Card>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent} >
                    <Typography gutterBottom>
                        <div className={classes.namestyle}>
                         {product.name}
                        </div>
                    </Typography>
                    
                </div>
                <Typography variant="h6" >
                 <div className={classes.pricestyle}>
                     {product.price.formatted_with_symbol}
                 </div>
                </Typography>
                <Typography variant="h6" >
                 <div className={classes.prepricestyle}>
                     Rs {product.permalink}.00
                 </div>
                </Typography>
                <Typography variant="body2" color='textSecondary' >
                <strong>Brand</strong>: {product.sku}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to cart' onClick={() => setModalIsOpen(true) }>
                    <Description />
                </IconButton>
                <IconButton aria-label='Add to cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
        {/* Open Modal to descriptions */}

        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false) }
            closeTimeoutMS={200}
            style={{
                overlay: {
                  position: 'fixed',
                  top: '50px',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  //backgroundcolor: 'rgba(255,0,0,0.8)',
                }}}
            >
                <Grid container justify='center' >
                <div className={classes.detailName} >
                    <Typography gutterBottom variant='h5'>
                         {product.name}
                    </Typography>
                </div>
                </Grid>
                <Grid container justify='center' spacing={2}>
                    {product.assets.map((asset) => 
                        <Grid item xs={6} sm={3} md={3} lg={3}>
                            <img src={asset.url} alt="MyStore" width='100%' height='80%' className={classes.detailMedia} />
                        </Grid>
                    )}
                
                </Grid>
                <br/>
                <Divider/><br/>
                <Typography variant='h4' gutterBottom> Item Description</Typography>
                <Container>
                <Grid container justify='center' >
                    <div style = {{ backgroundColor: 'azure' }}><Typography variant='h6' className={classes.descriptionsty}>{product.description }</Typography></div>
                </Grid>
                </Container>
                <Grid container justify='center' >
                    <List className={classes.root}>
                        <ListItem>
                        <div style = {{ color: 'red'}}><Typography variant='h6'> In Stock <StoreMallDirectoryTwoTone/></Typography></div>
                        </ListItem>
                        <ListItem>
                        <div style = {{ color: 'darkblue'}}><Typography variant='h6'> {product.price.formatted_with_code } <LocalOffer/></Typography></div>
                        </ListItem>
                        <ListItem>
                        <div style = {{ color: 'black'}}><Typography variant='h6'> Brand :{product.sku} <VerifiedUserTwoTone/></Typography></div>
                        </ListItem>
                        </List>
                </Grid>

                <Grid container justify='center' >
                    {product.categories.map((categorie) => 
                        <p> <Category/> {categorie.name}</p>
                    )}
                </Grid>

                <Grid container justify='center' >
                <IconButton aria-label='Add to cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
                <IconButton aria-label='Add to cart' onClick={() => setModalIsOpen(false) }>
                    <Cancel />
                </IconButton>
                </Grid>
                

                
                
                
                
            
            
        </Modal>
        </>
        
    );
}

export default Product;