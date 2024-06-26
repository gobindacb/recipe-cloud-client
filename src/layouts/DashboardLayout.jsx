import { Link, Outlet } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const DashboardLayout = () => {
    const {logout} = UseAuth()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Dashboard Options
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div>
                        <li>
                            <Link to='/dashboard/profile'>My Profile</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/manage-recipe'>Manage All Recipes</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/add-recipe'>Add Recipe</Link>
                        </li>
                        <li>
                            <Link to='/write-blog'>Write a blog</Link>
                        </li>
                    </div>
                    <div className="flex gap-4">
                        <Link to={"/"} className="btn btn-neutral">
                            Home
                        </Link>
                        <button onClick={logout} className="btn btn-error">
                            Logout
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;