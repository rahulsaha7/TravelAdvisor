import React from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

export const List = ({
  places,
  type,
  settype,
  rating,
  setrating,
  childClicked,
}) => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <h4>Restaurents, Hotels, Attractions</h4>
        <form action="" className="py-2 d-flex">
          <label htmlFor="" className="me-1">
            Type
          </label>
          <select
            name=""
            id=""
            className="form-select form-select-sm"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="restaurants">restaurents</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
          <label htmlFor="" className="ms-2 me-1">
            Rating
          </label>
          <select
            name=""
            id=""
            className="form-select form-select-sm"
            value={rating}
            onChange={(e) => {
              setrating(e.target.value);
            }}
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
        <div
          className="row list"
          style={{
            height: "75vh",
            overflow: "auto",
          }}
        >
          {places?.map((places, i) => (
            <div
              className="col-12 pt-2"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <PlaceDetails place={places} key={i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
