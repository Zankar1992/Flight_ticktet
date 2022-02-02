import React, { useState } from "react";

const FlightAddList = (props) => {
  const initialState = [{
    id: null,
    // flight_no: "",
    origin: "",
    destination: "",
  }];
  const [flight, setUser] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      // case "flight_no":
      //   if ((flight.flight_no =
      //     (value.length < 5 || value.length > 7))) {
      //     document.getElementById("flight_no").innerHTML = "Flight # must be between 5 & 10 characters long!"
      //   }
      //   else { document.getElementById("flight_no").innerHTML = "" }
      //   break;
      case "origin":
        if ((flight.origin =
          (value.length < 2 || value.length > 11))) {
          // document.getElementById("origin").innerHTML = "origin!"
        }
        else { document.getElementById("origin").innerHTML = "" }
        break;
      case "destination":
        if ((flight.destination =
          (value.length < 2 || value.length > 5))) {
          document.getElementById("destination").innerHTML = "destination must be between 2 & 6 characters long!"
        }
        else { document.getElementById("destination").innerHTML = "" }
        break;
      default:
        break;
    }
    setUser({ ...flight, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!flight.origin || !flight.destination) {
      document.getElementById("myBtn").innerHTML = "Please fill out the emty fields"
      return;
    } else
      document.getElementById("myBtn").innerHTML = "";
    props.addFlight(flight);
    setUser(initialState);
  }

  return (
    <form
      className=" mt-5 container">
      <div className="form-group" id="wrapper-main">

        {/* <h2 className="text-primary" >Add Flight </h2>
        <input
          type="text"
          name="flight_no"
          className="form-control mb-3"
          onChange={handleChange}
          value={flight.flight_no}
          placeholder="Enter Fligth #"
        /> */}

        {/* <span id="flight_no" className="text-danger"></span> */}
        <label>Origin:</label>
        <input
          type="text"
          name="origin"
          className="form-control mb-3"
          onChange={handleChange}
          value={flight.origin}
          placeholder="Origin"
        />
        <span id="origin" className="text-danger"></span>

        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          className="form-control mb-3"
          onChange={handleChange}
          value={flight.destination}
          placeholder="Destination"
        />
        <span id="destination" className="text-danger"></span>

        <button 
          type="submit" 
          className="btn btn-success" 
          onClick={handleSubmit}
        >
          Add Flight
        </button><br />
        <span id="myBtn" className="text-danger font-weight-bold"></span><br />

      </div>
    </form>
  );
};

export default FlightAddList;

