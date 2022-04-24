import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';
import PropTypes from 'prop-types';

const BarChart = ({ data }) => (
  <ResponsiveBullet
    data={data}
    margin={{
      top: 10, right: 20, bottom: 50, left: 20,
    }}
    spacing={46}
    titleAlign="start"
    titleOffsetX={-70}
    measureSize={0.2}
  />
);

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ranges: PropTypes.arrayOf(PropTypes.number).isRequired,
      measures: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  ).isRequired,
};

export default BarChart;
