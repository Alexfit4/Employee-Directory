import React, { useState, useEffect } from "react";
import "./AllEmployee.css";
import axios from "axios";

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

    const newDate = (date) =>{
        let x = new Date(date)

        return x.toLocaleDateString()
    }

    console.log(newDate("1951-11-10T10:05:30.760Z"));

	console.log(employee, "here");

	return (
		<div>
			<div className="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
				<h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
					Employee Directory
				</h2>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md bg-white shadow">
						<a href="#" className="text-gray-700 font-bold py-2 px-6">
							Start
						</a>
					</div>
				</div>
			</div>
			<div className="employeeList">
				<table>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>DOB</th>
					</tr>
					{employee.map((item) => (
						<tr key={item.login.uuid}>
							<td>
								<img src={item.picture.medium} alt="" />
							</td>
							<td>
								{item.name.first} {item.name.last}
							</td>
                            <td>
								{item.cell} 
							</td>
                            <td>
								{item.email} 
							</td>
                            <td>
								{newDate(item.dob.date)} 
							</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}
