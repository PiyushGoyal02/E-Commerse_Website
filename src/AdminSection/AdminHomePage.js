import "../AdminSectionCSS/AdminHomePageCSS.css"
import AdminNavbar from "../Navbar-Sections/AdminNavbar";
import AdminOrderDetails from "./AdminOrderDetails";
import AdminProductsList from "./AdminProductsList";
import AdminSidebar from "./AdminSidebar";

function AdminHomePage(){
    return (
        <div>
            <AdminNavbar/>
            <div className="Sidebar-DifferentSections">
                <div>
                    <AdminSidebar/>
                </div>

                <div>
                    <AdminOrderDetails/>
                    {/* <AdminProductsList/> */}
                </div>

            </div>
        </div>
    )
}

export default AdminHomePage;