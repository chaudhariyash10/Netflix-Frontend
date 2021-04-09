import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/signin.css";

function Signin() {
  return (
    <div>
      <header className="showcase">
        <div className="container form-container">
          <div className="row formm">
            <div className="offset-sm-3 col-sm-6">
              <form className="signin">
                <h1>Sign In</h1>
                <input
                  className="form-control input-lg input-block"
                  type="email"
                  placeholder="Email or phone number"
                />
                <br />
                <input
                  className="form-control input-lg"
                  type="password"
                  placeholder="Password"
                />
                <Link to="/homepage">
                  <button
                    type="button"
                    className="btn sub-color btn-lg btn-block"
                  >
                    Sign In
                  </button>
                </Link>

                <div className="help">
                  <div className="remember">
                    <input value="true" type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <a href="">Need Help ?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Signin;
