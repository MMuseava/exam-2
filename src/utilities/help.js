export const calcAge = (birthYear) => {
	if (!birthYear) return 0;
	const currentYear = new Date().getFullYear();
	const year = new Date(birthYear).getFullYear();
	console.log(currentYear);
	console.log(birthYear);
	return currentYear - year;
};

export const getBirthMonth = (birthDate) => {
	if (!birthDate) return "Unknown";
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const monthIndex = new Date(birthDate).getMonth();
	const day = new Date(birthDate).getDate() + 1;

	return monthNames[monthIndex] + "-" + day;
	console.log();
};

export const countryName = (userList) => {
	if (userList && userList.address && userList.address.city) {
		return userList.address.city;
	} else if (userList && userList.country) {
		const countryChange = {
			USA: "United States",
			CAN: "Canada",
			RUS: "Russia",
			UK: "United Kingdom",
			KG: "Kyrgyzstan",
		};
		return countryChange[userList.country] || userList.country;
	} else {
		return "unknown";
	}
};
