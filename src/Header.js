import React, { Component  } from "react";
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
		render(){
				return(
						<Navbar bg="dark">
								<Navbar.Brand className="text-white" href="#home">Akses Sport</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse>
										<Nav className="mr-auto">
												<Nav.Link className="text-white" href="#home">Home</Nav.Link>
												<Nav.Link className="text-white" href="#link">Berita</Nav.Link>
												<Nav.Link className="text-white" href="#link">Live Scores</Nav.Link>
												<Dropdown>
														<Dropdown.Toggle variant="dark">Piala & Liga</Dropdown.Toggle>
														<Dropdown.Menu>
																<Dropdown.Item>Hello there!</Dropdown.Item>
														</Dropdown.Menu>
												</Dropdown>
												<Nav.Link className="text-white"  href="#link">Transfer Pemain</Nav.Link>
												<Nav.Link className="text-white"  href="#link">Tim</Nav.Link>
										</Nav>
										<Form inline>
												<FormControl type="text" placeholder="Search" className="mr-sm-2" />
												<Button variant="outline-success">Search</Button>
										</Form>
								</Navbar.Collapse>
						</Navbar>

				)
		}		
}

export default Header
