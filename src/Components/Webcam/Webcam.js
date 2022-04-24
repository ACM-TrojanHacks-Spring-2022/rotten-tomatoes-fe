import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import './Webcam.css';
import axios from 'axios';
import Button from '../Button/Button';

// BEST, RESTAURANTS/SHELTER, ROTTEN, PROCESSED_FOOD;
const categoryMapping = (category) => {
  if (category === 'BEST') return 1;
  if (category === 'RESTAURANTS/SHELTER') return 2;
  if (category === 'PROCESSED_FOOD') return 3;
  return 4;
};

const WebcamComponent = (props) => {
  const { setPageNumber, setPredictionCode, setLocationData } = props;
  const [startCapturing, setStartCapturing] = useState();
  const webcamRef = React.useRef(null);

  useEffect(() => () => clearInterval(startCapturing));

  async function dataURLtoFile(dataUrl, fileName) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: 'image/jpeg' });
  }

  const handleStopCapturing = () => {
    clearInterval(startCapturing);
    setStartCapturing();
    setPageNumber(2);
  };

  const capture = React.useCallback(
    async () => {
      const imgSrc = webcamRef.current.getScreenshot();
      const file = await dataURLtoFile(imgSrc, 'bleh.jpg');
      const formData = new FormData();
      formData.append('file', file);
      const options = {
        url: 'file-upload',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const result = await axios(options);
      if (result.data) {
        if (result.data.message) {
          const { category, loc } = result.data.resp;
          const predictionCode = categoryMapping(category);
          setPredictionCode(predictionCode);
          setLocationData(loc);
          handleStopCapturing();
        }
      }
    },
    [webcamRef],
  );

  const handleStartCapturing = () => {
    const interval = setInterval(() => capture(), 3000);
    setStartCapturing(interval);
  };

  return (
    <div className="Webcam">
      <span className="Webcam-heading">
        SustainbLA
      </span>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          width: 400,
          height: 400,
          facingMode: { exact: 'environment' },
          // facingMode: 'user',
        }}
      />
      {(!startCapturing) && (<Button text="Start Capturing" onClick={() => handleStartCapturing()} />)}
      {(startCapturing) && (<Button text="Stop Capturing" onClick={() => handleStopCapturing()} />)}
      <Button text="Summary Report" onClick={() => setPageNumber(3)} />
    </div>
  );
};

WebcamComponent.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  setPredictionCode: PropTypes.func.isRequired,
  setLocationData: PropTypes.func.isRequired,
};

export default WebcamComponent;
