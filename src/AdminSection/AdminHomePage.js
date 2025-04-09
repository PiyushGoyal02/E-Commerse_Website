import "../AdminSectionCSS/AdminHomePageCSS.css"
import AdminNavbar from "../Navbar-Sections/AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminHomePage(){
    return (
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
        </div>
    )
}

export default AdminHomePage;