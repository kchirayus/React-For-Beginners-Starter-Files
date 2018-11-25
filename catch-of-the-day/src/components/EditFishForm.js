import React from 'react';

class EditFishForm extends React.Component {

	handleChange = (e) => {
		const value = (e.currentTarget.name === "status") ? e.currentTarget.value === 'true' : e.currentTarget.value;
		const updateFish = {
			...this.props.fish,
			[e.currentTarget.name]: value
		};
		this.props.updateFish(this.props.index, updateFish);
	};

	render() {
		const { name, price, status, desc, image } = this.props.details;

		return (
			<div className="fish-edit">
				<input name="name" type="text" value={name} onChange={this.handleChange} />
				<input name="price" type="text" value={price} onChange={this.handleChange} />
				<select name="status" value={status} onChange={this.handleChange}>
					<option value={true}>Fresh!</option>
					<option value={false}>Sold Out!</option>
				</select>
				<textarea name="desc" value={desc} onChange={this.handleChange} />
				<input name="image" type="text" value={image} onChange={this.handleChange} />
				<button onClick={() => this.props.deleteFish(this.props.index)}>
					Remove Fish
				</button>
			</div>
		);
	}
}

export default EditFishForm;
