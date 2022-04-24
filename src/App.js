import React, { useState } from 'react';
import './App.css';
import Prediction from './Components/Prediction/Prediction';
import Summary from './Components/Summary/Summary';
import WebcamComponent from './Components/Webcam/Webcam';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      {pageNumber === 1 && <WebcamComponent setPageNumber={setPageNumber} />}
      {pageNumber === 2 && <Prediction setPageNumber={setPageNumber} />}
      {pageNumber === 3 && <Summary setPageNumber={setPageNumber} />}
    </div>
  );
};

export default App;
