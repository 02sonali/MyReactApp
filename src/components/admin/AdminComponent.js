import React, { useState } from "react";
import ProductList from "./ProductListComponent";
import AddProductComponent from "./AddProductComponent";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Admin() {
    // const [showAddProduct, toggleAddProduct] = useState(false); //example of Hook
    // const [isEditMode, setEditMode] = useState(false);
    let { path, url } = useRouteMatch();
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    // function openEditMode(newValue) {
    //     setEditMode(newValue);
    // }
    // function productAdded() {
    //     handle redux state update here
    // }
  
    return  (
        <>
            {/* <button onClick={() => isEditMode ? 
                setEditMode(false) : 
                toggleAddProduct(!showAddProduct)}> 
                { showAddProduct || isEditMode ? "Cancel" : " Add Product"} 
            </button>
            { showAddProduct || isEditMode? 
                <AddProduct mode={isEditMode? "Edit" : "Add"} productAdded={productAdded}/> : 
                <ProductList showEditMode={openEditMode}/>
            } */}
            <div className="p-2">
                <Nav className="justify-content-end" activeKey="link-1">
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" href={`${url}/list-products`}>Product List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" href={`${url}/add-product`}>+ Add Product</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Switch>
                <Route path={`${path}/add-product`}>
                    <AddProductComponent mode="Add"></AddProductComponent>
                </Route>
                <Route path={`${path}/edit-product/:id`}>
                    <AddProductComponent mode="Edit"></AddProductComponent>
                </Route>
                <Route path={`${path}/list-products`}>
                    <ProductList/>
                </Route>
                <Route path="/admin" exact component={ProductList}></Route>
            </Switch>
           

        </>
    );
}

export default Admin;