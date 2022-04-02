import image from "../../../images/imdbYellow.png";
export const Menu = ({ setToggle }) => {
  return (
    <>
      <div className="before">
        <div className="row_1">
          <div className="colum_head_left">
            <img
              src={image}
              alt=""
              id="imdb_image"
              style={{ height: "60px" }}
            />
          </div>
          <div className="colum_head_right">
            <button
              onClick={() => {
                setToggle(true);
              }}
            >
              Back
            </button>
          </div>
        </div>
        <div className="row_2">
          <div className="colunm">
            <div className="row_in">
              <div className="heading">
                <h2>Movies</h2>
              </div>
              <div className="content">
                <ul>
                  <li>Release Calendar</li>
                  <li>DVD & Blu-ray Releases</li>
                  <li>Top 250 Movies</li>
                  <li>Most Popular Movies</li>
                  <li>Browse Movies by Genre</li>
                  <li>Top Box Office </li>
                  <li>Showtimes & Tickets</li>
                  <li>Comming Soon</li>
                  <li>Movie News</li>
                  <li>India Movie Spotlight</li>
                </ul>
              </div>
            </div>
            <div className="row_in">
              <div className="heading">
                <h2>TV Shows</h2>
              </div>
              <div className="content">
                <ul>
                  <li>What's on TV & Streaming</li>
                  <li>Top 250 TV Shows</li>
                  <li>Most Popular TV Shows</li>
                  <li>Browse TV Shows</li>
                  <li>TV News</li>
                  <li>India TV Spotlight</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="colunm">
            <div className="row_in">
              <div className="heading">
                <h2>Watch</h2>
              </div>
              <div className="content">
                <ul>
                  <li>What to Watch</li>
                  <li>Latest Trailers</li>
                  <li>IMDb Orinals</li>
                  <li>IMDb Picks</li>
                  <li>IMDb Podcasts</li>
                </ul>
              </div>
            </div>
            <div className="row_in">
              <div className="heading">
                <h2>Awards & Events</h2>
              </div>
              <div className="content">
                <ul>
                  <li>Oscars</li>
                  <li>Best Picture Winners</li>
                  <li>Emmys</li>
                  <li>Women's History Month</li>
                  <li>STARmeter Awards</li>
                  <li>San Diego Comic-con</li>
                  <li>New York Comic-Con</li>
                  <li>Sundance Film Festival</li>
                  <li>Toronto Int'l Film Festival</li>
                  <li>Awards Central </li>
                  <li>Festival Central</li>
                  <li>All Events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="colunm">
            <div className="row_in">
              <div className="heading">
                <h2>Celebs</h2>
              </div>
              <div className="content">
                <ul>
                  <li>Born Today</li>
                  <li>Most Popular Celebs</li>
                  <li>Celebrity News</li>
                </ul>
              </div>
            </div>
            <div className="row_in">
              <div className="heading">
                <h2>Community</h2>
              </div>
              <div className="content">
                <ul>
                  <li>Help Center</li>
                  <li>Contibutor Zone</li>
                  <li>Polls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
