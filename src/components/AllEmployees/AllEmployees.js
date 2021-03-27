import React, { useState, useEffect } from "react";
import "./AllEmployee.css";
import axios from "axios";
import SearchEmployees from "../SearchEmployees/SearchEmployees";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'

const api = axios.create({
	baseUrl: "https://randomuser.me/api/",
});

export default function AllEmployees() {
	const [employee, setEmployee] = useState([]);

	useEffect(() => {
		api.get("https://randomuser.me/api/?results=30").then((res) => {
			console.log(res.data.results);
			setEmployee(res.data.results);
		});
	}, []);

	//* Function to convert the dates to readable dates mm/dd/year

	const newDate = (date) => {
		let x = new Date(date);

		return x.toLocaleDateString();
	};

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
						{employee.map((item) => (
							<tr key={item.login.uuid}>
								<td className=" border border-indigo-500  w-1/4">
									<img src={item.picture.large} alt="" />
								</td>
								<td className="border border-indigo-500  w-1/4">
									{item.name.first} {item.name.last}
								</td>
								<td className="border border-indigo-500  w-1/4">{item.cell}</td>
								<td className="border border-indigo-500  w-1/4">
									{item.email}
								</td>
								<td className="border border-indigo-500  w-1/4">
									{newDate(item.dob.date)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);


}


