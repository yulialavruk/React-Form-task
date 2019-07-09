import React from "react";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";

export default class App extends React.Component {
	constructor(){
		super()

		this.state = {
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
			errors: {
				firstname: false,
				lastname: false,
				password:false,
				repeatPassword:false,
				email:false,
				mobile: false,
				cite: false
			}
		}
	}
	
	onChange = event =>{
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	onChangeAvatar = event =>{
		const reader = new FileReader();
		reader.onload = event =>{
			this.setState({
				avatar: event.target.result
			})
		}

		reader.readAsDataURL(event.target.files[0])
	};

	onNext = event =>{
		const errors = {};
		if (this.state.firstname.length < 5) {
			errors.firstname = 'Must be 5 characters or more'
		}
		if (this.state.lastname.length < 5) {
			errors.lastname = 'Must be 5 characters or more'
		}
		if(this.state.password.length <3){
			errors.password = 'Must be 3 characters or more'
		}
		if(this.state.password !==this.state.repeatPassword){
			errors.repeatPassword = 'Must be equal password'
		}
		if(this.state.email.length < 5){
			errors.email = 'Must be 5 characters or more'
		}
		if(this.state.mobile.length < 10){
			errors.mobile = 'Must be 10 characters or more'
		}
		if(this.state.city === ""){
			errors.city = 'Required'
		}
		if(Object.keys(errors).length > 0){
			this.setState({
				errors: errors
			})
		}
		else{
			this.setState({
				errors: {}
			})
			console.log("state", this.state);
		}
	}

	render() {
		//console.log(this.state)
	    return (
	     	<div className="form-container card">
	        <form className="form card-body">
	        	<Basic 
	        		value={this.state} 
	        		onChange={this.onChange} 
	        		error={this.state.errors}
	        		gender={this.state.gender}
	        	/>
	        	<Contacts 
	        		value={this.state} 
	        		onChange={this.onChange} 
	        		error={this.state.errors}
	        	/>
	        	<Avatar 
	        		value={this.state} 
	        		onChangeAvatar={this.onChangeAvatar}
	        	/>
	        	<div className="d-flex">
	        		<button type="button" className="btn btn-secondary">Prev</button>
	        		<button type="button" className="btn btn-secondary" onClick={this.onNext}>Next</button>
	        	</div>
	        </form>
	      	</div>
	    );
	}
}
