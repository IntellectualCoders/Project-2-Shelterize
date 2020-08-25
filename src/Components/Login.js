import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  return(
    <>
    <Header />
    <section className="banner-area relative" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Login Form
							</h1>
							<p className="text-white link-nav"><a href="/">Home </a>  <span className="lnr lnr-arrow-right"></span>  <a href="/volunteer"> Login</a></p>
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
               Don't have an account? <a href="/volunteer">Register</a>
              </p> 
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <form className="col-lg-9" action="/profile">
            <div className="form-group">
              <label for="email">Email Id</label>
              <input type="email" className="form-control" placeholder="Email Id" required />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" placeholder="password" required />
            </div>
            <button type="submit" className="primary-btn float-right">Login</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  )
}

export default Login
