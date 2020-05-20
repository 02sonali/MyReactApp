import React from "react";
import ProductService from "../../services/ProductService";
import Images from "../../mock-api/ProductList.json";
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.imageService = new ProductService();
        this.state = {items: Images};
        this.showEditMode = this.showEditMode.bind(this);
    }
    componentDidMount() {
        //this.getItems();
    }
    showEditMode() {
        this.props.showEditMode(true);
    }
    render() {
        let ImageRows = Images.map((image) => <tr key={image.id}>
            <td>{image.name}</td>
            <td>{image.url}</td>
            <td>{image.category}</td>
            <td>
                <a href="#" onClick={this.showEditMode}>Edit</a>
                <a href="#">Delete</a>
            </td>
            </tr>
        )
        return  (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    {ImageRows}
                </tbody>
            </table>
        );
    }
    getItems() {
        // this.imageService.getImages().then(items => {
        //     this.setState({items: items});
        // });
    }
}

export default ProductList;