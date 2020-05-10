import React from 'react';
import Search from "./SearchComponent";
import ImageGrid from "./ImageGridComponent";

class HomePage extends React.Component {
    render() {
        return <div>
            <Search></Search>
            <ImageGrid></ImageGrid>
        </div>
    }
}

export default HomePage;