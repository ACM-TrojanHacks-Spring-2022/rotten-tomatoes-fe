import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import './Webcam.css';
import Button from '../Button/Button';

const WebcamComponent = (props) => {
  const { setPageNumber } = props;
  const [startCapturing, setStartCapturing] = useState();
  const webcamRef = React.useRef(null);

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1);
      n -= 1;
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleStopCapturing = () => {
    clearInterval(startCapturing);
    setStartCapturing();
    setPageNumber(2);
  };

  const capture = React.useCallback(
    async () => {
      const imgSrc = webcamRef.current.getScreenshot();
      const file = dataURLtoFile(imgSrc);
      const formData = new FormData();
      formData.append('file', file);
      // const options = {
      //   url: 'upload_image',
      //   method: 'POST',
      //   data: formData,
      //   httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // };
      // const result = await axios(options);
      // if (result.data) {
      //   if (result.data.msg) {
      //     const { min, max } = result.data.msg;
      //     if (min !== Infinity && max !== -Infinity) {
      //       const tempArr = [];
      //       tempArr.push((min * 100) / 24);
      //       tempArr.push((max * 100) / 24);
      //       setCO2Levels(tempArr);
      //     }
      //     // TODO: get the data accordingly
      //     handleStopCapturing();
      //     setPageNumber(2);
      //   }
      // }
      console.log('Scanning');
    },
    [webcamRef],
  );

  const handleStartCapturing = () => {
    const interval = setInterval(() => capture(), 3000);
    setStartCapturing(interval);
  };

  return (
    <div className="Webcam">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          width: 400,
          height: 400,
          // facingMode: { exact: 'environment' },
          facingMode: 'user',
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
};

export default WebcamComponent;
