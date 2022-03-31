import { Routes, Route } from "react-router-dom";
import { Main } from "../main/Main";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Main />} />
      </Routes>
    </div>
  );
};
