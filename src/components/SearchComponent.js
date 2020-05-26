import React from 'react';
import {connect} from 'react-redux';
import * as ProductActions from "../redux/actions/productActions";


class Search extends React.Component {
    /**
     * the main purpose of having a constructor inside a component is to 
     * take some action immediately after the initialization of the component? 
     * super will then allow you 1.) access to this and 2.) if it takes props as a parameter, access to its parents props
     */
    constructor(props){
        /**
        By calling the super() method in the constructor method, 
        we call the parent's constructor method and gets access to the parent's properties and methods.
        when you call super with props. React will make props available across the component through this.props.
        **/
        super(props);
        this.state = {"searchText": ""};
    }

    handleChange = (event) => {
        this.setState({searchText: event.target.value});
    }
    
    searchProduct = () => {
        this.props.dispatch(ProductActions.searchProduct(this.state.searchText));
    }
    
    render() {
        return <div><input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search category"/><button onClick={this.searchProduct}> Search </button></div>
    }
}

export default connect()(Search);