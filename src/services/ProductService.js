class ProductService {

    async getImages() {
        const imageUrl = `src/mock-api/ProductList.json`;
        return fetch(imageUrl, 
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => {
            return response.json();
        });
    }
}

export default ProductService;