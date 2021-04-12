import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/register.css";

function Register() {
  return (
    <div>
      <header className="showcase">
        <div className="container form-container">
          <div className="row formm">
            <div className="offset-sm-3 col-sm-6">
              <form className="signup">
                <h1>Sign Up</h1>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="form-control"
                  type="tel"
                  pattern="[6789][0-9]{9}"
                  placeholder="Mobile Number"
                  required="required"
                />
                <br />
                <input
                  className="form-control input-lg input-block"
                  type="email"
                  placeholder="Email Address"
                  required="required"
                />
                <br />
                <input
                  className="form-control input-lg"
                  type="password"
                  placeholder="Password"
                  required="required"
                />
                <br />
                <input
                  className="form-control input-lg"
                  type="password"
                  placeholder="Confirm Password"
                  required="required"
                />

                <button type="button" className="btn sub-color btn-lg btn-block">
                  Sign Up
                </button>
                <div className="help">
                  <Link to="/sign-in">
                    <h6 className="anchr">already have an Account, Sign in</h6>{" "}
                  </Link>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      ;
    </div>
  );
}

export default Register;
