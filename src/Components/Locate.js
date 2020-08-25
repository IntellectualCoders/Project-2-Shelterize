import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Locate = () => {
  return(
          <>
          <Header />
          <section class="banner-area relative" id="home">
    <div class="overlay overlay-bg"></div>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="about-content col-lg-12">
          <h1 class="text-white">
          Find Shelter
          </h1>
          <p class="text-white link-nav"><a href="/">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="/locate"> Shelter</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="Volunteer-form-area section-gap">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-60 col-lg-9">
							<div class="title text-center">
								<h1 class="mb-20">Need help? Find nearest shelter</h1>
								<p>Please provide us your details </p>
								
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<form class="col-lg-9">
						  <div class="form-row">
							  <div className="col-6 mb-30">
						    <label for="first-name">Your Name</label>
						    <input type="text" class="form-control" placeholder="Your Name" required />
							</div>
							<div class="col-6 mb-30">
						  		<label for="age">Age</label>
						   		<input type="number" class="form-control" placeholder="Age" required />
						  	</div>
						  </div>

					  <div class="form-row">
					  						  	<div class="col-6 mb-30">
						  		<label for="email">Email Address</label>
						   		<input type="email" class="form-control" placeholder="Email Address" />
						  	</div>
						  	<div class="col-6 mb-30">
						  		<label for="phone">Phone Number</label>
						   		<input type="phone" class="form-control" placeholder="Phone Number" required />
						  	</div></div>
						  	<br/><br/>
						  <div class="form-group">
						    <label for="Address">Where are you right now?</label>
						    <input type="text" class="form-control mb-20" placeholder="Address" required />
						    <input type="text" class="form-control" placeholder="Address 2" />
						  </div>
						  <div class="form-row">
						  	<div class="col-6 mb-30">
						  		<label for="City">City</label>
						   		<div class="select-option" id="service-select">
									<input type="text" placeholder="City" class="form-control" required />
								</div>
						  	</div>
						  	<div class="col-6 mb-30">
						  		<label for="state">State</label>
						   		<div class="select-option" id="service-select">
																		<input type="text" class="form-control" placeholder="State" required />
								</div>
						  	</div>
							  	<div class="col-6 mb-30">
						  		<label for="postal-code">Postal code</label>
						   		<input type="text" class="form-control" placeholder="Postal Code" required />
						  	</div>

						  </div>


						  <fieldset class="form-group" required>
							<label for="day">Your Health Condition..</label>
                            <div class="form-group ">
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio1" value="option1" /> Physically injured.
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option2" /> Starving
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio3" value="option3" /> Pregnant or with small kids
                                    </label>
                                </div>
                               </div>


						  </fieldset>

						  <div class="form-group">
						    <label for="note">Further Details</label>
						    <textarea class="form-control" id="exampleTextarea" rows="5" placeholder="Mention any other detail you want to share..."></textarea>
						  </div>
						  
						  <button type="submit" class="primary-btn float-right">Submit</button>
					</form>

					</div>
				</div>
			</section>
      <Footer />
          </>
  )
}

export default Locate
