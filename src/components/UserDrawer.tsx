import { X } from "lucide-react";
import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { closeUserDrawer } from "../app/features/userDrawerSlice";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { NavLink } from "react-router-dom";

const MenuDrawer = () => {
    const dispatch = useDispatch();
    const isOpenUserDrawer = useSelector((state: RootState) => state.userDrawer.isOpenUserDrawer);

    return (
        <>
            {/* Backdrop */}
            {isOpenUserDrawer && (
                <div
                    className="fixed inset-0 bg-black/40 bg-opacity-50 z-30"
                    onClick={() => dispatch(closeUserDrawer())}
                />
            )}

            {/* Drawer */}
            <div
                id="drawer-backdrop"
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-72 lg:w-80 transform transition-transform duration-500 ease-in-out  
                ${isOpenUserDrawer ? "translate-x-0" : "translate-x-full"}`}
                tabIndex={-1}
                aria-labelledby="drawer-backdrop-label"
            >
                <h5 id="drawer-backdrop-label" className="text-base font-bold uppercase mb-4 px-2">
                    Login
                </h5>

                {/* Close button */}
                <button
                    type="button"
                    className="absolute top-4.5 right-2.5 text-gray-500 hover:text-primary transition duration-300 hover:cursor-pointer px-2"
                    onClick={() => dispatch(closeUserDrawer())}
                >
                    <X className="w-5 h-5" />
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4 px-2">
                    <form className="text-sm">
                        <Input label="Email Address" placeholder="Email Address" />
                        <Input label="Password" placeholder="Password" />
                        <Button
                            className="w-full rounded-md text-white bg-primary border hover:bg-white hover:-translate-y-1 hover:border-primary hover:text-primary mb-4 text-sm">
                            LOG IN
                        </Button>
                    </form>
                    <div>
                        <NavLink to="/forgotpassword">
                            <p className="text-gray-600 text-xs underline text-center mb-5">Forgot your password?</p>
                        </NavLink>
                        <Button
                            className="w-full rounded-md bg-white border text-primary border-primary hover:bg-primary hover:-translate-y-1 hover:text-white text-sm">
                            CREATE ACCOUNT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuDrawer;
