import React from 'react';
import {
  MapContainer, Marker, Popup, TileLayer,
} from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import './Maps.css';
import Button from '../Button/Button';

const position = [34.0196828, -118.2900851]; // curr loc

const Maps = ({ locationData, setPageNumber }) => (
  <div className="Maps">
    <span className="Maps-heading">
      Manage Inventory
    </span>
    <MapContainer
      style={{ width: '100%', height: '600px' }}
      center={position}
      zoom={12}
    >
      <TileLayer
        attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locationData.map((locData) => (
        <Marker position={[locData.lat, locData.long]}>
          <Popup>
            {locData.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>

    <Button text="Re-scan" onClick={() => setPageNumber(1)} />
    <Button text="Summary" onClick={() => setPageNumber(3)} />
  </div>
);

Maps.propTypes = {
  locationData: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setPageNumber: PropTypes.func.isRequired,
};

export default Maps;
