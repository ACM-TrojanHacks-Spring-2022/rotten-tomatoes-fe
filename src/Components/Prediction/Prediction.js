import React from 'react';
import PropTypes from 'prop-types';
import './Prediction.css';
import Arrow, { DIRECTION } from 'react-arrows';
import Button from '../Button/Button';

const Prediction = (props) => {
  const { setPageNumber, predictionCode } = props;

  return (
    <div className="Prediction">
      <span className="Prediction-heading">
        Predicted Stage
      </span>
      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.LEFT,
          node: () => document.getElementById('customers'),
          translation: [-1, -0.2],
        }}
        to={{
          direction: DIRECTION.LEFT,
          node: () => document.getElementById('restaurants'),
          translation: [-3, 0.2],
        }}
      />
      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.RIGHT,
          node: () => document.getElementById('restaurants'),
          translation: [1, 0.2],
        }}
        to={{
          direction: DIRECTION.RIGHT,
          node: () => document.getElementById('processed_food'),
          translation: [1, -0.2],
        }}
      />
      <Arrow
        className="arrow"
        from={{
          direction: DIRECTION.LEFT,
          node: () => document.getElementById('processed_food'),
          translation: [-1, -0.2],
        }}
        to={{
          direction: DIRECTION.LEFT,
          node: () => document.getElementById('max_rot'),
          translation: [-3, 0.2],
        }}
      />
      <div
        id="customers"
        style={{
          width: '80%',
          alignSelf: 'center',
          marginBottom: '2em',
          fontSize: '2em',
          borderRadius: '1em',
          backgroundColor: predictionCode === 1 ? 'black' : 'grey',
          color: 'white',
          padding: '0.2em',
        }}
      >
        Fresh Produce 🌿
      </div>
      <div
        id="restaurants"
        style={{
          width: '80%',
          alignSelf: 'center',
          marginBottom: '2em',
          fontSize: '2em',
          borderRadius: '1em',
          backgroundColor: predictionCode === 2 ? 'black' : 'grey',
          color: 'white',
          padding: '0.2em',
        }}
      >
        Ripe Produce 🍅
      </div>
      <div
        id="processed_food"
        style={{
          width: '80%',
          alignSelf: 'center',
          marginBottom: '2em',
          fontSize: '2em',
          borderRadius: '1em',
          backgroundColor: predictionCode === 3 ? 'black' : 'grey',
          color: 'white',
          padding: '0.2em',
        }}
      >
        Spoiled 🤢
      </div>
      <div
        id="max_rot"
        style={{
          width: '80%',
          alignSelf: 'center',
          marginBottom: '2em',
          fontSize: '2em',
          borderRadius: '1em',
          backgroundColor: predictionCode === 4 ? 'black' : 'grey',
          color: 'white',
          padding: '0.2em',
        }}
      >
        Rotten ☠️
      </div>
      {predictionCode === 1 && (
      <span className="Prediction-heading">
        {'It\'s fresh!'}
      </span>
      )}
      <Button text="Re-scan" onClick={() => setPageNumber(1)} />
      {predictionCode !== 1 && <Button text="Manage Inventory" onClick={() => setPageNumber(4)} />}
    </div>
  );
};

Prediction.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  predictionCode: PropTypes.number.isRequired,
};

export default Prediction;
