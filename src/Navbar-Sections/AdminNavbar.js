import "../AdminSectionCSS/AdminNavbarCSS.css";
import ECommersImage from "../Assets/E-CommersShooping.png";

function AdminNavbar() {
    return (
        <div className="AdminNavbar-Section">
            {/* Logo */}
            <div>
                <img src={ECommersImage} className="AdminNavbar-logo" alt="GreenCart Logo" />
            </div>

            <div className="HeyAdmintext-Logoutbutton">
                <p>Hi! Admin</p>
                <button className="LogoutButton">Logout</button>
            </div>
        </div>
    );
}

export default AdminNavbar;
