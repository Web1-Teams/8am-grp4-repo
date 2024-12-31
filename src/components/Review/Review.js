//this card is token from https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=client-testimonial-slider

//import
import React from 'react';
import './Review.css';
import pic1 from '../../assests/Images/Main Page Images/4202841.png';
import pic2 from '../../assests/Images/Main Page Images/5231019.png';
import pic3 from '../../assests/Images/Main Page Images//5719511.png';
import pic4 from '../../assests/Images/Main Page Images/6889369.png';
import pic5 from '../../assests/Images/Main Page Images/7084424.png';
import pic6 from '../../assests/Images/Main Page Images/921053.png';
// function

const Review= ()=>{
     return(
        <div className="container-lg">
	     <div className="row">
		   <div className="col-sm-12">			
		      <div id="myCarousel" class="carousel slide" data-ride="carousel">
				<h2>Customer <b>Testimonials</b></h2>
				
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<img src={pic1} class="mr-3" alt=""/>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Paula Wilson</b></div>
											<div className="details">Media Analyst / SkyNet</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<img src={pic2} className="mr-3" alt=""/>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Antonio Moreno</b></div>
											<div className="details">Web Developer / SoftBee</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div className="carousel-item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<img src={pic3} className="mr-3" alt=""/>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Michael Holz</b></div>
											<div className="details">Web Developer / DevCorp</div>											
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<img src={pic4} className="mr-3" alt=""/>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Mary Saveley</b></div>
											<div className="details">Graphic Designer / MarsMedia</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div className="carousel-item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<img src={pic5} className="mr-3" alt=""/>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Martin Sommer</b></div>
											<div className="details">SEO Analyst / RealSearch</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={pic6} alt=""/>										
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>John Williams</b></div>
											<div className="details">Web Designer / UniqueDesign</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>
				
				<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i className="fa fa-chevron-left"></i>
				</a>
				<a className="carousel-control-next" href="#myCarousel" data-slide="next">
					<i className="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
  </div>
)
}







//export
export default Review