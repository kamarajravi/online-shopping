
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Products from "./Products";
import Checkout from "./Checkout";
import Mycart from "./Mycart";
import ThankYou from "./Thankyou";


export default function Main()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/" index element={<Home/>} />
                <Route path="/product" element={<Products/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/mycart" element={<Mycart/>} />
                <Route path="/thankyou" element={<ThankYou/>} />
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}