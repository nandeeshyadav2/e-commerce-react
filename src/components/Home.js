import React, { Component } from 'react';
import Homebanner from './Homebanner';
import "../assets/css/flexslider.css";
import axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import nextId from "react-id-generator";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Home extends Component {
	htmlId = nextId();
	constructor(props){
		super(props);
		
		this.state = {
			categories: [],
			subcategories: [],
			BASE_URL: process.env.REACT_APP_API_URL
		}
	}
	componentDidMount() {
		console.log(this.htmlId);
		let result = [];
		axios.get(this.state.BASE_URL+`getCategories`)
		.then(res => {
			let data = res.data;
			// result.length = 9;
			this.setState({categories:res.data});
		})
    }
    render() {
		const ele = (
			<div>
			<div className="products-breadcrumb">
					<div className="container">
						<ul>
							<li key="1"><i className="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a></li>
							{/* <li>Branded Foods</li> */}
						</ul>
					</div>
				</div>
			<Homebanner />
				<div className="top-brands">
					<div className="container">
						<h3>Hot Offers</h3>
						<div className="agile_top_brands_grids row">
							<div className="col-md-3 top_brand_left">
								<div className="hover14 column">
									<div className="agile_top_brand_left_grid">
										<div className="tag"><img src="/assets/images/tag.png" alt=" " className="img-responsive" /></div>
										<div className="agile_top_brand_left_grid1">
											<figure>
												<div className="snipcart-item block" >
													<div className="snipcart-thumb">
														<a href="single.html"><img title=" " alt=" " src="/assets/images/1.png" className="img-responsive" /></a>		
														<p>fortune sunflower oil</p>
														<h4>$7.99 <span>$10.00</span></h4>
													</div>
													<div className="snipcart-details top_brand_home_details">
														<form action="checkout.html" method="post">
															<fieldset>
																<input type="hidden" name="cmd" value="_cart" />
																<input type="hidden" name="add" value="1" />
																<input type="hidden" name="business" value=" " />
																<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																<input type="hidden" name="amount" value="7.99" />
																<input type="hidden" name="discount_amount" value="1.00" />
																<input type="hidden" name="currency_code" value="USD" />
																<input type="hidden" name="return" value=" " />
																<input type="hidden" name="cancel_return" value=" " />
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
							<div className="col-md-3 top_brand_left">
								<div className="hover14 column">
									<div className="agile_top_brand_left_grid">
										<div className="agile_top_brand_left_grid1">
											<figure>
												<div className="snipcart-item block" >
													<div className="snipcart-thumb">
														<a href="single.html"><img title=" " alt=" " src="/assets/images/3.png" className="img-responsive" /></a>		
														<p>basmati rise (5 Kg)</p>
														<h4>$11.99 <span>$15.00</span></h4>
													</div>
													<div className="snipcart-details top_brand_home_details">
														<form action="#" method="post">
															<fieldset>
																<input type="hidden" name="cmd" value="_cart" />
																<input type="hidden" name="add" value="1" />
																<input type="hidden" name="business" value=" " />
																<input type="hidden" name="item_name" value="basmati rise" />
																<input type="hidden" name="amount" value="11.99" />
																<input type="hidden" name="discount_amount" value="1.00" />
																<input type="hidden" name="currency_code" value="USD" />
																<input type="hidden" name="return" value=" " />
																<input type="hidden" name="cancel_return" value=" " />
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
							<div className="col-md-3 top_brand_left">
								<div className="hover14 column">
									<div className="agile_top_brand_left_grid">
										<div className="agile_top_brand_left_grid_pos">
											<img src="/assets/images/offer.png" alt=" " className="img-responsive" />
										</div>
										<div className="agile_top_brand_left_grid1">
											<figure>
												<div className="snipcart-item block">
													<div className="snipcart-thumb">
														<a href="single.html"><img src="/assets/images/2.png" alt=" " className="img-responsive" /></a>
														<p>Pepsi soft drink (2 Ltr)</p>
														<h4>$8.00 <span>$10.00</span></h4>
													</div>
													<div className="snipcart-details top_brand_home_details">
														<form action="#" method="post">
															<fieldset>
																<input type="hidden" name="cmd" value="_cart" />
																<input type="hidden" name="add" value="1" />
																<input type="hidden" name="business" value=" " />
																<input type="hidden" name="item_name" value="Pepsi soft drink" />
																<input type="hidden" name="amount" value="8.00" />
																<input type="hidden" name="discount_amount" value="1.00" />
																<input type="hidden" name="currency_code" value="USD" />
																<input type="hidden" name="return" value=" " />
																<input type="hidden" name="cancel_return" value=" " />
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
							<div className="col-md-3 top_brand_left">
								<div className="hover14 column">
									<div className="agile_top_brand_left_grid">
										<div className="agile_top_brand_left_grid_pos">
											<img src="/assets/images/offer.png" alt=" " className="img-responsive" />
										</div>
										<div className="agile_top_brand_left_grid1">
											<figure>
												<div className="snipcart-item block">
													<div className="snipcart-thumb">
														<a href="single.html"><img src="/assets/images/4.png" alt=" " className="img-responsive" /></a>
														<p>dogs food (4 Kg)</p>
														<h4>$9.00 <span>$11.00</span></h4>
													</div>
													<div className="snipcart-details top_brand_home_details">
														<form action="#" method="post">
															<fieldset>
																<input type="hidden" name="cmd" value="_cart" />
																<input type="hidden" name="add" value="1" />
																<input type="hidden" name="business" value=" " />
																<input type="hidden" name="item_name" value="dogs food" />
																<input type="hidden" name="amount" value="9.00" />
																<input type="hidden" name="discount_amount" value="1.00" />
																<input type="hidden" name="currency_code" value="USD" />
																<input type="hidden" name="return" value=" " />
																<input type="hidden" name="cancel_return" value=" " />
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
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
			
			
				<div className="fresh-vegetables">
					<div className="container">
						<h3>Top Products</h3>
						<div className="w3l_fresh_vegetables_grids row">
							<div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
								<div className="w3l_fresh_vegetables_grid2">
									<ul>
										{
											this.state.categories.map( (cat, index) => {
												if(index<10)
												return <li key={index}><i className="fa fa-check" aria-hidden="true"></i><NavLink to={`/products/${cat.slug}`}>{cat.name}</NavLink></li>
											})
										}
									</ul>
								</div>
							</div>
							<div className="col-md-9 w3l_fresh_vegetables_grid_right d-flex">
								<div className="col-md-4 w3l_fresh_vegetables_grid">
									<div className="w3l_fresh_vegetables_grid1">
										<img src="/assets/images/8.jpg" alt=" " className="img-responsive" />
									</div>
								</div>
								<div className="col-md-4 w3l_fresh_vegetables_grid">
									<div className="w3l_fresh_vegetables_grid1">
										<div className="w3l_fresh_vegetables_grid1_rel">
											<img src="/assets/images/7.jpg" alt=" " className="img-responsive" />
											<div className="w3l_fresh_vegetables_grid1_rel_pos">
												<div className="more m1">
													<a href="products.html" className="button--saqui button--round-l button--text-thick" data-text="Shop now">Shop now</a>
												</div>
											</div>
										</div>
									</div>
									<div className="w3l_fresh_vegetables_grid1_bottom">
										<img src="/assets/images/10.jpg" alt=" " className="img-responsive" />
										<div className="w3l_fresh_vegetables_grid1_bottom_pos">
											<h5>Special Offers</h5>
										</div>
									</div>
								</div>
								<div className="col-md-4 w3l_fresh_vegetables_grid">
									<div className="w3l_fresh_vegetables_grid1">
										<img src="/assets/images/9.jpg" alt=" " className="img-responsive" />
									</div>
									<div className="w3l_fresh_vegetables_grid1_bottom">
										<img src="/assets/images/11.jpg" alt=" " className="img-responsive" />
									</div>
								</div>
								<div className="clearfix"> </div>
								<div className="agileinfo_move_text">
									<div className="agileinfo_marquee">
										<h4>get <span className="blink_me">25% off</span> on first order and also get gift voucher</h4>
									</div>
									<div className="agileinfo_breaking_news">
										<span> </span>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
							{/* <div className="col-md-12 w3l_fresh_vegetables_grid_right d-flex agileinfo_move_text">
									<div className="agileinfo_marquee">
										<h4>get <span className="blink_me">25% off</span> on first order and also get gift voucher</h4>
									</div>
									<div className="agileinfo_breaking_news">
										<span> </span>
									</div>
									<div className="clearfix"></div>
								</div> */}
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
			
			
				<div className="newsletter">
					<div className="container">
						<div className="w3agile_newsletter_left">
							<h3>sign up for our newsletter</h3>
						</div>
						<div className="w3agile_newsletter_right">
							<form action="#" method="post">
								<input type="email" name="Email" value="Email" required="" />
								<input type="submit" value="subscribe now" />
							</form>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
			);
        return (
           <div>
              { ele }
           </div>
        );
     }
}
export default Home;