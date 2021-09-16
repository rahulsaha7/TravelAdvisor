import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineContacts } from "react-icons/ai";
export const PlaceDetails = ({ place, ref }) => {
  return (
    <div className="">
      <div
        className="image-holder py-2"
        style={{ height: "200px", width: "100%" }}
      >
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://media-cdn.tripadvisor.com/media/photo-p/15/0a/28/b8/photo2jpg.jpg"
          }
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="details">
        <h5>{place.name}</h5>

        <section className="price d-flex justify-content-between">
          <p>{place.price}</p>
          <p>{place.price_level}</p>
        </section>

        <section className="ranking d-flex justify-content-between ">
          <p>Ranking</p>
          <p>{place.ranking}</p>
        </section>
        <section className="ranking d-flex justify-content-between ">
          <p>Rating</p>
          <p>{place.rating}</p>
        </section>

        {place?.awards?.map((award) => (
          <section className="awards my-1 d-flex justify-content-between ">
            <img src={award.images.small} alt={award.display_name} />
            <span>{award.display_name}</span>
          </section>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <section className="foodType my-2 d-flex flex-column">
            <span
              className="px-2"
              style={{ backgroundColor: "grey", borderRadius: "10px" }}
            >
              {name}
            </span>
          </section>
        ))}
        {place?.address && (
          <section className="address mt-1 d-flex justify-content-between">
            <p>
              <GoLocation />
            </p>
            <p>{place.address}</p>
          </section>
        )}
        {place?.phone && (
          <section className="address d-flex justify-content-between">
            <p>
              <AiOutlineContacts />
            </p>
            <p>{place.phone}</p>
          </section>
        )}
        <button
          className="btn-sm btn-outline-info"
          onClick={() => {
            window.open(place.web_url, "_blank");
          }}
        >
          Trip Advisor
        </button>
        <button
          type="button"
          className="btn-sm btn-outline-info mb-2 ms-2"
          onClick={() => {
            window.open(place.website, "_blank");
          }}
        >
          WebSite
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
