import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  topPicks,
  fanFavourites,
  borntoday,
  editorsPick,
  topnewsData,
  featuredToday,
  exclusive,
} from "../../data";
import "./Main.css";

export const Main = () => {
  const [wl_data, setWl_data] = useState([]);
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("whish"));
    setWl_data([...arr]);
  }, [wl_data]);

  // function remove_item() {}

  return (
    <div className="main">
      {/* Featured today */}
      <div className="container featuredToday">
        <h1>Featured today</h1>
        <div className="flexContainer">
          {featuredToday.map((e) => (
            <div className="wrapper" key={e.title}>
              <div className="imgContainer">
                <img src={e.imgUrl} alt="" />
              </div>
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to watch */}
      <div className="container">
        <h1>What to watch</h1>
        <div className="subdiv toppicks">
          <h2 className="heading">Top picks</h2>
          <p style={{ marginBottom: "8px" }}>
            TV shows and movies just for you
          </p>

          <div className="flexContainer">
            {topPicks.map((e) => (
              <div className="wrapper" key={e.title}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <p>{e.rating}</p>
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="subdiv toppicks">
          <h2 className="heading" style={{ marginTop: "80px" }}>
            From your Watchlist
          </h2>
          <p style={{ marginBottom: "8px" }}>
            Movies and TV shows that you have watchlisted
          </p>
          <div className="flexContainer" id="wl">
            {wl_data.map((e, i) => (
              <div className="wrapper" key={e.imdbID}>
                <div className="button_container">
                  <button
                    className="remove_wl"
                    onClick={() => {
                      let temp = [...wl_data];
                      temp.splice(i, 1);
                      localStorage.setItem("whish", JSON.stringify(temp));
                      setWl_data([...temp]);
                    }}
                  >
                    Remove
                  </button>
                  <Link className="link_wl" to={`/movie/${e.imdbID}`}>
                    <button>View</button>
                  </Link>
                </div>
                <div className="imgContainer" style={{ height: "220px" }}>
                  <img
                    src={
                      e.Poster === "N/A"
                        ? "https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png"
                        : e.Poster
                    }
                    alt=""
                  />
                </div>
                <p>7.5</p>
                <p>{e.Title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="subdiv toppicks">
          <h2 className="heading" style={{ marginTop: "80px" }}>
            Fan favourites
          </h2>
          <p style={{ marginBottom: "8px" }}>This week's top TV and Movies</p>
          <div className="flexContainer">
            {fanFavourites.map((e) => (
              <div className="wrapper" key={e.title}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <p>{e.rating}</p>
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="subdiv">
          <h2 className="heading" style={{ marginTop: "80px" }}>
            More to watch
          </h2>
        </div>
      </div>

      {/* Exclusive videos */}
      <div className="container featuredToday">
        <h1>Exclusive videos</h1>
        <div className="subdiv">
          <h2 className="heading">IMDb Originals</h2>
          <p>
            Celebrity interviews, trending entertainment stories, and expert
            analysis
          </p>
        </div>
        <div className="flexContainer">
          {exclusive.map((e) => (
            <div className="wrapper" key={e.title}>
              <div className="imgContainer">
                <img src={e.imgUrl} alt="" />
              </div>
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore what's streaming */}
      <div className="container streaming">
        <h1>Explore what's streaming</h1>
        <ul>
          <li>PRIME VIDEO</li>
          <li>NETFLIX</li>
          <li>HOTSTAR</li>
          <li>MX PLAYER</li>
          <li>JIO CINEMA</li>
          <li>SONYLIV</li>
          <li>EROS NOW</li>
          <li>VOOT</li>
        </ul>
        <br />
        <p>Include with Prime</p>
        <div className="subdiv toppicks">
          <div className="flexContainer">
            {fanFavourites.map((e) => (
              <div className="wrapper" key={e.title}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <p>{e.rating}</p>
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Movies & TV shows --> IN theaters | Top box office (US) | Coming soon to Theaters (US)*/}
      {/* <div className="container">
        <h1>Explore Movies & TV shows</h1>
        <div className="subdiv">
          <h2 className="heading">In theaters</h2>
        </div>

        <div className="subdiv">
          <h2 className="heading">Top box office(US)</h2>
        </div>

        <div className="subdiv">
          <h2 className="heading">Coming soon to theaters (US)</h2>
        </div>
      </div> */}

      {/* More to explore --> Editor's pick | born today | top news | recently viewed*/}
      <div className="container">
        <h1>More to explore</h1>

        <div className="subdiv">
          <h2 className="heading" style={{ marginTop: "20px" }}>
            Editor's pick
          </h2>
          <div className="editor_flex">
            {editorsPick.map((e) => (
              <div className="editorsPick" key={e.title}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="subdiv borntoday">
          <h2 className="heading">Born Today</h2>
          <p>People born on April 1</p>
          <div className="flexContainer">
            {borntoday.map((e) => (
              <div key={e.name}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <p>{e.name}</p>
                <p>{e.age}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="topnews subdiv">
          <h2 className="heading">Top news</h2>
          <div className="topnews_flex">
            {topnewsData.map((e) => (
              <div className="flexContainer" key={e.desc}>
                <div className="imgContainer">
                  <img src={e.imgUrl} alt="" />
                </div>
                <div className="textContainter">
                  <p>{e.desc}</p>
                  <h5>{e.date}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="buttonFlex">
            <button>Top News</button>
            <button>Movie News</button>
            <button>TV News</button>
            <button>Celebrity News</button>
          </div>
        </div>

        <div className="recentlyviewed">
          <h2>Recently Viewed</h2>
          <br />
          <p>You have no recently viewed pages</p>
        </div>
      </div>

      {/* footer section starts here */}
      <div className="icons">
        <a href="/">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
      </div>
      <ul className="flex">
        <li>Get the IMDb App</li>
        <li>Help</li>
        <li>Site Index</li>
        <li>IMDbPro</li>
        <li>Box office Mojo</li>
        <li>IMdb Developer</li>
      </ul>
      <ul className="flex">
        <li>Press Room</li>
        <li>Advertising</li>
        <li>Jobs</li>
        <li>Conditions of Use</li>
        <li>Privacy Policy</li>
        <li>Imterest-Based Ads</li>
      </ul>
      <p className="amazon">
        an{" "}
        <img
          src="https://e7.pngegg.com/pngimages/469/268/png-clipart-amazon-com-logo-graphics-logo-best-seller-text-logo.png"
          alt="amazon"
        />{" "}
        company
      </p>
      <p className="lastline"> &#169; 1990-2022 by IMDb.com, Inc.</p>
    </div>
  );
};
