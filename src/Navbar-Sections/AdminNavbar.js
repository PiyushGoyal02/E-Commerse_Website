import "../AdminSectionCSS/AdminNavbarCSS.css";
import ECommersImage from "../Assets/E-CommersShooping.png";

function AdminNavbar() {
    return (
        <div className="AdminNavbar-Section">
            {/* Logo */}
            <div>
                <img src={ECommersImage} className="AdminNavbar-logo" alt="GreenCart Logo" />
            </div>
        </div>
    );
}

export default AdminNavbar;
