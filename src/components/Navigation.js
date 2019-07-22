import React from "react";

export default class Navigation extends React.Component{

	render(){
		const {stepActive, onPrev, onNext, onReset} = this.props;
		return(
			<div className="d-flex justify-content-center mt-4">
	        	{stepActive < 3 ?(
	        		<div>
		        		<button 
		        			type="button" 
		        			className="btn btn-light mr-4" 
		        			onClick={onPrev}
		        			disabled={stepActive === 0}
		        		>
		        			Prev
		        		</button>
		        		<button 
		        			type="button" 
		        			className="btn btn-secondary" 
		        			onClick={onNext}
		        		>
		        			Next
		        		</button>
	        		</div>)
	        		:
	        		<button 
	        			type="button" 
	        			className="btn btn-primary" 
	        			onClick={onReset}
	        		>
	        			Reset
	        		</button>
	        	}
	        </div>
		)
	}
}