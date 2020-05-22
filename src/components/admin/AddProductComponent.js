import React from "react";
import InputBox from "../common/InputBox";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as ProductActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";

class AddProduct extends React.Component {
    // constructor(props) {
    //     super(props);
        state = {
            product: {
                name: "", 
                price: ""
            }
        };
        
        /** we don't need these lines while using arrow function declaration */
        // this.updateProductName = this.updateProductName.bind(this);
        // this.updateProductPrice = this.updateProductPrice.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    // }
    updateProductName = (val) => {
        const product = {...this.state.product, name:val };
        this.setState({product: product});
    }
    updateProductPrice = (val) => {
        const product = {...this.state.product, price:val };
        this.setState({product: product});
    }
    handleSubmit = (event) => {
        event.preventDefault(); //to prevent the form to make the page reload
        this.props.actions.createProduct(this.state.product);
        this.props.productAdded();
    }
    render() {
        return  (
            <form onSubmit={this.handleSubmit}>
                <h2> {this.props.mode} Product </h2>
                <div>
                    <label htmlFor="name"> Name </label>
                    <InputBox type="text" name="name" onValueChange={this.updateProductName}/>
                </div>
                <div>
                    <label htmlFor="price"> Price </label>
                    <InputBox type="number" name="price" onValueChange={this.updateProductPrice}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
         
        );
    }
}

AddProduct.propTypes = {
    // createProduct: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        /** there are 4 different ways to dispatch actions in a component */
        // 1st way - ignore mapDispatchToProps and use default dispatch using this.props.dispatch(ProductActions.createProduct(this.state.product))
        //createProduct: ProductActions.createProduct // 2nd way - object form
        // createProduct: product => dispatch(ProductActions.createProduct(product)) //3rd way - manual mapping
        actions: bindActionCreators(ProductActions, dispatch) //4th way - bindActionCreators
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);