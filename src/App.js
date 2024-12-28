// // import React from 'react';



// // const App = () => {
// //   return (
// // <App></App>

// //   );
// // };

// export default App;

import React from 'react';
import "./styles/app.css";
import Recipes from './components/Recipes.js';

function App() {
  return (
    <div>
  <Recipes recipeName = "Milk & Apple Mask" 
  description = " This mask is ideal for all skin types. The lactic acid in the milk helps exfoliate dead skin cells, while the apple's vitamin C helps brighten the skin. The honey locks in moisture, leaving your skin soft and supple."
  ingName1 = "1/2 cup milk"
  ingDescription1 = "The lactic acid in the milk helps exfoliate dead skin cells."
  ingName2 = "1/2 apple"
  ingDescription2 = "The vitamin C in the apple helps brighten the skin."
  ingName3 = "1 tbsp honey"
  ingDescription3 = "The honey locks in moisture, leaving your skin soft and supple."
  instructions = " 1. Blend 1/2 cup of milk and 1/2 an apple in a blender until smooth. 2. Add 1 tbsp of honey to the mixture and blend again. 3. Apply the mask to your face and leave it on for 15 minutes. 4. Rinse the mask off with warm water and pat your face dry with a towel."
  />
  
  </div>
  );
}

export default App;
