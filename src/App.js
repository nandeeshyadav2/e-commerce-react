import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Products from './components/products';
import Product from './components/product';
import Contact from './components/contact';
import Auth from './components/auth';
import Register from './components/register';
import Cart from './components/Cart';
import Payment from './components/Payment';
import orderComplete from './components/orderComplete';
import Header from './components/layout/Header';
import Footer from './components/layout/footer'
import { Route, Switch } from 'react-router-dom';
import "./assets/css/style.css";
import "./assets/css/font-awesome.css";
import "./assets/css/flexslider.css";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-notifications/lib/notifications.css';

function Layout (props) {
  return (
    <div>
      <Header history={props.history}/>
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <main>
      <Layout>
        <Switch >
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products/:slug?" component={Products} />
            <Route path="/product/:slug?" component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/authentication" component={Auth} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/orderComplete/:orderId?" component={orderComplete} />
            <Route component={Error} />
        </Switch>
      </Layout>
        </main>
  );
}

export default App;
