import React, { PureComponent } from 'react';
import { FormControl, FormGroup, Button, FormLabel } from 'react-bootstrap';

class FlightSearch extends PureComponent {
  constructor() {
    super();
    this.state = {
      flightnumber: '',
      origin: '',
      destination: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchFlights = this.onSearchFlights.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  validateInputs() {
    if (this.state.flightnumber.length === 0) {
      return false;
    }
    if (this.state.origin.length === 0) {
      return false;
    }
    if (this.state.destination.length === 0) {
      return false;
    }
    return true;
  }

  onSearchFlights = (props) => {
    this.props.searchFlights(
      this.state.origin,
      this.state.destination,
      this.state.flightnumber
    );
    // console.log(this.props);
  }

  render() {
    return (
      <div className="fs-container">
        <FormGroup controlId="flightnumber">
          <FormLabel>Flight Number:</FormLabel>
          <FormControl
            type="text"
            placeholder="Flight Number"
            value={this.state.flightnumber}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <br />
        <FormGroup controlId="origin">
          <FormLabel>Origin:</FormLabel>
          <FormControl
            type="text"
            placeholder="Origin"
            value={this.state.origin}
            onChange={this.onInputChange}
          /* <option value="Ahmedabad">AHMEDABAD</option>
          <option value="mumbai">MUMBAI</option>
          <option value="Goa">GOA</option>
          <option value="tamilnadu">TAMILNADU</option> */
          />
        </FormGroup>
        <br />
        <FormGroup controlId="destination" bsSize='xsmall'>
          <FormLabel>Destination:</FormLabel>
          <FormControl
            type="text"
            placeholder="Destination"
            value={this.state.destination}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <br />
        <Button
          onClick={this.onSearchFlights}
        >
          Search
        </Button>
      </div >
    )
  }
}

export default FlightSearch;

