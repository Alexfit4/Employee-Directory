import "./App.css";
import SearchEmployee from "./components/SearchEmployees/SearchEmployees";

function App() {
	return (
		<Router>
			<div>
				<Wrapper>
					<Route exact path="/Employee-Directory" component={SearchEmployee} />
				</Wrapper>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
