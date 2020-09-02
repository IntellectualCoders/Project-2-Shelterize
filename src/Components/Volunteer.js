import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "../firebase/base";
import { withRouter } from "react-router-dom";

const Volunteer = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const service = true;

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      await firebase.addUser(
        name,
        email,
        city,
        state,
        postalcode,
        lat,
        long,
        service
      );
      history.replace("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  function Locate() {
    return (
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log(
                position.coords.latitude + "  " + position.coords.longitude
              );
              setlat(position.coords.latitude);
              setlong(position.coords.longitude);
            },
            () => null
          );
        }}
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/compass-62-93840.png"
          alt="compass"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    );
  }
  return(
    <>
    <Header currUser={null} />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Registeration Form
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/volunteer"> Become a Volunteer</a></p>
						</div>
					</div>
				</div>
			</section>
      <section className="Volunteer-form-area section-gap">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-20">Want to help?</h1>
              <p>Nothing is as satisfying as watching a homeless person having home and food. If you want to help us in providing them home, Feel free to become our volunteer.</p>
              <p className="grey-text text-darken-1">
               Already have an account? <a href="/login">Login</a>
              </p> 
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <form className="col-lg-9" action="/profile"  onSubmit={(e) => e.preventDefault() && false}
                  
                >
            <div className="form-group">
              <label for="first-name">Name of the organisation</label>
              <input type="text" className="form-control" placeholder="First Name" value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
            </div>
            <div class="form-row">
              <div class="col-6 mb-30">
                <label for="email">Email-Id</label>
                <div class="select-option" id="service-select">
                <input type="email" placeholder="Official Email-id"  class="form-control"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }} required />
              </div>
              </div>
              <div class="col-6 mb-30">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" class="form-control" required   value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
              </div>
              </div><br/>
            <hr/>
            <div className="form-group">
              <label for="Address">Address</label>
              {/* <input type="text" className="form-control mb-20" placeholder="Your Address"  onChange={handleInputChange}/>
              <input type="text" className="form-control" placeholder="Address 2"  onChange={handleInputChange}/> */}
              <Locate />
            </div>
            <div class="form-row">
              <div class="col-6 mb-30">
                <label for="City">City</label>
                <div class="select-option" id="service-select">
                <input type="text" placeholder="City" class="form-control" required  value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }} />
              </div>
              </div>
              <div class="col-6 mb-30">
                <label for="state">State</label>
                <div class="select-option" id="service-select">
                <input type="text" class="form-control" placeholder="State" required   value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }} />
              </div>
              </div>
                <div class="col-6 mb-30">
                <label for="postal-code">Postal code</label>
                <input type="text" class="form-control" placeholder="Postal Code" required   value={postalcode}
                    onChange={(e) => {
                      setPostalcode(e.target.value);
                    }}/>
              </div>
             
            </div><br/>
            <hr style={{depth:"20px", color:"black"}}/>
            <div className="form-group">
              <label for="first-name">Proof of the organisation</label>
              <input type="file" className="form-control" placeholder="eg- (Address Proof etc.)"  />
            </div>
            <div className="form-row">
            <div class="col-6 mb-30">
                <label for="phone no.">Offical Phone no.</label>
                <input type="phone" placeholder="Phone no." class="form-control"  />
            </div>
            <div class="col-6 mb-30">
                <label for="phone no.">Capacity</label>
                <input type="number" placeholder="Capacity of people willing to take in" class="form-control"   />
            </div>
            </div>


            {/* <fieldset className="form-group">
            <label for="day"></label>
                          <div className="form-group ">
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio1" value="option1"/> Monday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option2"/> Tuesday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio3" value="option3"/> Wednesday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option4"/> Thursday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option5"/> Friday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Saturday
                                  </label>
                              </div>
                              <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" name="inlinecheckbox" id="inlineRadio2" value="option6"/> Sunday
                                  </label>
                              </div>
                          </div>
            </fieldset> */}
            
            <div className="form-group">
              <label for="note">Description of the organisation</label>
              <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Write message"></textarea>
            </div>
            <button type="submit"  onClick={onRegister} className="primary-btn float-right">Register</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default withRouter(Volunteer);