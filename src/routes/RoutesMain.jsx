import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Home/homepage";
import { ContactPage } from "../pages/Contact/contact-page";
import { AboutPage } from "../pages/About/aboutPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
};
