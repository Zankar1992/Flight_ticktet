import React, { Component } from 'react';

class FlightSearch extends Component {
  userdata;

  constructor(props) {
    super(props);
    this.state = [{
      origin: '',
      destination: '',
    }];
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeOrigin(e) {
    this.setState({ origin: e.target.value })
  }

  onChangeDestination(e) {
    this.setState({ destination: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()  // only preventdefault method use kari hoy tyare value add karel j rehse page reload kariye to pn 

    this.setState({   // this code page reload and submit karta j data empty thai jase 
      origin: '',
      destination: '',
    })
  }

  // react life cycle  localstorage code 

  // componentDidMount() {
  //   this.userdata = JSON.parse(localStorage.getItem('user'));

  //   if (localStorage.getItem('user')) {
  //     this.setState({
  //       origin: this.userdata.origin,
  //       destination: this.userdata.destination
  //     })
  //   } else {
  //     this.setState({
  //       origin: '',
  //       destination: ''
  //     })
  //   }
  // }

  componentWillUpdate() {
    localStorage.setItem('user', JSON.stringify(this.setState));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Origin:</label>
            <input type="text" className="form-control" value={this.state.origin} onChange={this.onChangeOrigin} />
          </div> <br />
          <div className="form-group">
            <label>Destination:</label>
            <input type="text" className="form-control" value={this.state.destination} onChange={this.onChangeDestination} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </form >
      </div>
    )
  }
}

export default FlightSearch;

