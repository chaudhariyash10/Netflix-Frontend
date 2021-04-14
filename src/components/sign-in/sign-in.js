import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submitUser = (email, password) => {
    fetch(`http://localhost:5000/user/login/${email}/${password}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      mode: "cors",
    });
  };

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
                  autoFocus
                  placeholder="Email or phone number"
                  onChange={(e) => setEmail(e.taget.value)}
                />
                <br />
                <input
                  className="form-control input-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/homepage">
                  <button
                    type="button"
                    className="btn  btn-lg btn-block sub-color"
                    onClick={submitUser(email, password)}
                  >
                    Sign In
                  </button>
                </Link>

                <div className="help">
                  <div className="remember">
                    <input value="true" type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <Link to="/register">
                    <button className="btn-anchor">
                      Don't have an Account, Register
                    </button>
                  </Link>
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
