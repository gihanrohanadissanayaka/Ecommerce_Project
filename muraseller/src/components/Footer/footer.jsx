import React from "react";
import { Typography, Container, Grid, List, ListItem, Divider } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn, Mail } from '@material-ui/icons';
//import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div style={{ marginTop: '20px'}}>
        <Container maxWidth>
        <div style={{ backgroundColor: 'AliceBlue'}}>
        <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid container justify="center">
            <List>
            <ListItem><p style={{ fontSize: '20px'}}>About</p></ListItem>
            <Divider/>
            <ListItem><p style={{}}>An e-commerce website, by definition, is a website that allows you to buy and sell tangible goods, digital products or services online. ... And before you begin, an eCommerce venture you should be aware of all the legal policies required for your eCommerce website.</p></ListItem>
                
            </List>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid container justify="center">
        <List>
                <ListItem><p style={{ fontSize: '20px'}}>Product</p></ListItem>
                <Divider/>
                <ListItem>ecommerceApp</ListItem>
                <ListItem>chatApp</ListItem>
                <ListItem>galleryView</ListItem>
            </List>
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid container justify="center">
        <List>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem>< Facebook/></ListItem>
                <ListItem><Instagram/></ListItem>
                <ListItem><LinkedIn/></ListItem>
                <ListItem><Mail/></ListItem>
            </List>
            </Grid>
        </Grid>
        <Grid container justify="center">
        dissanayaka.gihanrohana@gmail.com - GIHAN DISSANAYAKA 2021
        <Divider/>
        </Grid>
        </Grid>
        <br/>
        </div>
        </Container>
    </div>
    </>
  );
};
export default Footer;