import { useState, useEffect, useRef } from "react";

import Header from "./Components/Header/Header";
import { Map } from "./Components/Maps/Map";
import List from "./Components/List/List";
import { Footer } from "./Components/Footer/Footer";
import { getPlacesData, getWeatherData } from "./api";

function App() {
  const [weatherData, setweatherData] = useState([]);
  const [filteredPlaces, setfilteredPlaces] = useState([]);
  const [placeData, setplaceData] = useState([]);
  const [Coordinates, setCoordinates] = useState({});
  const [Bounds, setBounds] = useState({});
  const [type, settype] = useState("restaurants");
  const [rating, setrating] = useState(0);
  const ref = useRef();

  // const scrollFunc = (child) => {
  //   console.log({ child });
  //   ref && ref.child && ref.child.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filterePlaces = placeData.filter(
      (place) => place.rating > Number(rating)
    );

    setfilteredPlaces(filterePlaces);
  }, [rating]);

  useEffect(() => {
    if (Bounds.sw && Bounds.ne) {
      getWeatherData(Coordinates.lat, Coordinates.lng).then((data) =>
        setweatherData(data)
      );

      getPlacesData(type, Bounds.ne, Bounds.sw).then((data) => {
        setplaceData(
          data?.filter((place) => place.name && place.num_reviews > 0)
        );
        setfilteredPlaces([]);
      });
    }
  }, [type, Bounds]);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <Header setCoordinates={setCoordinates} />
        <div className="container-fluid ">
          <section className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <List
                places={filteredPlaces.length ? filteredPlaces : placeData}
                type={type}
                settype={settype}
                rating={rating}
                setrating={setrating}
                // childClicked={ref}
              />
            </div>
            <div className="cols-12 col-md-8 col-lg-8 col-xl-8 my-2">
              <Map
                coordinates={Coordinates}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                places={filteredPlaces.length ? filteredPlaces : placeData}
                //setchildClicked={scrollFunc}
                weatherData={weatherData}
              />
            </div>
            <div className="col-12 m-0 p-0">
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
