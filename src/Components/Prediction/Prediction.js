import React from 'react';
import PropTypes from 'prop-types';
import './Prediction.css';
import Arrow, { DIRECTION } from 'react-arrows';
import Button from '../Button/Button';

const Prediction = (props) => {
  const { setPageNumber } = props;

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
          border: '1px solid black',
          fontSize: '2em',
          borderRadius: '1em',
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
          border: '1px solid black',
          fontSize: '2em',
          borderRadius: '1em',
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
          border: '1px solid black',
          fontSize: '2em',
          borderRadius: '1em',
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
          border: '1px solid black',
          fontSize: '2em',
          borderRadius: '1em',
        }}
      >
        Rotten ☠️
      </div>
      <Button text="Re-scan" onClick={() => setPageNumber(1)} />
      <Button text="Manage Inventory" onClick={() => setPageNumber(3)} />
    </div>
  );
};

Prediction.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
};

export default Prediction;
