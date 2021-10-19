import React from "react";
import MovieNavbar from "../components/Navbar/movieNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
        {/* <h1 className="text-xl">Default Layout Page</h1> */}
        <MovieNavbar />
        {/* <HeroCarousal /> */}
        {props.children}
        </>
    );
};

export default MovieLayout;