import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { View } from "../view/View";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/movie/:id" element={<View />} />
      </Routes>
    </div>
  );
};
