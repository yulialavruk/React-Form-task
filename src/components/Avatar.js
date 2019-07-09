import React from "react";
//import user from "../user.png";

export default class Avatar extends React.Component{

	render(){
		const {onChangeAvatar, value } = this.props;
		return(
			<div>
				<div className="form-group">
					<img scr={value.avatar} alt="" width="100%" height="200px"/>
					<label htmlFor="avatar">Avatar</label>
					<input 
						type="file"
						className="form-control-file"
						id="avatar"
						name="avatar"
						onChange={onChangeAvatar}
					/>
				</div>
			</div>
		)
	}
}