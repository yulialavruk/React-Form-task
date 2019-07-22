import React from "react";

export default class Basic extends React.Component{
	render(){
		const {values, onChange, error} = this.props;
		return(
			<div>
				<div className="form-group">
		    		<label htmlFor="firstname">Firstname</label>
		    		<input
		    			type="text"
		    			id="firstname"
		    			className="form-control"
		    			placeholder="Enter firstname"
		    			name="firstname"
		    			value={values.firstname}
		    			onChange={onChange}
		    		/>
		    		{error.firstname ? ( <div className="invalid-feedback">{error.firstname}</div> ) : null}
		    	</div>
		    	<div className="form-group">
		    		<label htmlFor="lastname">Lastname</label>
		    		<input
		    			type="text"
		    			id="lastname"
		    			className="form-control"
		    			placeholder="Enter lastname"
		    			name="lastname"
		    			value={values.lastname}
		    			onChange={onChange}
		    		/>
		    		{error.lastname ? ( <div className="invalid-feedback">{error.lastname}</div> ) : null}
		    	</div>
		    	<div className="form-group">
		    		<label htmlFor="password">Password</label>
		    		<input
		    			type="password"
		    			id="password"
		    			className="form-control"
		    			placeholder="Enter password"
		    			name="password"
		    			value={values.password}
		    			onChange={onChange}
		    		/>
		    		{error.password ? ( <div className="invalid-feedback">{error.password}</div> ) : null}
		    	</div>
		    	<div className="form-group">
		    		<label htmlFor="repeatPassword">Password</label>
		    		<input
		    			type="password"
		    			id="repeatPassword"
		    			className="form-control"
		    			placeholder="Enter repeat password"
		    			name="repeatPassword"
		    			value={values.repeatPassword}
		    			onChange={onChange}
		    		/>
		    		{error.repeatPassword ? ( <div className="invalid-feedback">{error.repeatPassword}</div> ) : null}
		    	</div>
		    	<fieldset className="form-group">
		    		<div>Gender</div>
		    		<div className="form-check">
		    			<input 
			        		className="form-check-input" 
			        		type="radio" 
			        		name="gender" 
			        		id="female" 
			        		value = "female"
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
};