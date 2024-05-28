import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const Navbar = () => {

    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link to='/all-recipes'>All recipes</Link></li>
                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2">
                                <li><a>Our Team</a></li>
                                <li><a>Restaurant</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

    const {user, logout} = UseAuth();

    return (
        <div className="navbar bg-base-100 container px-6 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Recipe Cloud</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOptions} 
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <button onClick={logout} className="btn">Log Out</button>
                    ) : (
                        <Link to='/login' className="btn">Login</Link>
                    )
                }
                
            </div>
        </div>
    );
};

export default Navbar;
