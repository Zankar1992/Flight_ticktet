import React, { Component } from 'react';

class FlightSearch extends Component {
  userdata;

  constructor(props) {
    super(props);

    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = [{
      origin: '',
      destination: '',
    }];
  }

  onChangeOrigin(e) {
    this.setState({ origin: e.target.value })
  }

  onChangeDestination(e) {
    this.setState({ destination: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({
      origin: '',
      destination: '',
    })
  }

  componentDidMount() {
    this.userdata = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        origin: this.userdata.origin,
        destination: this.userdata.destination
      })
    } else {
      this.setState({
        origin: '',
        destination: ''
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Origin:</label>
            <input type="text" className="form-control" value={this.state.origin} onChange={this.onChangeOrigin} />
          </div> <br/>
          <div className="form-group">
            <label>Destination:</label>
            <input type="text" className="form-control" value={this.state.destination} onChange={this.onChangeDestination} />
          </div>
          <br/>
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </form >
      </div>
    )
  }
}

export default FlightSearch;

