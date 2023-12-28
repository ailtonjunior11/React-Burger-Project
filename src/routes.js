import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Container/Home";
import Requests from "./Container/Requests";

function MyRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pedidos" element={<Requests />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;