import { Main } from "../main/Main";

import { Header } from "../header/Header";
import { CarouselContainer } from "../CorouselContainer/CourouselContainer";
export const Home = () => {
  return (
    <div>
      <Header />
      <CarouselContainer />
      <Main />
    </div>
  );
};
