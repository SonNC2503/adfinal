import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';



import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";




//import { DarkModeContext } from "../../context/darkModeContext";
//import { useContext } from "react";



const Sidebar = () => {
    //const { dispatch } = useContext(DarkModeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <span className="logo">SportMSLD</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/dashboard" style={{ textDecoration: "none" }}>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </Link>

                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>

                    <Link to="/orders" style={{ textDecoration: "none" }}>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>

                    <Link to={"/deliveries"} style={{ textDecoration: "none" }}>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>Delivery</span>
                        </li>
                    </Link>

                    <Link to={"/news"} style={{ textDecoration: "none" }}>
                        <li>
                            <NewspaperIcon className="icon" />
                            <span>Newspaper</span>
                        </li>
                    </Link>

                    <Link to={"/category"} style={{ textDecoration: "none" }}>
                        <li>
                            <BookmarksIcon className="icon" />
                            <span>Category</span>
                        </li>
                    </Link>

                    <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                        <li>
                            <Diversity2Icon className="icon" />
                            <span>About Us</span>
                        </li>
                    </Link>

                    <p className="title">SERVICE</p>
                    <Link to="/support" style={{ textDecoration: "none" }}>
                        <li>
                            <InterpreterModeIcon className="icon" />
                            <span>System Support</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleLogout}>Sign Out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;