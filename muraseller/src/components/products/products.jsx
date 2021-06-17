import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandMore, ReplyOutlined } from '@material-ui/icons';
import {Grid, IconButton } from '@material-ui/core';
import Product from './product/product';
import useStyle from './styles';

const Products = ( {products, onAddToCart } ) => {
    const classes = useStyle();
    const [ visible, setVisible ] = useState(36);
    return(
        <main className={classes.content}>
            
            <div className={classes.toolbar }/>
            <IconButton aria-label='more item...' component={ Link } to="/" >
                    <ReplyOutlined />
                </IconButton>
        <Grid container justify="center" spacing={4}>
            {products.slice(4,visible ).map((product) => 
            <Grid item key={product.id} xs={6} sm={3} md={3} lg={2}>
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
                )}
        </Grid>

        <Grid container justify='center' >
                <IconButton aria-label='more item...' onClick={() => setVisible(visible + 20 ) }>
                    <ExpandMore />
                </IconButton>
                </Grid>
    </main>
    );
    
}

export default Products;