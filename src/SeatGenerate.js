import React, { PureComponent } from 'react';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';


class SeatGenerate extends PureComponent {
	constructor() {
		super();
		this.state = {
			SeatGenerate: ''
		};
		this.onInputchnage = this.onInputchnage.bind(this);
	}

	onInputchnage = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSeatGenerate() {
		this.props.SeatGenerate(
			console.log(SeatGenerate)
		)
	}


	render() {
		return (
			<div className="">
				<hr />
				<FormGroup className="mb-2" controlId="SeatGenerate">
					<FormLabel>Seat Generate:</FormLabel>
					<FormControl
						type="text"
						placeholder="SeatGenerate"
						value={this.state.SeatGenerate}
						onChange={this.onInputchnage}
					/>
					<br />
					<Button
						type="submit"
						bsstyle="primary"
					>
						{'Seat Generate'}
					</Button>
				</FormGroup>
			</div>
		)
	}
}

export default SeatGenerate;
