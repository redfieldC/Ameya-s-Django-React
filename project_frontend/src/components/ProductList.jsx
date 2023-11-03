import { useEffect, useState } from "react";
import {Link,useNavigate } from 'react-router-dom';
// import {navigate} from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => navigate("/create")}>Product Create</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/update/${product.id}`}>{product.name}</Link> */}
            <Link to={`/detail/${product.id}`}>{product.name}</Link>
            <button onClick={()=>navigate(`/update/${product.id}`,{state:product})}>Update Product</button>
            <button onClick={()=>navigate(`/delete/${product.id}`,{state:product})}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
