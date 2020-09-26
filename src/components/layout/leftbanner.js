import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";

class Leftbanner extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			categories: [],
			subcategories: [],
			BASE_URL: process.env.REACT_APP_API_URL
		}
	}

    componentDidMount() {
		// console.log(this.props.params)
		let result = [];
		axios.get(this.state.BASE_URL+`getCategories`)
		.then(res => {
			let data = res.data;
			// result.length = 9;
			this.setState({categories:res.data});
			data.map(i=>{
				result[i.name] = data.filter(j=>{
					return i.id == j.parent_id;
				})
			})
			// result.length = 9;
			this.setState({subcategories:result});
		//   console.log(this.state.categories);
		})
	}

    render() {

		const ele = <div><div className="w3l_banner_nav_left">
			<nav className="navbar nav_bottom">

			  <div className="navbar-header nav_2">
				  <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
			   </div> 

				<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
					<ul className="nav navbar-nav nav_1">
						{ Object.keys(this.state.subcategories).map((key, value)  => {
							if(value<9) {
							if(this.state.subcategories[key].length==0) return <li key={value}><NavLink exact to={`/products/${this.state.categories.find(item => item.name == key).slug }`}>{key}</NavLink></li>; 
							// <li><a href="household.html">{key}</a></li>
							else { return <li className="dropdown mega-dropdown active" key={key}>
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">{key}<span className="caret"></span></a>				
								<div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
									<div className="w3ls_vegetables">
										<ul>
											{
												this.state.subcategories[key].map( sub => {
												return <li key={sub.id}><NavLink exact  to={`/products/${sub.slug}`} >{sub.name}</NavLink></li>
												})
											}
										</ul>
									</div>                  
								</div>				
							</li>
							}
						}
						})
					}
					</ul>
				 </div>
			</nav>
		</div>
        </div>;


        return (
           <div>
              { ele }
           </div>
        );
     }
}
export default Leftbanner;