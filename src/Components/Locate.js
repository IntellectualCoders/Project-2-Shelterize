import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "../firebase/base";
import { withRouter } from "react-router-dom";

const Locate = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");

  async function onRegister() {
    try {
      await firebase.addCustomer(
        name,
        age,
        email,
        phone,
        city,
        state,
        postalcode,
        lat,
        long
      );
      history.replace("/nearme");
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

  return (
    <>
      <Header currUser={null} />
      <section class="banner-area relative" id="home">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Find Shelter</h1>
              <p class="text-white link-nav">
                <a href="/">Home </a> <span class="lnr lnr-arrow-right"></span>{" "}
                <a href="/locate"> Shelter</a>
              </p>
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
            <form
              class="col-lg-9" 
              onSubmit={(e) => e.preventDefault() && false}
            >
              <div class="form-row">
                <div className="col-6 mb-30">
                  <label for="first-name">Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="col-6 mb-30">
                  <label for="age">Age</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Age"
                    required
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="col-6 mb-30">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="col-6 mb-30">
                  <label for="phone">Phone Number</label>
                  <input
                    type="phone"
                    class="form-control"
                    placeholder="Phone Number"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
              <div class="form-group">
                <label for="Address">Where are you right now?</label>
                {"       "}
                {/* <input type="text" class="form-control mb-20" placeholder="Address" required />
						    <input type="text" class="form-control" placeholder="Address 2" /> */}
                <Locate />
              </div>
              <div class="form-row">
                <div class="col-6 mb-30">
                  <label for="City">City</label>
                  <div class="select-option" id="service-select">
                    <input
                      type="text"
                      placeholder="City"
                      class="form-control"
                      required
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-6 mb-30">
                  <label for="state">State</label>
                  <div class="select-option" id="service-select">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State"
                      required
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-6 mb-30">
                  <label for="postal-code">Postal code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Postal Code"
                    required
                    value={postalcode}
                    onChange={(e) => {
                      setPostalcode(e.target.value);
                    }}
                  />
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

              {/* <div class="form-group">
						    <label for="note">Further Details</label>
						    <textarea class="form-control" id="exampleTextarea" rows="5" placeholder="Mention any other detail you want to share..."></textarea>
						  </div> */}

              <button
                type="submit"
                onClick={onRegister}
                class="primary-btn float-right"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(Locate);