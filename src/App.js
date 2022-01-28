import React from "react";
import Addnewflights from "./Addnewflights";
import SeatGenerate from "./SeatGenerate";
import FindFlights from "./FindFlights";

const App = () => {
  return (
    <>
      <div>
        <h1>Flight Generate Seat</h1>
        <hr/>
        <SeatGenerate />
        <FindFlights />
        <Addnewflights />
        <button variant="primary"> Search</button>
      </div>
    </>
  )
}

export default App;