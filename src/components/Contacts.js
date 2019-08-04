import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";

export default class Contacts extends React.Component {
  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getCitiesFromCountry = countryValue => {
    return Object.keys(cities).reduce((acc, cityId) => {
      if (Number(cities[cityId].country) === Number(countryValue)) {
        acc.push({ id: cityId, name: cities[cityId].name });
      }
      return acc;
    }, []);
    // const updateCities = [];
    // for (let key in cities) {
    //  	if (cities[key].country === Number(countryValue)) {
    //      updateCities.push({ id: key, name: cities[key].name})
    //   	}
    // };
    // return updateCities
  };

  render() {
    const { values, onChange, error } = this.props;
    const updateCities = this.getCitiesFromCountry(values.country);
    return (
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
          {error.email && <div className="invalid-feedback">{error.email}</div>}
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
          {error.mobile && (
            <div className="invalid-feedback">{error.mobile}</div>
          )}
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
            {this.getOptionsItems(countries)}
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
            <option>Select city</option>
            {this.getOptionsItems(updateCities)}
          </select>
          {error.city && <div className="invalid-feedback">{error.city}</div>}
        </div>
      </div>
    );
  }
}
