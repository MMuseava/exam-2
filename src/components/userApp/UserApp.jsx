import React, { useState, useEffect } from "react";
import UserForm from "../userForm/UserForm";
import UserTable from "../userTable/UserTable";

const url = "https://jsonplaceholder.typicode.com/users";

const UserApp = () => {
	const [userList, setUserList] = useState([]);
	// const [editUserData, setEditUserData] = useState({
	// 	isEdit: false,
	// 	userIndex: null,
	// });

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setUserList(data);
			console.log(data);
		} catch (err) {
			console.log("error", err);
		}
	};
	const addUser = (user) => {
		setUserList([
			...userList,
			{ ...user, name: user.firstName + " " + user.lastName },
		]);
	};
	const onDeleteHandler = (id) => {
		setUserList(userList.filter((user) => user.id !== id));
	};
	// const onEditHandler = (id) => {
	// 	setUserList(id);
	// 	setEditUserData({
	// 		isEdit: true,
	// 	});
	// };

	return (
		<div>
			<UserForm addUserHandler={addUser} />
			<UserTable
				userList={userList}
				onDeleteHandler={(id) => onDeleteHandler(id)}
			/>
		</div>
	);
};

export default UserApp;
