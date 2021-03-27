import React, { useState, useEffect } from "react";
import axios from "axios";
import './SearchEmployees.css'

export default function SearchEmployees() {
	const [employee, setEmployee] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const baseUrl = "https://randomuser.me/api/";
		axios.get(baseUrl + "?results=100").then((response) => {
			const peopleList = response.data.results || [];
			setEmployee(peopleList);
		});
	}, []);

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

	return (
		<div>
			<div className="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
				<h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
					Employee Directory
				</h2>
				<input
					className="search mt-8 border-solid  border-4 border-light-blue-500 border-opacity-100"
					placeholder="Search Employee by name..."
					type="text"
					value={search}
					onChange={onchange}
				></input>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md bg-white shadow"></div>
				</div>
			</div>
			<div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
				<div
					id="recipients"
					className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
				>
					<table
						id="example"
						className="stripe hover"
						
					>
						<thead>
							<tr>
								<th
									data-priority="1"
									className="border border-indigo-500  w-1/4"
								>
									Image
								</th>
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
		</div>
	);
}
