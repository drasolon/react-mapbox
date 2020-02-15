import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

require("dotenv").config();

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 47.0833,
    longitude: 2.4,
    zoom: 4
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}

export default Map;
