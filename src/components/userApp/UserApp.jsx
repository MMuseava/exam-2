import React, { useState, useEffect } from "react";
import UserForm from "../userForm/UserForm";
import UserTable from "../userTable/UserTable";

const url = "https://jsonplaceholder.typicode.com/users";

const UserApp = () => {
	const [userList, setUserList] = useState([]);
	const [editUserData, setEditUserData] = useState({
		isEdit: false,
		userId: null,
	});

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
		if (editUserData.isEdit) {
			setUserList((prevUsers) =>
				prevUsers.map((existingUser) =>
					existingUser.id === editUserData.userId
						? { ...user, id: editUserData.userId }
						: existingUser
				)
			);
			setEditUserData({
				isEdit: false,
				userId: null,
			});
		} else {
			setUserList([
				...userList,
				{ ...user, name: user.firstName + " " + user.lastName },
			]);
		}
	};
	const onDeleteHandler = (id) => {
		setUserList(userList.filter((user) => user.id !== id));
	};
	const onEditHandler = (id) => {
		const selectedUser = userList.find((user) => user.id === id);
		setEditUserData({
			isEdit: true,
			userId: id,
		});
	};

	return (
		<div>
			<UserForm addUserHandler={addUser} editUserData={editUserData} />
			<UserTable
				userList={userList}
				onDeleteHandler={onDeleteHandler}
				onEditHandler={onEditHandler}
			/>
		</div>
	);
};

export default UserApp;
