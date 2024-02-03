import React from "react";
import { calcAge, getBirthMonth, countryName } from "../../utilities/help";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import "./userTable.style.css";

const UserTable = ({ userList, onDeleteHandler, onEditHandler }) => {
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
						<th>Birth Month</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{userList.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.phone}</td>
							<td>{user.email}</td>
							<td>{countryName(user)}</td>
							<td>{calcAge(user.birthYear)}</td>
							<td>{getBirthMonth(user.birthYear)}</td>

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
