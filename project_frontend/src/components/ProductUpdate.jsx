import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}/`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching product:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUpdateProduct = () => {
    fetch(`http://127.0.0.1:8000/api/products/update/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(() => {
        // Handle success, e.g., redirect to the product list
        // history.push("/");
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleUpdateProduct}>Update Product</button>
      </form>
    </div>
  );
}
