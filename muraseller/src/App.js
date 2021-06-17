//import PrintForm from './print/vehicleprint/vehicleprint';
import React, { useState, useEffect } from 'react';
import { commerce} from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/Navbar';
import Product from './components/products/products';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/checkout';
import PrintForm from './print/vehicleprint/vehicleprint';
import Home from './components/home/Home';

const App = () => {
 
  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState({});

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProducts( data );
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart( cart );
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity} );
    setCart( cart );
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart( cart );
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart( cart );
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);


  //console.log(products);
  //console.log(cart);

  return (
    <div className="App">
      <Router>
        <div>
        <NavBar totalItems={cart.total_items}/>
          <Switch>

            <Route exact path="/">
              <Home products={products} onAddToCart={handleAddToCart } />
            </Route>


            <Route exact path="/product">
              <Product products={products} onAddToCart={handleAddToCart } />
            </Route>

            <Route exact path="/cart">
              <Cart
               cart={cart}
               handleUpdateCartQty={handleUpdateCartQty}
               handleRemoveFromCart={handleRemoveFromCart}
               handleEmptyCart={handleEmptyCart} 
              />
            </Route>

            <Route exact path="/checkout">
              <Checkout 
                cart={cart}
                refreshCart={refreshCart}
                />
            </Route>

            <Route exact path="/print">
              <PrintForm/>
            </Route>
      
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
