//Transfer components into another component
//Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/Default.layout.js";

const DefaultHOC = ({ component: Component , ...rest }) => {
    //component
    //props -> exact
    return (
        <>
        <Route 
        {...rest} 
        component = {(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}
        />
        </>
    );
};

export default DefaultHOC;