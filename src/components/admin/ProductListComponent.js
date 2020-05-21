import React from "react";
import ProductService from "../../services/ProductService";
import Products from "../../mock-api/ProductList.json";
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.productService = new ProductService();
        this.state = {items: Products};
    }
    componentDidMount() {
        //this.getItems();
    }
    showEditMode = () => {
        this.props.showEditMode(true);
    }
    render() {
        let productRows = Products.map((product) => <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <a href="#" onClick={this.showEditMode}>Edit</a> &nbsp;|
                <a href="#">&nbsp; Delete</a>
            </td>
            </tr>
        )
        return  (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    {productRows}
                </tbody>
            </table>
        );
    }
    getItems() {
        // this.productService.getproducts().then(items => {
        //     this.setState({items: items});
        // });
    }
}

export default ProductList;