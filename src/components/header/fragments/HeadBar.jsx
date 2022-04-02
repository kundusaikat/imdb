import axios from "axios";
import { useState } from "react";
import { Debouns } from "./debouncing";
import { Link } from "react-router-dom";

export const HeadBar = ({ setToggle, image }) => {
  const [final, setFinal] = useState([]);
  const getData = (text) => {
    const { value } = text.target;
    if (value.length > 0) {
      axios
        .get(`https://omdbapi.com/?s=${value}&apikey=fdcffdb4&type=movie`)
        .then((res) => {
          // console.log(res.data);
          if (res.data.Response === "False") {
            // console.log("hi");
            setFinal([]);
          } else {
            setFinal(res.data.Search);
          }
        });
    } else if (value.length === 0) {
      setFinal([]);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <img src={image} alt="" className="logoYellow" />

        <div className="menu">
          <a href="/" className="menuContainer">
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
          </a>
        </div>
        <div className="search">
          <div className="searchOption">
            <p id="movie_header">movies</p>
          </div>
          <input
            type="text"
            placeholder="Search.."
            id="searchInput"
            onChange={(e) => getData(e)}
          />
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>

        <div className="imdbBlack">
          <p>ImdbPro</p>
        </div>
        <a href="#wl" id="wl_a">
          <div className="imdbBlack">
            <p>Watchlist</p>
          </div>
        </a>
        <div className="imdbBlack">
          <Link to="/signin" className="link">
            {" "}
            <p>Sign in</p>
          </Link>
        </div>
        <div className="imdbBlack">
          <select name="" id="imdbBlack_option">
            <option value="">En</option>
            <option value="">Hin</option>
          </select>
        </div>
      </div>

      <table className="debounce_table">
        <tbody>
          {final.map((e) => (
            <Debouns key={e.imdbID} e={e} />
          ))}
        </tbody>
      </table>
    </>
  );
};
