import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const token = localStorage.getItem('token');

class Header extends Component {

	state = { redirect: false };

	 logout()
	 {
		 localStorage.setItem('token', '');
		//  this.props.history.push('/');
	 }
	 
    render() {

		const element = (
			<div>
				<NotificationContainer/>
			<div className="agileits_header">
					<div className="w3l_offers">
						<Link to="/products">Today's special Offers ! </Link>
					</div>
					<div className="w3l_search">
						<form action="#" method="post">
							<input type="text" name="Product" value="Search a product..." required=""/>
							<input type="submit" value=" " />
						</form>
					</div>
					<div className="product_list_header">  
					<Link to="/cart"><fieldset>
								<input type="hidden" name="cmd" value="_cart" />
								<input type="hidden" name="display" value="1" />
								<input type="submit" name="submit" value="View your cart" className="button" />
							</fieldset>
							</Link>
					</div>
					<div className="w3l_header_right">
						<ul>
							<li className="dropdown profile_details_drop">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true"></i><span className="caret"></span></a>
								<div className="mega-dropdown-menu">
									<div className="w3ls_vegetables">
										{ !token?(
										<ul className="dropdown-menu drp-mnu" >
											<li><Link to="/authentication">Login</Link></li> 
											<li><Link to="/register">Register</Link></li>
										</ul>
										) : (
											<ul className="dropdown-menu drp-mnu" >
											<li><Link to="/authentication">Profile</Link></li> 
											<li><a onClick={() => { this.logout() }} >Logout</a></li>
										</ul>
										)
										}
									</div>                  
								</div>	
							</li>
						</ul>
					</div>
					<div className="w3l_header_right1">
						<h2><Link to="/contact">Contact Us </Link></h2>
					</div>
					<div className="clearfix"> </div>
				</div>
			
				<div className="logo_products">
					<div className="container">
						<div className="w3ls_logo_products_left">
							<h1> <Link to="/"><span>Grocery</span> Store </Link> </h1>
						</div>
						<div className="w3ls_logo_products_left1">
							<ul className="special_items">
								<li><a href="events.html">Events</a><i>/</i></li>
								<li><a href="about.html">About Us</a><i>/</i></li>
								<li><a href="products.html">Best Deals</a><i>/</i></li>
								<li><a href="services.html">Services</a></li>
							</ul>
						</div>
						<div className="w3ls_logo_products_left1">
							<ul className="phone_email">
								<li><i className="fa fa-phone" aria-hidden="true"></i>(+0123) 234 567</li>
								<li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:store@grocery.com">store@grocery.com</a></li>
							</ul>
						</div>
						<div className="clearfix"> </div>
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
export default Header;
