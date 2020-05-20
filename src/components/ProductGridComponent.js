import React from 'react';
import Products from "../mock-api/ProductList.json";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProductGrid extends React.Component {
    
    render() {
        const listItems = Products.map((product) => 
            <Col sm={4}  className="mt-2">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Rs. {product.price}.00</Card.Subtitle>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Card.Link href="#">View Details</Card.Link>
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


export default ProductGrid;