import React from "react";
import { Login } from "../Login/login";
import "./Signup.css";

export const Signup = () => {
  return (
    <div className="mdiv">
      <div className="ldiv">
        <h2>Sign in</h2>

        <div>
          <div className="signinmethod  ">
            {/* <div className="imgd"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3i7lP_ywB0RjlG7VA7Ozg5Zt-BMduN_z48MyHJ0CzndsgRpbRqfJWwi4Bp47pSrhnBs&usqp=CAU" ></img></div>
                    <div className="h2"><h3>Sign in with Google</h3></div> */}
            <div className="g-signin">{<Login />}</div>
          </div>

          <div className="signinmethod">
            <div className="imgd">
              <img
                src="data:image/png;base64,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"
                alt=""
              ></img>
            </div>
            <div className="h2">
              <h3 className="amzan">Sign in with Amazon</h3>
            </div>
          </div>

          <div className="signinmethod">
            <div className="imgd">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt=""
              ></img>
            </div>
            <div className="h2">
              <h3>Sign in with Facebook</h3>
            </div>
          </div>

          <div className="signinmethod">
            <div className="imgd">
              <img
                src="https://ia.media-imdb.com/images/M/MV5BODc4MTA3NjkzNl5BMl5BcG5nXkFtZTgwMDg0MzQ2OTE@._V1_.png"
                alt=""
              ></img>
            </div>
            <div className="h2">
              <h3>Sign in with IMDb</h3>
            </div>
          </div>

          <div className="signinmethod">
            <div className="imgd">
              <img
                src="data:image/png;base64,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"
                alt=""
              ></img>
            </div>
            <div className="h2">
              <h3>Sign in with Apple</h3>
            </div>
          </div>

          <div className="signinmethod nonborder">
            <span className="line-span">____________</span>
            <span className="or-span">or</span>
            <span className="line-span">____________</span>
          </div>

          <button className="signinmethod btn">Create a New Account</button>

          <div className="signinmethod nonborder">
            <p className="disc">
              By signing in, you agree to IMDb's Conditions of Use and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>

      <div className="rdiv">
        <div className="discription">
          <h1 className="first-heading">Benefits of your free IMDb account</h1>

          <div className="disription1">
            <h4>Personalized Recommendations</h4>
            <p>Discover shows you'll love.</p>
          </div>

          <div className="disription1">
            <h4>Your Watchlist</h4>
            <p>
              Track everything you want to watch and receive e-mail when movies
              open in theaters.
            </p>
          </div>

          <div className="disription1">
            <h4>Your Ratings</h4>
            <p>Rate and remember everything you've seen.</p>
          </div>

          <div className="disription1">
            <h4>Contribute to IMDb</h4>
            <p>
              Add data that will be seen by millions of people and get cool
              badges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
