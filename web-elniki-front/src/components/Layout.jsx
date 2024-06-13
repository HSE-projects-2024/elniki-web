import React from "react";
import { Navbar } from "./Navbar";
import '../order.css';

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container mx-auto">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}