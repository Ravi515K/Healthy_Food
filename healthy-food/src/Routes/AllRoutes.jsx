import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./Home"

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>
    )
}export default AllRoutes;