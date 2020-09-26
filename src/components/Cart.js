import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {NotificationManager} from 'react-notifications';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    class Cart extends Component {

        constructor(props){
			super(props);
			
			this.state = {
				cart: [],
				cartTotal: [],
				nameError: '',
				emilError: '',
				mobileError: '',
				addressError: '',
				pincodeError: '',
				landmarkError: '',
				townError: '',
				formError:false,
				loading:true,
				BASE_URL: process.env.REACT_APP_API_URL,
				STORAGE_URL: process.env.REACT_APP_DOMAIN
			}
        }

        componentDidMount() {
			let result = [];
			axios.get(this.state.BASE_URL+`getCartProducts/`+localStorage.getItem('token'))
			.then(res => {
                this.setState({loading:false});
                this.setState({cart:res.data.cartItems});
                this.setState({cartTotal:this.calculateTotal()});
			})
        }

        handleQuantity(option, cartProduct) {
            let data = {
                option:option,
                cartProduct:cartProduct
            }
            axios.post(this.state.BASE_URL+`cartQuantityUpdate`,data)
			.then(res => {
            if(res.data.status == 200)
            {
               this.setState({cart:res.data.cartItems});
               this.setState({cartTotal:this.calculateTotal()});
            }
               NotificationManager.success(res.data.message);
			})
        }
        calculateTotal()
        {
            let cartProducts = this.state.cart;
            return cartProducts.reduce(function(total, cart) { return total + (cart.quantity * cart.products[0].price) }, 0);
        }

        gotoPaymnet()
        {
            this.props.history.push('/payment');
		}
		addAddress(e)
		{
			e.preventDefault();
			let formArr = ['name', 'email', 'mobile', 'address', 'pincode', 'landmark', 'town'];

			formArr.map(ele => {
            this.setState({formError : false});
            let errorText = e.target[ele].name+'Error';
					if(!e.target[ele].value) {
						this.setState({[errorText]:e.target[ele].name+' should not be empty'});
					}
					else if(e.target[ele].value.length < 3) {
						this.setState({[errorText]:e.target[ele].name+' should alteast 3 characters'});
					}
					else {
						this.setState({[errorText]:''});
						this.setState({formError : true});

					}
				


   })
   if(!this.state.nameError 
      &&!this.state.emilError 
      &&!this.state.mobileError 
      &&!this.state.addressError 
      &&!this.state.pincodeError 
      &&!this.state.landmarkError 
      &&!this.state.townError 
      &&!this.state.nameError 
      &&!this.state.nameError
      && this.state.formError
      )
   {
      this.props.history.push('/payment');
   }
		}
        
        render() {

            const element = (
<div>
<div className="sweet-loading">
                  <ClipLoader
                     css={override}
                     size={150}
                     color={"#123abc"}
                     loading={this.state.loading}
                     />
               </div>
	{!this.state.loading? (
   <div className="banner">
      <Leftbanner />
      {this.state.cart.length != 0?
      (<div className="w3l_banner_nav_right">
         <div className="checkoutCart">
            <div className="checkout-right">
               
               <h4>Your shopping cart contains: <span>{this.state.cart.length} Products</span></h4>
               <table className="timetable_sub">
                  <thead>
                     <tr>
                        <th>SL No.</th>
                        <th colSpan="2">Product</th>
                        <th>Quality</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.cart.map( (cartProduct, index) => {
                     return <tr className="rem1" key={index}>
                        <td className="invert">{index+1}</td>
                        <td className="invert-image" colSpan="2">
                           <NavLink to={`/product/${cartProduct.products[0].slug}`}><img src={`${this.state.STORAGE_URL}/storage/${cartProduct.products[0].cover}`} alt=" " className="img-responsive" /></NavLink>
                        </td>
                        <td className="invert">
                           <div className="quantity">
                              <div className="quantity-select">
                                 <div className="entry value-minus" onClick={()=>{this.handleQuantity('dec', cartProduct)}}>&nbsp;</div>
                                 <div className="entry value"><span>{cartProduct.quantity}</span></div>
                                 <div className="entry value-plus" onClick={()=>{this.handleQuantity('inc', cartProduct)}}>&nbsp;</div>
                              </div>
                           </div>
                        </td>
                        <td className="invert">{cartProduct.products[0].name}</td>
                        <td className="invert">{cartProduct.quantity * cartProduct.products[0].price}</td>
                        <td className="invert">
                           <div className="rem">
                              <div className="close1" onClick={()=>{this.handleQuantity('del', cartProduct)}}> </div>
                           </div>
                        </td>
                     </tr>
                     })
                     }
                  </tbody>
               </table>
            </div>
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
                  <h4>Enter Delivery Details</h4>
                  <form className="creditly-card-form agileinfo_form" onSubmit={(e) =>
                     {this.addAddress(e)}}>
                     <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="information-wrapper">
                           <div className="first-row form-group">
                              <div className="controls">
                                 <label className="control-label">Full name: <span className="errorText nameError">{this.state.nameError}</span></label>
                                 <input className="billing-address-name form-control" type="text" name="name" placeholder="Full name" />
                              </div>
                              <div className="w3_agileits_card_number_grids">
                                 <div className="w3_agileits_card_number_grid_left">
                                    <div className="controls">
                                       <label className="control-label">Mobile number:<span className="errorText mobileError">{this.state.mobileError}</span></label>
                                       <input className="form-control" type="text" name="mobile" placeholder="Mobile number" />
                                    </div>
                                 </div>
                                 <div className="w3_agileits_card_number_grid_left">
                                    <div className="controls">
                                       <label className="control-label">Email id: <span className="errorText emailError">{this.state.emailError}</span></label>
                                       <input className="form-control" type="text" name="email" placeholder="Email id" />
                                    </div>
                                 </div>
                                 <div className="w3_agileits_card_number_grid_right">
                                    <div className="controls">
                                       <label className="control-label">Address: <span className="errorText addressError">{this.state.addressError}</span></label>
                                       <textarea className="form-control" type="text" name="address" placeholder="address" />
                                    </div>
                                 </div>
                                 <div className="w3_agileits_card_number_grid_right">
                                    <div className="controls">
                                       <label className="control-label">Landmark: <span className="errorText landmarkError">{this.state.landmarkError}</span></label>
                                       <input className="form-control" type="text" name="landmark" placeholder="Landmark" />
                                    </div>
                                 </div>
                                 <div className="w3_agileits_card_number_grid_right">
                                    <div className="controls">
                                       <label className="control-label">Pincode: <span className="errorText pincodeError">{this.state.pincodeError}</span></label>
                                       <input className="form-control" type="text" name="pincode" placeholder="Pincode" />
                                    </div>
                                 </div>
                                 <div className="clear"> </div>
                              </div>
                              <div className="controls">
                                 <label className="control-label">Town/City: <span className="errorText townError">{this.state.townError}</span></label>
                                 <input className="form-control" type="text" name="town" placeholder="Town/City" />
                              </div>
                              <div className="controls">
                                 <label className="control-label">Address type: <span className="errorText addressTypeError">{this.state.addressTypeError}</span></label>
                                 <select className="form-control option-w3ls" name="addressType">
                                    <option>Office</option>
                                    <option>Home</option>
                                    <option>Commercial</option>
                                 </select>
                              </div>
                           </div>
                           <button className="submit check_out">Delivery to this Address</button>
                        </div>
                     </section>
                  </form>
               </div>
               <div className="clearfix"> </div>
            </div>
         </div>
      </div>):(<div className="w3l_banner_nav_right"><div className="checkoutCart">
            <div className="checkout-right"> <h3>No Items in Cart</h3></div></div></div>)
        }
      <div className="clearfix"></div>
   </div>):(<div className="w3l_banner_nav_right"><div className="checkoutCart">
            <div className="checkout-right"> <h3>No Items in Cart</h3></div></div></div>)}
		
</div>
);
                
            return (
                <div>
                    { element }
                </div>
                  
            );
         }
    }
    export default Cart;
    