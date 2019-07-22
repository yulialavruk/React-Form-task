import React from "react";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";
import Steps from "./Steps";
import Navigation from "./Navigation";

export default class App extends React.Component {
	constructor(){
		super()

		this.state = {
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
		}
	}
	
	getOptionsItems = items =>{
		return items.map(item =>(
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		))
	};

	onChange = event =>{
		const values = {...this.state.values};
		values[event.target.name] = event.target.value
		this.setState({
			values: values
		})
		console.log(values)
	};

	onChangeAvatar = event =>{
		const reader = new FileReader();
		reader.onload = event =>{
			this.setState({
				values:{
					avatar: event.target.result
				}
			})
		}
		reader.readAsDataURL(event.target.files[0])
	};

	onPrev = event =>{
		this.setState(prevState =>({
			step: prevState.step - 1
		}))
	};

	onNext = event =>{
		const errors = this.getErrorsByValues();

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

	getErrorsByValues = () =>{
		const errors = {};
		if(this.state.step === 0){
			if (this.state.values.firstname.length < 5) {
				errors.firstname = 'Must be 5 characters or more'
			}
			if (this.state.values.lastname.length < 5) {
				errors.lastname = 'Must be 5 characters or more'
			}
			if(this.state.values.password.length < 6){
				errors.password = 'Must be 6 characters or more'
			}
			if(this.state.values.password !==this.state.values.repeatPassword){
				errors.repeatPassword = 'Must be equal password'
			}
		}
		if (this.state.step === 1) {
			if(this.state.values.email.length < 5){
			errors.email = 'Invalid email address'
			}
			if(this.state.values.mobile.length < 10){
				errors.mobile = 'Invalid mobile'
			}
			if(this.state.values.city === ""){
				errors.city = 'Required'
			}
		}
		
		if(this.state.step === 2){
			if(this.state.values.avatar === ""){
				errors.avatar = 'Required'
			}
		}
		return errors;
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
	        		getOptionsItems={this.getOptionsItems}
	        	/>)}
	        {this.state.step === 2 &&(
	        	<Avatar 
	        		values={this.state.values} 
	        		onChangeAvatar={this.onChangeAvatar}
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
	        	/>
	        </form>
	      	</div>
	    );
	}
}
