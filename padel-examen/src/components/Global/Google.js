import React from 'react'
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

function Google() {

    

  const MapWithAMarker = withScriptjs(withGoogleMap(prop =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 59.310059, lng: 18.163811 }}
  >
    <Marker
      position={{ lat: 59.310059, lng: 18.163811 }}
    >
        <InfoWindow>
            <div>
                <strong>NackaPDL</strong> <br/><br/>Forumvägen 14, 131 53 Nacka, Sverige
            </div>
        </InfoWindow>
        </Marker>
  </GoogleMap>
));

    return (
      <>
      <div className="col-12 pb-4">
              <h2 className="text-success">Här finns vi</h2>
            </div>
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdgSjVAy6rgQHN549lMYRhGIAm8VWoaAI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </>
    )
}

export default Google
