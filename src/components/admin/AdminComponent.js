import React, { useState } from "react";
import ProductList from "./ProductListComponent";
import AddProduct from "./AddProductComponent";

function Admin() {
    const [showAddProduct, toggleAddProduct] = useState(false); //example of Hook
    const [isEditMode, setEditMode] = useState(false);
    function openEditMode(newValue) {
        setEditMode(newValue);
    }
  
    return  (
        <>
            <button onClick={() => isEditMode ? setEditMode(false) : toggleAddProduct(!showAddProduct)}> { showAddProduct || isEditMode ? "Cancel" : " Add Product"} </button>
            { showAddProduct || isEditMode? <AddProduct mode={isEditMode? "Edit" : "Add"}/> : <ProductList showEditMode={openEditMode}/>}
        </>
    );
}

export default Admin;