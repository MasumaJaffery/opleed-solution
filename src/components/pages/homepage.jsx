import React from "react";
import Home from "../home";
import Header from "../navbar";
import ServicesCarousel from "../services";
import Contact from "../contact";
const HomePage = () => {
    return(
        <>
            <Home />
            <ServicesCarousel />
            <Contact />
        </>
    )
}
export default HomePage;