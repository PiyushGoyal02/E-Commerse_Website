import { useState } from "react";
import "../AdminSectionCSS/AdminSideAddproductsCSS.css";
import { IoCloudUploadOutline } from "react-icons/io5";

function AdminSideAddproducts() {

    // It's a useState for save all form data
    const [formData, setformData] = useState({ 
        productName: "", 
        descriptionText: "", 
        productprice: "",
        productsquantity: "",
        category: ""
    });

    // It's a function 
    function formChangeHandler(event) {
        setformData(prevForm => ({n
            ...prevForm,
            [event.target.name]: event.target.value
        }));
    }

    // It's a images box for UI
    const imagebox = [
        { name: "Upload", image: <IoCloudUploadOutline /> },
        { name: "Upload", image: <IoCloudUploadOutline /> },
        { name: "Upload", image: <IoCloudUploadOutline /> },
        { name: "Upload", image: <IoCloudUploadOutline /> }
    ];

    // This is a fuction for APIs call
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Data:", formData);
    }

    return (
        <div>
            <div className="MainDivAddProducts">
                <p className="productsImages">Products Images</p>
                <div className="image-container">
                    {imagebox.map((value, index) => (
                        <div className="singleImageBox" key={index}>
                            {value.image}
                            <p>{value.name}</p>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    
                    <div className="LabelInputDiv">
                        <label className="labelText">Products Name</label>
                        <input
                            type="text"
                            name="productName"
                            className="ProductsName"
                            placeholder="Type here"
                            value={formData.productName}
                            onChange={formChangeHandler}
                        />
                    </div>

                    <div className="LabelInputDiv">
                        <label className="labelText">Description</label>
                        <input
                            type="text"
                            name="descriptionText"
                            className="DescriptionText"
                            placeholder="Type here"
                            value={formData.descriptionText}
                            onChange={formChangeHandler}
                        />
                    </div>

                    <div className="LabelInputDiv">
                        <label className="labelText">Category</label>
                        <select 
                            name="category" 
                            className="OptionSection" 
                            value={formData.category}
                            onChange={formChangeHandler}
                        >
                            <option value="">Choose an option</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery items</option>
                        </select>
                    </div>

                    <div className="Productsprice-Productsquantity-MainDiv">
                        <div className="LabelInputDiv">
                            <label className="labelText" htmlFor="price">Product Price</label>
                            <input
                                id="price"
                                type="text"
                                name="productprice"
                                className="ProdcutsPrice"
                                value={formData.productprice}
                                onChange={formChangeHandler}
                            />
                        </div>

                        <div className="LabelInputDiv">
                            <label className="labelText" htmlFor="quantity">Product Quantity</label>
                            <input
                                type="text"
                                id="quantity"
                                name="productsquantity"
                                className="ProductsQuantity"
                                value={formData.productsquantity}
                                onChange={formChangeHandler}
                            />
                        </div>
                    </div>

                    <div className="buttonDiv">
                        <button className="AddButton" type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AdminSideAddproducts;
