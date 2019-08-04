import React from "react";
import Field from "./Field";

export default class Basic extends React.Component {
  render() {
    const { values, onChange, error } = this.props;
    return (
      <div>
        <Field
          type="text"
          id="firstname"
          labelText="Firstname"
          placeholder="Enter firstname"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
          error={error.firstname}
        />
        <Field
          type="text"
          id="lastname"
          labelText="Lastname"
          placeholder="Enter lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
          error={error.lastname}
        />
        <Field
          type="password"
          id="password"
          labelText="Password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={error.password}
        />
        <Field
          type="password"
          id="repeatPassword"
          labelText="Repeat password"
          placeholder="Enter repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          error={error.repeatPassword}
        />
        <fieldset className="form-group">
          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={values.gender === "female"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={values.gender === "male"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}
