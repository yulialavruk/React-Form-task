import React from "react";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";

export default class App extends React.Component {
	constructor(){
		super()

		this.state = {
			step: 0,
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
				cite: false,
				avatar: false,
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

	onPrev = event =>{
		const nextStep = this.state.step - 1
		this.setState({
			errors: {},
			step: nextStep
		})

		console.log("state", this.state);
	};

	onNext = event =>{
		const errors = {};
		if(this.state.step === 0){
			if (this.state.firstname.length < 5) {
				errors.firstname = 'Must be 5 characters or more'
			}
			if (this.state.lastname.length < 5) {
				errors.lastname = 'Must be 5 characters or more'
			}
			if(this.state.password.length < 6){
				errors.password = 'Must be 6 characters or more'
			}
			if(this.state.password !==this.state.repeatPassword){
				errors.repeatPassword = 'Must be equal password'
			}
		}
		if (this.state.step === 1) {
			if(this.state.email.length < 5){
			errors.email = 'Must be 5 characters or more'
			}
			if(this.state.mobile.length < 10){
				errors.mobile = 'Must be 10 characters or more'
			}
			if(this.state.city === ""){
				errors.city = 'Required'
			}
		}
		
		if(this.state.step === 2){
			if(this.state.avatar === ""){
				errors.avatar = 'Required'
			}
		}

		if(Object.keys(errors).length > 0){
			this.setState({
				errors: errors
			})
		}
		else{
			const nextStep = this.state.step + 1
			this.setState({
				errors: {},
				step: nextStep
			})

			console.log("state", this.state);
		}
	}

	render() {
		//console.log(this.state)
	    return (
	     	<div className="form-container card">
		        <form className="form card-body">
			        <div className="steps d-flex justify-content-between">
			        	<div className="step">
			        		<div className="step-number">1</div>
			        		<div className="step-title">Basic</div>
			        	</div>
			        	<div className="step">
			        		<div className="step-number">2</div>
			        		<div className="step-title">Contacts</div>
			        	</div>
			        	<div className="step">
			        		<div className="step-number">3</div>
			        		<div className="step-title">Avatar</div>
			        	</div>
			        	<div className="step">
			        		<div className="step-number">4</div>
			        		<div className="step-title">Finish</div>
			        	</div>
			        </div>
	        {this.state.step === 0 &&(
	        	<Basic 
	        		value={this.state} 
	        		onChange={this.onChange} 
	        		error={this.state.errors}
	        		gender={this.state.gender}
	        	/>)}
	        {this.state.step === 1 &&(
	        	<Contacts 
	        		value={this.state} 
	        		onChange={this.onChange} 
	        		error={this.state.errors}
	        	/>)}
	        {this.state.step === 2 &&(
	        	<Avatar 
	        		value={this.state} 
	        		onChangeAvatar={this.onChangeAvatar}
	        		error= {this.state.errors}
	        	/>)}
	        {this.state.step === 3 &&(
	        	<Finish 
	        		value={this.state}
	        	/>)}
	        	<div className="d-flex">
	        	{this.state.step < 3 ?(
	        		<div>
	        		<button 
	        			type="button" 
	        			className="btn btn-secondary" 
	        			onClick={this.onPrev}
	        			disabled={this.state.step === 0}
	        		>
	        			Prev
	        		</button>
	        		<button type="button" className="btn btn-secondary" onClick={this.onNext}>Next</button>
	        		</div>)
	        		:
	        		<button type="button" className="btn btn-primary" onClick={()=>{window.location.reload()}}>Reset</button>}
	        	</div>
	        </form>
	      	</div>
	    );
	}
}
