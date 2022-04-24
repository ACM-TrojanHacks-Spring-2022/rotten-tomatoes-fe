import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import https from 'https';
import './Summary.css';
import Button from '../Button/Button';

const Summary = (props) => {
  const { setPageNumber } = props;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getSummary = async () => {
  //     const options = {
  //       url: 'get_summary',
  //       method: 'GET',
  //       httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  //     };
  //     const result = await axios(options);
  //     if (result.data) {
  //       if (result.data.msg) {
  //         setData(result.data.msg);
  //       }
  //     }
  //   };
  //   getSummary();
  // }, []);

  return (
    <div className="Summary">
      <span className="Summary-heading">
        Analytics
      </span>
      <Button text="Start a Scan" onClick={() => setPageNumber(1)} />
    </div>
  );
};

Summary.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
};

export default Summary;
