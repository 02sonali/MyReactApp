import React from 'react';
// import Products from "../mock-api/ProductList.json";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as ProductActions from "../redux/actions/productActions";
import * as CartActions from "../redux/actions/cartActions";

class ProductGrid extends React.Component {
    state = {
        products: [],
        searchText: ''
    };

    addToCart = (e, product) => {
        e.preventDefault();
        this.props.addToCart(product);
    }

    componentDidMount() {
        this.props.getProducts();
    }
    
    render() {
        const listItems = this.props.products.map((product) => 
            <Col sm={4}  className="mt-2" key={product.id}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Rs. {product.price}.00</Card.Subtitle>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Link href={`/product/${product.id}`}>View Details</Card.Link>
                    <Card.Link href="#" onClick={(ev) => this.addToCart(ev, product)}>Add to Cart</Card.Link>
                </Card.Body>
                </Card>
            </Col>
        )
        return <Container className="mt-4">
            <Row>
                {listItems}
            </Row>
        </Container>
    }
}

ProductGrid.propTypes = {
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
        getProducts: () => dispatch(ProductActions.getProducts()),
        addToCart: (product) => dispatch(CartActions.addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
