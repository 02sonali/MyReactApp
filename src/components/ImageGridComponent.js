import React from 'react';
import Images from "../mock-api/ImageList.json";

class ImageGrid extends React.Component {
    
    render() {
        const listItems = Images.map((image) => 
            <li key={image.id}>{image.name}</li>
        )
        return <div>
            <ul> 
                {listItems}
            </ul>
         
        </div>
    }
}


export default ImageGrid;