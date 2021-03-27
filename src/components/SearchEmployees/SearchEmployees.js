import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
	baseUrl: "https://randomuser.me/api/",
});

export default function SearchEmployees() {
	const [search, setSearch] = useState([]);

	useEffect(() => {
		api.get("https://randomuser.me/api/?results=30").then((res) => {
			console.log(res.data.results);
			setSearch(res.data.results);
		});
	}, []);


    const handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        console.log(value);
    }

    
	return (
		<div>
			<p>Search for an employee</p>
			<form className="form">
				<input name="employee" type="text" placeholder="Search employee" />
				<button type="submit">Submit</button>

				<div className="form-group">
					<label for="exampleFormControlSelect1">Example select</label>
					<select onChange={handleChange} name="employee" className="form-control" id="exampleFormControlSelect1">
						{search.map((item) => (
							<option  key={item.uuid}  name="name">
								{item.name.first} {item.name.last}
							</option>
						))}
					</select>
				</div>
			</form>
			<div className="container"></div>
		</div>
	);
}
