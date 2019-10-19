import React, { Component } from "react";
import { Map, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import elevationReadings from "./elevationReadings.js";

const elevationTypeColor = {
  0.0: "blue",
  1.0: "red"
};

class App extends Component {
  render() {
    return (
      <div>
        <Map
          style={{ height: "100vh", width: "100%" }}
          zoom={4}
          center={[45.50884, -73.58781]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {elevationReadings.points.map(({ coordinates, type }) => {
            return (
              <CircleMarker
                center={[coordinates[1], coordinates[0]]}
                fillOpacity={0.5}
                stroke={false}
                color={elevationTypeColor[type]}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default App;
