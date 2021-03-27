import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Navbar,Nav} from 'react-bootstrap'
  import Search from '../SearchEmployees/SearchEmployees';
import AllEmployees from '../AllEmployees/AllEmployees';

class NavBar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/about">Pupster</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/home">Employee</Nav.Link>
                                    <Nav.Link href="/search">Search</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route path="/search">
                                    <Search />
                                </Route>
                                <Route exact path="/home">
                                    <AllEmployees />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default NavBar;