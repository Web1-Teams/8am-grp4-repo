import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer"; 
import Main from "./components/Main page components/Main";
import Clinic1 from "./components/clinics-components/clinic1/Clinic1";
import Clinic2 from "./components/clinics-components/clinic2/Clinic2";
import Clinic3 from "./components/clinics-components/Clinic3/Clinic3";
import Clinic4 from "./components/clinics-components/Clinic4/Clinic4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/clinic1" element={<Clinic1 />} />
        <Route path="/clinic2" element={<Clinic2 />} />
        <Route path="/clinic3" element={<Clinic3 />} />
        <Route path="/clinic4" element={<Clinic4 />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  </React.StrictMode>
);
