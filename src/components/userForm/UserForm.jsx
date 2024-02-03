import React, { useState } from "react";
import "./userForm.style.css";

const initialValues = {
	firstName: "",
	phone: "",
	birthYear: "",
	lastName: "",
	email: "",
	country: "",
};
const UserForm = ({ addUserHandler }) => {
	const [formData, setFormData] = useState(initialValues);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		addUserHandler(formData);
		setFormData(initialValues);
		console.log("formData", formData);
	};

	const onInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="form-container">
			<h1>Form</h1>
			<form onSubmit={onSubmitHandler}>
				<div className="input-div">
					<div className="block-one">
						<label>Name</label>
						<input
							type="text"
							placeholder="First Name"
							value={formData.firstName}
							onChange={onInputChange}
							name="firstName"
							required
						/>
						<label>Phone</label>
						<input
							type="tel"
							placeholder="Phone"
							value={formData.phone}
							onChange={onInputChange}
							name="phone"
							required
						/>
						<label>Birth Year</label>
						<input
							type="date"
							placeholder="Birth Year"
							value={formData.birthYear}
							onChange={onInputChange}
							name="birthYear"
							required
						/>
					</div>
					<div className="block-two">
						<label>Last Name</label>
						<input
							type="text"
							placeholder="Last Name"
							value={formData.lastName}
							onChange={onInputChange}
							name="lastName"
							required
						/>
						<label>Email</label>
						<input
							type="text"
							placeholder="Email"
							value={formData.email}
							onChange={onInputChange}
							name="email"
							required
						/>
						<label>Country</label>
						<select
							required
							name="country"
							value={formData.country}
							onChange={onInputChange}
						>
							<option value="">Select Country</option>
							<option value="USA">United States</option>
							<option value="Canada">Canada</option>
							<option value="China">China</option>
							<option value="Russia">Russia</option>
							<option value="Germany">Germany</option>
						</select>
					</div>
				</div>

				<button className="add-btn" type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default UserForm;
