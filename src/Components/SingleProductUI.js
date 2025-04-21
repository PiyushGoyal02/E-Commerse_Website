import { useLocation } from "react-router-dom"
import "../Css-Code/SingleProductUICSS.css"
import HomePageNavbar from "../Navbar-Sections/HomePageNavbar"
import Footer from "./Footer"

function SingleProductUI () {

    const location = useLocation()
    const product = location.state
    const productData = product.product
    console.log(productData)

    return (
        <div>

            <HomePageNavbar/>
            <div className="ProductContentDiv">
                <h1 className="productNameHeading">{productData.productName}</h1>
            
                <div className="productContentSectionDiv">
                    {/* Images Section */}
                    <div className="ProductImagesSmallandBig">
                        <div className="SmallImageDiv">
                            <img
                                src={productData.productImages}
                                className="productImageSmall"
                                alt={productData.productName}
                            />
                        </div>

                        <div>
                            <img
                                src={productData.productImages}
                                className="productImageBig"
                                alt={productData.productName}
                            />
                        </div>
                    </div>

                    <div className="productTextDetails">
                        <p className="ProductDescription">{productData.descriptionText}</p>
                        <div className="stars productStars">
                            {"★".repeat(4)}
                            {"☆".repeat(1)}
                            <span className="count">(4)</span>
                        </div>
                        <p className="oldAmount">MRP:₹{parseInt(productData.productprice) + 20}</p>
                        <p className="LatestPrice">MRP: ₹{productData.productprice}</p>
                        <p className="InclusiveOfAllTaxes">(inclusive of all taxes)</p>

                        <p className="Abouttext">About Product</p>
                        <div className="BulletPointSection">
                            <p className="BulletPoint">• Fresh and quality-tested to ensure the best for you</p>
                            <p className="BulletPoint">• Neatly packed to maintain hygiene and taste</p>
                            <p className="BulletPoint">• Great for everyday cooking, snacking, or recipes</p>
                        </div>

                        <div className="TwoButtonsDiv">
                            <button className="ButtonAddtoCart">Add to cart</button>
                            <button className="ButNowButton">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default SingleProductUI