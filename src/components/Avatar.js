import React from "react";
import user from "../user.png";

export default class Avatar extends React.Component{

	render(){
		const {onChangeAvatar, value, error } = this.props;
		return(
			<div>
				<img src={value.avatar ? value.avatar : user} alt="" width="100%"/>
				<div className="custom-file mt-2">
					<input 
						type="file"
						className="custom-file-input"
						id="avatar"
						name="avatar"
						onChange={onChangeAvatar}
					/>
					<label className="custom-file-label" htmlFor="avatar">Choose file</label>
					{error.avatar ? ( <div className="invalid-feedback">{error.avatar}</div> ) : null}
				</div>
			</div>
		)
	}
}