import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';
import axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

    class Payment extends Component {

        constructor(props){
			super(props);
			
			this.state = {
				cart: [],
                ordered_products: [],
                order_status: '',
                customer: '',
                address: '',
				BASE_URL: process.env.REACT_APP_API_URL,
				STORAGE_URL: process.env.REACT_APP_DOMAIN
			}
        }

        componentDidMount()
		{
			axios.get(this.state.BASE_URL+`getOrder/`+this.props.match.params.orderId)
			.then(res => {
				this.setState({cart:res.data.order,ordered_products:res.data.order.ordered_products, order_status:res.data.order.order_status.name, customer:res.data.order.customer, address:res.data.order.address});
			})
		}
          
        render() {

            const element = (
                <div>
                    <div className="top-brands">
					<div className="container">
						<h3>Congratulations!. Your Order has been Completed.</h3>
                        </div>
                        </div>
                <div className="banner">
                    <Leftbanner />
    <div className="w3l_banner_nav_right">
    <div className="checkoutCart">			

        <div className="checkout-left">
            <div className="col-md-12 checkout-left-basket">
                <h4> Delivery Address Details</h4>
                <ul>
                <li>Customer Name<i>-</i> <span>{this.state.customer.name}</span></li>
                    <li>Customer Email <i>-</i> <span>{this.state.customer.email}</span></li>
                    <li>Address1 <i>-</i> <span>{this.state.address.address_1}</span></li>
                    <li>Address2 <i>-</i> <span>{this.state.address.address_3}</span></li>
                    <li>Zip <i>-</i> <span>{this.state.address.zip}</span></li>
                    <li>State <i>-</i> <span>{this.state.address.state_code}</span></li>
                    <li>Alias <i>-</i> <span>{this.state.address.alias}</span></li>
                    <li>Phone <i>-</i> <span>{this.state.address.phone}</span></li>
                    <li></li>
                </ul>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-6 checkout-left-basket">
                <h4>Products Details</h4>
                <ul>
                {this.state.ordered_products.map( (cartProduct, index) => {
                     return <li key={index}>{cartProduct.product_name} <i>-</i> <span>{cartProduct.quantity} * {cartProduct.product_price} = {cartProduct.quantity * cartProduct.product_price}</span></li>

                })
            }
                    <li>Total Service Charges <i>-</i> <span>0.00</span></li>
                    <li>Total <i>-</i> <span>{this.state.cart.total}</span></li>
                </ul>
            </div>
            <div className="col-md-6 checkout-left-basket">
                <h4> Order Details</h4>
                <ul>
                    <li>Order Id <i>-</i> <span>{this.state.cart.id}</span></li>
                    <li>Payment Type <i>-</i> <span>{this.state.cart.payment}</span></li>
                    <li>Order Status <i>-</i> <span>{this.state.order_status}</span></li>
                    <li>Reference Number <i>-</i> <span>{this.state.cart.reference}</span></li>
                    <li>Ordered Date <i>-</i> <span>{this.state.cart.created_at}</span></li>
                </ul>
            </div>            
             </div>
             
             <NavLink to='/'>
             <br />
             <button className="submit check_out payment_button">Shop More</button>
             </NavLink>
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
    