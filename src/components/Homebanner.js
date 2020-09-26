import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Leftbanner from './layout/leftbanner';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

const ele = (
    
<div>
<div className="banner">
		<Leftbanner />
		<div className="w3l_banner_nav_right">
			<Carousel responsive={responsive}>
                <div className="w3l_banner_nav_right_banner">
                    <h3>Make your <span>food</span> with Spicy.</h3>
                    <div className="more">
                        <a href="products.html" className="button--saqui button--round-l button--text-thick" data-text="Shop now">Shop now</a>
                    </div>
                </div>
                <div className="w3l_banner_nav_right_banner1">
                    <h3>Make your <span>food</span> with Spicy.</h3>
                    <div className="more">
                        <a href="products.html" className="button--saqui button--round-l button--text-thick" data-text="Shop now">Shop now</a>
                    </div>
                </div>
                <div className="w3l_banner_nav_right_banner2">
                    <h3>upto <i>50%</i> off.</h3>
                    <div className="more">
                        <a href="products.html" className="button--saqui button--round-l button--text-thick" data-text="Shop now">Shop now</a>
                    </div>
                </div>
            </Carousel>
		</div>
		<div className="clearfix"></div>
	</div>
</div>
);
class Homebanner extends Component {
    componentDidMount() {

    }
    render() {
        return (
           <div>
              { ele }
           </div>
        );
     }
}
export default Homebanner;