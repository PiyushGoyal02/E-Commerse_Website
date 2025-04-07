import "../Css-Code/HomePageCSS.css"
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar";
import HomepageSlideImages from "./HomepageSlideImages";

function HomePage (){
    return (
        <div>
            <HomePageNavbar/>
            <div>

                <HomepageSlideImages/>
                
            </div>
        </div>
    )
}

export default HomePage;