import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { Whatshot, LocalMallOutlined, LiveHelpOutlined, SendOutlined, CallOutlined, Facebook, GitHub } from '@material-ui/icons';
import { Container, Typography, Grid, Divider, TextField, Button } from '@material-ui/core';
import Product from '../products/product/product';
import useStyle from './styles';
import Footer from '../Footer/footer';
import logo from '../../assets/market.jpg';
import Brand01 from '../../assets/brand01.jpeg';
import Brand02 from '../../assets/brand02.png';
import Brand03 from '../../assets/brand03.jpg';
import Brand04 from '../../assets/brand04.jpg';
import Brand05 from '../../assets/loading.gif';
import Profile from '../../assets/profile.jfif';


const Home = ({products, onAddToCart }) => {
    const classes = useStyle();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_3h8vezo', 'template_iggw9q7', e.target, 'user_1oT13zSU0YM2wstD59NXD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <>
        <div style={{ backgroundColor: 'White'}}>
        <div className={ classes.upper}>
        </div>
        <Container>
        <Grid container justify="center">
        <Grid item xs={12} sm={6}>
        <div style={{ marginTop: '20%'}}>
            <Typography className={classes.maintitle}>My Online Store</Typography>
            <Typography className={classes.subtitle}>Your best online shopping experience</Typography><br/>
            <TextField id="outlined-basic" label="Search items" variant="outlined" fullWidth />
            <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={ Link } to="/product" >Shopping <LocalMallOutlined/></Button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <img src={logo} alt="MyStore" width='100%' height='100%' className={classes.image} />
        </Grid>
        <br/><br/>
        </Grid>
        <Grid container justify="center" spacing={2}>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand01} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand02} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand03} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand04} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand01} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand03} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand01} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand02} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand03} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand04} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand01} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}><img src={Brand03} alt="MyStore" width='100%' height='80%' className={classes.image} /></Grid>
        </Grid>
        <Divider/>
        <Typography className={classes.hottitle}><Whatshot/> Hot Sales...</Typography>
        <Grid container justify="center" spacing={4}>
            {products.slice(0,4 ).map((product) => 
            <Grid item key={product.id} xs={6} sm={3} md={3} lg={2}>
                <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
                )}
            <Grid item xs={6} sm={3} md={3} lg={2}>
                <Grid container justify='center' >
                <Button aria-label='more item...' component={ Link } to="/product" >
                <img src={Brand05} alt="MyStore" width='150%' height='auto'  />
                </Button>
                </Grid>
            </Grid>
        </Grid>
        <br/>
        <Divider/>
        <Grid container justify="center">
                <Typography variant='h4' style={{ color: 'DimGrey'}}><LiveHelpOutlined/></Typography>
        </Grid>
        <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <div>
                        <p>Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.</p>
                    <img src={Profile} alt="MyStore" width='10%' height='auto'  />
                    <p>GIHAN DISSANAYAKA</p>
                    <a href="tel:+94711651378"><CallOutlined/>   </a><a href="https://web.facebook.com/profile.php?id=100004284887135" target="_blank"><Facebook/>   </a><a href="https://github.com/gihanrohanadissanayaka" target="_blank"><GitHub/></a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Typography variant='h5'> Contact Seller </Typography>
                    <form onSubmit={sendEmail}>
                    <TextField id="outlined-basic" label="Name" variant="filled" name="name" fullWidth style={{ marginTop: '10px'}}/>
                    <TextField id="outlined-basic" label="Email" variant="filled" name="email" fullWidth style={{ marginTop: '10px'}}/>
                    <TextField id="outlined-basic" label="Content" variant="outlined" name="details" fullWidth multiline rows={4} style={{ marginTop: '10px'}}/>
                    <Button type="submit" variant='contained' color='primary' style={{ marginTop: '10px'}}><SendOutlined/></Button>
                    </form>
                </Grid>
        </Grid>
      </Container>
      <Footer/>
      </div>
        </>
    )
}

export default Home ;