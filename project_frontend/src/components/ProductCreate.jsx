import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function ProductCreate() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCreateProduct = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/products/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        // Handle success, e.g., redirect to the product list
        // navigate("/products", { replace: true });
        console.log("Product created");
      } else {
        // Handle error

        console.error("Error creating product:", response.statusText);
      }
    } catch (error) {
      // Handle error

      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
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
        <button onClick={handleCreateProduct}>Create Product</button>
      </form>
      <button onClick={() => navigate("/")}>Go to Product List</button>
    </div>
  );
}
