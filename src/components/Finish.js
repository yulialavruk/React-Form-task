import React from 'react';
import countries from "../data/countries";
import cities from "../data/cities";

export default class Finish extends React.Component{

	render(){
		const {values} = this.props;
		return(
			<div className="container">
				<div className="row">
					<div className="col-5">
						<img src={values.avatar} alt="" width="100%" />
					</div>
					<div className="col-7 d-flex align-items-center">
						<h4>{values.firstname}{values.lastname}</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div><b>Email: </b> {values.email}</div>
						<div><b>Mobile: </b> {values.mobile}</div>
						<div><b>Location: </b> {countries[values.country-1].name}, {cities[values.city].name}</div>
					</div>
				</div>
			</div>
		)
	}
}