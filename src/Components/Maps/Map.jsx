import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { GoLocation } from "react-icons/go";

export const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setchildClicked,
  weatherData,
}) => {
  const [Width, setWidth] = useState(window.screen.width);

  const ChangeWidth = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", ChangeWidth);
    return () => {
      window.removeEventListener("resize", ChangeWidth);
    };
  });

  return (
    <div
      className="container-fluid"
      style={{
        height: "85vh",
        width: "100%",
      }}
    >
      {/* AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs 
AIzaSyBIQbVDIA7-PJYCt8TigXG2vcWsbvpyaGQ*/}

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
        google={window.google}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          // setchildClicked(child);
        }}
      >
        {places?.map((place, i) =>
          Width < 576 ? (
            <GoLocation color={"blue"} size={"2em"} />
          ) : (
            <div
              className="markerContainer"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              style={{
                height: "auto",
                width: "70px",
                backgroundColor: "white",
              }}
            >
              <div className="p-1">
                <p className="rating">{place.rating}</p>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://media-cdn.tripadvisor.com/media/photo-p/15/0a/28/b8/photo2jpg.jpg"
                  }
                  alt=""
                  style={{ height: "80%", width: "100%" }}
                />
                <p className="pt-2">{place.name}</p>
              </div>
            </div>
          )
        )}

        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lng}>
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt=""
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};
