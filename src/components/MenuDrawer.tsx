import { X, LogIn, UserPlus, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../app/features/menuDrawerSlice";

const MenuDrawer = () => {
    const dispatch = useDispatch();
    const isOpenSidebar = useSelector((state: RootState) => state.menuDrawer.isOpenSidebar);

    const handleNavClick = () => {
        dispatch(closeSidebar());
    };

    return (
        <>
            {/* Backdrop */}
            {isOpenSidebar && (
                <div
                    className="fixed inset-0 bg-black/40 bg-opacity-50 z-30"
                    onClick={() => dispatch(closeSidebar())}
                />
            )}

            {/* Drawer */}
            <div
                id="drawer-backdrop"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-64 transform transition-transform duration-500 ease-in-out  
                ${isOpenSidebar ? "translate-x-0" : "-translate-x-full"}`}
                tabIndex={-1}
                aria-labelledby="drawer-backdrop-label"
            >
                <h5 id="drawer-backdrop-label" className="text-base font-bold uppercase mb-4">
                    Menu
                </h5>

                {/* Close button */}
                <button
                    type="button"
                    className="absolute top-4.5 right-2.5 text-gray-500 hover:text-primary hover:cursor-pointer transition duration-300"
                    onClick={() => dispatch(closeSidebar())}
                >
                    <X className="w-5 h-5" />
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4">
                    <ul className="space-y-2 font-semibold text-gray-800">
                        <li>
                            <NavLink to="/" className="block p-1 uppercase text-xs" onClick={handleNavClick}>
                                Home
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/shop" className="block p-1 uppercase text-xs" onClick={handleNavClick}>
                                Shop
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/about" className="block p-1 uppercase text-xs" onClick={handleNavClick}>
                                About
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/contact" className="block p-1 uppercase text-xs" onClick={handleNavClick}>
                                Contact Us
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/login" className="flex items-center gap-2 p-1 font-normal text-xs" onClick={handleNavClick}>
                                <LogIn className="w-5 h-5 text-gray-700" />
                                <span>Sign In</span>
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/register" className="flex items-center gap-2 p-1 font-normal text-xs" onClick={handleNavClick}>
                                <UserPlus className="w-5 h-5 text-gray-700" />
                                <span>Create an Account</span>
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                        <li>
                            <NavLink to="/wishlist" className="flex items-center gap-2 p-1 font-normal text-xs" onClick={handleNavClick}>
                                <Heart className="w-5 h-5 text-gray-700" />
                                <span>My Wish List</span>
                            </NavLink>
                        </li>
                        <hr className="text-gray-200" />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MenuDrawer;
