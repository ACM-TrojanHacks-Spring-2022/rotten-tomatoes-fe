import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import https from 'https';
import './Summary.css';
import Button from '../Button/Button';
import PieChart from '../PieChart/PieChart';
import BarChart from '../BarChart/BarChart';

const pieDataArr = [
  {
    id: 'fresh_produce',
    label: 'Fresh Produce',
    value: 0,
    color: 'hsl(216, 70%, 50%)',
  },
  {
    id: 'ripe_produce',
    label: 'Ripe Produce',
    value: 0,
    color: 'hsl(62, 70%, 50%)',
  },
  {
    id: 'spoiled',
    label: 'Spoiled',
    value: 0,
    color: 'hsl(332, 70%, 50%)',
  },
  {
    id: 'rotten',
    label: 'Rotten',
    value: 0,
    color: 'hsl(268, 70%, 50%)',
  },
];

const barDataGoodie = [{
  ranges: [
    0,
    25,
    50,
    75,
    100,
  ],
  measures: [
    0,
  ],
}];

const barDataSavings = [{
  ranges: [
    0,
    25000,
    50000,
    75000,
    100000,
  ],
  measures: [
    0,
  ],
}];

const Summary = (props) => {
  const { setPageNumber } = props;
  const [pieData, setPieData] = useState([]);
  const [goodieScore, setGoodieScore] = useState([]);
  const [savingData, setSavingData] = useState([]);

  useEffect(() => {
    const getSummary = async () => {
      const options = {
        url: 'stats',
        method: 'GET',
      };
      const result = await axios(options);
      if (result.data) {
        // eslint-disable-next-line camelcase
        const { pie_counts, current_goodie_score, saved } = result.data.stats;
        pieDataArr[0].value = pie_counts['Fresh Produce'];
        pieDataArr[1].value = pie_counts['Ripe Produce'];
        pieDataArr[2].value = pie_counts.Spoiled;
        pieDataArr[3].value = pie_counts.Rotten;
        setPieData(pieDataArr);
        // eslint-disable-next-line camelcase
        barDataGoodie[0].measures[0] = current_goodie_score;
        setGoodieScore(barDataGoodie);
        barDataSavings[0].measures[0] = saved;
        setSavingData(barDataSavings);
      }
    };
    getSummary();
  }, []);

  return (
    <div className="Summary">
      <span className="Summary-heading">
        Analytics
      </span>
      {(pieData.length > 0) && (
      <div className="Summary-pie">
        <span className="Summary-subheading">
          Inventory Distribution
        </span>
        <PieChart data={pieData} />
      </div>
      )}
      {(goodieScore.length > 0) && (
      <div className="Summary-bar">
        <span className="Summary-subheading">
          Good Deed Score
        </span>
        <BarChart data={goodieScore} />
      </div>
      )}
      {(savingData.length > 0) && (
      <div className="Summary-bar">
        <span className="Summary-subheading">
          Savings
        </span>
        <BarChart data={savingData} />
      </div>
      )}
      <Button text="Start a Scan" onClick={() => setPageNumber(1)} />
    </div>
  );
};

Summary.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
};

export default Summary;
