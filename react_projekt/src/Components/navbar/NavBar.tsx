import React from 'react';
import { routeConfig } from "../6_router/router";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NavBar() {
    return (
        <nav style={{backgroundColor:"gray", display: "flex", justifyContent:"space-around", alignItems: "center"}}>
            <p style={{fontSize:"40px", padding:"15px"}}>Marjan's React Projects</p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Exercises
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {routeConfig.map((route, index) => (
                        <Dropdown.Item key={index} href={route.path}>{route.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}

export default NavBar;
