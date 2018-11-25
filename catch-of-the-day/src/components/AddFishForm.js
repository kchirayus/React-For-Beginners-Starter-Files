import React from 'react';

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (e) => {
		e.preventDefault();
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: (this.statusRef.value.value === true),
			desc: this.descRef.value.value,
			image: this.imageRef.value.value,
		};
		this.props.addFish(fish);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" />
				<select name="status" ref={this.statusRef}>
					<option value={true}>Fresh!</option>
					<option value={false}>Sold Out!</option>
				</select>

				<textarea name="desc" ref={this.descRef} placeholder="Description" />
				<input name="image" type="text" placeholder="Image" />
				<button type="submit" ref={this.imageRef}>+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;
