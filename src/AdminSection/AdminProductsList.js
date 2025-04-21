import axios from "axios";
import { useState, useEffect } from "react";
import "../AdminSectionCSS/AdminProductsListCSS.css";

function AdminProductsList() {

  // const [checkBoxQuantity, setCheckBoxQuantity] = useState(false)
  // const Navigator = useNavigate();
  const [product, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/getAllProductsDetails/getAllProducts`,
          { withCredentials: true }
        );
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductsMainnDiv">
      <p className="page-title">All Product</p>

        <div className="product-table-header">
          <span>Product</span>
          <span>Category</span>
          <span>Selling Price</span>
          <span>In Stock</span>
        </div>

      <div className="admin-product-list-container">

        <div className="productsSinglelist">
        {product.map((product, index) => (
          <div className="product-table-row" key={index}>
          <div className="product-info">
            <img
              src={product.productImages}
              className="product-image"
              alt={product.proproductName}
            />
            <div className="product-name">{product.productName}</div>
          </div>
          <div>{product.category}</div>
          <div>${product.productprice}</div>
          <div>
            <div className="switch">
              <div>
                <input
                  type="checkbox"
                  checked={product.productsquantity > 10}   // Auto Toggle If productQuannity Value Ki less then 10 then Toggle Auto OFF and nhi too Toggle ON
                  readOnly       // It's not manually toggle
                />
                <span className="slider round"></span>
              </div>
            </div>

          </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProductsList;

{/* <input type="checkbox" defaultChecked={product.stock} />
<span className="slider round"></span> */}