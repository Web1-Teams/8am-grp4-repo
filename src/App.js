import React from 'react';
import HairCareClinic from '../src/components/clinic2 Components/HairCareClinic';
import { BrowserRouter as Router } from 'react-router-dom'; // استيراد Router
import CleanEatClinic from './components/clinic2 Components/CleanEatClinic';
import Clinic2 from './components/clinics-components/clinic2/Clinic2';
function App() {
  return (
    <Router>
    <div>
      <Clinic2 />
    </div>
    </Router>
  );
}

export default App;