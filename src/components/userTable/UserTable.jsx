import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import "./userTable.style.css";

const UserTable = ({ userList, onDeleteHandler, onEditHandler }) => {
	const calcAge = (birthYear) => {
		if (!birthYear) return 0;
		const currentYear = new Date().getFullYear();
		const year = new Date(birthYear).getFullYear();
		console.log(currentYear);
		console.log(birthYear);
		return currentYear - year;
	};
	return (
		<div>
			<h1>Table</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Country</th>
						<th>Age</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{userList.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>{user.country}</td>
							<td>{calcAge(user.birthYear)}</td>

							<td>
								<button onClick={() => onEditHandler(user.id)}>
									<FaRegEdit />
								</button>
								<button onClick={() => onDeleteHandler(user.id)}>
									<FaRegTrashAlt />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserTable;
