import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDelete() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;
  const handleDeleteProduct = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/products/delete/${product.id}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Product deleted, navigate back to the product list
        navigate("/");
      } else {
        // Handle error
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      // Handle error
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>Delete Product</h1>
      <p>Are you sure you want to delete the product: {product.name} with below details?</p>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={handleDeleteProduct}>Confirm Delete</button>
      <button onClick={()=>navigate("/")}>Back to List?</button>
    </div>
  );
}
