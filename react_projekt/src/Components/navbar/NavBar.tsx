import React from "react";
import {routeConfig} from "../6_router/router";

export function NavBar() {

    return (
        <>
            <nav>
                <ul>
                    {routeConfig.map((route, index) => {
                        return <><a href={route.path}>{route.name}</a><br/></>
                    })}
                </ul>
            </nav>

        </>
    );

}

export default NavBar;
