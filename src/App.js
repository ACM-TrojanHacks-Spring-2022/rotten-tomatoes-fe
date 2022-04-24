import React, { useState } from 'react';
import './App.css';
import Maps from './Components/Maps/Maps';
import Prediction from './Components/Prediction/Prediction';
import Summary from './Components/Summary/Summary';
import WebcamComponent from './Components/Webcam/Webcam';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [locationData, setLocationData] = useState([]);
  const [predictionCode, setPredictionCode] = useState(1);

  return (
    <div className="App">
      {pageNumber === 1 && (
      <WebcamComponent
        setPageNumber={setPageNumber}
        setLocationData={setLocationData}
        setPredictionCode={setPredictionCode}
      />
      )}
      {pageNumber === 2 && (
      <Prediction
        setPageNumber={setPageNumber}
        predictionCode={predictionCode}
      />
      )}
      {pageNumber === 3 && <Summary setPageNumber={setPageNumber} />}
      {pageNumber === 4 && <Maps setPageNumber={setPageNumber} locationData={locationData} />}
    </div>
  );
};

export default App;
