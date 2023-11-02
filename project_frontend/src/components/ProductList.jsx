import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return <div>
    <h1>Product List</h1>
    <ul>
        {
            products.map((product)=>(
                <li key={product.id}>
                    Name: {product.name}
                    <hr />
                    Category: {product.category}
                    <hr />
                    Price: {product.price}
                    <hr />
                    Quantity: {product.quantity}
                </li>
            ))
        }
     
    </ul>
    

  </div>;
}
