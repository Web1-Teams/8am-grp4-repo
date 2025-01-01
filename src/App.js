import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar/Navbar";
import Main from './components/Main page components/Main';
// import Clinic1 from './components/clinics-components/clinic1/Clinic1';
import TopTopic from "./components/toptopic/TopTopic";
import Review from "./components/review/Review";
import Footer from "./components/footer/Footer";
import Clinic3 from './components/clinics-components/Clinic3/Clinic3';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <TopTopic topic1="Welcome" clinic1="Main" />
              <Review />
              <Footer />
            </Main>
          }
        />
        <Route path="/src/components/clinics-components/Clinic3" element={<Clinic3 />} />
      </Routes>
    </Router>
  );
}

export default App;
