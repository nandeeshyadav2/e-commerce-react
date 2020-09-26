import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';
import axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import * as NumericInput from "react-numeric-input";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {NotificationContainer, NotificationManager} from 'react-notifications';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    class Products extends Component {

		constructor(props){
			super(props);
			
			this.state = {
				categories: [],
				loading: true,
				products: [],
				cart: [],
				BASE_URL: process.env.REACT_APP_API_URL,
				STORAGE_URL: process.env.REACT_APP_DOMAIN
			}
		}
		componentWillReceiveProps(nextProps)
		{
			// this.componentDidMount(props.match.params.slug);
			axios.get(this.state.BASE_URL+`getProducts/`+nextProps.match.params.slug)
			.then(res => {
				this.setState({products:res.data});
			})
		}

		addToCart(e, product)
		{
			e.preventDefault();
			let token = localStorage.getItem('token');
			if(!token)
			{
				this.props.history.push('/authentication');
			}

			let productDetails = {
				token: token,
				product: product.id,
				quantity: e.target.quantity.value
			}

			axios.post(this.state.BASE_URL+`addToCart`, productDetails)
			.then(res => {
				NotificationManager.success(res.data.message);
				localStorage.setItem("rowIds", this.state.cart.push(res.data));
			})
		}

		componentDidMount() {
			let result = [];
			axios.get(this.state.BASE_URL+`getProducts/`+this.props.match.params.slug)
			.then(res => {
				this.setState({products:res.data, loading: false});
			})
		}
        
        render() {
			const element = (
				<div>
				<div className="banner">
						<Leftbanner />
						<div className="w3l_banner_nav_right">
							<div className="w3l_banner_nav_right_banner3">
								<h3>Best Deals For New Products<span className="blink_me"></span></h3>
							</div>
							</div>
							<div className="clearfix"></div>
							<div className="sweet-loading">
								<ClipLoader
								css={override}
								size={150}
								color={"#123abc"}
								loading={this.state.loading}
								/>
							</div>
							{this.state.products.length != 0 ? (
							<div className="w3ls_w3l_banner_nav_right_grid">
								<h3>Popular Brands</h3>
								<div className="w3ls_w3l_banner_nav_right_grid1">
									{this.state.products.map( product =>{
										return <div className="col-md-3 w3ls_w3l_banner_left">
										<div className="hover14 column">
										<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
											<div className="agile_top_brand_left_grid_pos">
												<img src="images/offer.png" alt=" " className="img-responsive" />
											</div>
											<div className="agile_top_brand_left_grid1">
												<figure>
													<div className="snipcart-item block">
														<div className="snipcart-thumb">
														<NavLink to={`/product/${product.slug}`}>
																<img src= {`${this.state.STORAGE_URL}/storage/${product.cover}`} alt=" " className="img-responsive" />
																</NavLink>
															<p>{product.name}</p>
															<h4>{product.sale_price?product.sale_price:product.price}<span>{product.sale_price?product.sale_price:''}</span></h4>
														</div>
														<div className="snipcart-details">
															<form onSubmit={(e) => { this.addToCart(e, product) }}>
																<fieldset className="dlexBox">
																	{/* <input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="knorr instant soup" />
																	<input type="hidden" name="amount" value="3.00" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " /> */}
																	<NumericInput className="form-control" name="quantity" value={ 1 } min={ 1 }  max={product.quantity} size='2' noValidate strict />
																	<input type="submit" name="submit" value="Add to cart" className="button"  key={product.id}/>
																</fieldset>
															</form>
														</div>
													</div>
												</figure>
											</div>
										</div>
										</div>
									</div>
									})}
									<div className="clearfix"> </div>
								</div>
								</div>
								): ( !this.state.loading?
								<div className="w3ls_w3l_banner_nav_right_grid"> <h3> No Products found </h3></div>:<div className="w3ls_w3l_banner_nav_right_grid"> <h3> Products loading </h3></div>
								)}
						</div>
						<div className="clearfix"></div>
						</div>
					);

					
            return (
                <div>
                    { element }
                </div>
                  
            );
         }
    }
    export default Products;
    