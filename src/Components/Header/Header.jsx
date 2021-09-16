import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { BsSearch } from "react-icons/bs";

export const Header = ({ setCoordinates }) => {
  const [autoComplete, setautoComplete] = useState(null);

  const onLoad = (autoC) => setautoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <>
      <div className="header" style={{ backgroundColor: "#252525" }}>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <h5 class="navbar-brand" style={{ color: "white" }}>
              Travel Advisor
            </h5>

            <div className="d-flex flex-column flex-sm-row" id="">
              <h6 className="px-2 navbar-brand" style={{ color: "white" }}>
                Explore New place
              </h6>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div class="input-group input-group-sm mb-3 position-relative">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    <BsSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Search..."
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </Autocomplete>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
