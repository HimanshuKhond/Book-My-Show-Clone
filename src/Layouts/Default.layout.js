import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {
    return (
        <>
        {/* <h1 className="text-xl">Default Layout Page</h1> */}
        <Navbar />
        <HeroCarousal />
        {props.children}
        </>
    );
};

export default DefaultLayout;