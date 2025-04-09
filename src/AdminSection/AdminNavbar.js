import "../AdminSectionCSS/AdminNavbarCSS.css"
import WebsiteLogo from "../Assets/E-CommersShooping.png"

function AdminNavbar (){
    return (
        <div>
            <div className="AdminNavbarDiv">
                <img
                    src={WebsiteLogo}
                    className="WebsiteLogo"
                />
            </div>
        </div>
    )
}

export default AdminNavbar;