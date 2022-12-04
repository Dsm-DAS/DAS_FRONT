import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Slide from "./Components/Slide";

function MainRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/slide" element={<Slide />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
