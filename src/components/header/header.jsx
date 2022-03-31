import image from "../../images/imdbYellow.png";
// import imageBlack from "../../images/imdbBlack.png";
// import menu from "../../images/menu.png";
// import logo from "../../images/bars-solid.svg";

import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="mainContainer">
        <img src={image} alt="" className="logoYellow" />

        <div className="menu">
          <a href="" className="menuContainer">
            <i className="fa-solid fa-bars" style={{ color: "white" }}>
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
      {/* after media quary */}
      {/* again after */}
      <div className="mainContainer_after">
        <div className="left">
          <a href="" className="menu_container">
            <i
              className="fa-solid fa-bars menu_after"
              style={{ color: "white" }}
            />
          </a>
          <a href="">
            <img src={image} alt="" className="logoYellow_after" />
          </a>
        </div>
        <div className="right">
          <div className="search_after_container">
            <i
              className="fa-solid fa-magnifying-glass search_after "
              style={{ color: "white" }}
            />
          </div>
          <div className="p_after_container">
            <p className="p_after">Sign in</p>
          </div>
          <select
            name=""
            id=""
            style={{ background: "black", color: "white" }}
            className="select_after"
          >
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
            <option value="">En</option>
          </select>
        </div>
      </div>
    </>
  );
};
