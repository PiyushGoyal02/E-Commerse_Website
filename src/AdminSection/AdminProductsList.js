import "../AdminSectionCSS/AdminProductsListCSS.css";

function AdminProductsList() {
  const products = [
    { name: "Potato 500g", category: "Vegetables", price: 35, stock: false, image: "🥔" },
    { name: "Tomato 1kg", category: "Vegetables", price: 28, stock: true, image: "🍅" },
    { name: "Carrot 500g", category: "Vegetables", price: 44, stock: true, image: "🥕" },
    { name: "Spinach 500g", category: "Vegetables", price: 15, stock: true, image: "🥬" },
    { name: "Onion 500g", category: "Vegetables", price: 45, stock: false, image: "🧅" },
    { name: "Apple 1kg", category: "Fruits", price: 90, stock: true, image: "🍎" },
    { name: "Spinach 500g", category: "Vegetables", price: 15, stock: true, image: "🥬" },
    { name: "Onion 500g", category: "Vegetables", price: 45, stock: true, image: "🧅" },
    { name: "Apple 1kg", category: "Fruits", price: 90, stock: false, image: "🍎" }
  ];

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
        {products.map((product, index) => (
            <div className="product-table-row" key={index}>
            <div className="product-info">
                <div className="product-image">{product.image}</div>
                <div className="product-name">{product.name}</div>
            </div>
            <div>{product.category}</div>
            <div>${product.price}</div>
            <div>
                <label className="switch">
                <input type="checkbox" defaultChecked={product.stock} />
                <span className="slider round"></span>
                </label>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProductsList;