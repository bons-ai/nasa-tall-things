import React, { Component } from "react";
import { Map, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import elevationReadings from "./results/results-many.js";

const elevationTypeColor = {
  0.0: "AntiqueWhite ",
  1.0: "green",
  2.0: "yellow",
  3.0: "blue",
  4.0: "orange",
  5.0: "black",
  6.0: "purple",
  7.0: "red",
  8.0: "pink"
};

class App extends Component {
  render() {
    return (
      <div>
        <Map
          style={{ height: "100vh", width: "100%" }}
          zoom={4}
          center={[45.50884, -73.58781]}
          preferCanvas={true}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {elevationReadings.points.map(({ coordinates, type }) => {
            return (
              <CircleMarker
                key={`${coordinates[1]}-${coordinates[0]}`}
                center={[coordinates[1], coordinates[0]]}
                fillOpacity={1}
                stroke={false}
                color={elevationTypeColor[type + 1]}
                size={10}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default App;
