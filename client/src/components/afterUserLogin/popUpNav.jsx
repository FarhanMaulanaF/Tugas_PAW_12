import React from "react";
import { createPopper } from "@popperjs/core";
import UserCircle from "../../assets/UserCircle.svg";
import { Link } from "react-router-dom";
import {
    updateUser,
    isAuth,
    getCookie,
    signout,
    updateUserImageProfile,
} from "../../helpers/auth.js";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ color }) => {
    const Navigate = useNavigate();
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "auto"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            <img src={UserCircle} alt="UserCircle" />
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 left-0 top-0 absolute"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link
                                to="/profile"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                Profile
                            </Link>
                            <Link
                                to="/"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                Homepage
                            </Link>
                            <button
                                className={
                                    "text-sm text-left py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-white")

                                }
                                onClick={() => {
                                    signout(() => {
                                        Navigate("/");
                                    });
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropdownRender() {
    return (
        <>
            <Dropdown color="white" />
        </>
    );
}

