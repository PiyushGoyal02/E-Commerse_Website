import { useState } from "react";
import "../AdminSectionCSS/AdminSidebarCSS.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { PiListHeartBold } from "react-icons/pi";
import { TbCheckbox } from "react-icons/tb";

function AdminSidebar() {
    const [active, setActive] = useState("add");

    return (
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
                    <p className="Ptag-text">Order</p>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;
