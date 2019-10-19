import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
        </Map>
      </div>
    );
  }
}

export default App;
