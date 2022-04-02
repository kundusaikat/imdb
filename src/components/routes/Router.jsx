import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Signup } from "../signup/Signup";
import { View } from "../view/View";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/movie/:id" element={<View />} />
        <Route exact path="/signin" element={<Signup />} />
      </Routes>
    </div>
  );
};
