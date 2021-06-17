import React from 'react';
import { RemoveShoppingCart, IndeterminateCheckBoxOutlined, AddBoxOutlined } from '@material-ui/icons';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyle from './styles';

const CartItem = ({ item, onUpdateQty, onRemoveQty }) => {
    const classes = useStyle();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent>
            <div className={classes.cardContent} >
                    <Typography gutterBottom>
                        <div className={classes.namestyle}>
                         {item.name}
                        </div>
                    </Typography>
                    
                </div>
                <Typography variant="h6" >
                 <div className={classes.pricestyle}>
                     {item.line_total.formatted_with_symbol}
                 </div>
                </Typography>
            </CardContent>
            <CardActions>
                <div className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity - 1)}><IndeterminateCheckBoxOutlined/></Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateQty(item.id, item.quantity + 1)}><AddBoxOutlined/></Button>
                </div>
                </div>
                
                
            </CardActions>
            <CardActions>
                <div>
                <Button type="button" onClick={() => onRemoveQty(item.id)}>< RemoveShoppingCart /> </Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default CartItem;