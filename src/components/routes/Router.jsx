import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Home />} />
      </Routes>
    </div>
  );
};
