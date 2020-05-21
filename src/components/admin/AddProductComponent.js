import React from "react";
import InputBox from "../common/InputBox";

class Addproduct extends React.Component {
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
        alert('A form was submitted: ' + this.state.product.name + "price:" + this.state.product.price);
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

export default Addproduct;