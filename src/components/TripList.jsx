import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { testTrips } from "./api";


// functional component ProductList, deconstruct props!
function TripList({ addToWishlist }) {
  const [month, setMonth] = useState("");
  const [trips] = useState(testTrips);
  //const [trips, setTrips] = useState([]);
  const months = ["Idle", "Jan", "Feb", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];

  //got rid of the tripsmapped, everything is now in the filteredtrips function (TODO: figure out if const months is really necessary)
  const empty = (
    <section>
      <p className="alert alert-info">Productlist is empty</p>
    </section>
  );

  // if month selected then filter the trips from month === month
  const filteredTrips = month
    ? trips.filter((trip) => {
      const startMonth = new Date(trip.startTrip).getMonth() + 1;
      return startMonth === parseInt(month);
    }) : trips; //updated function to use actual Dates and not an array as Dates

  /*useEffect(() => {
    const getTrips = async () => {
      try {
        const response = await fetch("http://localhost:3001/trips");
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.log("couldnt get trips", error);
        return;
      }
    };
    getTrips();
  }, []);*/

  return (
    <div className="container">
      <section>
        <h2 className="h4">Triplist-Catalog</h2>
        <section id="filters">
          <label htmlFor="month">Filter by Month:</label>
          <select
            id="month"
            value={month} 
            onChange={(e) => {
              
              setMonth(e.target.value);
            }}
          >
            <option value="">All Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">Mai</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          {month && (
            <h2>
              Found {filteredTrips.length}
              {filteredTrips.length >= 1 ? " trips" : " trip"} for the month of
              {" " + months[month]}
            </h2>
          )}
        </section>
        <div className="row">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip, index) => (
              <Trip addToWishlist={addToWishlist} trip={trip} key={trip.id} />
            ))
          ) : (
            empty
          )}
        </div>

      </section>
    </div>
  );
}
// deconstruct ...props
function Trip({ addToWishlist, ...props }) {
  // Props
  let { trip } = props;
  let { id, title, description, } = trip;


  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <figure className="card card-product">

        <div className="img-wrap">
          <img src={"images/items/" + trip.id + ".jpg"} alt="name " />
        </div>
        <figcaption className="info-wrap">
          <h6 className="title">
            {id}  {title} {trip.startTrip} {trip.endTrip}
          </h6>

          <p className="card-text">{description}</p>
          <div className="info-wrap row">
            <button
              type="button"
              className="btn btn-link btn-outline"
              onClick={() => addToWishlist(trip)}
            >
              <i className="fa fa-shopping-cart" /> Add to Wishlist
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default TripList;
