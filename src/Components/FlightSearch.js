import React, { PureComponent } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

class FlightSearch extends PureComponent {
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchFlights = this.onSearchFlights.bind(this);
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  validateInputs() {
    if (this.state.origin.length === 0) {
      return false;
    }
    if (this.state.destination.length === 0) {
      return false;
    }
    return true;
  }

  onSearchFlights() {
    this.props.searchFlights(
      this.state.origin,
      this.state.destination
    );
  }

  render() {
    return (
      <div className="fs-container">
        <FormGroup controlId="origin">
          <FormControl
            type="text"
            placeholder="Origin"
            value={this.state.origin}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <br/>
        <FormGroup controlId="destination" bsSize='xsmall'>
          <FormControl
            type="text"
            placeholder="Destination"
            value={this.state.destination}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <br/>
        <Button
          bsStyle="primary"
          style={{ height: '46px' }}
          bsSize="small"
          onClick={this.onSearchFlights}
        >
          Search
        </Button>
      </div>
    )
  }
}

export default FlightSearch;

