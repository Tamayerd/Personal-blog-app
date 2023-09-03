import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

import AuthProvider from "../Context/AuthProvider";


export default function Layout(){
 
    return(
        <>
           
            <AuthProvider>
                <Navbar></Navbar>
                <main className="container">
                    <Outlet></Outlet>
                </main>
            </AuthProvider>
        </>
    )
}