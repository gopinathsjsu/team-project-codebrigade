import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import "./../Styles/searchBar.css";
import "./../Assets/locIcon.png";

const SearchBar = () => {

    const [roomCount, setRoomCount] = useState(1);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);

    const searchHotels = () => {
        // call search API
    };

    const getDate = (day) => {
        const today = new Date();
        if (day === "today")
            return today.toISOString().substr(0, 10);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().substr(0, 10);
    };

    return <span className="contents">
        <Form.Group className="searchAttribute">
            <Form.Label>Destination</Form.Label>
            <div className="searchDestination">
                <Form.Control
                    type="text"
                    id="inputLocation"
                    placeholder="Where shall we go?"
                />
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
        </Form.Group>
        <Form.Group className="searchAttribute">
            <Form.Label>Check In</Form.Label>
            <Form.Control
                type="date"
                id="checkIn"
                placeholder="mm/dd/yyyy"
                defaultValue={getDate("today")}
            />
        </Form.Group>
        <Form.Group className="searchAttribute">
            <Form.Label>Check Out</Form.Label>
            <Form.Control
                type="date"
                id="CheckOut"
                placeholder="mm/dd/yyyy"
                defaultValue={getDate("tommorow")}
            />
        </Form.Group>
        <Dropdown autoclose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-false" variant="secondary" className="searchDropdown">
                {roomCount} Rooms &amp; {adultCount + childCount} Guests
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
                <Dropdown.Item className="lisItem">
                    Rooms
                    <span className="counter">
                        <Button onClick={() => { if (roomCount > 1) setRoomCount(roomCount - 1) }}>-</Button>
                        <span>{roomCount}</span>
                        <Button onClick={() => setRoomCount(roomCount + 1)}>+</Button>
                    </span>
                </Dropdown.Item>
                <Dropdown.Item className="lisItem">
                    Adults
                    <span className="counter">
                        <Button onClick={() => { if (adultCount > 1) setAdultCount(adultCount - 1) }}>-</Button>
                        <span>{adultCount}</span>
                        <Button onClick={() => setAdultCount(adultCount + 1)}>+</Button>
                    </span>
                </Dropdown.Item>
                <Dropdown.Item>
                    Children
                    <span className="counter">
                        <Button onClick={() => { if (childCount > 0) setChildCount(childCount - 1) }}>-</Button>
                        <span>{childCount}</span>
                        <Button onClick={() => setChildCount(childCount + 1)}>+</Button>
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button className="findButton" onClick={searchHotels()} variant="primary">Find Hotels</Button>
    </span>
}

export default SearchBar;
