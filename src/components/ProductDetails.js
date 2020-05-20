import React from 'react';
import {useParams} from "react-router-dom";
function ProductDetails() {
    let { id } = useParams();
  
    return <div className="p-4">Product Details here  {id}</div>
    
}

export default ProductDetails;