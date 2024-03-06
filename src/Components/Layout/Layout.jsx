import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


export default function Layout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
