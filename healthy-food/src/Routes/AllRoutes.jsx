import React from "react";
import {Routes, Route} from "react-router-dom"
import Organic from "../Pages/Organic";
import Home from "./Home"

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Organic" element={<Organic/>}></Route>
            </Routes>
        </div>
    )
}export default AllRoutes;