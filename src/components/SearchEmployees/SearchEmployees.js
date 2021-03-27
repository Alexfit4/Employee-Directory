import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
	baseUrl: "https://randomuser.me/api/",
});

export default function SearchEmployees() {
	const [employee, setEmployee] = useState([]);
	const [search, setSearch] = useState("");

	// useEffect(() => {
	// 	api.get("https://randomuser.me/api/?results=5000").then((res) => {
	// 		setEmployee(res.data.results);
	// 	});
	// }, []);

	// // const handleChange = (event) => {
	// // 	setEmployee(event.target.value);
	// // };

	// const handleChange = (event) => {
	// 	let value = event.target.value;
	// 	const name = event.target.name;

	// 	setSearch(value);
	// };

	useEffect(() => {
		const baseUrl = "https://randomuser.me/api/";
		axios.get(baseUrl + "?results=100").then((response) => {
			const peopleList = response.data.results || [];
			setEmployee(peopleList);
		});
	}, []);
	// const peopleListFromApi = () => {
	// 	const baseUrl = "https://randomuser.me/api/";
	// 	axios.get(baseUrl + "?results=5000").then((response) => {
	// 		const peopleList = response.data.results || [];
	// 		setEmployee(peopleList);
	// 	});
	// };

	//* Function to convert the dates to readable dates mm/dd/year

	const newDate = (date) => {
		let x = new Date(date);

		return x.toLocaleDateString();
	};

	onchange = (event) => {
		setSearch(event.target.value);
	};

	const filterFunction = (employee) => {
		return employee.name.first.toUpperCase().indexOf(search.toUpperCase()) > -1;
	};

	// let employeeSearch = document.getElementById('employeeSearch')
	// let friends = employee.filter(function (user) {
	// 	console.log(user.name.first);

	// 	return user.name.first.includes("An");
	// });

	// const handleFormSubmit = (event) => {
	// 	event.preventDefault();

	// 	let friends = employee.filter(function (user) {
	// 		return user.name.first.includes(search);
	// 	});

	// 	return friends.map((item) => (
	// 		<tr key={item.login.uuid}>
	// 			<td className=" border border-indigo-500  w-1/4">
	// 				<img src={item.picture.large} alt="" />
	// 			</td>
	// 			<td className="border border-indigo-500  w-1/4">
	// 				{item.name.first} {item.name.last}
	// 			</td>
	// 			<td className="border border-indigo-500  w-1/4">{item.cell}</td>
	// 			<td className="border border-indigo-500  w-1/4">{item.email}</td>
	// 			<td className="border border-indigo-500  w-1/4"></td>
	// 		</tr>
	// 	));
	// };

	return (
		<div>
			<div className="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
				<h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
					Employee Directory
				</h2>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md bg-white shadow"></div>
				</div>
			</div>
			<input
				className="search"
				placeholder="Search Employee"
				type="text"
				value={search}
				onChange={onchange}
			></input>
			<div className="employeeList">
				<table className="table-auto border-separate border border-green-800">
					<thead>
						<tr>
							<th className="border border-indigo-500  w-1/4">Image</th>
							<th className="border border-indigo-500  w-1/4">Name</th>
							<th className="border border-indigo-500  w-1/4">Phone</th>
							<th className="border border-indigo-500  w-1/4">Email</th>
							<th className="border border-indigo-500  w-1/4">DOB</th>
						</tr>
					</thead>
					<tbody>
						{employee.filter(filterFunction).map((filtered, i) => (
							<tr key={filtered.login.uuid}>
								<td className=" border border-indigo-500  w-1/4">
									<img src={filtered.picture.large} alt="" />
								</td>
								<td className="border border-indigo-500  w-1/4">
									{filtered.name.first} {filtered.name.last}
								</td>
								<td className="border border-indigo-500  w-1/4">
									{filtered.cell}
								</td>
								<td className="border border-indigo-500  w-1/4">
									{filtered.email}
								</td>
								<td className="border border-indigo-500  w-1/4">
									{newDate(filtered.dob.date)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
