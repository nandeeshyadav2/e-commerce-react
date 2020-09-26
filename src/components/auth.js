import React, { Component } from 'react';
import Leftbanner from './layout/leftbanner';
import axios from 'axios';
	
    class Auth extends Component {

		constructor(props){
			super(props);
			
			this.state = {
				email : '',
				password : '',
				BASE_URL: process.env.REACT_APP_API_URL
			}
		}

		updateInputValue(evt) {
			this.setState({
				[evt.target.name]: evt.target.value
			});
		  }

		handleLogin(){
			if(this.state.email && this.state.password)
			{
				const user = {
					email: this.state.email,
					password: this.state.password
				  };

				axios.post(this.state.BASE_URL+`login` ,user)
				.then(res => {
				  const userToken = res.data;
				  if(userToken.token)
				  {
					  localStorage.setItem('token', userToken.token);
					  this.props.history.push('/');
				  }
				})
			}
		  }
		  
		  render() {
			return ( 
				<div>
				<div className="products-breadcrumb">
						<div className="container">
							<ul>
								<li><i className="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>|</span></li>
								<li>Sign In</li>
							</ul>
						</div>
					</div>
				
					<div className="banner">
						<Leftbanner />
						<div className="w3l_banner_nav_right">
						<div className="w3_login">
							<h3>Sign In</h3>
							<div className="w3_login_module">
								<div className="module form-module">
								  <div className="toggle">
								  </div>
								  <div className="form">
									<h2>Login to your account</h2>
									  <input type="text" name="email" placeholder="Username"  onChange={evt => this.updateInputValue(evt)}/>
									  <input type="password" name="password" placeholder="Password"  onChange={evt => this.updateInputValue(evt)} />
									  <input type="submit" value="Login" onClick={() => { this.handleLogin() }} />
								  </div>
								  <div className="form">
									
								  </div>
								  <div className="cta"><a href="#" >Forgot your password?</a></div>
								</div>
							</div>
						</div>
						</div>
						<div className="clearfix"></div>
					</div>
					</div>
			 )
		  }
		  
    }
    export default Auth;
    