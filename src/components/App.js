import React from "react";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";
import Steps from "./Steps";
import Navigation from "./Navigation";
import getErrorsByValues from "./validate";

export default class App extends React.Component {
	constructor(){
		super()

		this.initialState = {
			step: 0,
			values: {
				firstname:"",
				lastname:"",
				password:"",
				repeatPassword:"",
				gender: "female",
				email: "",
				mobile:"",
				country: "1",
				city: "",
				avatar:"",
			},
			errors: {
				firstname: false,
				lastname: false,
				password:false,
				repeatPassword:false,
				email:false,
				mobile: false,
				cite: false,
				avatar: false,
			}
		};
		this.state = {...this.initialState};
	};

	onChange = event =>{
		const name = event.target.name;
		const value = event.target.value;
		this.setState(prevState =>({
			values: {
				...prevState.values,
				[name]: value
			}
		}))
	};

	onPrev = event =>{
		this.setState(prevState =>({
			step: prevState.step - 1
		}))
	};

	onNext = event =>{
		const errors = getErrorsByValues(this.state.values, this.state.step);

		if(Object.keys(errors).length > 0){
			this.setState({
				errors
			})
		}
		else{
			this.setState(prevState => ({
				errors: {},
				step: prevState.step + 1
			}))
		}
	};

	onReset = event =>{
		this.setState(this.initialState);
	};

	render() {
	    return (
	     	<div className="form-container card">
		        <form className="form card-body">
			        <div className="steps mb-4">
				        <Steps 
				        	stepActive={this.state.step}
				        />
			        </div>
			        {this.state.step === 0 &&(
			        	<Basic 
			        		values={this.state.values} 
			        		onChange={this.onChange} 
			        		error={this.state.errors}
			        	/>)}
			        {this.state.step === 1 &&(
			        	<Contacts 
			        		values={this.state.values} 
			        		onChange={this.onChange} 
			        		error={this.state.errors}
			        	/>)}
			        {this.state.step === 2 &&(
			        	<Avatar 
			        		values={this.state.values} 
			        		onChange={this.onChange}
			        		error= {this.state.errors}
			        	/>)}
			        {this.state.step === 3 &&(
			        	<Finish 
			        		values={this.state.values}
			        	/>)}
			        	<Navigation 
			        		stepActive={this.state.step}
			        		onNext={this.onNext}
			        		onPrev={this.onPrev}
			        		onReset={this.onReset}
			        	/>
	        	</form>
	      	</div>
	    );
	}
}
