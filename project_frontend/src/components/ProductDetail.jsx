import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(){
    const {id} = useParams();
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/products/detail/${id}/`)
        .then((response)=>response.json())
        .then((data)=>setProduct(data))
        .catch((error)=>console.log("error fetching data: ",error));
    },[id]);

    if(!product){
        return <div>Loading........</div>
    }

    return <div>
        <h1>Product Details</h1>
        <p>Name: {product.name}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        
        </div>
}