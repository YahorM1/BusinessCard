import {NavLink, Outlet} from "react-router-dom";
import React from "react";

function Layout() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Page 1</NavLink>
                    </li>
                    <li>
                        <NavLink to="page2">Page 2</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout;