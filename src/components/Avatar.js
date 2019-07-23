import React from "react";
import avatarDefault from "../avatarDefault.png";

export default class Avatar extends React.Component{

	onChangeAvatar = event =>{
		if(event.target.files.length){
			const reader = new FileReader();
			reader.onload = event =>{
				this.props.onChange({
					target: {
						name: "avatar",
						value: event.target.result
					}
				})
			}
			reader.readAsDataURL(event.target.files[0])
		}
	};

	render(){
		const { values, error } = this.props;
		return(
			<div>
				<img src={values.avatar ? values.avatar : avatarDefault} alt="" width="100%"/>
				<div className="custom-file mt-2">
					<input 
						type="file"
						className="custom-file-input"
						id="avatar"
						name="avatar"
						onChange={this.onChangeAvatar}
					/>
					<label className="custom-file-label" htmlFor="avatar">Choose file</label>
					{error.avatar && ( <div className="invalid-feedback">{error.avatar}</div> )}
				</div>
			</div>
		)
	}
}