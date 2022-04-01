import "../css/debounce.css";
export const Debouns = ({ e }) => {
  const setItem = (input) => {
    let arr = JSON.parse(localStorage.getItem("whish")) || [];
    let arr_1=[...arr,e];
    localStorage.setItem("whish",JSON.stringify(arr_1))
  };
  return (
    <>
      <tr className="debounce">
        <td className="debounce_img">
          <img
            src={
              e.Poster === "N/A"
                ? "https://www.drupal.org/files/project-images/broken-image.jpg"
                : e.Poster
            }
            alt=""
          />
        </td>
        <td className="debounce_title">
          <p style={{ color: "white" }}>{e.Title}</p>
        </td>
        <td className="debounce_button">
          <button
            onClick={() => {
              setItem();
            }}
          >
            Whishlist
          </button>
        </td>
      </tr>
    </>
  );
};
