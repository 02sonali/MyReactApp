import React from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import * as ProductActions from "../../redux/actions/productActions";
import Table from "react-bootstrap/Table";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        // let {url } = useRouteMatch();
       
    }
  
   
    componentDidMount() {
        this.props.getProducts();
    }
    // componentWillUnmount() {
    //     this.setState({products: []})
    // }
    render() {
        let productRows = this.props.products.map((product) => <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <a href={`/admin/edit-product/${product.id}`} >Edit</a> &nbsp;|
                <a href="#">&nbsp; Delete</a>
            </td>
            </tr>
        )
        return  (
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    {productRows}
                </tbody>
            </Table>
        );
    }
}

ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    console.log(state); //todo - state is getting called 3 times here for each connct component, use Reselect here to avoid that
    return {
        products: state.products   
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(ProductActions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);//mapDispatchToProps is automatically passed by connect if we omit it