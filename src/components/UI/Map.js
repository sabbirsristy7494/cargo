import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -36.848461, lng: 174.763336 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
