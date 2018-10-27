import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapMarker from "./mapmarker";
// import MapLine from "./mapline";

const TripMap = withScriptjs(withGoogleMap((props) => {

  // const defaultZoomLevel = props.defaultZoomLevel;
  // const defaultCenterLocation = props.defaultCenterLocation;
  const markers = props.places.map(place => <MapMarker
    key={place.placeId}
    position={{ lat: place.latitude, lng: place.longitude }}
    title={place.name}
    // label={place.pictures.length + ''}
    icon={place.icon}
    onClick={() => props.onClick(place.placeId)}
  />);

  function onZoomChanged() {
    const newZoom = 1;//mapObject.getZoom();
    if (props.onZoomChanged) {
      props.onZoomChanged(newZoom);
    }
  }

  function onMapClicked(e) {
    if (props.onMapClick) {
      props.onMapClick(e);
    }
  }

  // var linePointA = { lat: 48.023891, lng: -90.779418 };
  // var linePointB = { lat: 48.077125, lng: -90.814790 };
  // var linePath = [linePointA, linePointB];
  // var mapLine = <MapLine
  //   path={linePath}
  // />;

  // console.log('map zoom level', props.defaultZoomLevel);

  return (
    <GoogleMap
      defaultZooomLevel={props.defaultZoomLevel}
      zoom={props.defaultZoomLevel}
      center={props.defaultCenterLocation}
      // mapTypeId='terrain'
      mapTypeId='satellite'
      options={{ streetViewControl: false }}
      onZoomChanged={onZoomChanged}
      onClick={onMapClicked}
    >
      {markers}
      {/* {mapLine} */}
    </GoogleMap>
  );
}
))

export default TripMap;
