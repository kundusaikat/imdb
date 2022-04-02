import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";
import "./view.css";

export const View = () => {
  const [view, setView] = useState("");
  const { id } = useParams();
  const [Id, setId] = useState(id);
  useEffect(() => {
    getView();
  }, [Id]);
  function getView() {
    axios
      .get(`https://omdbapi.com/?i=${Id}&apikey=fdcffdb4&type=movie&plot=full`)
      .then(({ data }) => {
        setView(data);
      });
  }

  const [wl_data, setWl_data] = useState([]);
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("whish"));
    setWl_data([...arr]);
  }, [wl_data]);

  console.log(view);
  return (
    <>
      <Header />
      <div className="view_container">
        <div className="view_image_container">
          <img className="view_image" src={view.Poster} alt="" />
        </div>

        <div className="view_detail_container">
          <h2>{view.Title}</h2>
          {/* more detail */}
          <table className="view_table">
            <tbody className="view_tbody">
              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">Actors</h3>
                </td>
                <td className="view_small_container">
                  <p className="view_value">{view.Actors}</p>
                </td>
              </tr>

              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">Awards</h3>
                </td>
                <td className="view_small_container">
                  <p className="view_value">{view.Awards}</p>
                </td>
              </tr>

              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">BoxOffice</h3>
                </td>
                <td className="view_small_container">
                  <p className="view_value">{view.BoxOffice}</p>
                </td>
              </tr>

              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">Language</h3>
                </td>
                <td className="view_small_container">
                  <p className="view_value">{view.Language}</p>
                </td>
              </tr>

              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">Released</h3>
                </td>
                <td className="view_small_container">
                  <p style={{ color: "white" }} className="view_value">
                    {view.Released}
                  </p>
                </td>
              </tr>

              <tr className="view_star_container">
                <td className="view_small_container">
                  <h3 className="view_title">IMDb Rating</h3>
                </td>

                <td className="view_small_container">
                  <p style={{ color: "white" }} className="view_value">
                    {view.imdbRating}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="hr"></div>
      <div className="wl_head">
        <h2>Whish list</h2>
      </div>
      <div className="my_whish_list" id="wl">
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
              <div className="link_wl">
                <button
                  onClick={() => {
                    setId(e.imdbID);
                  }}
                >
                  View
                </button>
              </div>
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
    </>
  );
};
