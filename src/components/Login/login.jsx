import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./login.css";
const clientId =
  "1029051175249-a6inh8m07ekih5n28ngbj3m045v5hcr7.apps.googleusercontent.com";

export const Login = () => {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div className="onlydiv">
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <div
              className="logindiv"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div className="imgd">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3i7lP_ywB0RjlG7VA7Ozg5Zt-BMduN_z48MyHJ0CzndsgRpbRqfJWwi4Bp47pSrhnBs&usqp=CAU"
                  alt=""
                ></img>
              </div>
              <div className="h2">
                <h3>Sign in with Google</h3>
              </div>
            </div>
          )}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          render={(renderProps) => (
            <div
              className="logindiv"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <div className="imgd">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3i7lP_ywB0RjlG7VA7Ozg5Zt-BMduN_z48MyHJ0CzndsgRpbRqfJWwi4Bp47pSrhnBs&usqp=CAU"
                  alt=""
                ></img>
              </div>
              <div className="h2">
                <h3>Sign in with Google</h3>
              </div>
            </div>
          )}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
};
