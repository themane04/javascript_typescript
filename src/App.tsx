import React from 'react';
import './App.css';
import NavBar from "./Components/navbar/NavBar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routeConfig} from "./Components/6_router/router";

function App() {
    return (
        <div className="App">

            <NavBar/>
            <BrowserRouter>
                <Routes>
                    {routeConfig.map((route) => {
                        return <Route key={route.name} path={route.path} element={(<route.component/>)}/>
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
