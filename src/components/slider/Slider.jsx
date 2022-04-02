// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
// import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";

export const Slider = () => {
  return (
    <div>
      <div className="maincontent">
        <div className="container-fluid">
          <div className="content">
            <div className="banner col-lg-9 col-sm-9 col-md-9">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      src="slider/the-offer.png"
                      style={{ width: "100%" }}
                      alt=""
                    />
                    <div className="banner-text">
                      <p>
                        <i className="fa fa-play"></i> "The Offer" Looks Back at
                        the Making of 'The Godfather'.
                      </p>
                    </div>
                  </div>

                  <div className="item">
                    <img src="slider/2.jpg" style={{ width: "100%" }} alt="" />
                    <div className="banner-text">
                      <p>
                        <i className="fa fa-play"></i> Fantastic Beasts: The
                        Secrets of Dumbledore.
                      </p>
                    </div>
                  </div>

                  <div className="item">
                    <img src="slider/7.jpg" style={{ width: "100%" }} alt="" />
                    <div className="banner-text">
                      <p>
                        <i className="fa fa-play"></i> SPOILERS AHEAD:Deleted
                        Scene from 'The Batman'.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="sidebar col-lg-3 col-sm-3 col-md-3">
              <h4 className="upnext">Up Next</h4>
              <div className="more">
                <a href="/">
                  <div className="col-sm-3">
                    <img src="slider/1.jpg" style={{ width: "100%" }} alt="" />
                  </div>
                  <div className="col-sm-9">
                    <i className="fa fa-play"></i>
                    <span>0:31</span>
                    <p>Fantastic Beasts: The Crimes of Grindelwald</p>
                    <p>Watch the Trailer</p>
                  </div>
                </a>
              </div>
              <div className="more">
                <a href="/">
                  <div className="col-sm-3">
                    <img src="slider/6.jpg" style={{ width: "100%" }} alt="" />
                  </div>
                  <div className="col-sm-9">
                    <i className="fa fa-play"></i>
                    <span>0:34</span>
                    <p>"The Moon Knight "</p>
                    <p>Watch the Trailer</p>
                  </div>
                </a>
              </div>
              <div className="more">
                <a href="/">
                  <div className="col-sm-3">
                    <img src="slider/3.jpg" style={{ width: "100%" }} alt="" />
                  </div>
                  <div className="col-sm-9">
                    <i className="fa fa-play"></i>
                    <span>0:36</span>
                    <p>"The Offer"</p>
                    <p>Watch the Trailer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
