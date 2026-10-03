import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";

import "./App.css";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Signup />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;







  