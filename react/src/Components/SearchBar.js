import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./../Styles/searchBar.css";

const SearchBar = () => {
    return <span className="contents">
        <Form.Group className="searchAttribute">
            <Form.Label>Destination</Form.Label>
            <Form.Control
                type="text"
                id="inputLocation"
                placeholder="Where shall we go?"
            />
        </Form.Group>
        <Form.Group className="searchAttribute">
            <Form.Label>Check In</Form.Label>
            <Form.Control
                type="date"
                id="checkIn"
                placeholder="Check In"
            />
        </Form.Group>
        <Form.Group className="searchAttribute">
            <Form.Label>Check Out</Form.Label>
            <Form.Control
                type="date"
                id="CheckOut"
                placeholder="Check Out"
            />
        </Form.Group>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className="searchDropdown">
                Rooms &amp; Guests
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                    Rooms
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Adults</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Children</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </span>
}

export default SearchBar;
