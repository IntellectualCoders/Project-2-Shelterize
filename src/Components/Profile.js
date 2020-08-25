import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Profile
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/volunteer">Profile</a></p>
						</div>
					</div>
				</div>
			</section>
      <section className="Volunteer-form-area section-gap">
      <div className="container" style={{backgroundColor:"black", opacity:"0.7", color:"white"}}>
      <div className="row justify-content-center">
      <form className="col-lg-8">
            <div className="form-group">
                <br/>
                <br/>
              <label for="first-name" style={{color:"white", fontSize:"20px"}}>Name of the organisation</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div class="form-row">
              <div class="col-6 mb-30">
                <label for="email" style={{color:"white", fontSize:"20px"}}>Email-Id</label>
                <div class="select-option" id="service-select">
                <input type="email" placeholder="Official Email-id" class="form-control" required />
              </div>
              </div>
              <div class="col-6 mb-30">
                <label for="password" style={{color:"white", fontSize:"20px"}}>Password</label>
                <input type="password" placeholder="Password" class="form-control" required />
              </div>
              </div>
            <br/>
            <div className="form-group">
              <label for="Address" style={{color:"white", fontSize:"20px"}}>Address</label>
              <input type="text" className="form-control mb-20" placeholder="Your Address" />
              <input type="text" className="form-control" placeholder="Address 2" />
            </div>
            <div class="form-row">
              <div class="col-6 mb-30">
                <label for="City" style={{color:"white", fontSize:"20px"}}>City</label>
                <div class="select-option" id="service-select">
                <input type="text" placeholder="City" class="form-control" required />
              </div>
              </div>
              <div class="col-6 mb-30">
                <label for="state" style={{color:"white", fontSize:"20px"}}>State</label>
                <div class="select-option" id="service-select">
                <input type="text" class="form-control" placeholder="State" required />
              </div>
              </div>
                <div class="col-6 mb-30">
                <label for="postal-code" style={{color:"white", fontSize:"20px"}}>Postal code</label>
                <input type="text" class="form-control" placeholder="Postal Code" required />
              </div>
             
            </div>
            <br/>
            <div className="form-row">
            <div class="col-6 mb-30">
                <label for="phone no." style={{color:"white", fontSize:"20px"}}>Offical Phone no.</label>
                <input type="phone" placeholder="Phone no." class="form-control" required />
            </div>
            <div class="col-6 mb-30">
                <label for="phone no."style={{color:"white", fontSize:"20px"}}>Capacity</label>
                <input type="number" placeholder="Capacity of people willing to take in" class="form-control" required />
            </div>
            </div>
           <form>
               <button type="submit" className="form-btn">Stop Services</button>
           </form>
            <button className="primary-btn float-right"> Move to list </button>
            <br/>
            <br/>
        </form>
     </div> 
     <br/>   
     </div>
      </section>
      <Footer/>
      </>
      )
  }
  export default Profile