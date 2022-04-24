import React from 'react';
import PropTypes from 'prop-types';
import './Prediction.css';
import Button from '../Button/Button';

const Prediction = (props) => {
  const { setPageNumber } = props;

  return (
    <div className="Prediction">
      <span className="Prediction-heading">
        Predicted Stage
      </span>
      <Button text="Re-scan" onClick={() => setPageNumber(1)} />
      <Button text="Manage Inventory" onClick={() => setPageNumber(3)} />
    </div>
  );
};

Prediction.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
};

export default Prediction;
