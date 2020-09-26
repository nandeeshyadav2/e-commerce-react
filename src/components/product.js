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
    class Product extends Component {

		constructor(props){
			super(props);
			
			this.state = {
				categories: [],
                productResult: [],
				product: [],
				loading: true,
				cart: [],
                similarProducts: [],
				BASE_URL: process.env.REACT_APP_API_URL,
				STORAGE_URL: process.env.REACT_APP_DOMAIN
			}
        }
        componentWillReceiveProps(nextProps)
		{
			this.setState({loading:true});
			axios.get(this.state.BASE_URL+`getProductBySlug/`+nextProps.match.params.slug)
			.then(res => {
				this.setState({loading:false});
				this.setState({product: res.data.product,productResult:res.data, similarProducts:res.data.similarProducts});
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
			axios.get(this.state.BASE_URL+`getProductBySlug/`+this.props.match.params.slug)
			.then(res => {
				this.setState({loading:false});
				this.setState({product: res.data.product,productResult:res.data, similarProducts:res.data.similarProducts});
				console.log(this.state.productResult.similarProducts);
			})
		}
        
        render() {

			const element = (
				<div>
                    <div class="banner">
                    <Leftbanner />
		<div class="w3l_banner_nav_right">
			<div class="w3l_banner_nav_right_banner3">
				<h3>Best Deals For New Products<span class="blink_me"></span></h3>
			</div>
			<div class="agileinfo_single">
				<h5>{this.state.product.name}</h5>
				<div class="col-md-4 agileinfo_single_left">
                <img src= {`${this.state.STORAGE_URL}/storage/${this.state.product.cover}`} alt=" " className="img-responsive" />
					{/* <img id="example" src="/assets/images/76.png" alt=" " class="img-responsive" /> */}
				</div>
				<div class="col-md-8 agileinfo_single_right">
					<div class="rating1">
						<span class="starRating">
							<input id="rating5" type="radio" name="rating" value="5" />
							<label for="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4" />
							<label for="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked />
							<label for="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2" />
							<label for="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1" />
							<label for="rating1">1</label>
						</span>
					</div>
					<div class="w3agile_description">
						<h4>Description :</h4>
						<p>{this.state.product.description}</p>
					</div>
					<div class="snipcart-item block">
						<div class="snipcart-thumb agileinfo_single_right_snipcart">
                        <h4>{this.state.product.sale_price?this.state.product.sale_price:this.state.product.price}<span>{this.state.product.sale_price?this.state.product.sale_price:''}</span></h4>
						</div>
						<div class="snipcart-details agileinfo_single_right_details">
							<form onSubmit={(e) => { this.addToCart(e, this.state.product) }}>
								<fieldset className="dlexBox">
									<input type="hidden" name="cmd" value="_cart" />
									<input type="hidden" name="add" value="1" />
									<input type="hidden" name="business" value=" " />
									<input type="hidden" name="item_name" value="pulao basmati rice" />
									<input type="hidden" name="amount" value="21.00" />
									<input type="hidden" name="discount_amount" value="1.00" />
									<input type="hidden" name="currency_code" value="USD" />
									<input type="hidden" name="return" value=" " />
									<input type="hidden" name="cancel_return" value=" " />
									<NumericInput className="form-control" name="quantity" value={ 1 } min={ 1 }  max={this.state.product.quantity} size='2' noValidate strict />
									<input type="submit" name="submit" value="Add to cart" class="button" />
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
    <div class="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_popular">
		<div class="container">
		<div className="sweet-loading">
								<ClipLoader
								css={override}
								size={150}
								color={"#123abc"}
								loading={this.state.loading}
								/>
							</div>
			<h3>Similar Products</h3>
				<div class="w3ls_w3l_banner_nav_right_grid1">
					{this.state.similarProducts.map((product, index) => {

                    
					return <div className="col-md-3 w3ls_w3l_banner_left" key={index}>
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
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="business" value=" " />
                                                <input type="hidden" name="item_name" value="knorr instant soup" />
                                                <input type="hidden" name="amount" value="3.00" />
                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                <input type="hidden" name="currency_code" value="USD" />
                                                <input type="hidden" name="return" value=" " />
                                                <input type="hidden" name="cancel_return" value=" " />
												<NumericInput className="form-control" name="quantity" value={ 1 } min={ 1 }  max={product.quantity} size='2' noValidate strict />
                                                <input type="submit" name="submit" value="Add to cart" className="button" />
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
					<div class="clearfix"> </div>
				</div>
                </div>
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
    export default Product;
    