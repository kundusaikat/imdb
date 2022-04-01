import {
  topPicks,
  watchlistData,
  fanFavourites,
  borntoday,
  editorsPick,
  topnewsData,
  featuredToday,
} from "../../data";
import "./Main.css";

export const Main = () => {
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
          <p>TV shows and movies just for you</p>
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
          <h2 className="heading">From your Watchlist</h2>
          <p>Movies and TV shows that you have watchlisted</p>
          <div className="flexContainer">
            {watchlistData.map((e) => (
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
          <h2 className="heading">Fan favourites</h2>
          <p>This week's top TV and Movies</p>
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
          <h2 className="heading">More to watch</h2>
        </div>
      </div>

      {/* Exclusive videos */}
      <div className="container">
        <h1>Exclusive videos</h1>
        <div className="subdiv">
          <h2 className="heading">IMDb Originals</h2>
        </div>
      </div>

      {/* Explore what's streaming */}
      <div className="container">
        <h1>Explore what's streaming</h1>
      </div>

      {/* Explore Movies & TV shows --> IN theaters | Top box office (US) | Coming soon to Theaters (US)*/}
      <div className="container">
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
      </div>

      {/* More to explore --> Editor's pick | born today | top news | recently viewed*/}
      <div className="container">
        <h1>More to explore</h1>

        <div className="subdiv">
          <h2 className="heading">Editor's pick</h2>
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
    </div>
  );
};
