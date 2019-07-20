import React from 'react';
import countries from "../data/countries";
import cities from "../data/cities";

export default class Finish extends React.Component{

	render(){
		const {value} = this.props;
		return(
			<div className="container">
				<div className="row">
					<div className="col-5">
						<img src={value.avatar} alt="" width="100%" />
					</div>
					<div className="col-7 d-flex align-items-center">
						<h4>{value.firstname}{value.lastname}</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div><b>Email: </b> {value.email}</div>
						<div><b>Mobile: </b> {value.mobile}</div>
						<div><b>Location: </b> {countries[value.country-1].name}, {cities[value.city].name}</div>
					</div>
				</div>
			</div>
		)
	}
}