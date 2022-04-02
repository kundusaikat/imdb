import image from "../../images/imdbYellow.png";
import { Menu } from "./fragments/Menu";
import { HeadBar } from "./fragments/HeadBar";
import { After_head } from "./fragments/After_head";

import "./css/header.css";
import "./css/menu.css";
import { useState } from "react";

export const Header = () => {
  const [toggle, setToggle] = useState(true);
  // let arr = ["a", "you", "hi", "avanger"];
  return (
    <>
      <div className="before_container">
        {toggle ? (
          <HeadBar setToggle={setToggle} image={image} />
        ) : (
          <Menu setToggle={setToggle} />
        )}
      </div>
      <div className="after_container">
        <After_head />
      </div>
    </>
  );
};
