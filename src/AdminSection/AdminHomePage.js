import "../AdminSectionCSS/AdminHomePageCSS.css";
import AdminNavbar from "../Navbar-Sections/AdminNavbar";
import AdminSideAllUsers from "./AdminSideAllUsers";
import "../AdminSectionCSS/AdminSidebarCSS.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { PiListHeartBold } from "react-icons/pi";
import { TbCheckbox, TbUsersGroup } from "react-icons/tb";
import { useState } from "react";
import AdminOrderDetails from "./AdminOrderDetails";
import AdminProductsList from "./AdminProductsList";

function AdminHomePage() {
    const [active, setActive] = useState("add");

    return (
        <div>
            <AdminNavbar />
            <div className="Sidebar-DifferentSections">
                <div>
                    <div className="AdminSidebardiv">
                        <div
                            className={`DivSection ${active === "add" ? "active" : ""}`}
                            onClick={() => setActive("add")}
                        >
                            <MdOutlineLibraryAddCheck className="Icons" />
                            <p className="Ptag-text">Add Products</p>
                        </div>

                        <div
                            className={`DivSection ${active === "list" ? "active" : ""}`}
                            onClick={() => setActive("list")}
                        >
                            <PiListHeartBold className="Icons" />
                            <p className="Ptag-text">Product List</p>
                        </div>

                        <div
                            className={`DivSection ${active === "order" ? "active" : ""}`}
                            onClick={() => setActive("order")}
                        >
                            <TbCheckbox className="Icons" />
                            <p className="Ptag-text">Orders</p>
                        </div>

                        <div
                            className={`DivSection ${active === "users" ? "active" : ""}`}
                            onClick={() => setActive("users")}
                        >
                            <TbUsersGroup className="Icons" />
                            <p className="Ptag-text">All Users</p>
                        </div>
                    </div>
                </div>

                <div className="AdminMainContent">
                    {active === "users" && <AdminSideAllUsers />}
                    {active === "order" && <AdminOrderDetails />}
                    {active === "list" && <AdminProductsList />}
                </div>
            </div>
        </div>
    );
}

export default AdminHomePage;
