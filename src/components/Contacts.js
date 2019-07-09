import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";


export default class Contacts extends React.Component{
	
	getOptionsItems = items =>{
		return items.map(item =>(
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	};
	getUpdateCities = countryValue => {
	    const updateCities = [];
	    for (let key in cities) {
	     	if (cities[key].country === Number(countryValue)) {
		        updateCities.push({ id: key, name: cities[key].name})
	      	}
    	};
    	return updateCities
    };

	render(){
		const { value, onChange, error } = this.props;
		const updateCities = this.getUpdateCities(value.country);
		return(
			<div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						value={value.email}
						onChange={onChange}
					/>
					{error.email ? ( <div className="invalid-feedback">{error.email}</div> ) : null}
				</div>
				<div className="form-group">
					<label htmlFor="mobile">Mobile</label>
					<input
						type="tel"
						id="mobile"
						className="form-control"
						placeholder="Enter mobile"
						name="mobile"
						value={value.mobile}
						onChange={onChange}
					/>
					{error.mobile ? ( <div className="invalid-feedback">{error.mobile}</div> ) : null}
				</div>
				<div className="form-group">
				    <label htmlFor="country">Country</label>
				    <select 
				    	className="form-control" 	
				    	id="country"
				    	value={value.country}
				    	name="country"
				    	onChange={onChange}
				    >
				    	{this.getOptionsItems(countries)}
				    </select>
				</div>
				<div className="form-group">
				    <label htmlFor="city">City</label>
				    <select 
				    	className="form-control" 	
				    	id="city"
				    	value={value.city}
				    	name="city"
				    	onChange={onChange}
				    >
				    	<option>
							Select city
						</option>
				    	{this.getOptionsItems(updateCities)}
				    </select>
				    {error.city ? ( <div className="invalid-feedback">{error.city}</div> ) : null}
				</div>
	    	</div>
		);
	}
};
