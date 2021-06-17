import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart, Queue, NotificationsActive } from '@material-ui/icons';
import logo from '../../assets/download.jpg';
import useStyle from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyle();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                    <img src={logo} alt="MyStore" height='40px' className={classes.image} />
                        Mura Developers
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}><IconButton><NotificationsActive/></IconButton></div>
                    <div className={classes.button}><IconButton component={ Link } to="/product" ><Queue/></IconButton></div>
                    {location.pathname !== '/cart' && (
                    <div className={classes.button}>
                        <IconButton component={ Link } to="/cart" aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>

                        </IconButton>
                    </div>
                    )}
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar;