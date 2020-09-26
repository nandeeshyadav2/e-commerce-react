import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';

const element = (
<div>
<div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>|</span></li>
				<li>Sign Up</li>
			</ul>
		</div>
	</div>

	<div className="banner">
		<Leftbanner />
		<div className="w3l_banner_nav_right">
		<div className="w3_login">
			<h3>Sign Up</h3>
			<div className="w3_login_module">
				<div className="module form-module">
				 
				  <div className="form">
					<h2>Login to your account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" " />
					  <input type="password" name="Password" placeholder="Password" required=" " />
					  <input type="submit" value="Login" />
					</form>
				  </div>
				  <div className="form">
					<h2>Create an account</h2>
					<form action="#" method="post">
					  <input type="text" name="Username" placeholder="Username" required=" " />
					  <input type="password" name="Password" placeholder="Password" required=" " />
					  <input type="email" name="Email" placeholder="Email Address" required=" " />
					  <input type="text" name="Phone" placeholder="Phone Number" required=" " />
					  <input type="submit" value="Register" />
					</form>
				  </div>
				  {/* <div className="cta"><a href="#">Forgot your password?</a></div> */}
				</div>
			</div>
		</div>
		</div>
		<div className="clearfix"></div>
	</div>
    </div>
    );

    class Register extends Component {
        
        render() {
            return (
                <div>
                    { element }
                </div>
                  
            );
         }
    }
    export default Register;
    