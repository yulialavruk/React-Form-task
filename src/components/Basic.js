import React from "react";

const Basic = props =>{
	const {value, onChange, error, gender} = props;
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
	    			value={value}
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
	    			value={value}
	    			onChange={onChange}
	    		/>
	    		{error.lastname ? ( <div className="invalid-feedback">{error.lastname}</div> ) : null}
	    	</div>
	    	<div className="form-group">
	    		<label htmlFor="password">Password</label>
	    		<input
	    			type="text"
	    			id="password"
	    			className="form-control"
	    			placeholder="Enter password"
	    			name="password"
	    			value={value}
	    			onChange={onChange}
	    		/>
	    		{error.password ? ( <div className="invalid-feedback">{error.password}</div> ) : null}
	    	</div>
	    	<div className="form-group">
	    		<label htmlFor="repeatPassword">Password</label>
	    		<input
	    			type="text"
	    			id="repeatPassword"
	    			className="form-control"
	    			placeholder="Enter repeat password"
	    			name="repeatPassword"
	    			value={value}
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
		        		checked={gender === "female"}
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
		        		checked={gender === "male"}
		        		onChange={onChange}
		        	/>
		        	<label className="form-check-label" htmlFor="male">
		            	Male
		        	</label>
		        </div>
	    	</fieldset>
	    </div>
	);
};

export default Basic;