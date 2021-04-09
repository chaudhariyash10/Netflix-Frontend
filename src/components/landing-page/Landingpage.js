import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Landingpage.css";
function Homepage() {
  return (
    <div>
      <header class="showcase">
        {/* Image and text */}
        <nav class="navbar fixed-top navbar-light">
          <div class="nav-design">
            <a class="navbar-brand" href="">
              {/* <!-- <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""> --> */}
              <h3 class="brand-name">
                <b>Trailerly</b>
              </h3>
            </a>
          </div>
          <div class="nav-design">
            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item active">
                <button class="btn btn-signin navbar-btn">
                  <b>Sign In</b>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div class="center">
          <h1 class="heading">
            Unlimited movies, TV <br></br> shows and more.
          </h1>
          <h4 class="sub-heading">Watch anywhere. Cancel anytime.</h4>
        </div>
      </header>

      <div class="container-fluid con-1">
        <div class="row">
          <div class="col-sm-4">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png"
              width="auto"
              height="500px"
              alt="mobile img"
            />
          </div>
          <div class="col-sm-6 content">
            <h1>Download your shows to watch on the go.</h1>
            <p>Save your data and watch all your favorites offline.</p>
          </div>
        </div>
      </div>

      <div class="container-fluid con-1">
        <div class="row">
          <div class="col-sm-6 content">
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on <br />
              your phone, tablet, laptop, and TV without paying more.
            </p>
          </div>

          <div class="col-sm-4">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="device pile"
            />
          </div>
        </div>
      </div>

      <footer id="footer" class="footer-design con-1">
        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h5 class="brand">TRAILERLY</h5>
              <br />
              <div>
                <p class="brand">
                  {" "}
                  <i id="foot" class="fa fa-phone brand"></i> (937) 354-5294
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <i id="foot" class=" fa fa-envelope brand"></i>{" "}
                  <a class="brand" href="mailto:chaitanyauge1@gmail.com">
                    {" "}
                    trailerly@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p class="brand">
                  {" "}
                  <i id="foot" class="fa fa-map-marker brand"></i>{" "}
                  <span> Survey No. 2/3/4, VIM Private Rd, Kapil Nagar,</span>
                  Kondhwa, Pune, Maharashtra 411048
                </p>
              </div>
            </div>

            <div class="offset-sm-4 col-sm-4">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="offset-sm-4">
              <p class="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <a class="brand" href="home.html">
                  Trailerly
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
