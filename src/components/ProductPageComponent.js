import React from 'react';
import Search from "./SearchComponent";
import ProductGrid from "./ProductGridComponent";

class HomePage extends React.Component {
    render() {
        return <div className="p-4">
            <Search></Search>
            <ProductGrid></ProductGrid>
        </div>
    }
}

export default HomePage;