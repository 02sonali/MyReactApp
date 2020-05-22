import React from "react";
// import ProductService from "../../services/ProductService";
// import Products from "../../mock-api/ProductList.json";
import {connect} from "react-redux";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        // this.productService = new ProductService();
        this.state = {products: []};
    }
    showEditMode = () => {
        this.props.showEditMode(true);
    }
    render() {
        let productRows = this.props.products.map((product) => <tr key={product.name}>
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
    getproducts() {
        // this.productService.getproducts().then(products => {
        //     this.setState({products: products});
        // });
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList);//mapDispatchToProps is automatically passed by connect if we omit it