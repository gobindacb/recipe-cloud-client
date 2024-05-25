import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('dashboard')

    return (
        <div>
            {/* navbar */}
            {noHeaderFooter || <Navbar></Navbar>}
            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]">
            <Outlet></Outlet>
            </div>
            {/* footer */}
        </div>
    );
};

export default Main;