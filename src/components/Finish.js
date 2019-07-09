import React from 'react';

export default class Finish extends React.Component{

	render(){
		const {value} = this.props;
		return(
			<div className="container">
				<div className="row">
					<div className="col-3">
						<img src={value.avatar} alt="" width="100%" />
					</div>
					<div className="col-9">{value.firstname}{value.lastname}</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div>Email:{value.email}</div>
						<div>Mobile:{value.mobile}</div>
						<div>Location:{value.country}, {value.city}</div>
					</div>
				</div>
			</div>
		)
	}
}