import React, { useState } from "react";
import ImageList from "./ImageListComponent";
import AddImage from "./AddImageComponent";

function Admin() {
    const [showAddImage, toggleAddImage] = useState(false); //example of Hook
    const [isEditMode, setEditMode] = useState(false);
    function openEditMode(newValue) {
        setEditMode(newValue);
    }
  
    return  (
        <>
            <button onClick={() => isEditMode ? setEditMode(false) : toggleAddImage(!showAddImage)}> { showAddImage || isEditMode ? "Cancel" : " Add Image"} </button>
            { showAddImage || isEditMode? <AddImage mode={isEditMode? "Edit" : "Add"}/> : <ImageList showEditMode={openEditMode}/>}
        </>
    );
}

export default Admin;