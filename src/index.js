import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Main page components/Main";
import Clinic1 from './components/clinics-components/clinic1/Clinic1'
import Clinic2 from './components/clinics-components/clinic2/Clinic2'
import Clinic3 from './components/clinics-components/Clinic3/Clinic3'
import Clinic4 from './components/clinics-components/Clinic4/Clinic4'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" index element={<Main/>}/>
          <Route path="Page 1" element={<Clinic1/>}/>
          <Route path="Page 2" element={<Clinic2/>}/>
          <Route path="Page 3" element={<Clinic3/>}/>
          <Route path="Page 4" element={<Clinic4/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
