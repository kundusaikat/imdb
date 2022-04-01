import axios from "axios";
import { useEffect, useState } from "react";

export const HeadBar = ({ setToggle, image }) => {
  const [inData, setInData] = useState({});
  const [final, setFinal] = useState([]);
  // https://omdbapi.com/?s=${inData}&apikey=fdcffdb4
 
  return (
    <>
      <div className="mainContainer">
        <img src={image} alt="" className="logoYellow" />

        <div className="menu">
          <a href="" className="menuContainer">
            <i
              className="fa-solid fa-bars"
              style={{ color: "white", background: "transparent" }}
              onClick={(e) => {
                e.preventDefault();
                setToggle(false);
              }}
            >
              <span></span> Menu
            </i>
            {/* <p id="Menu">Menu</p> */}
          </a>
        </div>
        <div className="search">
          <div className="searchOption">
            <p id="movie">movies</p>
          </div>
          <input type="text" placeholder="Search.." id="searchInput" />
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>

        <div className="imdbBlack">
          <p>ImdbPro</p>
        </div>
        <div className="imdbBlack">
          <p>Watchlist</p>
        </div>
        <div className="imdbBlack">
          <p>Sign in</p>
        </div>
        <div className="imdbBlack">
          <select name="" id="imdbBlack_option">
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
          </select>
        </div>
      </div>
     ` {/* <div style={{ color: "white" }}>
        {final.map((e) => (
          <div>{e.Title}</div>
        ))}
      </div>` */}
    </>
  );
};
