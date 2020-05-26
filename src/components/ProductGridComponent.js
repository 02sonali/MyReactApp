import React from 'react';
// import Products from "../mock-api/ProductList.json";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as ProductActions from "../redux/actions/productActions";

class ProductGrid extends React.Component {
    state = {
        products: []
    };

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
                <Card.Link href="#">Add to Cart</Card.Link>
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
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(ProductActions.getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
