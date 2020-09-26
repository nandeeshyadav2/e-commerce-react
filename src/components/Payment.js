import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';

    class Payment extends Component {

        constructor(props){
			super(props);
			
			this.state = {
				cart: [],
                cartTotal: [],
				BASE_URL: process.env.REACT_APP_API_URL,
				STORAGE_URL: process.env.REACT_APP_DOMAIN
			}
        }

        componentDidMount() {
			let result = [];
			axios.get(this.state.BASE_URL+`getCartProducts/`+localStorage.getItem('token'))
			.then(res => {
                console.log(res.data.cartItems);
                this.setState({cart:res.data.cartItems});
                this.setState({cartTotal:this.calculateTotal()});
			})
        }

        handleQuantity(option, cartProduct) {
            let data = {
                option:option,
                cartProduct:cartProduct
            }
            console.log(data);
            axios.post(this.state.BASE_URL+`cartQuantityUpdate`,data)
			.then(res => {
                console.log(res.data.cartItems);
                this.setState({cart:res.data.cartItems});
                this.setState({cartTotal:this.calculateTotal()});
			})
        }
        calculateTotal()
        {
            let cartProducts = this.state.cart;
            return cartProducts.reduce(function(total, cart) { return total + (cart.quantity * cart.products[0].price) }, 0);
        }
        gotoCod()
        {
            if(this.state.cart.length == 0)
            {
                NotificationManager.error("No items in cart");
                return false;
            }
            let orderData = {
                token:localStorage.getItem('token'),
                paymentMethod: 'COD'
            }
            axios.post(this.state.BASE_URL+`createOrder`, orderData)
			.then(res => {
                console.log(res.data);
                if(res.data.staus == 200)
                {
                    this.props.history.push('/orderComplete/'+res.data.order_id);
                }
                else {
                    NotificationManager.error(res.data.message);
                }
                // localStorage.setItem('token', res.data.user.token)
			})
        }
        
        render() {

            const element = (
                <div>
                <div className="banner">
                    <Leftbanner />
    <div className="w3l_banner_nav_right">
    <div className="checkoutCart">			

        <div className="checkout-left">	
            <div className="col-md-6 checkout-left-basket">
                <h4>Your basket</h4>
                <ul>
                {this.state.cart.map( (cartProduct, index) => {
                     return <li key={index}>{cartProduct.products[0].name} <i>-</i> <span>{cartProduct.quantity} * {cartProduct.products[0].price} = {cartProduct.quantity * cartProduct.products[0].price}</span></li>

                })
            }
                    <li>Total Service Charges <i>-</i> <span>0.00</span></li>
                    <li>Total <i>-</i> <span>{this.state.cartTotal}</span></li>
                </ul>
            </div>
            <div className="col-md-6 address_form_agile">
                  <h4 className="text-center">Payment Options</h4>
                  <button className="submit check_out payment_button" onClick={()=>{this.gotoCod()}}>Cash On Delivery</button>
                  <button className="submit check_out payment_button" onClick={()=>{this.gotoPaymnet()}}>Paytm</button>
                  <button className="submit check_out payment_button" onClick={()=>{this.gotoPaymnet()}}>Paypal</button>
                  <button className="submit check_out payment_button" onClick={()=>{this.gotoPaymnet()}}>Paybiz</button>

                  </div>
        
            <div className="clearfix"> </div>
            
        </div>

    </div>

    </div>
    <div className="clearfix"></div>
</div>
</div> 
                );
                
            return (
                <div>
                    { element }
                </div>
                  
            );
         }
    }
    export default Payment;
    