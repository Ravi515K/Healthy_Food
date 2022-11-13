import React from "react";
import {Routes, Route} from "react-router-dom"
import Cart from "../Pages/Cart";
import Organic from "../Pages/Organic";
import StoreVisit from "../Pages/StoreVisit";
import Home from "./Home"
import Login from "./Login"

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>} />
                <Route path="/Organic" element={<Organic/>}></Route>
                <Route path="/store" element={<StoreVisit/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    )
}export default AllRoutes;