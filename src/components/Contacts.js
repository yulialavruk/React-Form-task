import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";


export default class Contacts extends React.Component{
	
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
		const { values, onChange, error, getOptionsItems } = this.props;
		const updateCities = this.getUpdateCities(values.country);
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
						value={values.email}
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
						value={values.mobile}
						onChange={onChange}
					/>
					{error.mobile ? ( <div className="invalid-feedback">{error.mobile}</div> ) : null}
				</div>
				<div className="form-group">
				    <label htmlFor="country">Country</label>
				    <select 
				    	className="form-control" 	
				    	id="country"
				    	value={values.country}
				    	name="country"
				    	onChange={onChange}
				    >
				    	{getOptionsItems(countries)}
				    </select>
				</div>
				<div className="form-group">
				    <label htmlFor="city">City</label>
				    <select 
				    	className="form-control" 	
				    	id="city"
				    	value={values.city}
				    	name="city"
				    	onChange={onChange}
				    >
				    	<option>
							Select city
						</option>
				    	{getOptionsItems(updateCities)}
				    </select>
				    {error.city ? ( <div className="invalid-feedback">{error.city}</div> ) : null}
				</div>
	    	</div>
		);
	}
};
