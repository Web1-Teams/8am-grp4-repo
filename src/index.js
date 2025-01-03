import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main page components/Main";
import Clinic1 from './components/clinics-components/clinic1/Clinic1'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" index element={<Main/>}/>
          <Route path="/Page 1" element={<Clinic1/>}/>
          <Route />
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
